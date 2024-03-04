/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  typescript: {
    ignoreBuildErrors: true
  },
  reactStrictMode: true,

  /**
   * If you are using `appDir` then you must comment the below `i18n` config out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.1shop.tw',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'store.storeimages.cdn-apple.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'img.pchome.com.tw',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'cdn-stamplib.casetify.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'shop.mohd.it',
        port: '',
        pathname: '/**'
      },
    ]
  }
  ,
  compiler: {
    emotion: {
      sourceMap: true,
      autoLabel: 'dev-only',
      labelFormat: '[filename]__[local]',
    }
  }
};

export default config;
