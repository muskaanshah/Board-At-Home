const drawer = document.querySelector(".drawer")
const toggleButtonDrawers = document.querySelector(".btn-hamburger-menu");
const filterDrawer = document.querySelector(".products-filters")
const toggleButtonFilterList = document.querySelector(".filter-icon");

toggleButtonDrawers.addEventListener('click', () => {
    const visibility = drawer.getAttribute('data-visible');
    if (visibility === "false")
        drawer.setAttribute('data-visible', true);
    else
        drawer.setAttribute('data-visible', false);
})

toggleButtonFilterList.addEventListener('click', () => {
    const visibility = filterDrawer.getAttribute('data-visible');
    if (visibility === "false")
        filterDrawer.setAttribute('data-visible', true);
    else
        filterDrawer.setAttribute('data-visible', false);
})