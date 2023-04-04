# Next Starter

## Stack

| Package             | Description             |
| ------------------- | ----------------------- |
| NextJS              | Front-End framework     |
| Typescript          | JS with types           |
| ESLint              | Code problems detector  |
| Prettier            | Code formatter          |
| Husky + Lint Staged | Verify code on commit   |
| MUI                 | React component library |

## Guides

### Environment Variables

Rename `.env.example` to `.env.local` and put correct values for development.

### Remote images

Remote image origins must be added into `next.config.js` to be used.

```js
images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        pathname: '/**',
      },
    ],
  },
```
