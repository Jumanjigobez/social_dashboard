// Function to ease retrieval of DOM elements
elem = x => {
  return document.querySelector(x);
};

// Toggle Theme Function
var theme_btn = elem("input#theme"),
  body = elem("body"),
  default_theme = ""; //Will store a default theme the user placed before refresh using localStorage

theme_btn.addEventListener("click", () => {
  if (theme_btn.checked) {
    body.classList.add("light");
    localStorage.setItem("Theme", "light");
  } else {
    body.classList.remove("light");
    localStorage.setItem("Theme", "dark");
  }
});

//On Refresh
default_theme = localStorage.getItem("Theme");

if (default_theme == "light") {
  body.classList.add("light");
  theme_btn.checked = true;
} else {
  body.classList.remove("light");
}
