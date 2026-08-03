document.addEventListener("DOMContentLoaded", () => {
  const preferences = window.JokPreferences;
  let allContents = [];
  let contentTree = [];
  let itemsById = new Map();
  let foldersById = new Map();
  let activeArea = 'current';
  let activeTopic = 'all';
  let searchInitialized = false;

  const sectionsContainer = document.getElementById("sections-container");
  const topicFilters = document.getElementById("topic-filters");
  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");
  const contentStatus = document.querySelector("[data-content-status]");
  const hasContentBrowser = Boolean(sectionsContainer || topicFilters || searchInput);

  if (hasContentBrowser) {
    loadContentIndex();
  }

  function loadContentIndex() {
    setContentLoading(true);
    fetch("/assets/data/content-index.json")
      .then(parseJsonResponse)
      .then((data) => {
        foldersById = new Map((data.folders || []).map((folder) => [folder.id, folder]));
        allContents = normalizeIndexItems(data);
        itemsById = new Map(allContents.map((item) => [item.id, item]));
        contentTree = Array.isArray(data.tree) ? data.tree : [];
        selectInitialAreaForCurrentPage();
        renderTopicFilters();
        renderIndexedNavigation();
        initializeSearch();
        highlightCurrentEntry();
        setContentLoading(false);
        setContentStatus("", "ready", true);
      })
      .catch(() => loadLegacyIndex());
  }

  function loadLegacyIndex() {
    fetch("/assets/data/directories.json")
      .then(parseJsonResponse)
      .then((data) => {
        if (!Array.isArray(data)) {
          throw new Error("Legacy navigation index has an invalid format.");
        }

        if (sectionsContainer) {
          sectionsContainer.innerHTML = "";
          data.forEach((section) => {
            sectionsContainer.appendChild(createSectionElement(section));
          });
        }
        allContents = collectLegacyContents(data);
        renderTopicFilters();
        initializeSearch();
        highlightCurrentEntry();
        setContentLoading(false);
        setContentStatus("Showing simplified navigation.", "fallback");
      })
      .catch(() => {
        if (sectionsContainer) {
          sectionsContainer.innerHTML = "";
        }
        if (topicFilters) {
          topicFilters.innerHTML = "";
        }
        if (searchInput) {
          searchInput.disabled = true;
        }
        setContentLoading(false);
        setContentStatus("Notes navigation could not be loaded. Reload the page to try again.", "error");
      });
  }

  function parseJsonResponse(response) {
    if (!response.ok) {
      throw new Error(`Navigation index request failed: ${response.status}`);
    }
    return response.json();
  }

  function selectInitialAreaForCurrentPage() {
    const currentPath = normalizePath(window.location.pathname);
    const currentItem = allContents.find((item) => normalizePath(item.url) === currentPath);
    activeArea = currentItem && currentItem.area.slug === "archive" ? "archive" : "current";
    activeTopic = "all";
  }

  function setContentLoading(isLoading) {
    if (sectionsContainer) {
      sectionsContainer.setAttribute("aria-busy", isLoading ? "true" : "false");
    }
    if (isLoading) {
      setContentStatus("Loading notes…", "loading");
    }
  }

  function setContentStatus(message, state, hidden = false) {
    if (!contentStatus) {
      return;
    }
    contentStatus.textContent = message;
    contentStatus.dataset.state = state;
    contentStatus.hidden = hidden;
  }

  function initializeSearch() {
    if (!searchInput || !searchResults || searchInitialized) {
      return;
    }

    searchInitialized = true;
    searchInput.addEventListener("input", () => {
      renderSearchResults(searchInput.value);
    });
  }

  function renderSearchResults(value) {
    if (!searchResults) {
      return;
    }
    const query = value.trim().toLowerCase();
    searchResults.innerHTML = "";

    if (!query) {
      return;
    }

    const terms = query.split(/\s+/).filter(Boolean);
    const matches = getFilteredItems()
      .filter((item) => terms.every((term) => item.searchText.includes(term)))
      .slice(0, 12);

    if (!matches.length) {
      const empty = document.createElement("p");
      empty.classList.add("sidebar-empty");
      empty.textContent = "No matching notes.";
      searchResults.appendChild(empty);
      return;
    }

    matches.forEach((item) => {
      searchResults.appendChild(createContentLink(item, true));
    });
  }

  function normalizeIndexItems(data) {
    const items = Array.isArray(data.items) ? data.items : [];
    const isCompactCatalog = Number(data.schemaVersion) >= 2 && foldersById.size > 0;

    return items.map((item) => {
      if (!isCompactCatalog) {
        const breadcrumbs = Array.isArray(item.breadcrumbs) ? item.breadcrumbs : [];
        return {
          id: item.id,
          title: item.title || item.sourcePath || "Untitled",
          summary: item.summary || "",
          url: item.url || "#",
          area: normalizeFacet(item.area, "uncategorized", "Uncategorized"),
          topic: normalizeFacet(item.topic, "uncategorized", "Uncategorized"),
          breadcrumbs,
          tags: Array.isArray(item.tags) ? item.tags : [],
          order: item.order,
          searchText: normalizeSearchText(item, breadcrumbs),
        };
      }

      const folder = foldersById.get(item.folderId);
      const folderParts = item.folderId ? item.folderId.split("/") : [];
      const rootFolder = foldersById.get(folderParts[0]);
      const breadcrumbs = getFolderBreadcrumbs(item.folderId);
      const topicSlug = folderParts[folderParts.length - 1] || "uncategorized";
      const normalized = {
        id: item.id,
        title: item.title || "Untitled",
        summary: item.summary || "",
        url: item.url || "#",
        area: normalizeFacet(rootFolder, "uncategorized", "Uncategorized"),
        topic: {
          slug: topicSlug,
          label: folder ? folder.label : humanizeSlug(topicSlug),
        },
        breadcrumbs,
        tags: Array.isArray(item.tags) ? item.tags : [],
        status: item.status || "active",
        kind: item.kind || "note",
        folderId: item.folderId || "",
        order: item.order,
      };
      normalized.searchText = normalizeSearchText(normalized, breadcrumbs);
      return normalized;
    });
  }

  function normalizeFacet(value, fallbackSlug, fallbackLabel) {
    if (!value) {
      return { slug: fallbackSlug, label: fallbackLabel };
    }

    return {
      slug: value.slug || value.id || value.path || fallbackSlug,
      label: value.label || value.slug || value.id || fallbackLabel,
    };
  }

  function getFolderBreadcrumbs(folderId) {
    const labels = [];
    let current = foldersById.get(folderId);
    while (current) {
      labels.unshift(current.label);
      current = current.parentId ? foldersById.get(current.parentId) : null;
    }
    return labels;
  }

  function humanizeSlug(value) {
    return String(value || "")
      .split("-")
      .filter(Boolean)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  function normalizeSearchText(item, breadcrumbs = []) {
    if (item.searchText) {
      return item.searchText.toLowerCase();
    }

    return [
      item.title,
      item.summary,
      ...breadcrumbs,
      ...(item.tags || []),
      item.kind,
      item.status,
      ...((item.headings || []).map((heading) => heading.text)),
    ].filter(Boolean).join(" ").toLowerCase();
  }

  function renderTopicFilters() {
    if (!topicFilters) {
      return;
    }

    const areaFacets = buildFacetCounts(allContents, "area");
    const topicSource = activeArea === "current"
      ? allContents.filter((item) => item.area.slug !== "archive")
      : allContents.filter((item) => item.area.slug === activeArea);
    const topicFacets = buildFacetCounts(topicSource, "topic");

    topicFilters.innerHTML = "";
    topicFilters.appendChild(createFilterGroup("Areas", [
      { slug: "current", label: "Current", count: allContents.filter((item) => item.area.slug !== "archive").length },
      ...areaFacets,
    ], "area"));

    topicFilters.appendChild(createFilterGroup("Topics", [
      { slug: "all", label: "All", count: topicSource.length },
      ...topicFacets,
    ], "topic"));

    updateFilterButtons();
  }

  function buildFacetCounts(items, property) {
    const counts = new Map();
    items.forEach((item) => {
      const facet = item[property];
      if (!facet || !facet.slug) {
        return;
      }
      const current = counts.get(facet.slug) || {
        slug: facet.slug,
        label: facet.label,
        count: 0,
      };
      current.count += 1;
      counts.set(facet.slug, current);
    });
    return Array.from(counts.values())
      .sort((left, right) => (
        Number(left.slug === "archive") - Number(right.slug === "archive")
        || left.label.localeCompare(right.label)
      ));
  }

  function createFilterGroup(title, filters, type) {
    const group = document.createElement("section");
    group.classList.add("filter-group");

    const heading = document.createElement("h3");
    heading.classList.add("filter-title");
    heading.textContent = title;
    group.appendChild(heading);

    const controls = document.createElement("div");
    controls.classList.add("filter-controls");

    filters.forEach((filter) => {
      const button = document.createElement("button");
      button.type = "button";
      button.classList.add("filter-button");
      button.dataset.filterType = type;
      button.dataset.filterSlug = filter.slug;
      button.textContent = `${filter.label} (${filter.count})`;
      button.addEventListener("click", () => {
        if (type === "area") {
          activeArea = filter.slug;
          activeTopic = "all";
          renderTopicFilters();
        } else {
          activeTopic = filter.slug;
          updateFilterButtons();
        }
        renderIndexedNavigation();
        renderSearchResults(searchInput ? searchInput.value : "");
        highlightCurrentEntry();
      });
      controls.appendChild(button);
    });

    group.appendChild(controls);
    return group;
  }

  function updateFilterButtons() {
    if (!topicFilters) {
      return;
    }

    topicFilters.querySelectorAll(".filter-button").forEach((button) => {
      const isArea = button.dataset.filterType === "area";
      const isActive = isArea
        ? button.dataset.filterSlug === activeArea
        : button.dataset.filterSlug === activeTopic;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  function renderIndexedNavigation() {
    if (!sectionsContainer) {
      return;
    }

    sectionsContainer.innerHTML = "";
    const visibleItems = getFilteredItems();

    if (!visibleItems.length) {
      const empty = document.createElement("p");
      empty.classList.add("sidebar-empty");
      empty.textContent = "No notes in this selection.";
      sectionsContainer.appendChild(empty);
      return;
    }

    if (contentTree.length) {
      renderTreeNavigation(new Set(visibleItems.map((item) => item.id)));
      return;
    }

    groupByFacet(visibleItems, "area").forEach((areaGroup) => {
      const areaSection = createNavigationSection(areaGroup.label, areaGroup.items.length, "area-section", 0);

      groupByFacet(areaGroup.items, "topic").forEach((topicGroup) => {
        const topicSection = createNavigationSection(topicGroup.label, topicGroup.items.length, "topic-section", 1);
        const list = document.createElement("ul");

        sortItems(topicGroup.items).forEach((item) => {
          const listItem = document.createElement("li");
          listItem.appendChild(createContentLink(item));
          list.appendChild(listItem);
        });

        topicSection.appendChild(list);
        areaSection.appendChild(topicSection);
      });

      sectionsContainer.appendChild(areaSection);
    });
  }

  function renderTreeNavigation(visibleIds) {
    contentTree.forEach((node) => {
      const section = createTreeNodeElement(node, visibleIds, 0, getAreaLabel(node.slug, node.label));
      if (section) {
        sectionsContainer.appendChild(section);
      }
    });
  }

  function createTreeNodeElement(node, visibleIds, depth, labelOverride) {
    const visibleNodeIds = collectVisibleItemIds(node, visibleIds);
    if (!visibleNodeIds.length) {
      return null;
    }

    const className = depth === 0
      ? "area-section"
      : depth === 1
        ? "topic-section"
        : "folder-section";
    const section = createNavigationSection(labelOverride || node.label || node.slug, visibleNodeIds.length, className, depth);
    section.classList.add(`tree-depth-${Math.min(depth, 4)}`);

    const list = document.createElement("ul");
    sortItems((node.items || [])
      .filter((id) => visibleIds.has(id))
      .map((id) => itemsById.get(id))
      .filter(Boolean))
      .forEach((item) => {
        const listItem = document.createElement("li");
        listItem.appendChild(createContentLink(item));
        list.appendChild(listItem);
      });

    sortTreeNodes(node.children || []).forEach((child) => {
      const childSection = createTreeNodeElement(child, visibleIds, depth + 1);
      if (childSection) {
        const listItem = document.createElement("li");
        listItem.appendChild(childSection);
        list.appendChild(listItem);
      }
    });

    if (list.childElementCount) {
      section.appendChild(list);
    }

    return section;
  }

  function collectVisibleItemIds(node, visibleIds) {
    const ids = (node.items || []).filter((id) => visibleIds.has(id));
    (node.children || []).forEach((child) => {
      ids.push(...collectVisibleItemIds(child, visibleIds));
    });
    return ids;
  }

  function sortTreeNodes(nodes) {
    return [...nodes].sort((left, right) => {
      const leftLabel = left.label || left.slug || "";
      const rightLabel = right.label || right.slug || "";
      return leftLabel.localeCompare(rightLabel);
    });
  }

  function getAreaLabel(slug, fallback) {
    const areaItem = allContents.find((item) => item.area.slug === slug);
    return areaItem ? areaItem.area.label : fallback;
  }

  function getFilteredItems() {
    return allContents.filter((item) => {
      const areaMatches = activeArea === "current"
        ? item.area.slug !== "archive"
        : item.area.slug === activeArea;
      const topicMatches = activeTopic === "all" || item.topic.slug === activeTopic;
      return areaMatches && topicMatches;
    });
  }

  function groupByFacet(items, facetName) {
    const groups = new Map();

    items.forEach((item) => {
      const facet = item[facetName];
      if (!groups.has(facet.slug)) {
        groups.set(facet.slug, {
          slug: facet.slug,
          label: facet.label,
          items: [],
        });
      }
      groups.get(facet.slug).items.push(item);
    });

    return Array.from(groups.values()).sort((left, right) => left.label.localeCompare(right.label));
  }

  function sortItems(items) {
    return [...items].sort((left, right) => {
      const leftOrder = left.order ?? Number.MAX_SAFE_INTEGER;
      const rightOrder = right.order ?? Number.MAX_SAFE_INTEGER;
      if (leftOrder !== rightOrder) {
        return leftOrder - rightOrder;
      }
      return left.title.localeCompare(right.title);
    });
  }

  function createNavigationSection(label, count, className, depth = 0) {
    const details = document.createElement("details");
    details.classList.add("section", className);
    details.dataset.depth = depth;
    details.open = shouldOpenSection(depth);

    const summary = document.createElement("summary");
    summary.classList.add("section-summary");

    const chevron = document.createElement("i");
    chevron.classList.add("fas", "fa-chevron-right", "section-chevron");
    chevron.setAttribute("aria-hidden", "true");

    const labelWrap = document.createElement("span");
    labelWrap.classList.add("section-label");

    const icon = document.createElement("i");
    icon.classList.add(...getSectionIconClasses(className));
    icon.setAttribute("aria-hidden", "true");

    const labelText = document.createElement("span");
    labelText.classList.add("section-name");
    labelText.textContent = label;

    labelWrap.appendChild(icon);
    labelWrap.appendChild(labelText);

    const badge = document.createElement("span");
    badge.classList.add("nav-count");
    badge.textContent = count;

    summary.appendChild(chevron);
    summary.appendChild(labelWrap);
    summary.appendChild(badge);

    details.appendChild(summary);
    return details;
  }

  function shouldOpenSection(depth) {
    if (activeArea !== "all" || activeTopic !== "all") {
      return depth <= 1;
    }

    return !sectionsContainer.closest(".notes-sidebar") && depth === 0;
  }

  function getSectionIconClasses(className) {
    if (className === "area-section") {
      return ["fas", "fa-layer-group", "section-icon"];
    }

    if (className === "topic-section") {
      return ["fas", "fa-book-open", "section-icon"];
    }

    return ["fas", "fa-folder", "section-icon"];
  }

  function createContentLink(item, compact = false) {
    const link = document.createElement("a");
    link.href = formatPath(item.url || item.link);
    link.classList.add("content-link");
    if (compact) {
      link.classList.add("search-result-link");
    }

    const icon = document.createElement("i");
    icon.classList.add("fas", "fa-file-alt", "content-link-icon");
    icon.setAttribute("aria-hidden", "true");
    link.appendChild(icon);

    const body = document.createElement("span");
    body.classList.add("content-link-body");

    const title = document.createElement("span");
    title.classList.add("content-link-title");
    title.textContent = item.title || item.content;
    body.appendChild(title);

    const metaText = compact
      ? item.breadcrumbs.join(" / ")
      : item.summary;
    if (metaText) {
      const meta = document.createElement("span");
      meta.classList.add("content-link-meta");
      meta.textContent = metaText;
      body.appendChild(meta);
    }

    link.appendChild(body);
    return link;
  }

  function collectLegacyContents(sections) {
    let results = [];
    sections.forEach((section) => {
      if (section.contents) {
        results = results.concat(section.contents.map((item) => ({
          ...item,
          title: item.content,
          url: item.link,
          searchText: item.content.toLowerCase(),
          area: { slug: "legacy", label: "Legacy" },
          topic: { slug: "legacy", label: "Legacy" },
          breadcrumbs: [],
        })));
      }
      if (section.subsections) {
        results = results.concat(collectLegacyContents(section.subsections));
      }
    });
    return results;
  }

  function formatPath(path) {
    if (!path) {
      return "#";
    }
    return path.startsWith("/") ? path : `/${path}`;
  }

  function highlightCurrentEntry() {
    const current = normalizePath(window.location.pathname);
    const links = document.querySelectorAll("#sections-container a.content-link");
    links.forEach((link) => {
      const linkPath = normalizePath(new URL(link.href, window.location.origin).pathname);
      if (linkPath === current) {
        link.classList.add("active-link");
        expandParents(link);
      }
    });
  }

  function normalizePath(path) {
    if (!path) {
      return "/";
    }
    let normalized = path.startsWith("/") ? path : `/${path}`;
    normalized = normalized.replace(/\/index\.html$/, "/");
    if (normalized.length > 1 && normalized.endsWith("/")) {
      normalized = normalized.slice(0, -1);
    }
    return normalized;
  }

  function expandParents(element) {
    let parent = element.parentElement;
    while (parent) {
      if (parent.tagName === "DETAILS") {
        parent.open = true;
      }
      parent = parent.parentElement;
    }
  }


  const sidebarLayout = document.querySelector('.page-layout');
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const notesSidebar = document.getElementById('notes-sidebar');

  if (sidebarLayout && sidebarToggle && notesSidebar) {
    const collapsedClass = 'sidebar-collapsed';
    const expandedClass = 'sidebar-expanded';
    const label = sidebarToggle.querySelector('.toggle-label');
    const icon = sidebarToggle.querySelector('i');

    const setState = (expanded) => {
      if (expanded) {
        sidebarLayout.classList.add(expandedClass);
        sidebarLayout.classList.remove(collapsedClass);
        notesSidebar.setAttribute('aria-hidden', 'false');
        sidebarToggle.setAttribute('aria-expanded', 'true');
        if (label) {
          label.textContent = 'Hide navigation';
        }
        if (icon) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
        }
      } else {
        sidebarLayout.classList.add(collapsedClass);
        sidebarLayout.classList.remove(expandedClass);
        notesSidebar.setAttribute('aria-hidden', 'true');
        sidebarToggle.setAttribute('aria-expanded', 'false');
        if (label) {
          label.textContent = 'Show navigation';
        }
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    };

    const savedSidebarState = preferences
      ? preferences.get().ui.sidebarExpanded
      : false;
    setState(savedSidebarState);

    sidebarToggle.addEventListener('click', () => {
      const isExpanded = sidebarLayout.classList.contains(expandedClass);
      const nextState = !isExpanded;
      setState(nextState);
      if (preferences) {
        preferences.setUi("sidebarExpanded", nextState);
      }
    });
  }

  labelTaskCheckboxes();
  buildPageToc();

  function labelTaskCheckboxes() {
    document.querySelectorAll("input.task-list-item-checkbox").forEach((checkbox, index) => {
      if (checkbox.labels.length || checkbox.hasAttribute("aria-label")) {
        return;
      }
      const listItem = checkbox.closest("li");
      const labelSource = listItem ? listItem.cloneNode(true) : null;
      if (labelSource) {
        labelSource.querySelectorAll("input, ol, ul").forEach((element) => element.remove());
      }
      const taskText = labelSource ? labelSource.textContent.replace(/\s+/g, " ").trim() : "";
      checkbox.setAttribute("aria-label", taskText || `Task item ${index + 1}`);
    });
  }

  function createSectionElement(section) {
    const details = document.createElement("details");
    details.classList.add("section");

    const summary = document.createElement("summary");
    summary.classList.add("section-summary");

    const chevron = document.createElement("i");
    chevron.classList.add("fas", "fa-chevron-right", "section-chevron");
    chevron.setAttribute("aria-hidden", "true");

    const labelWrap = document.createElement("span");
    labelWrap.classList.add("section-label");

    const icon = document.createElement("i");
    icon.classList.add("fas", "fa-folder", "section-icon");
    icon.setAttribute("aria-hidden", "true");

    const labelText = document.createElement("span");
    labelText.classList.add("section-name");
    labelText.textContent = section.name;

    labelWrap.appendChild(icon);
    labelWrap.appendChild(labelText);
    summary.appendChild(chevron);
    summary.appendChild(labelWrap);
    details.appendChild(summary);

    const list = document.createElement("ul");

    if (section.contents) {
      section.contents.forEach((contentItem) => {
        const item = document.createElement("li");
        const link = document.createElement("a");
        link.href = formatPath(contentItem.link);
        link.classList.add("content-link");

        const linkIcon = document.createElement("i");
        linkIcon.classList.add("fas", "fa-file-alt", "content-link-icon");
        linkIcon.setAttribute("aria-hidden", "true");

        const linkBody = document.createElement("span");
        linkBody.classList.add("content-link-body");

        const linkTitle = document.createElement("span");
        linkTitle.classList.add("content-link-title");
        linkTitle.textContent = contentItem.content;

        linkBody.appendChild(linkTitle);
        link.appendChild(linkIcon);
        link.appendChild(linkBody);
        item.appendChild(link);
        list.appendChild(item);
      });
    }

    if (section.subsections) {
      section.subsections.forEach((subsection) => {
        const item = document.createElement("li");
        const subsectionElement = createSectionElement(subsection);
        subsectionElement.classList.add("subsection");
        item.appendChild(subsectionElement);
        list.appendChild(item);
      });
    }

    details.appendChild(list);
    return details;
  }

  function buildPageToc() {
    const toc = document.getElementById('page-toc');
    const tocDisclosure = document.getElementById('page-toc-disclosure');
    const tocLinks = document.getElementById('page-toc-links');
    const tocCount = document.getElementById('page-toc-count');
    const contentArea = document.querySelector('.content-area');
    const pageLayout = document.querySelector('.page-layout');

    if (!toc || !tocDisclosure || !tocLinks || !contentArea || !pageLayout) {
      return;
    }

    const headings = Array.from(
      contentArea.querySelectorAll('h2, h3, h4'),
    ).filter((heading) => heading.textContent.trim());

    if (headings.length < 2) {
      return;
    }

    const seenAnchors = new Map();
    const linksById = new Map();

    headings.forEach((heading) => {
      if (!heading.id) {
        heading.id = uniqueAnchor(slugify(heading.textContent), seenAnchors);
      }

      const link = document.createElement('a');
      link.href = `#${heading.id}`;
      link.textContent = heading.textContent.trim();
      link.classList.add('page-toc-link', `toc-level-${heading.tagName.substring(1)}`);
      link.addEventListener('click', () => {
        linksById.forEach((item) => item.classList.remove('active'));
        link.classList.add('active');
        if (window.matchMedia('(max-width: 1100px)').matches) {
          tocDisclosure.open = false;
        }
      });

      linksById.set(heading.id, link);
      tocLinks.appendChild(link);
    });

    if (tocCount) {
      tocCount.textContent = headings.length;
      tocCount.setAttribute('aria-label', `${headings.length} page sections`);
    }

    toc.hidden = false;
    pageLayout.classList.add('has-page-toc');

    const narrowViewport = window.matchMedia('(max-width: 1100px)');
    let previousNarrowState;
    const syncTocPlacement = () => {
      if (narrowViewport.matches) {
        const pageTitle = contentArea.querySelector('h1');
        if (pageTitle) {
          pageTitle.insertAdjacentElement('afterend', toc);
        } else {
          contentArea.prepend(toc);
        }
        if (previousNarrowState !== true) {
          tocDisclosure.open = preferences
            ? preferences.get().ui.tocExpandedMobile
            : false;
        }
      } else {
        pageLayout.appendChild(toc);
        if (previousNarrowState !== false) {
          tocDisclosure.open = true;
        }
      }
      previousNarrowState = narrowViewport.matches;
    };

    syncTocPlacement();
    tocDisclosure.addEventListener('toggle', () => {
      if (narrowViewport.matches && preferences) {
        preferences.setUi("tocExpandedMobile", tocDisclosure.open);
      }
    });
    if (typeof narrowViewport.addEventListener === 'function') {
      narrowViewport.addEventListener('change', syncTocPlacement);
    } else if (typeof narrowViewport.addListener === 'function') {
      narrowViewport.addListener(syncTocPlacement);
    }

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((left, right) => left.boundingClientRect.top - right.boundingClientRect.top);

          if (!visible.length) {
            return;
          }

          linksById.forEach((link) => link.classList.remove('active'));
          const activeLink = linksById.get(visible[0].target.id);
          if (activeLink) {
            activeLink.classList.add('active');
          }
        },
        {
          rootMargin: '-20% 0px -65% 0px',
          threshold: 0.1,
        },
      );

      headings.forEach((heading) => observer.observe(heading));
    } else {
      const firstLink = linksById.values().next().value;
      if (firstLink) {
        firstLink.classList.add('active');
      }
    }
  }

  function uniqueAnchor(baseAnchor, seenAnchors) {
    const fallback = baseAnchor || 'section';
    const count = seenAnchors.get(fallback) || 0;
    seenAnchors.set(fallback, count + 1);
    return count === 0 ? fallback : `${fallback}-${count + 1}`;
  }

  function slugify(value) {
    return value
      .trim()
      .toLowerCase()
      .replace(/<[^>]+>/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
});

// Get the button
let mybutton = document.getElementById("back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (mybutton) {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
}

// When the user clicks on the button, scroll to the top of the document
if (mybutton) {
  mybutton.addEventListener("click", function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });
}
