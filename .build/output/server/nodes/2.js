

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.c65c3adf.js","_app/immutable/chunks/scheduler.a4291f12.js","_app/immutable/chunks/index.7f2c3b68.js"];
export const stylesheets = [];
export const fonts = [];
