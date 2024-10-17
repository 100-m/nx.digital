const methods = ["log", "info", "warn", "error", "debug"]
const messages = [
  `[vite] connecting...`,
  `[vite] connected.`,
  `<Suspense> is an experimental feature and its API will likely change.`,
  `[Vue warn]: Failed to resolve component: neoxam-app`,
  `[Vue warn]: Invalid prop: custom validator check failed for prop "variant".`, // variant="none"
  `W2002 - The Series 2 series cannot be drawn because the _total data field is missing.`, // devextreme
  `definePageMeta() is a compiler-hint helper`,
]
methods.forEach((method) => {
  const fn = console[method]
  // if (typeof process === "undefined" || process.env.NODE_ENV !== "development") return (console[method] = () => {})
  console[method] = (...args) => {
    if (typeof args[0] === "string" && messages.some((m) => args[0].includes(m))) return
    fn(...args)
  }
})
