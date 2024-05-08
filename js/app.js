(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    document.querySelector(".menu__icon");
    document.querySelector(".menu__body");
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const contentContainer = document.getElementById("content-container");
    const backButton = contentContainer.getElementsByClassName("back-button");
    const nextButton = contentContainer.getElementsByClassName("next-button");
    const contents = contentContainer.getElementsByClassName("content");
    let currentContentIndex = 0;
    function showContent(index) {
        for (let i = 0; i < contents.length; i++) contents[i].classList.remove("show");
        contents[index].classList.add("show");
        if (index <= 1) {
            for (let i = 0; i < backButton.length; i++) backButton[i].style.display = "none";
            for (let i = 0; i < nextButton.length; i++) nextButton[i].style.display = "block";
        } else {
            for (let i = 0; i < backButton.length; i++) backButton[i].style.display = "block";
            for (let i = 0; i < nextButton.length; i++) nextButton[i].style.display = "block";
        }
        if (index === contents.length - 1) for (let i = 0; i < nextButton.length; i++) nextButton[i].disabled = true; else for (let i = 0; i < nextButton.length; i++) nextButton[i].disabled = false;
    }
    for (let i = 0; i < backButton.length; i++) backButton[i].addEventListener("click", (function() {
        currentContentIndex--;
        if (currentContentIndex < 0) currentContentIndex = contents.length - 1;
        showContent(currentContentIndex);
    }));
    for (let i = 0; i < nextButton.length; i++) nextButton[i].addEventListener("click", (function() {
        currentContentIndex++;
        if (currentContentIndex >= contents.length) currentContentIndex = 0;
        showContent(currentContentIndex);
    }));
    showContent(currentContentIndex);
    window["FLS"] = true;
    isWebp();
})();