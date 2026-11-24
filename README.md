# hookrelay-dashboard

A dashboard for [hookrelay](https://github.com/welsondutra/hookrelay), a webhook delivery service.
See what is being delivered, register endpoints and redeliver what failed.

## Stack

- Next.js (App Router) and TypeScript
- styled-components
- Vitest

## Getting started

```bash
cp .env.example .env.local   # point HOOKRELAY_API_URL at a running hookrelay
npm install
npm run dev
```

The dashboard reads from the hookrelay API on the server, so the browser never talks to it directly.

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run typecheck
npm test
```

## Roadmap

- [x] App shell with navigation
- [ ] Overview with delivery counts and failures
- [ ] Endpoints list and registration
- [ ] Deliveries list with status filter
- [ ] Redeliver failed deliveries
- [ ] Send a test event

## License

MIT
