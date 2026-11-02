const baseUrl = import.meta.env.BASE_URL.replace(/\/+$/, "");

// Public assets are referenced with root-relative paths ("/images/x.jpg"), so
// prefix them with the app base to keep them working under a subdirectory.
export const asset = (path) =>
  typeof path === "string" && path.startsWith("/") ? `${baseUrl}${path}` : path;
