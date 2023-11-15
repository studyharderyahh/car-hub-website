
function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");

    // Loop through all list items, and hide those don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
};

// Toggle the collapsed menu
// jQuery function to load header and menu
// code learned from stackoverflow.com
$(function () {
    $('#header').load('header.html');
    $('#menu').load('menu.html');
    $('footer').load('footer.html');
});

$('.navbar-toggler').click(function () {
    $('.menu').toggleClass('show');
});