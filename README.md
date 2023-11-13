# Home Assistant: React Lovelace Card
#### (React + TypeScript + Vite)

This project was bootstrapped from the @vite template which provides a minimal setup to get React working in Vite with some ESLint rules.

## To install:

Node.js
```bash
npm install
```

Bun.js
```bash
bun install
```

## To build with profiler:

Node.js
```bash
npx vite build --mode development
```

Bun.js
```bash
bun x vite build --mode development
```

## To build with minification and optimisations:

Node.js
```bash
npx vite build
```

Bun.js
```bash
bun x vite build
```

## To add to Lovelace:
1. Build the app
2. Copy the built bundle located at `dist/react-card.js`
3. Paste your bundle into `/config/www/react-card.js` of your Home Assistant setup
5. Add `/local/react-card.js` as a [resource on Lovelace](https://developers.home-assistant.io/docs/frontend/custom-ui/custom-card/#referencing-your-new-card)
6. Reload your Home Assistant
7. Create your custom card:
   ```yaml
   type: custom:react-card
   entity: sun.sun
   ```
   > Note: Be sure to open Home Assistant using it's local address if your component does not seem to update after inserting a new version.


<img width="1258" alt="image" src="https://github.com/samuelthng/homeassistant-react-lovelace/assets/19360561/236bcbb1-c2f3-4495-9694-2a2944b0ff44">
