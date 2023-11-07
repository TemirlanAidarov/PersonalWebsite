module.exports = {
  email: 'akbota.amir.01gmail.com',

  socialMedia: [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/toleuzhanovab',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/%D0%B0%D2%9B%D0%B1%D0%BE%D1%82%D0%B0-%D1%82%D3%A9%D0%BB%D0%B5%D1%83%D0%B6%D0%B0%D0%BD%D0%BE%D0%B2%D0%B0-a7963126a/',
    },
    {
      name: 'Codepen',
      url: 'https://www.behance.net/akbotatoleuzhan01/moodboards',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
