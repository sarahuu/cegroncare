import { copyFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

// GitHub Pages has no SPA rewrite rule, so deep links hit its 404 page. Serving
// a copy of index.html as 404.html lets the router take over those URLs.
const dist = fileURLToPath(new URL("../dist", import.meta.url));
copyFileSync(join(dist, "index.html"), join(dist, "404.html"));
