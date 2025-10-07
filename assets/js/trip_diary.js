(function () {
  const renderDiary = (container, days) => {
    container.innerHTML = '';

    days.forEach((day) => {
      if (!day || !Array.isArray(day.photos) || !day.photos.length) {
        return;
      }

      const section = document.createElement('section');
      section.className = 'photo-day';

      const heading = document.createElement('h2');
      heading.textContent = day.title || day.day || '';
      section.appendChild(heading);

      if (day.description) {
        const description = document.createElement('p');
        description.className = 'photo-day__description';
        description.textContent = day.description;
        section.appendChild(description);
      }

      const grid = document.createElement('div');
      grid.className = 'photo-grid';

      day.photos.forEach((photo) => {
        if (!photo || !photo.src) {
          return;
        }

        const figure = document.createElement('figure');

        const image = document.createElement('img');
        image.src = photo.src;
        image.alt = photo.alt || photo.caption || '';
        image.loading = 'lazy';
        if (photo.width) {
          image.width = photo.width;
        }
        if (photo.height) {
          image.height = photo.height;
        }
        figure.appendChild(image);

        if (photo.caption) {
          const caption = document.createElement('figcaption');
          caption.textContent = photo.caption;
          figure.appendChild(caption);
        }

        grid.appendChild(figure);
      });

      section.appendChild(grid);
      container.appendChild(section);
    });
  };

  const handleError = (container) => {
    container.innerHTML = '';
    const message = document.createElement('p');
    message.className = 'diary-error';
    message.textContent = 'Unable to load the diary right now.';
    container.appendChild(message);
  };

  document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('[data-trip-url]');
    if (!containers.length) {
      return;
    }

    containers.forEach((container) => {
      const dataUrl = container.getAttribute('data-trip-url');
      if (!dataUrl) {
        return;
      }

      fetch(dataUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Failed to load ${dataUrl}`);
          }
          return response.json();
        })
        .then((days) => {
          if (!Array.isArray(days)) {
            throw new Error('Invalid diary format');
          }
          renderDiary(container, days);
        })
        .catch(() => {
          handleError(container);
        });
    });
  });
})();
