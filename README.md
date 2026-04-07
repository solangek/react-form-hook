# React Hooks Demo

This project was migrated from Create React App to **[Vite](https://vitejs.dev/)**.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode with HMR (Hot Module Replacement).\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### `npm run build`

Builds the app for production into the `dist` folder.\
The build is minified and the filenames include hashes.\
Your app is ready to be deployed!

### `npm run preview`

Serves the production build locally for preview.\
Open [http://localhost:4173](http://localhost:4173) to view it in your browser.

### `npm test`

Launches the [Vitest](https://vitest.dev/) test runner in watch mode.

## Project Structure

```
src/
  components/
    Counter.js                         – Basic counter component
    customhook/
      CounterCustomHook.js             – setInterval working correctly with a custom hook
      CounterNotWorking.js             – setInterval broken (stale closure example)
      FormFetchWithHook.js             – Form that fetches data via a custom hook
    fetch/
      FetchHook.js                     – Data fetching with useEffect
    inputvalidation/
      InputValidationHook.js           – Input validation with hooks
    livehook/
      LiveFilteringHook.js             – Live filtering with hooks
```

## Migration Notes (CRA → Vite)

| CRA | Vite |
|-----|------|
| `npm start` | `npm run dev` |
| `npm run build` | `npm run build` |
| `npm test` (Jest) | `npm test` (Vitest) |
| Output in `build/` | Output in `dist/` |
| Dev server on port `3000` | Dev server on port `5173` |
| `%PUBLIC_URL%` in HTML | `/` — files in `public/` served at root |

## Learn More

- [Vite documentation](https://vitejs.dev/guide/)
- [React documentation](https://react.dev/)
- [Vitest documentation](https://vitest.dev/)
- [Making setInterval declarative with React Hooks](https://overreacted.io/making-setinterval-declarative-with-react-hooks/)
