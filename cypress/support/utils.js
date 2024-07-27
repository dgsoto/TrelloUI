export function generateRandomString(name) {
    const randomString = Math.random().toString(36).substring(2, 12); // Genera una cadena aleatoria de letras y números
    return `${name}-${randomString}`;
}