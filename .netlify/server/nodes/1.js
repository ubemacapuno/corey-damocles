

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.589975a7.js","_app/immutable/chunks/index.9d754a32.js","_app/immutable/chunks/singletons.d3de7722.js"];
export const stylesheets = [];
export const fonts = [];
