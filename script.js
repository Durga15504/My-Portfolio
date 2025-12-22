

document.addEventListener('DOMContentLoaded', function () {
  
  const yearEls = ['year', 'year2', 'year3', 'year4', 'year5'];
  const currentYear = new Date().getFullYear();

  yearEls.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = currentYear;
    }
  });

  
  function setupToggle(buttonId) {
    const btn = document.getElementById(buttonId);
    if (!btn) return;

    btn.addEventListener('click', () => {
      const nav = document.querySelector('.nav');
      if (!nav) return;
      nav.classList.toggle('nav-open');
    });
  }

  ['navToggle', 'navToggle2', 'navToggle3', 'navToggle4', 'navToggle5']
    .forEach(setupToggle);
});
