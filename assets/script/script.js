document.addEventListener("DOMContentLoaded", () => {
  let allContents = [];

  fetch("directories.json")
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("sections-container");
      data.forEach((section) => {
        const sectionElement = createSectionElement(section);
        container.appendChild(sectionElement);
      });
      allContents = collectContents(data);
    });

  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");
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
      link.href = item.link;
      link.textContent = item.content;
      link.classList.add("content-link");
      searchResults.appendChild(link);
      searchResults.appendChild(document.createElement("br"));
    });
  });

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
        link.href = contentItem.link;
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
