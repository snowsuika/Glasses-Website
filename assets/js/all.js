"use strict";

var menuBtn = document.getElementById('menuBtn');
var mobileMenu = document.getElementById('mobileMenu');
menuBtn.addEventListener('click', function (event) {
  console.log('mobileMenu.classList', mobileMenu.classList);

  if (mobileMenu.classList.contains("d-flex")) {
    mobileMenu.classList.remove("d-flex");
    mobileMenu.classList.add("d-none");
  } else {
    mobileMenu.classList.remove("d-none");
    mobileMenu.classList.add("d-flex");
  }
});
"use strict";
//# sourceMappingURL=all.js.map
