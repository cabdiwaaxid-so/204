# NovaxJS2 Vercel API

Minimal serverless API built with [NovaxJS2](https://www.npmjs.com/package/novaxjs2) framework, deployed on Vercel.

## Features

- **Single endpoint** - `GET /` returns `204 No Content`
- **CORS enabled** - Accepts requests from any origin
- **Serverless ready** - Optimized for Vercel deployment
- **Dual mode** - Runs locally or as serverless function

## API Reference

| Method | Endpoint | Response |
|--------|----------|----------|
| GET | `/` | `204 No Content` |

## Local Development

```bash
# Install dependencies
npm install novaxjs2

# Run locally
node api/index.js
```

Server starts on `http://localhost:3000`

## Deployment

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fcabdiwaaxid-so%2F204.git)

Or using Vercel CLI:

```bash
vercel deploy
```

## Project Structure

```
.
├── api/
│   └── index.js      # Main application
├── vercel.json       # Vercel configuration
└── package.json      # Dependencies
```

## License

[MIT](/LICENSE)
