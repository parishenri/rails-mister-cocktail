import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["Fancy", "fresh", "exciting", "flamboyant", "enjoy amazing cocktails"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
