export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["bola_mundo.svg","logo_mundo.svg","robots.txt"]),
	mimeTypes: {".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.b2f19197.js","app":"_app/immutable/entry/app.2b93a186.js","imports":["_app/immutable/entry/start.b2f19197.js","_app/immutable/chunks/scheduler.a4291f12.js","_app/immutable/chunks/singletons.2f303db3.js","_app/immutable/chunks/index.5d12b0a9.js","_app/immutable/entry/app.2b93a186.js","_app/immutable/chunks/scheduler.a4291f12.js","_app/immutable/chunks/index.7f2c3b68.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
