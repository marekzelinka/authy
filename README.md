# Authy

Authentication demo using Next.js and NextAuth.js, showcasing protected routes and authentication flows.

## Features

- 🔐 Authentication with NextAuth.js v5
- 🛡️ Protected Dashboard Routes
- 🎨 Styled with Tailwind CSS
- 🔍 Authentication Status Indicator
- 📊 Debug Panel for Auth State

## Getting Started

1. Clone the repository

```
git clone https://github.com/marekzelinka/authy
```

2. Install dependencies:

```
pnpm i
```

3. Start the Development Server

```
pnpm dev
```

## Generating the Auth Secret

In order to generate the auth secret, the best way to do this is by running the following command:

`pnpm exec auth secret`

This will generate the secret and store it in `.env.local` file
