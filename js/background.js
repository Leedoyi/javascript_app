function darkmodeGo() {
  const darkModeToggle = document.getElementById("dn"); 
  if (!darkModeToggle) {
    return !1;
  } 
  const Realbody = document.querySelector("body");
  
  darkModeToggle.addEventListener("change", function (event) {

    if (!Realbody.classList.contains("darkmode")) {
      Realbody.classList.add("darkmode");
      localStorage.setItem("whatMode", darkModeToggle.checked); 
    } else {

      Realbody.classList.remove("darkmode"); 
      localStorage.setItem("whatMode", darkModeToggle.checked); 
    }
  });
}


darkmodeGo();


document.addEventListener("DOMContentLoaded", function () {
  const Realbody = document.querySelector("body");
  const whatMode = localStorage.getItem("whatMode"); 

  if (whatMode === "false") {

    return !1; 
  } else {
    const darkModeToggle = document.getElementById("dn"); 
    darkModeToggle.checked = true; 
    Realbody.classList.add("darkmode"); 
  }
});


