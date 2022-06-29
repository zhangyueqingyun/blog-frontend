export function format(datetime: string) {
    const date = new Date(datetime)
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
}