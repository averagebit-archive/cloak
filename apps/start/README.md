# Cloak

## Development server

```sh
$ pnpn i
$ pnpn dev
```

## Building

Solid apps are built with _adapters_, which optimise your project for deployment to different environments.

By default, `pnpm run build` will generate a Node app that you can run with `pnpm start`. To use a different adapter, add it to the `devDependencies` in `package.json` and specify in your `vite.config.js`.
