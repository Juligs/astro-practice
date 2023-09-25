import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.4409bdd1.js","_app/immutable/chunks/scheduler.a4291f12.js","_app/immutable/chunks/index.7f2c3b68.js","_app/immutable/chunks/index.5d12b0a9.js"];
export const stylesheets = ["_app/immutable/assets/0.6891ae33.css"];
export const fonts = [];
