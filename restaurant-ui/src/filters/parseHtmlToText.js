export function parseTextToHtml(value) {
    const parser = new DOMParser().parseFromString(value, 'text/html');
    console.log(document.createRange().createContextualFragment(value))
    console.log(parser.body.outerHTML)
    return parser.body.firstChild.outerHTML
    // return document.createRange().createContextualFragment(value)
}