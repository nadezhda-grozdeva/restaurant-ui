export default function capitalized(text) {
    return text ? text.charAt(0).toUpperCase() + text.slice(1) : ''
}