export function generateBoardName() {
    const randomString = Math.random().toString(36).substring(2, 12); // Genera una cadena aleatoria de letras y números
    return `board-${randomString}-${Date.now()}`;
}