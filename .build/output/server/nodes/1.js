

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.a2e68d24.js","_app/immutable/chunks/scheduler.a4291f12.js","_app/immutable/chunks/index.7f2c3b68.js","_app/immutable/chunks/singletons.2f303db3.js","_app/immutable/chunks/index.5d12b0a9.js"];
export const stylesheets = [];
export const fonts = [];
