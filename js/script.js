// script.js

// 1. Language Switcher Functionality
const langSelect = document.getElementById('lang-select');
if (langSelect) {
  // On dropdown change, switch language
  langSelect.addEventListener('change', () => {
    const newLang = langSelect.value;
    // Update <body> class and <html lang> attribute
    document.body.className = 'lang-' + newLang;
    document.documentElement.setAttribute('lang', newLang);
    // Save preference
    localStorage.setItem('preferredLang', newLang);
  });

  // On page load, set dropdown to saved or default language
  const savedLang = localStorage.getItem('preferredLang');
  if (savedLang) {
    document.body.className = 'lang-' + savedLang;
    document.documentElement.setAttribute('lang', savedLang);
    langSelect.value = savedLang;
  } else {
    langSelect.value = 'nl'; // default
  }
}

// 2. Initialize Swiper Carousel (image slider)
const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: { 
    el: '.swiper-pagination', 
    clickable: true 
  },
  navigation: { 
    nextEl: '.swiper-button-next', 
    prevEl: '.swiper-button-prev' 
  },
  // Accessible autoplay example (optional):
  // autoplay: { delay: 5000, disableOnInteraction: false },
  // Note: If autoplay is used, ensure users can pause the carousel (for WCAG 2.2.2).
});

// 3. Initialize FullCalendar (availability calendar)
document.addEventListener('DOMContentLoaded', function() {
  const calendarEl = document.getElementById('availability-calendar');
  if (calendarEl) {
    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      headerToolbar: {
        start: 'prev,next today',
        center: 'title',
        end: ''  // we hide week/day views for simplicity
      },
      fixedWeekCount: false,             // calendar height adjusts to number of weeks
      showNonCurrentDates: true,         // show days of other months in grid
      selectable: false,
      editable: false,
      // Define example events for booked dates (could be fetched from a static JSON or API)
      events: [
        // Example: a booked range (will appear with background highlight)
        { start: '2025-07-10', end: '2025-07-15', display: 'background', color: '#d9534f' },
        // Example: a single booked day event
        { start: '2025-07-20', title: 'Booked', display: 'background', color: '#d9534f' }
      ]
    });
    calendar.render();  // Render the calendar onto the page:contentReference[oaicite:5]{index=5}
  }
});
