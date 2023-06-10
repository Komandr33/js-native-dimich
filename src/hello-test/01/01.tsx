export const sum = (a: number, b: number) => {
    return a + b
}

export const mult = (a: number, b: number) => {
    return a * b
}

export const splitString = (s: string) => {
    const str = s.toLowerCase().split(' ');

    return str.filter(w => w !== '' && w !== '-')
        .map(w => w.replace('!', '')
            .replace('.', '')
            .replace(',', ''));
}