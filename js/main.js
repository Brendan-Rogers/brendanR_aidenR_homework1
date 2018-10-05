const NAV_OPENED_CLASS = "change";
const NAV_CLOSED_CLASS = "changeBack";

let desktopQ = window.matchMedia("(min-width: 768px)");

window.onload = function() {
  const navBtn = document.getElementById("nav-btn");
  const classes = navBtn.classList;
  const navbar = document.getElementById("navbar");

  navBtn.addEventListener("click", function() {
    if (classes.contains(NAV_OPENED_CLASS)) {
      openNav();
    } else {
      closeNav();
    }
  });
  const navLinks = document.getElementsByClassName("nav-link");
  [...navLinks].forEach(function(elem) {
    elem.addEventListener("click", function() {
      closeNav();
    });
  });

  function closeNav() {
    classes.remove(NAV_CLOSED_CLASS);
    classes.add(NAV_OPENED_CLASS);
    navbar.classList.add("hide");
  }
  function openNav() {
    classes.remove(NAV_OPENED_CLASS);
    classes.add(NAV_CLOSED_CLASS);
    navbar.classList.remove("hide");
  }
};


function reassignImages(x){
  if (x.matches) { // it is DESKTOP SIZE
    // INDEX
    document.getElementById('imgHead').src='./images/desktop_index/bckgrd_face.png';
    // BRENDAN pics
    document.getElementById('imgCeltic').src='./images/desktop_port/brendan_port_desk1.png';
    document.getElementById('imgMaritimes').src='./images/desktop_port/brendan_port_desk2.png';
    document.getElementById('imgVolume').src='./images/desktop_port/brendan_port_desk3.png';
    // AIDEN pics
    document.getElementById('imgBuilding').src='./images/desktop_port/aiden_port_desk1.png';
    document.getElementById('imgMan').src='./images/desktop_port/aiden_port_desk2.png';
    document.getElementById('imgBall').src='./images/desktop_port/aiden_port_desk3.png';
    // CONTACT face
    document.getElementById('contactFace').src='./images/desktop_index/contact_desktop.png';
   } else { // it is NOT DESKTOP SIZE
    // INDEX 
    document.getElementById('imgHead').src='./images/mobile_index/mobile_face.png';
    // BRENDAN pics
    document.getElementById('imgCeltic').src='./images/mobile_port/brendan_port_1_mobile.png';
    document.getElementById('imgMaritimes').src='./images/mobile_port/brendan_port_2_mobile.png';
    document.getElementById('imgVolume').src='./images/mobile_port/brendan_port_3_mobile.png';
    // AIDEN pics
    document.getElementById('imgBuilding').src='./images/mobile_port/aiden_port_1_mobile.png';
    document.getElementById('imgMan').src='./images/mobile_port/aiden_port_2_mobile.png';
    document.getElementById('imgBall').src='./images/mobile_port/aiden_port_3_mobile.png';
    // CONTACT face
    document.getElementById('contactFace').src='./images/mobile_index/contact_mobile.png';
  }
}


// call FUNCTIONS
reassignImages(desktopQ);

// EVENT HANDLING
desktopQ.addListener(reassignImages);

