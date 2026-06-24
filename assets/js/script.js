document.addEventListener("DOMContentLoaded", () => {
  let allContents = [];
  let activeArea = 'all';
  let activeTopic = 'all';
  let searchInitialized = false;

  const sectionsContainer = document.getElementById("sections-container");
  const topicFilters = document.getElementById("topic-filters");
  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");

  fetch("/assets/data/content-index.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Navigation index request failed: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      allContents = normalizeIndexItems(data.items || []);
      renderTopicFilters(data.facets || {});
      renderIndexedNavigation();
      initializeSearch();
      if (sectionsContainer) {
        highlightCurrentEntry();
      }
    })
    .catch(() => {
      fetch("/assets/data/directories.json")
        .then((response) => response.json())
        .then((data) => {
          if (sectionsContainer) {
            data.forEach((section) => {
              const sectionElement = createSectionElement(section);
              sectionsContainer.appendChild(sectionElement);
            });
          }
          allContents = collectLegacyContents(data);
          initializeSearch();
          if (sectionsContainer) {
            highlightCurrentEntry();
          }
        });
    });

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

  function normalizeIndexItems(items) {
    return items.map((item) => ({
      id: item.id,
      title: item.title || item.sourcePath || "Untitled",
      summary: item.summary || "",
      url: item.url || "#",
      area: normalizeFacet(item.area, "uncategorized", "Uncategorized"),
      topic: normalizeFacet(item.topic, "uncategorized", "Uncategorized"),
      breadcrumbs: Array.isArray(item.breadcrumbs) ? item.breadcrumbs : [],
      order: item.order,
      searchText: normalizeSearchText(item),
    }));
  }

  function normalizeFacet(value, fallbackSlug, fallbackLabel) {
    if (!value) {
      return { slug: fallbackSlug, label: fallbackLabel };
    }

    return {
      slug: value.slug || fallbackSlug,
      label: value.label || value.slug || fallbackLabel,
    };
  }

  function normalizeSearchText(item) {
    if (item.searchText) {
      return item.searchText.toLowerCase();
    }

    return [
      item.title,
      item.summary,
      ...(item.breadcrumbs || []),
      ...((item.headings || []).map((heading) => heading.text)),
    ].filter(Boolean).join(" ").toLowerCase();
  }

  function renderTopicFilters(facets) {
    if (!topicFilters) {
      return;
    }

    topicFilters.innerHTML = "";
    topicFilters.appendChild(createFilterGroup("Areas", [
      { slug: "all", label: "All", count: allContents.length },
      ...(facets.areas || []),
    ], "area"));

    topicFilters.appendChild(createFilterGroup("Topics", [
      { slug: "all", label: "All", count: allContents.length },
      ...(facets.topics || []),
    ], "topic"));

    updateFilterButtons();
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
        } else {
          activeTopic = filter.slug;
        }
        updateFilterButtons();
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

    groupByFacet(visibleItems, "area").forEach((areaGroup) => {
      const areaSection = createNavigationSection(areaGroup.label, areaGroup.items.length, "area-section");

      groupByFacet(areaGroup.items, "topic").forEach((topicGroup) => {
        const topicSection = createNavigationSection(topicGroup.label, topicGroup.items.length, "topic-section");
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

  function getFilteredItems() {
    return allContents.filter((item) => {
      const areaMatches = activeArea === "all" || item.area.slug === activeArea;
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

  function createNavigationSection(label, count, className) {
    const details = document.createElement("details");
    details.classList.add("section", className);
    details.open = activeArea !== "all" || activeTopic !== "all";

    const summary = document.createElement("summary");
    summary.textContent = label;

    const badge = document.createElement("span");
    badge.classList.add("nav-count");
    badge.textContent = count;
    summary.appendChild(badge);

    details.appendChild(summary);
    return details;
  }

  function createContentLink(item, compact = false) {
    const link = document.createElement("a");
    link.href = formatPath(item.url || item.link);
    link.classList.add("content-link");
    if (compact) {
      link.classList.add("search-result-link");
    }

    const title = document.createElement("span");
    title.classList.add("content-link-title");
    title.textContent = item.title || item.content;
    link.appendChild(title);

    const metaText = compact
      ? item.breadcrumbs.join(" / ")
      : item.summary;
    if (metaText) {
      const meta = document.createElement("span");
      meta.classList.add("content-link-meta");
      meta.textContent = metaText;
      link.appendChild(meta);
    }

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

    const setState = (expanded) => {
      if (expanded) {
        sidebarLayout.classList.add(expandedClass);
        sidebarLayout.classList.remove(collapsedClass);
        notesSidebar.setAttribute('aria-hidden', 'false');
        sidebarToggle.setAttribute('aria-expanded', 'true');
        if (label) {
          label.textContent = 'Hide navbar';
        }
      } else {
        sidebarLayout.classList.add(collapsedClass);
        sidebarLayout.classList.remove(expandedClass);
        notesSidebar.setAttribute('aria-hidden', 'true');
        sidebarToggle.setAttribute('aria-expanded', 'false');
        if (label) {
          label.textContent = 'Show navbar';
        }
      }
    };

    setState(false);

    sidebarToggle.addEventListener('click', () => {
      const isExpanded = sidebarLayout.classList.contains(expandedClass);
      setState(!isExpanded);
    });
  }

  buildPageToc();

  function createSectionElement(section) {
    const details = document.createElement("details");
    details.classList.add("section");

    const summary = document.createElement("summary");
    summary.textContent = section.name;
    details.appendChild(summary);

    const list = document.createElement("ul");

    if (section.contents) {
      section.contents.forEach((contentItem) => {
        const item = document.createElement("li");
        const link = document.createElement("a");
        link.href = formatPath(contentItem.link);
        link.textContent = contentItem.content;
        link.classList.add("content-link");
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
    const tocLinks = document.getElementById('page-toc-links');
    const contentArea = document.querySelector('.content-area');

    if (!toc || !tocLinks || !contentArea) {
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
      });

      linksById.set(heading.id, link);
      tocLinks.appendChild(link);
    });

    toc.hidden = false;

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
