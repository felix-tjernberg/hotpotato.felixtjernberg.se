export const maxAge = 2630000 // 1 month in seconds

export function setCookie(key: string, value: string): void {
    document.cookie = `${key}=${encodeURI(value)};samesite=lax;max-age=${maxAge}`
}
