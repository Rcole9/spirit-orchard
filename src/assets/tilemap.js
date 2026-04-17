// Simple tilemap for a 5x5 world
// 0 = grass, 1 = path, 2 = crop, 3 = tree, 4 = player, 5 = spirit
export const TILEMAP = [
  [0, 0, 1, 0, 0],
  [0, 2, 1, 3, 0],
  [1, 1, 4, 1, 1],
  [0, 2, 1, 5, 0],
  [0, 0, 1, 0, 0],
];

export const TILE_IMAGES = {
  0: process.env.PUBLIC_URL + '/assets/kenney_tiny-town/Tiles/tile_0000.png', // grass
  1: process.env.PUBLIC_URL + '/assets/kenney_tiny-town/Tiles/tile_0001.png', // path
  2: process.env.PUBLIC_URL + '/assets/kenney_tiny-town/Tiles/tile_0002.png', // crop
  3: process.env.PUBLIC_URL + '/assets/kenney_tiny-town/Tiles/tile_0003.png', // tree
};

export const PLAYER_SPRITE = process.env.PUBLIC_URL + '/assets/kenney_tiny-town/Tiles/tile_0004.png';
export const SPIRIT_SPRITE = process.env.PUBLIC_URL + '/assets/kenney_tiny-town/Tiles/tile_0005.png';
