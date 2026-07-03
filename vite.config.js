import { defineConfig } from "vite";

export default defineConfig({
    define: {
        "globalThis.__stryker__.activeMutant": JSON.stringify(
            process.env.__STRYKER_ACTIVE_MUTANT__ ?? ""
        )
    }
});