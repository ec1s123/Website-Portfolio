// Deterministic variation keeps existing stars stable when the viewport resizes.
const variation = (column, row, channel) => {
    const value = Math.sin(column * 127.1 + row * 311.7 + channel * 74.7) * 43758.5453;
    return value - Math.floor(value);
};

export const createStarfield = (width, height) => {
    if (width <= 0 || height <= 0) return [];

    // One jittered point per cell prevents empty patches and obvious grid lines.
    // Increase cell size on very large displays to bound the number of DOM nodes.
    const cellSize = Math.max(64, Math.ceil(Math.sqrt((width * height) / 500)));
    const columns = Math.ceil(width / cellSize);
    const rows = Math.ceil(height / cellSize);
    const stars = [];

    for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
            const x = (column + 0.15 + variation(column, row, 1) * 0.7) * cellSize;
            const y = (row + 0.15 + variation(column, row, 2) * 0.7) * cellSize;
            if (x >= width || y >= height) continue;
            const prominent = variation(column, row, 3) > 0.86;
            stars.push({
                id: `${column}-${row}`,
                x,
                y,
                size: prominent ? 3.2 : 1.4 + variation(column, row, 4) * 1.3,
                opacity: 0.4 + variation(column, row, 5) * 0.45,
                twinkle: variation(column, row, 6) > 0.65,
                duration: 4 + variation(column, row, 7) * 5,
                delay: -variation(column, row, 8) * 9,
                prominent,
            });
        }
    }
    return stars;
};
