/**
 * LUMINA GALLERY — JAVASCRIPT ENGINE
 * Pure Vanilla JavaScript • No Frameworks • No Dependencies
 */

(function () {
  'use strict';

  /* --------------------------------------------------------------------------
     1. Image Collection Dataset (18 Curated High-Res Unsplash Works)
     -------------------------------------------------------------------------- */
  const GALLERY_DATA = [
    // CARS (6)
    {
      id: 'car-1',
      category: 'cars',
      title: 'Porsche 911 Carrera Classic',
      location: 'Stuttgart, Germany',
      description: 'Aerodynamic silhouette and iconic curves of the rear-engine German legend.',
      alt: 'Classic black Porsche 911 sports car parked on an open scenic roadway',
      thumbUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
      fullUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=90',
      plate: '01'
    },
    {
      id: 'car-2',
      category: 'cars',
      title: 'Ferrari 488 GTB in Rosso Corsa',
      location: 'Maranello, Italy',
      description: 'Mid-engine Italian engineering sculpted for high performance and pure emotion.',
      alt: 'Glossy red Ferrari 488 GTB supercar captured in dramatic studio lighting',
      thumbUrl: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80',
      fullUrl: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=2000&q=90',
      plate: '02'
    },
    {
      id: 'car-3',
      category: 'cars',
      title: 'Aston Martin DB5 Vintage Grand Tourer',
      location: 'London, United Kingdom',
      description: 'Timeless British luxury automobile with handcrafted aluminum chassis.',
      alt: 'Silver birch Aston Martin vintage sports coupe parked in an urban street',
      thumbUrl: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80',
      fullUrl: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=2000&q=90',
      plate: '03'
    },
    {
      id: 'car-4',
      category: 'cars',
      title: 'BMW M8 Competition Coupe',
      location: 'Munich, Germany',
      description: 'Aggressive stance and modern high-contrast design in alpine white.',
      alt: 'White BMW M8 performance coupe with dark wheels and aerodynamic carbon splitters',
      thumbUrl: 'https://images.unsplash.com/photo-1555353540-64580b51c258?auto=format&fit=crop&w=800&q=80',
      fullUrl: 'https://images.unsplash.com/photo-1555353540-64580b51c258?auto=format&fit=crop&w=2000&q=90',
      plate: '04'
    },
    {
      id: 'car-5',
      category: 'cars',
      title: 'Chevrolet Corvette Stingray Classic',
      location: 'California, United States',
      description: 'American classic muscle sports vehicle bathed in warm golden-hour light.',
      alt: 'Deep blue classic Corvette Stingray vintage car under California sunshine',
      thumbUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
      fullUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=2000&q=90',
      plate: '05'
    },
    {
      id: 'car-6',
      category: 'cars',
      title: 'Ford Mustang Fastback 1969',
      location: 'Detroit, Michigan',
      description: 'Heritage fastback profile with aggressive front grille and muscular lines.',
      alt: 'Vintage dark green Ford Mustang muscle car with chrome trims in evening light',
      thumbUrl: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=800&q=80',
      fullUrl: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=2000&q=90',
      plate: '06'
    },

    // FLOWERS (6)
    {
      id: 'flower-1',
      category: 'flowers',
      title: 'Blush Peony in Morning Light',
      location: 'Kyoto, Japan',
      description: 'Soft layered petals blooming gently with delicate pastel tonal gradations.',
      alt: 'Close-up macro of lush blush pink peony petals in soft morning sunlight',
      thumbUrl: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80',
      fullUrl: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=2000&q=90',
      plate: '07'
    },
    {
      id: 'flower-2',
      category: 'flowers',
      title: 'Golden Helianthus Sunflower',
      location: 'Tuscany, Italy',
      description: 'Radiant golden petals centered around an intricate Fibonacci seed spiral.',
      alt: 'Vibrant yellow sunflower facing the sun against a serene clear sky',
      thumbUrl: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=800&q=80',
      fullUrl: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=2000&q=90',
      plate: '08'
    },
    {
      id: 'flower-3',
      category: 'flowers',
      title: 'White Botanical Dahlia Geometry',
      location: 'Giverny, France',
      description: 'Geometrically flawless concentric petal arrangement with pure cream highlights.',
      alt: 'Pristine white dahlia flower with mesmerizing spiral petal patterns',
      thumbUrl: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=800&q=80',
      fullUrl: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=2000&q=90',
      plate: '09'
    },
    {
      id: 'flower-4',
      category: 'flowers',
      title: 'Crimson Tulip Silhouette',
      location: 'Lisse, Netherlands',
      description: 'Vivid red cup-shaped petals adorned with crystalline morning dew drops.',
      alt: 'Single red tulip flower standing tall against a muted natural background',
      thumbUrl: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=800&q=80',
      fullUrl: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=2000&q=90',
      plate: '10'
    },
    {
      id: 'flower-5',
      category: 'flowers',
      title: 'Spring Sakura Cherry Blossoms',
      location: 'Tokyo, Japan',
      description: 'Ephemeral pale pink cherry blossom blossoms framing a gentle spring sky.',
      alt: 'Delicate branches of flowering pink cherry blossoms during springtime',
      thumbUrl: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=800&q=80',
      fullUrl: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=2000&q=90',
      plate: '11'
    },
    {
      id: 'flower-6',
      category: 'flowers',
      title: 'Fragrant Provence Lavender Stems',
      location: 'Valensole, France',
      description: 'Endless rows of purple lavender flowers radiating aromatic summer warmth.',
      alt: 'Detailed close-up of purple lavender flowers blooming in the morning mist',
      thumbUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
      fullUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=90',
      plate: '12'
    },

    // LANDSCAPES (6)
    {
      id: 'land-1',
      category: 'landscapes',
      title: 'Yosemite Valley Granite Reflection',
      location: 'California, United States',
      description: 'Towering granite monoliths mirrored in the crystalline waters of the Merced River.',
      alt: 'Scenic valley in Yosemite with reflection of granite mountains in river water',
      thumbUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      fullUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=90',
      plate: '13'
    },
    {
      id: 'land-2',
      category: 'landscapes',
      title: 'Snow-Capped Alpine Ridges',
      location: 'Valais, Switzerland',
      description: 'Dramatic snow ridges slicing into the high-altitude azure atmosphere.',
      alt: 'Jagged snow-covered alpine mountain peaks under a clear blue sky',
      thumbUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
      fullUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=90',
      plate: '14'
    },
    {
      id: 'land-3',
      category: 'landscapes',
      title: 'Emerald Coastal Waters & Shore',
      location: 'Big Sur, California',
      description: 'Turquoise ocean swell rolling gently against dramatic rocky coastline.',
      alt: 'Aerial perspective of turquoise ocean waves washing over a golden sandy beach',
      thumbUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      fullUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=90',
      plate: '15'
    },
    {
      id: 'land-4',
      category: 'landscapes',
      title: 'Morning Mist Over Alpine Valley',
      location: 'Nordfjord, Norway',
      description: 'Atmospheric layers of mountain mist gently settling across evergreen pine forest.',
      alt: 'Misty green pine forest with mountains in the background during sunrise',
      thumbUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80',
      fullUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=2000&q=90',
      plate: '16'
    },
    {
      id: 'land-5',
      category: 'landscapes',
      title: 'Sculpted Sahara Sand Dunes',
      location: 'Erg Chebbi, Morocco',
      description: 'Wind-carved geometric ridge lines casting crisp contrasting shadow waves.',
      alt: 'Warm orange sand dunes in the Sahara desert with dramatic shadow ridges',
      thumbUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
      fullUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=2000&q=90',
      plate: '17'
    },
    {
      id: 'land-6',
      category: 'landscapes',
      title: 'Emerald Cascades & Canyon',
      location: 'Skógafoss, Iceland',
      description: 'Lush green canyon slopes framing a thundering glacial waterfall.',
      alt: 'Lush green mossy mountain canyon with a powerful waterfall cascading down',
      thumbUrl: 'https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?auto=format&fit=crop&w=800&q=80',
      fullUrl: 'https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?auto=format&fit=crop&w=2000&q=90',
      plate: '18'
    }
  ];

  /* --------------------------------------------------------------------------
     2. Application State
     -------------------------------------------------------------------------- */
  let currentFilter = 'all';
  let activeFilteredList = [...GALLERY_DATA];
  let currentLightboxIndex = -1;
  let lastFocusedElement = null;

  // Touch Swipe Variables for Mobile Lightbox
  let touchStartX = 0;
  let touchStartY = 0;
  let touchEndX = 0;
  let touchEndY = 0;

  /* --------------------------------------------------------------------------
     3. DOM Element References
     -------------------------------------------------------------------------- */
  const galleryGrid = document.getElementById('gallery-grid');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryStatus = document.getElementById('gallery-status');
  
  // Lightbox Elements
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxSpinner = document.getElementById('lightbox-spinner');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxLocation = document.getElementById('lightbox-location');
  const lightboxCatBadge = document.getElementById('lightbox-cat-badge');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const lightboxCloseBtn = document.getElementById('lightbox-close-btn');
  const lightboxPrevBtn = document.getElementById('lightbox-prev-btn');
  const lightboxNextBtn = document.getElementById('lightbox-next-btn');
  const lightboxFullviewBtn = document.getElementById('lightbox-fullview-btn');

  // Counts Elements
  const countAll = document.getElementById('count-all');
  const countCars = document.getElementById('count-cars');
  const countFlowers = document.getElementById('count-flowers');
  const countLandscapes = document.getElementById('count-landscapes');

  /* --------------------------------------------------------------------------
     4. Category Badge & Count Initialization
     -------------------------------------------------------------------------- */
  function updateBadgeCounts() {
    const carsCount = GALLERY_DATA.filter(item => item.category === 'cars').length;
    const flowersCount = GALLERY_DATA.filter(item => item.category === 'flowers').length;
    const landscapesCount = GALLERY_DATA.filter(item => item.category === 'landscapes').length;

    if (countAll) countAll.textContent = GALLERY_DATA.length;
    if (countCars) countCars.textContent = carsCount;
    if (countFlowers) countFlowers.textContent = flowersCount;
    if (countLandscapes) countLandscapes.textContent = landscapesCount;
  }

  /* --------------------------------------------------------------------------
     5. Render Gallery Cards
     -------------------------------------------------------------------------- */
  function renderGallery() {
    if (!galleryGrid) return;

    // Filter items according to active state
    if (currentFilter === 'all') {
      activeFilteredList = [...GALLERY_DATA];
    } else {
      activeFilteredList = GALLERY_DATA.filter(item => item.category === currentFilter);
    }

    // Update status text
    if (galleryStatus) {
      const categoryLabel = currentFilter === 'all' ? 'All Works' : currentFilter.charAt(0).toUpperCase() + currentFilter.slice(1);
      galleryStatus.innerHTML = `Showing <strong>${activeFilteredList.length}</strong> of <strong>${GALLERY_DATA.length}</strong> works in <em>${categoryLabel}</em>`;
    }

    // Clear current grid content
    galleryGrid.innerHTML = '';

    if (activeFilteredList.length === 0) {
      galleryGrid.innerHTML = `
        <div class="empty-gallery">
          <h3 class="empty-title">No images found</h3>
          <p class="empty-desc">There are currently no photographic plates in this category.</p>
        </div>
      `;
      return;
    }

    // Create cards
    activeFilteredList.forEach((item, index) => {
      const card = document.createElement('article');
      card.className = 'gallery-card';
      card.id = `card-${item.id}`;
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `View details for ${item.title}, Plate ${item.plate}`);

      card.innerHTML = `
        <div class="card-media-wrapper" id="media-wrap-${item.id}">
          <img 
            src="${item.thumbUrl}" 
            alt="${item.alt}" 
            class="card-image"
            loading="lazy"
            id="img-${item.id}"
          />
          <div class="card-overlay">
            <div class="card-top-badges">
              <span class="card-plate-tag">PL. ${item.plate}</span>
              <span class="card-expand-icon" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <polyline points="9 21 3 21 3 15"></polyline>
                  <line x1="21" y1="3" x2="14" y2="10"></line>
                  <line x1="3" y1="21" x2="10" y2="14"></line>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div class="card-content">
          <div class="card-category-row">
            <span class="card-category-pill">${item.category}</span>
            <span class="card-location">${item.location}</span>
          </div>
          <h3 class="card-title">${item.title}</h3>
          <p class="card-description">${item.description}</p>
        </div>
      `;

      // Handle image load skeleton transition
      const imgEl = card.querySelector('.card-image');
      const mediaWrap = card.querySelector('.card-media-wrapper');

      if (imgEl && mediaWrap) {
        if (imgEl.complete && imgEl.naturalHeight !== 0) {
          mediaWrap.classList.add('image-loaded');
        } else {
          imgEl.addEventListener('load', () => {
            mediaWrap.classList.add('image-loaded');
          });
          imgEl.addEventListener('error', () => {
            mediaWrap.classList.add('image-loaded');
          });
        }
      }

      // Card Click Handler -> Open Lightbox
      card.addEventListener('click', (e) => {
        openLightbox(index, card);
      });

      // Card Keyboard Support (Enter / Space)
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(index, card);
        }
      });

      galleryGrid.appendChild(card);
    });
  }

  /* --------------------------------------------------------------------------
     6. Filter Switching
     -------------------------------------------------------------------------- */
  function setupFilters() {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const filterVal = btn.getAttribute('data-filter');
        if (!filterVal || filterVal === currentFilter) return;

        // Update active class
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        currentFilter = filterVal;
        renderGallery();
      });
    });
  }

  /* --------------------------------------------------------------------------
     7. Lightbox Controller
     -------------------------------------------------------------------------- */
  function openLightbox(index, triggerElement) {
    if (!activeFilteredList || activeFilteredList.length === 0) return;

    if (index < 0 || index >= activeFilteredList.length) {
      index = 0;
    }

    lastFocusedElement = triggerElement || document.activeElement;
    currentLightboxIndex = index;

    lightbox.hidden = false;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent page scroll

    updateLightboxContent();

    // Focus close button initially
    if (lightboxCloseBtn) {
      lightboxCloseBtn.focus();
    }
  }

  function closeLightbox() {
    if (!lightbox.classList.contains('active')) return;

    lightbox.classList.remove('active');
    lightbox.hidden = true;
    document.body.style.overflow = '';

    // Clear full image src after fadeout to free memory
    setTimeout(() => {
      if (lightboxImg) {
        lightboxImg.src = '';
        lightboxImg.classList.remove('loaded');
      }
    }, 250);

    // Restore focus to previous card element
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  }

  function updateLightboxContent() {
    const item = activeFilteredList[currentLightboxIndex];
    if (!item) return;

    // Reset loaded state & show spinner
    if (lightboxImg) {
      lightboxImg.classList.remove('loaded');
      lightboxImg.alt = item.alt;
    }
    if (lightboxSpinner) {
      lightboxSpinner.classList.add('visible');
    }

    // Set Text Contents
    if (lightboxTitle) lightboxTitle.textContent = item.title;
    if (lightboxLocation) lightboxLocation.textContent = `${item.location} — ${item.description}`;
    if (lightboxCatBadge) lightboxCatBadge.textContent = item.category;
    
    // Set Counter (only within currently filtered list!)
    if (lightboxCounter) {
      const catName = currentFilter === 'all' ? 'All' : item.category.charAt(0).toUpperCase() + item.category.slice(1);
      lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${activeFilteredList.length} (${catName})`;
    }

    // Update Full-view Button URL
    if (lightboxFullviewBtn) {
      lightboxFullviewBtn.href = item.fullUrl;
      lightboxFullviewBtn.setAttribute('title', `Open full-resolution image in new tab`);
    }

    // Update Prev / Next buttons state
    const hasMultiple = activeFilteredList.length > 1;
    if (lightboxPrevBtn) lightboxPrevBtn.disabled = !hasMultiple;
    if (lightboxNextBtn) lightboxNextBtn.disabled = !hasMultiple;

    // Load High-Res Image
    const tempImage = new Image();
    tempImage.src = item.fullUrl;

    tempImage.onload = () => {
      if (lightboxImg) {
        lightboxImg.src = item.fullUrl;
        lightboxImg.classList.add('loaded');
      }
      if (lightboxSpinner) {
        lightboxSpinner.classList.remove('visible');
      }
    };

    tempImage.onerror = () => {
      // Fallback to thumbnail URL if high-res fails
      if (lightboxImg) {
        lightboxImg.src = item.thumbUrl;
        lightboxImg.classList.add('loaded');
      }
      if (lightboxSpinner) {
        lightboxSpinner.classList.remove('visible');
      }
    };

    // Preload Adjacent Images for instant navigation
    preloadAdjacentImages();
  }

  function preloadAdjacentImages() {
    if (activeFilteredList.length <= 1) return;

    const nextIndex = (currentLightboxIndex + 1) % activeFilteredList.length;
    const prevIndex = (currentLightboxIndex - 1 + activeFilteredList.length) % activeFilteredList.length;

    const nextImg = new Image();
    nextImg.src = activeFilteredList[nextIndex].fullUrl;

    const prevImg = new Image();
    prevImg.src = activeFilteredList[prevIndex].fullUrl;
  }

  function nextImage() {
    if (activeFilteredList.length <= 1) return;
    currentLightboxIndex = (currentLightboxIndex + 1) % activeFilteredList.length;
    updateLightboxContent();
  }

  function prevImage() {
    if (activeFilteredList.length <= 1) return;
    currentLightboxIndex = (currentLightboxIndex - 1 + activeFilteredList.length) % activeFilteredList.length;
    updateLightboxContent();
  }

  /* --------------------------------------------------------------------------
     8. Lightbox Event Handlers & Keyboard Support
     -------------------------------------------------------------------------- */
  function setupLightboxEvents() {
    // Close button
    if (lightboxCloseBtn) {
      lightboxCloseBtn.addEventListener('click', closeLightbox);
    }

    // Prev / Next buttons
    if (lightboxPrevBtn) {
      lightboxPrevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        prevImage();
      });
    }

    if (lightboxNextBtn) {
      lightboxNextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        nextImage();
      });
    }

    // Click outside image container to close
    if (lightbox) {
      lightbox.addEventListener('click', (e) => {
        const target = e.target;
        // If clicking directly on backdrop or stage wrapper outside navigation buttons
        if (
          target === lightbox ||
          target.classList.contains('lightbox-stage') ||
          target.classList.contains('lightbox-media-container')
        ) {
          closeLightbox();
        }
      });
    }

    // Keyboard Navigation: Esc = close, Left Arrow = prev, Right Arrow = next
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('active')) return;

      switch (e.key) {
        case 'Escape':
          e.preventDefault();
          closeLightbox();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          prevImage();
          break;
        case 'ArrowRight':
          e.preventDefault();
          nextImage();
          break;
        case 'Tab':
          handleFocusTrap(e);
          break;
      }
    });

    // Touch Swipe Gestures for Mobile
    if (lightbox) {
      lightbox.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
      }, { passive: true });

      lightbox.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        handleSwipeGesture();
      }, { passive: true });
    }
  }

  function handleSwipeGesture() {
    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;
    const minSwipeDistance = 45;

    // Ensure horizontal swipe is dominant over vertical
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > minSwipeDistance) {
      if (diffX < 0) {
        // Swiped Left -> Next
        nextImage();
      } else {
        // Swiped Right -> Prev
        prevImage();
      }
    }
  }

  // Accessibility: Focus Trap within Lightbox
  function handleFocusTrap(e) {
    if (!lightbox.classList.contains('active')) return;

    const focusableSelectors = 'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const focusableElements = lightbox.querySelectorAll(focusableSelectors);
    
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  }

  /* --------------------------------------------------------------------------
     9. Back to Top Button
     -------------------------------------------------------------------------- */
  function setupBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top-btn');
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  }

  /* --------------------------------------------------------------------------
     10. Initialization
     -------------------------------------------------------------------------- */
  function init() {
    updateBadgeCounts();
    renderGallery();
    setupFilters();
    setupLightboxEvents();
    setupBackToTop();
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
