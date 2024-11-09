document.addEventListener('DOMContentLoaded', () => {
    fetch('directories.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('sections-container');
            data.forEach(section => {
                const sectionElement = createSectionElement(section);
                container.appendChild(sectionElement);
            });
        });

    function createSectionElement(section) {
        const sectionDiv = document.createElement('div');
        sectionDiv.classList.add('section');

        const headerDiv = document.createElement('div');
        headerDiv.classList.add('section-header');

        const span = document.createElement('span');
        span.textContent = section.name;

        const button = document.createElement('button');
        button.classList.add('toggle-btn');
        button.textContent = '+';
        button.addEventListener('click', () => {
            const contentDiv = sectionDiv.querySelector('.section-content');
            if (contentDiv.style.display === 'none') {
                contentDiv.style.display = 'block';
                button.textContent = '-';
            } else {
                contentDiv.style.display = 'none';
                button.textContent = '+';
            }
        });

        headerDiv.appendChild(span);
        headerDiv.appendChild(button);
        sectionDiv.appendChild(headerDiv);

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('section-content');
        contentDiv.style.display = 'none';

        if (section.contents) {
            section.contents.forEach(contentItem => {
                const contentLink = document.createElement('a');
                contentLink.href = contentItem.link;
                contentLink.textContent = contentItem.content;
                contentDiv.appendChild(contentLink);
                contentDiv.appendChild(document.createElement('br'));
            });
        }

        if (section.subsections) {
            section.subsections.forEach(subsection => {
                const subsectionElement = createSectionElement(subsection);
                contentDiv.appendChild(subsectionElement);
            });
        }

        sectionDiv.appendChild(contentDiv);
        return sectionDiv;
    }
});