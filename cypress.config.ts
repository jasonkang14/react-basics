import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "cc9ivp",
  e2e: {
    baseUrl: "http://localhost:5173",
  },
});
