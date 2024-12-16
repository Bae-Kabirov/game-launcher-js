export function navigation() {
  const navigationLinks = document.querySelectorAll(".navigation-link");
  navigationLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });

  const dropdown = document.querySelector(".js-dropdown");

  document.addEventListener("click", (e) => {
    const profileElement = e.target.closest(".js-profile");

    if (profileElement) {
      dropdown.classList.toggle("expanded");
    } else {
      dropdown.classList.remove("expanded");
    }
  });
}
