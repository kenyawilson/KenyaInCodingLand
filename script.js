function swirl() {
    document.getElementById("swirl").style.display = "block";
}

var nav = document.getElementsByClassName("fa-bars");
    body = document.body;

nav.addEventListener("click", function(e) {
    body.className = body.className? ' ': 'with_nav';
    e.preventDefault();
});
