import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "jqdjrg",
  e2e: {
    baseUrl: "http://localhost:5173",
  },
});
