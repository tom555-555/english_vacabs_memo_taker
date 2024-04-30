import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// WHy the configs are written in the arrow function is here (https://github.com/vitest-dev/vitest/discussions/1106)
/**
 * This works because defineConfig accepts both a UserConfig and a type UserConfigFnObject = (env: ConfigEnv) => UserConfig;, and a function type definition requires only that the returned object minimally satisfy the declared return type, and won't complain if extra properties are present. This is meant to make it easier to reuse a multi-purpose function in a callback that only requires a minimum satisfying type. It's a bit of a workaround here because we should know the full object type, and not allow unknown props, but that's a bit tricky with the "test" config here.
 */
export default defineConfig(() => ({
  plugins: [react({})],
  test: {
    globals: true,
    environment: "jsdom",
    setupFIles: ["./tests/setupTests.ts"],
  },
}));
