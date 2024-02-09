import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["file2.test.ts"],
    browser: {
      enabled: true,
      name: "chrome",
    },
  },
});
