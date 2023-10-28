// sidebar button function
function openSidebar() {
    document.getElementById("mySidebar").style.width = "240px";
    document.querySelector(".page-content").style.marginLeft = "240px";
    document.querySelector(".open-button").style.zIndex = "-1";
    document.querySelector(".close-button").style.zIndex = "1";

}

function closeSidebar() {
    document.getElementById("mySidebar").style.width = "0";
    document.querySelector(".page-content").style.marginLeft = "0";
    document.querySelector(".open-button").style.zIndex = "1";
    document.querySelector(".close-button").style.zIndex = "-1";
}

// sidebar elements onclick scripting
let activeListItem = null;

function activateListItem(element) {
  if (activeListItem !== null) {
activeListItem.classList.remove('active');
}

element.classList.add('active');
activeListItem = element;
}

// partner's custemers view button function
function myFunction1() {
    var b = document.getElementById("myDIV1");
    if (b.style.display === "none") {
      b.style.display = "block";
    } else {
      b.style.display = "none";
    }
  }
  function myFunction2() {
    var c = document.getElementById("myDIV2");
    if (c.style.display === "none") {
      c.style.display = "block";
    } else {
      c.style.display = "none";
    }
  }
  function myFunction3() {
    var d = document.getElementById("myDIV3");
    if (d.style.display === "none") {
      d.style.display = "block";
    } else {
      d.style.display = "none";
    }
  }
  function myFunction4() {
    var d = document.getElementById("myDIV4");
    if (d.style.display === "none") {
      d.style.display = "block";
    } else {
      d.style.display = "none";
    }
  }
  
  
  // darkmode button click animation
  function activeTheme1() {
      document.querySelector("#theme1").style.zIndex = "-1";
      document.querySelector("#theme2").style.zIndex = "1";
  
  }
  function activeTheme2() {
      document.querySelector("#theme1").style.zIndex = "1";
      document.querySelector("#theme2").style.zIndex = "-1";
  
  }

  // applying darkmode scripting
  const darkModeToggle1 = document.getElementById("theme1");
  const darkModeToggle2 = document.getElementById("theme2");
  const elementsToToggle = document.querySelectorAll("body, header ul, aside, .belt, .card, .user-profile, .tray, table");
  
  darkModeToggle1.addEventListener("click", () => {
    elementsToToggle.forEach((element) => {
      element.classList.toggle("dark-mode");
    });
  });
  darkModeToggle2.addEventListener("click", () => {
    elementsToToggle.forEach((element) => {
      element.classList.toggle("dark-mode");
    });
  });