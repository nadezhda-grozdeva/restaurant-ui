export default function useNewUrl(name) {
    return new URL(`/src/assets/images/${name}`, import.meta.url).href
}