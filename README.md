# Website 
Monorepo [Turborepo](https://turborepo.com) containting my website frontend (Next) / backend (Sanity Studio). 

## Stack
- **Next.js** Frontend 
- **Sanity** – Headless CMS/content studio
- **TypeScript** – Type safety
- **Turborepo** – Monorepo build orchestration

## Development

### Install dependencies 
From the root of the monorepo, run:
```bash
pnpm install
```

### Environment variables
Create a `.env.local` file in /apps/website and add the following variables:
```env
# [Resend](https://resend.com) API key for sending emails
RESEND_API_KEY=your_resend_api_key 
# Vercel [AI Gateway](https://vercel.com/docs/ai-gateway) API key for AI features
AI_GATEWAY_API_KEY=your_ai_gateway_api_key 

### Running the development server
To run the development server, execute the following command:
```bash
pnpm dev
```

## Experimental Features
This Next.js app includes experimental features ([Partial Prerendering](https://nextjs.org/docs/app/getting-started/partial-prerendering)) that can be enabled in the `next.config.js` file. These features may change in future releases, so use them with caution.