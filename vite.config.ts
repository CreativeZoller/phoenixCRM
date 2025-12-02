import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig(async () => ({
	plugins: [react()],

	// Resolve absolute paths for cleaner imports
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},

	// Vite options tailored for Tauri development and production.
	clearScreen: false,
	server: {
		port: 1420,
		strictPort: true,
		host: true, // required for Tauri
	},
	envPrefix: ["VITE_", "TAURI_"],
	build: {
		target: process.env.TAURI_PLATFORM == "windows" ? "chrome105" : "safari15",
		minify: !process.env.TAURI_DEBUG ? "esbuild" : false,
		sourcemap: !!process.env.TAURI_DEBUG,
	},
}));
