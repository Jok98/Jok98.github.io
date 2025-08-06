document.addEventListener('DOMContentLoaded', () => {
    let allContents = [];

    fetch('directories.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('sections-container');
            data.forEach(section => {
                const sectionElement = createSectionElement(section);
                container.appendChild(sectionElement);
            });
            allContents = collectContents(data);
        });

    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        searchResults.innerHTML = '';
        if (!query) {
            return;
        }
        const matches = allContents.filter(item =>
            item.content.toLowerCase().includes(query)
        );
        matches.forEach(item => {
            const link = document.createElement('a');
            link.href = item.link;
            link.textContent = item.content;
            link.classList.add('content-link');
            searchResults.appendChild(link);
            searchResults.appendChild(document.createElement('br'));
        });
    });

    function collectContents(sections) {
        let results = [];
        sections.forEach(section => {
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
        const sectionDiv = document.createElement('div');
        sectionDiv.classList.add('section');

        const headerDiv = document.createElement('div');
        headerDiv.classList.add('section-header');

        const span = document.createElement('span');
        span.textContent = section.name;
        span.classList.add('section-name');

        const button = document.createElement('button');
        button.classList.add('toggle-btn');
        button.textContent = '+';

        headerDiv.appendChild(span);
        headerDiv.appendChild(button);
        sectionDiv.appendChild(headerDiv);

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('section-content');
        contentDiv.style.display = 'none';

        headerDiv.addEventListener('click', () => {
            if (contentDiv.style.display === 'none') {
                contentDiv.style.display = 'block';
                button.textContent = '-';
            } else {
                contentDiv.style.display = 'none';
                button.textContent = '+';
            }
        });

        if (section.contents) {
            section.contents.forEach(contentItem => {
                const contentLink = document.createElement('a');
                contentLink.href = contentItem.link;
                contentLink.textContent = contentItem.content;
                contentLink.classList.add('content-link');
                contentDiv.appendChild(contentLink);
                contentDiv.appendChild(document.createElement('br'));
            });
        }

        if (section.subsections) {
            section.subsections.forEach(subsection => {
                const subsectionElement = createSectionElement(subsection);
                subsectionElement.classList.add('subsection');
                contentDiv.appendChild(subsectionElement);
            });
        }

        sectionDiv.appendChild(contentDiv);
        return sectionDiv;
    }
});