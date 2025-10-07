---
layout: anime
title: Anime List
---

<h2 class="anime-counter">Anime Counter: <span id="anime-counter-value">0</span></h2>

<div class="details-controls">
  <button id="toggle-all">Collapse All</button>
</div>

<div class="search-wrapper">
  <i class="fas fa-search search-icon"></i>
  <input type="text" id="anime-search" placeholder="Search for an anime...">
</div>

<div id="anime-sections" class="anime-sections">
  <p class="anime-loading">Loading anime list...</p>
</div>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const sectionsContainer = document.getElementById('anime-sections');
    const counterSpan = document.getElementById('anime-counter-value');
    const toggleAllButton = document.getElementById('toggle-all');
    const searchInput = document.getElementById('anime-search');
    const dataUrl = '/assets/data/anime_list.json';

    const inferGroup = (title) => {
      if (!title) {
        return '#';
      }
      const firstChar = title.trim().charAt(0).toUpperCase();
      if (/^[A-Z]$/.test(firstChar)) {
        return firstChar;
      }
      if (/^[0-9]$/.test(firstChar)) {
        return '1-9';
      }
      return '#';
    };

    fetch(dataUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load anime data: ${response.status}`);
        }
        return response.json();
      })
      .then((animeList) => {
        if (!Array.isArray(animeList)) {
          throw new Error('Invalid anime list format');
        }

        const groupMap = new Map();
        const groupOrder = [];

        animeList.forEach((item) => {
          const group = (item.group && item.group.trim()) || inferGroup(item.title);
          if (!groupMap.has(group)) {
            groupMap.set(group, []);
            groupOrder.push(group);
          }
          groupMap.get(group).push(item);
        });

        sectionsContainer.innerHTML = '';

        groupOrder.forEach((group) => {
          const details = document.createElement('details');
          details.open = true;

          const summary = document.createElement('summary');
          summary.textContent = group;
          details.appendChild(summary);

          const gallery = document.createElement('div');
          gallery.className = 'anime-gallery';

          groupMap.get(group).forEach((item) => {
            const article = document.createElement('article');
            article.className = 'anime-card';

            const imageWrapper = document.createElement('div');
            imageWrapper.className = 'anime-card__image-wrapper';

            const img = document.createElement('img');
            img.className = 'anime-card__image';
            img.src = item.url;
            img.alt = item.title;

            imageWrapper.appendChild(img);
            article.appendChild(imageWrapper);

            const titleEl = document.createElement('span');
            titleEl.className = 'anime-card__title';
            titleEl.textContent = item.title;

            article.appendChild(titleEl);
            gallery.appendChild(article);
          });

          details.appendChild(gallery);
          sectionsContainer.appendChild(details);
        });

        if (counterSpan) {
          counterSpan.textContent = animeList.length;
        }

        if (toggleAllButton) {
          toggleAllButton.textContent = 'Collapse All';
        }

        if (searchInput && searchInput.value) {
          searchInput.dispatchEvent(new Event('input'));
        }
      })
      .catch((error) => {
        if (sectionsContainer) {
          sectionsContainer.innerHTML = '';
          const errorMessage = document.createElement('p');
          errorMessage.className = 'anime-error';
          errorMessage.textContent = 'Unable to load the anime list right now.';
          sectionsContainer.appendChild(errorMessage);
        }
        console.error(error);
      });
  });
</script>
