export function sidebar() {
  const sidebarItems = document.querySelectorAll(".sidebar__nav-item");
  const sidebarScroll = document.querySelector(".sidebar__nav-scroll");

  // Устанавливаем высоту и начальную позицию sidebarScroll
  if (sidebarItems.length > 0) {
    sidebarScroll.style.height = sidebarItems[0].offsetHeight + "px";
    sidebarScroll.style.top =
      sidebarItems[0].getBoundingClientRect().top + "px";
  }

  // Делегирование событий на родительский элемент
  const sidebarNav = document.querySelector(".sidebar__nav");

  sidebarNav.addEventListener("click", (event) => {
    const target = event.target.closest(".sidebar__nav-item");

    if (target) {
      sidebarItems.forEach((item) => item.classList.remove("active"));
      target.classList.add("active");
      sidebarScroll.style.top = target.getBoundingClientRect().top + "px";
    }
  });
}
