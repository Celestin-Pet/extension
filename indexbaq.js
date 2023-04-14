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
  if (request.message === "toggleDarkMode") {
    if (darkModeEnabled) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  }
});

const button = document.getElementById("toggle-dark-mode");
button.addEventListener("click", function() {
  chrome.runtime.sendMessage({message: "toggleDarkMode"});
});


function enableDarkMode() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {message: "toggleDarkMode"});
  });
  darkModeEnabled = true;
  chrome.browserAction.setIcon({path: "icon-enabled.png"});
}

function disableDarkMode() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {message: "toggleDarkMode"});
  });
  darkModeEnabled = false;
  chrome.browserAction.setIcon({path: "icon-disabled.png"});
}

chrome.browserAction.onClicked.addListener(function(tab) {
  if (darkModeEnabled) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message === "toggleDarkMode") {
    if (darkModeEnabled) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  }
});
