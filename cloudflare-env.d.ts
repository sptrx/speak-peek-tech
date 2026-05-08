import "@opennextjs/cloudflare";

declare global {
	interface CloudflareEnv {
		/** Set via `wrangler secret put RESEND_API_KEY` or Dashboard → Secrets */
		RESEND_API_KEY?: string;
		/** Plaintext var in wrangler.jsonc or Dashboard */
		CONTACT_EMAIL_FROM?: string;
		CONTACT_EMAIL_TO?: string;
	}
}

export {};
