import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["file1.test.ts"],
    browser: {
      enabled: true,
      headless: true,
      name: "chrome",
      isolate: false,
    },
  },
});
