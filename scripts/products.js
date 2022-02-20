const filterDrawer = document.querySelector(".products-filters");
const toggleButtonFilterList = document.querySelector(".filter-icon");

toggleButtonFilterList.addEventListener('click', () => {
    const visibility = filterDrawer.getAttribute('data-visible');
    if (visibility === "false")
        filterDrawer.setAttribute('data-visible', true);
    else
        filterDrawer.setAttribute('data-visible', false);
})