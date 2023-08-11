

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.c992fbe4.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.5ae4157e.js","_app/immutable/chunks/singletons.08c1dd1d.js"];
export const stylesheets = [];
export const fonts = [];
