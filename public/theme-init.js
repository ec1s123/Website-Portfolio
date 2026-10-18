(() => {
  try {
    const savedTheme = localStorage.getItem("theme");
    const spaceOn = localStorage.getItem("spaceMode") === "on";
    if (spaceOn || savedTheme === "dark" || !savedTheme) {
      document.documentElement.classList.add("dark");
    }
    if (spaceOn) {
      document.documentElement.classList.add("space-mode");
    }
  } catch {
    // Ignore storage access errors and continue with default theme.
  }
})();
