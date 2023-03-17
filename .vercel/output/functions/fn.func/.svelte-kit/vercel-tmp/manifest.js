export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["chad.png","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.364ad93e.js","imports":["_app/immutable/entry/start.364ad93e.js","_app/immutable/chunks/index.2e573ba9.js","_app/immutable/chunks/singletons.66678b13.js","_app/immutable/chunks/index.d6b20771.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.de83daf2.js","imports":["_app/immutable/entry/app.de83daf2.js","_app/immutable/chunks/index.2e573ba9.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: () => import('../output/server/entries/endpoints/_server.ts.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
