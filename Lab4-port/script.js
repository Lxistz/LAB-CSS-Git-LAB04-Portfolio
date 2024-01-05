document.addEventListener("DOMContentLoaded", function () {
    openTab("tab1"); // Open the first tab by default
});

function openTab(tabId) {
    // Hide all tabs
    var tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }

    // Deactivate all tab buttons
    var tabButtons = document.getElementsByClassName("tab-button");
    for (var i = 0; i < tabButtons.length; i++) {
    }

    // Show the selected tab and activate its button
    document.getElementById(tabId).style.display = "block";
    document.querySelector(`[onclick="openTab('${tabId}')"]`)
}