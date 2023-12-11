function showPage(pageId) {
    // Hide all pages
    var pages = document.querySelectorAll('.content');
    pages.forEach(function(page) {
        page.style.display = 'none';
    });

    // Show the selected page
    document.getElementById(pageId).style.display = 'block';
}