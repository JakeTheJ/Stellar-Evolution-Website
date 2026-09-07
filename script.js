// Star class definitions: each maps to a size and a pair of CSS custom
// properties (core color + glow color) that the .star element transitions
// between smoothly (see the `transition` rules in style.css).
const STAR_TYPES = {
  'red-dwarf': {
    label: 'Red Dwarf',
    size: '70px',
    color: 'var(--red-dwarf)',
    glow: 'var(--red-dwarf-glow)',
    description: 'Small and cool — the most common star in the galaxy, burning fuel slowly for trillions of years.'
  },
  'yellow-dwarf': {
    label: 'Yellow Dwarf',
    size: '120px',
    color: 'var(--yellow-dwarf)',
    glow: 'var(--yellow-dwarf-glow)',
    description: 'Medium-sized and yellow-white — a main-sequence star like our own Sun.'
  },
  'blue-giant': {
    label: 'Blue Giant',
    size: '170px',
    color: 'var(--blue-giant)',
    glow: 'var(--blue-giant-glow)',
    description: 'Medium-large and blazing hot — massive, luminous, and short-lived.'
  },
  'red-giant': {
    label: 'Red Giant',
    size: '230px',
    color: 'var(--red-giant)',
    glow: 'var(--red-giant-glow)',
    description: 'Large and cool-surfaced — a star swelling up in its late-life evolutionary stage.'
  }
};

const star = document.getElementById('star');
const readout = document.getElementById('readout');
const buttons = document.querySelectorAll('.star-btn');

function selectStar(key) {
  const data = STAR_TYPES[key];
  if (!data) return;

  // Update the star element's custom properties; CSS transitions handle
  // the smooth animation between sizes and colors.
  star.style.setProperty('--star-size', data.size);
  star.style.setProperty('--star-color', data.color);
  star.style.setProperty('--star-glow', data.glow);

  readout.textContent = `${data.label} — ${data.description}`;

  buttons.forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.star === key);
  });
}

buttons.forEach((btn) => {
  btn.addEventListener('click', () => selectStar(btn.dataset.star));
});

// Start on the Yellow Dwarf (our Sun's class) as a sensible default.
selectStar('yellow-dwarf');
document.querySelector('[data-star="yellow-dwarf"]').classList.add('is-active');
