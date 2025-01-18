let scrolltotop = document.getElementById("top-b");

window.addEventListener("scroll", function () {
    if (window.pageYOffset > 500) {
        scrolltotop.style.display = "block";
    } else {
        scrolltotop.style.display = "none";
    }
});

scrolltotop.addEventListener("click", () => {
    let h1 = document.getElementById("sec1");
    let getid = h1.getAttribute("id");

    scrolltotop.setAttribute("href", "#" + getid);
})