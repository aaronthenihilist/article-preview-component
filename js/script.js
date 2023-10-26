let shareBtn = document.getElementById("share-btn");
let sharePopup = document.getElementById("share-popup");
let shareIcon = document.getElementById("share-icon");
let bodyTag = document.getElementsByTagName("body");

shareIcon.addEventListener("click", function (e) {
    sharePopup.style.display = "flex";
});

shareBtn.addEventListener("click", function (e) {
    sharePopup.style.display = "flex";
});

window.addEventListener("click", function (e) {
    if (e.target != shareBtn && e.target != shareIcon) {
      sharePopup.style.display = "none";
    }
});

