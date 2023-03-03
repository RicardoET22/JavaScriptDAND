//cambiar fondo
function changeBackground(color) {
    document.body.classList.remove("bg-default", "bg-red", "bg-green");
    document.body.classList.add(color);
  }
  function toggleSection(id) {
    var section = document.getElementById(id);
    if (section.style.display === "block") {
      section.style.display = "none";
    } else {
      section.style.display = "block";
    }
  }
  