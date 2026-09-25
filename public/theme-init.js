(() => {
  try {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || !savedTheme) {
      document.documentElement.classList.add("dark");
    }
  } catch {
    // Ignore storage access errors and continue with default theme.
  }
})();
