// content.js
let darkModeEnabled = false;

function enableDarkMode() {
  document.body.classList.add("dark-mode");
  darkModeEnabled = true;
}

function disableDarkMode() {
  document.body.classList.remove("dark-mode");
  darkModeEnabled = false;
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message === "enableDarkMode") {
    enableDarkMode();
  } else if (request.message === "disableDarkMode") {
    disableDarkMode();
  }
});

// You can modify this CSS to your desired dark mode styling
const darkModeCSS = `
  body.dark-mode {
    background-color: #1f1f1f !important;
    color: #bfbfbf !important;
  }
`;

const style = document.createElement("style");
style.textContent = darkModeCSS;
document.head.append(style);