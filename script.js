// selecting elements
const
smooth_divs = document.querySelectorAll('.smooth');
headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

// set transition property for elements with smooth class
smooth_divs.forEach(function(elem) {
    elem.style.transition = "all 0.3s ease";
});

// set headers font family to serif
headers.forEach(function(elem) {
    elem.style.fontFamily = "serif";
});

// show content when ready
$(document).ready(function() {
    $("body").css("display", "block");
    $("#loading").css("display", "none");
});