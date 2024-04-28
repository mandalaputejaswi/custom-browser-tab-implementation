function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

function addTab() {
    var tabCount = document.getElementsByClassName("tablinks").length;
    var tabName = "Tab" + (tabCount + 1);
    var tabcontent = document.createElement("div");
    tabcontent.id = tabName;
    tabcontent.classList.add("tabcontent", "active");
    var content = '<iframe src="https://www.bing.com/#!" width="1100px" height="700px"></iframe>';
    
    tabcontent.innerHTML = content;
    
    // Create close button for the tab
    var closeButton = document.createElement("button");
    closeButton.classList.add("close-tab");
    closeButton.innerHTML = "x";
    closeButton.onclick = function() {
        closeTab(event, tabName);
    };
    
    // Append close button to tab
    var tabButton = document.createElement("button");
    tabButton.classList.add("tablinks", "active");
    tabButton.innerHTML = tabName + " ";
    tabButton.appendChild(closeButton);
    tabButton.onclick = function() {
        openTab(event, tabName);
    };
    
    document.querySelector(".tabs").insertBefore(tabButton, document.querySelector(".add-tab"));
    document.body.insertBefore(tabcontent, document.getElementById("Tab1"));
    openTab(event, tabName);
}

function closeTab(evt, tabName) {
    evt.stopPropagation();
    document.getElementById(tabName).remove();
    evt.currentTarget.parentNode.remove();
}