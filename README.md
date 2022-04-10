## Demo

https://metaverse-chatter.vercel.app/

## About Stack:

Real Time Messaging App

# Next.js + Tailwind CSS + Moralis

This app uses [Tailwind CSS](https://tailwindcss.com/) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs). The app is powered by [Moralis IO](https://moralis.io/).

## How to use

### 1. Get the source code
You need to clone the latest version of the code from `main` branch and navigate to the project folder.
```
$ git clone -b main https://github.com/crisner1978/metaverse-chatter.git
```

### 2. Install dependencies
You need to install the dependencies specified in `package.json`:
```
$ npm install
```
or
```
$ yarn install
```

### 3. Set Environment Variables
You need to set some environment variables to run the project correctly as those values are used internally by the application. You'll need to head over to [Moralis IO](https://moralis.io/) and setup a free account.
Copy file `.example-env` to `.env.local` and fill it in with your environment variables after creating an account with Moralis.
> ℹ️ **Example values**<br>
> NEXT_PUBLIC_SERVER_URL=your moralis server url<br>
> NEXT_PUBLIC_APP_ID=your moralis app id

### 4. Run the app
To start the app:
```
$ npm run dev
```
or
```
$ yarn run dev
```
It will start the development server with HRM on top of it. The server is started at port `3000` and the URL is https://localhost:3000
