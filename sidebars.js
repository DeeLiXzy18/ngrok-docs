/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
	// By default, Docusaurus generates a sidebar from the docs folder structure
	docs: [
		"overview/index",
		"what-is-ngrok",
		"how-ngrok-works",
		"why-ngrok",
		"whats-new",
		// These aren't ready yet
		// "install",
		// "core-concepts",
		{
			label: "Getting Started",
			type: "category",
			link: { type: "doc", id: "getting-started/index" },
			items: [
				"getting-started/index",
				"getting-started/go",
				"getting-started/rust",
				"getting-started/kubernetes",
			],
		},
		{
			type: "html",
			value: "<div class='menu__section'>Endpoints</div>",
		},
		{
			label: "HTTP",
			type: "category",
			link: { type: "doc", id: "http/index" },
			items: [
				"http/index",
				"http/basic-auth",
				"http/circuit-breaker",
				"http/compression",
				"http/ip-restrictions",
				"http/mutual-tls",
				"http/oauth",
				"http/openid-connect",
				"http/request-headers",
				"http/response-headers",
				"http/saml",
				"http/tls-termination",
				{
					label: "Traffic Policy",
					type: "category",
					link: { type: "doc", id: "http/traffic-policy/index" },
					items: [
						"http/traffic-policy/index",
						{
							label: "Expressions",
							type: "category",
							link: {
								type: "doc",
								id: "http/traffic-policy/expressions/index",
							},
							items: [
								{
									type: "autogenerated",
									dirName: "http/traffic-policy/expressions",
								},
							],
						},
						{
							label: "Actions",
							type: "category",
							link: { type: "doc", id: "http/traffic-policy/actions/index" },
							items: [
								{
									type: "autogenerated",
									dirName: "http/traffic-policy/actions",
								},
							],
						},
						"http/traffic-policy/gallery",
					],
				},
				"http/user-agent-filter",
				"http/webhook-verification",
				"http/websocket-tcp-converter",
			],
		},
		{
			label: "TLS",
			type: "category",
			link: { type: "doc", id: "tls/index" },
			items: [
				"tls/index",
				"tls/ip-restrictions",
				"tls/mutual-tls",
				"tls/tls-termination",
				{
					label: "Traffic Policy",
					type: "category",
					link: { type: "doc", id: "tls/traffic-policy/index" },
					items: [
						"tls/traffic-policy/index",
						{
							label: "Expressions",
							type: "category",
							link: { type: "doc", id: "tls/traffic-policy/expressions/index" },
							items: [
								{
									type: "autogenerated",
									dirName: "tls/traffic-policy/expressions",
								},
							],
						},
						{
							label: "Actions",
							type: "category",
							link: { type: "doc", id: "tls/traffic-policy/actions/index" },
							items: [
								{
									type: "autogenerated",
									dirName: "tls/traffic-policy/actions",
								},
							],
						},
					],
				},
			],
		},
		{
			label: "TCP",
			type: "category",
			link: { type: "doc", id: "tcp/index" },
			items: [
				"tcp/index",
				"tcp/ip-restrictions",
				{
					label: "Traffic Policy",
					type: "category",
					link: { type: "doc", id: "tcp/traffic-policy/index" },
					items: [
						"tcp/traffic-policy/index",
						{
							label: "Expressions",
							type: "category",
							link: { type: "doc", id: "tcp/traffic-policy/expressions/index" },
							items: [
								{
									type: "autogenerated",
									dirName: "tcp/traffic-policy/expressions",
								},
							],
						},
						{
							label: "Actions",
							type: "category",
							link: { type: "doc", id: "tcp/traffic-policy/actions/index" },
							items: [
								{
									type: "autogenerated",
									dirName: "tcp/traffic-policy/actions",
								},
							],
						},
					],
				},
			],
		},
		{
			type: "html",
			value: "<div class='menu__section'>Connectivity</div>",
		},
		{
			label: "Agent",
			type: "category",
			link: { type: "doc", id: "agent/index" },
			items: [
				"agent/index",
				"agent/web-inspection-interface",
				"agent/cli",
				{
					label: "Configuration file",
					type: "category",
					link: { type: "doc", id: "agent/config/index" },
					items: ["agent/config/v2", "agent/config/v3"],
				},
				"agent/api",
				"agent/ssh-reverse-tunnel-agent",
				"agent/ingress",
				"agent/changelog",
				"agent/version-support-policy",
			],
		},
		{
			label: "Agent SDKs",
			type: "category",
			link: { type: "doc", id: "agent-sdks/index" },
			items: [{ type: "autogenerated", dirName: "agent-sdks" }],
		},
		{
			label: "Kubernetes",
			type: "category",
			link: { type: "doc", id: "k8s/index" },
			items: [
				"k8s/index",
				"k8s/how-it-works",
				"k8s/with-edges",
				"k8s/getting-started-kic",
				"k8s/getting-started-gwapi",
				"k8s/user-guide",
				"k8s/deployment-guide",
				"k8s/advanced-deployments",
				"k8s/crds",
				"k8s/custom-domain",
			],
		},
		{
			type: "html",
			value: "<div class='menu__section'>Platform</div>",
		},
		{
			label: "Network Edge",
			type: "category",
			link: { type: "doc", id: "network-edge/index" },
			items: [
				"network-edge/index",
				"network-edge/cloud-endpoints",
				"network-edge/domains-and-tcp-addresses",
				"network-edge/edges",
				"network-edge/gslb",
				"network-edge/tls-certificates",
				"network-edge/app-users",
			],
		},
		{
			label: "API",
			type: "category",
			link: { type: "doc", id: "api/index" },
			items: [
				"api/index",
				{
					type: "category",
					label: "API Reference",
					items: [
						"api/reference",
						// Abuse
						"api/resources/abuse-reports",
						// Agent
						{
							type: "category",
							label: "Agent",
							items: [
								"api/resources/agent-ingresses",
								"api/resources/tunnels",
								"api/resources/tunnel-sessions",
							],
						},
						// Application Users
						{
							type: "category",
							label: "Application Users",
							items: [
								"api/resources/application-users",
								"api/resources/application-sessions",
							],
						},
						// Backends
						{
							type: "category",
							label: "Backends",
							items: [
								"api/resources/failover-backends",
								"api/resources/http-response-backends",
								"api/resources/tunnel-group-backends",
								"api/resources/weighted-backends",
							],
						},
						// Bot Users
						{
							type: "category",
							label: "Bot Users",
							items: ["api/resources/bot-users"],
						},
						// Certificates
						{
							type: "category",
							label: "Certificates",
							items: [
								"api/resources/certificate-authorities",
								"api/resources/ssh-certificate-authorities",
								"api/resources/ssh-host-certificates",
								"api/resources/ssh-user-certificates",
								"api/resources/tls-certificates",
							],
						},
						// Credentials
						{
							type: "category",
							label: "Credentials",
							items: [
								"api/resources/api-keys",
								"api/resources/ssh-credentials",
								"api/resources/credentials",
							],
						},
						// Endpoints
						{
							type: "category",
							label: "Endpoints",
							items: [
								"api/resources/reserved-addrs",
								"api/resources/reserved-domains",
								"api/resources/endpoints",
							],
						},
						// Events
						{
							type: "category",
							label: "Events",
							items: [
								"api/resources/event-destinations",
								"api/resources/event-sources",
								"api/resources/event-subscriptions",
							],
						},
						// HTTPS Edges
						{
							type: "category",
							label: "HTTPS Edges",
							items: [
								"api/resources/edges-https",
								"api/resources/edges-https-routes",
								"api/resources/https-edge-mutual-tls-module",
								"api/resources/edge-route-backend-module",
								"api/resources/edge-route-circuit-breaker-module",
								"api/resources/edge-route-compression-module",
								"api/resources/edge-route-ip-restriction-module",
								"api/resources/edge-route-o-auth-module",
								"api/resources/edge-route-oidc-module",
								"api/resources/edge-route-request-headers-module",
								"api/resources/edge-route-response-headers-module",
								"api/resources/edge-route-saml-module",
								"api/resources/edge-route-traffic-policy-module",
								"api/resources/edge-route-user-agent-filter-module",
								"api/resources/edge-route-webhook-verification-module",
								"api/resources/edge-route-websocket-tcp-converter-module",
								"api/resources/https-edge-tls-termination-module",
							],
						},
						// IP Restrictions
						{
							type: "category",
							label: "IP Restrictions",
							items: [
								"api/resources/ip-policies",
								"api/resources/ip-policy-rules",
								"api/resources/ip-restrictions",
							],
						},
						// TCP Edges
						{
							type: "category",
							label: "TCP Edges",
							items: [
								"api/resources/edges-tcp",
								"api/resources/tcp-edge-backend-module",
								"api/resources/tcp-edge-ip-restriction-module",
								"api/resources/tcp-edge-traffic-policy-module",
							],
						},
						// TLS Edges
						{
							type: "category",
							label: "TLS Edges",
							items: [
								"api/resources/edges-tls",
								"api/resources/tls-edge-backend-module",
								"api/resources/tls-edge-ip-restriction-module",
								"api/resources/tls-edge-mutual-tls-module",
								"api/resources/tls-edge-tls-termination-module",
								"api/resources/tls-edge-traffic-policy-module",
							],
						},
					],
				},
			],
		},
		{
			label: "Observability",
			type: "category",
			link: { type: "doc", id: "obs/index" },
			items: ["obs/index", "obs/traffic-inspection", "obs/reference"],
		},
		{
			label: "IAM",
			type: "category",
			link: { type: "doc", id: "iam/index" },
			items: [
				"iam/index",
				"iam/users",
				"iam/bot-users",
				"iam/sso",
				"iam/rbac",
				"iam/domain-controls",
			],
		},
		{
			label: "Errors",
			type: "category",
			link: { type: "doc", id: "errors/index" },
			items: ["errors/index", "errors/reference"],
		},
		{
			type: "html",
			value: "<div class='menu__section'>Walkthroughs</div>",
		},
		{
			label: "Guides",
			type: "category",
			link: { type: "doc", id: "guides/index" },
			items: [
				{ type: "autogenerated", dirName: "guides" },
				{
					label: "Using ngrok with",
					type: "category",
					link: { type: "doc", id: "using-ngrok-with" },
					items: [{ type: "autogenerated", dirName: "using-ngrok-with" }],
				},
			],
		},
		{
			label: "Integrations",
			type: "category",
			link: { type: "doc", id: "integrations/index" },
			items: [{ type: "autogenerated", dirName: "integrations" }],
		},
		{
			type: "html",
			value: "<div class='menu__section'></div>",
		},
		"faq/faq",
	],
};

module.exports = sidebars;
