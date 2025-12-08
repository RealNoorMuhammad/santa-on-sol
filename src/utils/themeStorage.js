// Theme persistence logic
const THEME_KEY = "santa_app_theme";

export const getStoredTheme = () => {
  if (typeof window === "undefined") return "night";
  return localStorage.getItem(THEME_KEY) || "night";
};

export const setStoredTheme = (theme) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(THEME_KEY, theme);
};



