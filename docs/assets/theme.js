(() => {
  const root = document.documentElement;
  try {
    if (localStorage.getItem("theme") === "light") root.dataset.theme = "light";
  } catch (_) { /* Keep the default when storage is unavailable. */ }

  document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".theme-toggle");
    if (!button) return;
    const updateLabel = () => {
      const label = root.dataset.theme === "light"
        ? button.dataset.darkLabel : button.dataset.lightLabel;
      button.setAttribute("aria-label", label);
      button.title = label;
    };
    updateLabel();
    button.hidden = false;
    button.addEventListener("click", () => {
      root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
      try { localStorage.setItem("theme", root.dataset.theme); } catch (_) {}
      updateLabel();
    });
  });
})();
