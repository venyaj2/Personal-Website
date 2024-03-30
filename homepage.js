function handleTabClick(tabName) {
    // Remove 'active' class from all tabs
    var tabs = document.querySelectorAll('nav ul li a');
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });

    // Add 'active' class to the clicked tab
    var clickedTab = document.querySelector('nav ul li a[href="' + tabName.toLowerCase() + '.html"]');
    clickedTab.classList.add('active');

    // Allow default action to occur (redirecting to the clicked page)
    return true;
}