export type rgbaColor = {r: number, g: number, b: number, a: number};
export type rgbColor = {r: number, g: number, b: number};

export const rgba2hex = (rgba : rgbaColor) => {
    const hex = (rgba.r | 1 << 8).toString(16).slice(1) +
                (rgba.g | 1 << 8).toString(16).slice(1) +
                (rgba.b | 1 << 8).toString(16).slice(1) +
                (((rgba.a * 255) | 1 << 8).toString(16).slice(1));
    return(hex.toUpperCase());
}

export const rgb2hex = (rgb : rgbColor) => {
    const hex = (rgb.r | 1 << 8).toString(16).slice(1) +
                (rgb.g | 1 << 8).toString(16).slice(1) +
                (rgb.b | 1 << 8).toString(16).slice(1);
    return(hex.toUpperCase());
}

export const rgba2css = (rgba: rgbaColor) => {
    return(`rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`);
}

export const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);
