export function format(datetime: string) {
    const date = new Date(datetime);
    const month = `${date.getMonth() + 1}`;
    const day = `${date.getDate()}`;
    return `${date.getFullYear()}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
}