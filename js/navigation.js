/**
 * Shared Navigation Menu for Ustadex Website
 * This script creates a common navigation menu that can be included in all pages
 */

(function() {
  'use strict';

  // Industry pages configuration
  const industries = [
    { file: 'ecommerce.html', name: 'Ecommerce' },
    { file: 'foodchain.html', name: 'Foodchain' },
    { file: 'healthcare.html', name: 'Healthcare' },
    { file: 'manufacturing.html', name: 'Manufacturing' },
    { file: 'retail.html', name: 'Retail' },
    { file: 'university.html', name: 'University' }
  ];

  // Determine base path based on current page location
  function getBasePath() {
    const path = window.location.pathname;
    if (path.includes('/industry/')) {
      return '../';
    } else if (path.includes('/page/')) {
      return '../';
    } else {
      return './';
    }
  }

  // Determine which logo to use based on current page
  function getLogoPath() {
    const path = window.location.pathname;
    const basePath = getBasePath();
    
    // Map industry pages to their specific logos
    const logoMap = {
      'university.html': 'logos/university_logo.png',
      'ecommerce.html': 'logos/ecommerce_logo.png',
      'retail.html': 'logos/retail_logo.png',
      'manufacturing.html': 'logos/Manufacturing_logo.png',
      'healthcare.html': 'logos/healthcare_logo.png',
      'foodchain.html': 'logos/foodchain_logo.png'
    };
    
    // Check if current page is an industry page
    if (path.includes('/industry/')) {
      const fileName = path.split('/').pop();
      if (logoMap[fileName]) {
        return `${basePath}${logoMap[fileName]}`;
      }
    }
    
    // Default to home logo for all other pages
    return `${basePath}logos/home_logo.png`;
  }

  // Generate navigation HTML
  function generateNavigation() {
    const basePath = getBasePath();
    const logoPath = getLogoPath();
    
    return `
      <nav class="bg-white shadow-sm sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-6">
          <div class="flex items-center justify-between h-16">
            <!-- Logo/Brand -->
            <div class="flex-shrink-0">
              <a href="${basePath}index.html" class="flex items-center space-x-3">
                <img src="${logoPath}" alt="Ustadex Analytics" class="h-12 w-auto">
                <span class="text-2xl font-bold text-gray-900">
                  Ustadex <span class="text-brand">Analytics</span>
                </span>
              </a>
            </div>

            <!-- Desktop Menu -->
            <div class="hidden md:flex items-center space-x-8">
              <!-- Home -->
              <a href="${basePath}index.html" class="text-gray-700 hover:text-brand transition-colors font-medium">
                Home
              </a>

              <!-- Industry Dropdown -->
              <div class="relative group">
                <button class="text-gray-700 hover:text-brand transition-colors font-medium flex items-center">
                  Industry
                  <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div class="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                  <div class="py-2">
                    ${industries.map(industry => `
                      <a href="${basePath}industry/${industry.file}" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-brand transition-colors">
                        ${industry.name}
                      </a>
                    `).join('')}
                  </div>
                </div>
              </div>

              <!-- Pricing -->
              <a href="${basePath}page/pricing.html" class="text-gray-700 hover:text-brand transition-colors font-medium">
                Pricing
              </a>

              <!-- Contact Us -->
              <a href="${basePath}page/contactus.html" class="text-gray-700 hover:text-brand transition-colors font-medium">
                Contact Us
              </a>

              <!-- Book Demo CTA -->
              <a href="${basePath}page/BookDemo.html" class="bg-brand text-white px-6 py-2 rounded-xl shadow-md hover:shadow-lg transition-shadow font-medium">
                Book Demo
              </a>
            </div>

            <!-- Mobile Menu Button -->
            <div class="md:hidden">
              <button id="mobileMenuToggle" class="text-gray-700 hover:text-brand focus:outline-none">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path id="menuIcon" d="M4 6h16M4 12h16M4 18h16"></path>
                  <path id="closeIcon" class="hidden" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>

          <!-- Mobile Menu -->
          <div id="mobileMenu" class="hidden md:hidden pb-4">
            <div class="space-y-2">
              <a href="${basePath}index.html" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-brand transition-colors rounded-lg">
                Home
              </a>
              
              <div class="px-4 py-2">
                <button id="mobileIndustryToggle" class="w-full text-left text-gray-700 hover:text-brand transition-colors font-medium flex items-center justify-between">
                  Industry
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div id="mobileIndustryMenu" class="hidden mt-2 space-y-1">
                  ${industries.map(industry => `
                    <a href="${basePath}industry/${industry.file}" class="block px-6 py-2 text-gray-600 hover:bg-blue-50 hover:text-brand transition-colors rounded-lg">
                      ${industry.name}
                    </a>
                  `).join('')}
                </div>
              </div>

              <a href="${basePath}page/pricing.html" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-brand transition-colors rounded-lg">
                Pricing
              </a>

              <a href="${basePath}page/contactus.html" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-brand transition-colors rounded-lg">
                Contact Us
              </a>

              <a href="${basePath}page/BookDemo.html" class="block px-4 py-2 bg-brand text-white rounded-xl text-center font-medium hover:bg-blue-700 transition-colors">
                Book Demo
              </a>
            </div>
          </div>
        </div>
      </nav>
    `;
  }

  // Initialize navigation
  function initNavigation() {
    // Find or create navigation container
    let navContainer = document.getElementById('main-navigation');
    if (!navContainer) {
      navContainer = document.createElement('div');
      navContainer.id = 'main-navigation';
      document.body.insertBefore(navContainer, document.body.firstChild);
    }

    // Insert navigation HTML
    navContainer.innerHTML = generateNavigation();

    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');

    if (mobileMenuToggle && mobileMenu) {
      mobileMenuToggle.addEventListener('click', function() {
        const isHidden = mobileMenu.classList.contains('hidden');
        mobileMenu.classList.toggle('hidden');
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
      });
    }

    // Mobile industry dropdown toggle
    const mobileIndustryToggle = document.getElementById('mobileIndustryToggle');
    const mobileIndustryMenu = document.getElementById('mobileIndustryMenu');

    if (mobileIndustryToggle && mobileIndustryMenu) {
      mobileIndustryToggle.addEventListener('click', function() {
        mobileIndustryMenu.classList.toggle('hidden');
      });
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavigation);
  } else {
    initNavigation();
  }
})();

