

# React Project

## Using this Project

Requiements: node version 20 or above

- Clone the repository and install dependencies using below command
```bash
npm install
```

## How to run different environments locally

- Different env files for different environments like dev, uat, staging and production has been configured

- To run  dev environment
```bash
npm run dev
```
- To run  uat environment
```bash
npm run uat
```
- To run  staging environment
```bash
npm run staging
```
- To run  prod environment
```bash
npm run prod
```

- If you want to add more environemnts then just add a .env.name and add a script for running env in local and for build in package.json

```json
"your-env-name":"vite --open --mode your-env-name",
"build-your-env-name":"vite build --mode your-env-name",
```

## How to build different environments

- Different env files for different environments like dev, uat, staging and production has been configured

- To build  dev environment
```bash
npm run build-dev
```
- To build  uat environment
```bash
npm run build-uat
```
- To build  staging environment
```bash
npm run build-staging
```
- To build  prod environment
```bash
npm run build-prod
```

To serve from generated build run following command
```bash
npm run preview
```

## Tech Stack

- React 18 [documentation](https://react.dev/reference/react)
- React Router 6 [documentation](https://reactrouter.com/en/main/start/overview)
- Redux Toolkit for state management [documentation](https://redux-toolkit.js.org/tutorials/quick-start)
- Censa Design System as ui library [documentation](https://cds.censanext.com)
- Vite for bundler [documentation](https://vitejs.dev/guide/)
