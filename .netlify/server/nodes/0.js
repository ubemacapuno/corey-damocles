

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.bdd95cfa.js","_app/immutable/chunks/index.9d754a32.js"];
export const stylesheets = ["_app/immutable/assets/0.fa2a2f3a.css"];
export const fonts = [];
