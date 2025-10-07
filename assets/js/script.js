document.addEventListener("DOMContentLoaded", () => {
  let allContents = [];

  fetch("/assets/data/directories.json")
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("sections-container");
      if (container) {
        data.forEach((section) => {
          const sectionElement = createSectionElement(section);
          container.appendChild(sectionElement);
        });
      }
      allContents = collectContents(data);
      if (container) {
        highlightCurrentEntry();
      }
    });

  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");
  if (searchInput && searchResults) {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase();
      searchResults.innerHTML = "";
      if (!query) {
        return;
      }
      const matches = allContents.filter((item) =>
        item.content.toLowerCase().includes(query),
      );
      matches.forEach((item) => {
        const link = document.createElement("a");
        link.href = formatPath(item.link);
        link.textContent = item.content;
        link.classList.add("content-link");
        searchResults.appendChild(link);
        searchResults.appendChild(document.createElement("br"));
      });
    });
  }

  function collectContents(sections) {
    let results = [];
    sections.forEach((section) => {
      if (section.contents) {
        results = results.concat(section.contents);
      }
      if (section.subsections) {
        results = results.concat(collectContents(section.subsections));
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
