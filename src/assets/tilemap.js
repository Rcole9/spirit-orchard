// Simple tilemap for a 5x5 world
// 0 = grass, 1 = path, 2 = crop, 3 = tree, 4 = player, 5 = spirit
// 0 = grass, 1 = path, 2 = crop, 3 = tree, 4 = player, 5 = spirit
// 6 = farm prop, 7 = furniture prop, 8 = pixel tree
export const TILEMAP = [
  [0, 0, 1, 0, 0],
  [0, 2, 1, 3, 0],
  [1, 6, 4, 7, 1],
  [0, 2, 8, 5, 0],
  [0, 0, 1, 0, 0],
];

export const TILE_IMAGES = {
  0: process.env.PUBLIC_URL + '/assets/kenney_tiny-town/Tiles/tile_0000.png', // grass
  1: process.env.PUBLIC_URL + '/assets/kenney_tiny-town/Tiles/tile_0001.png', // path
  2: process.env.PUBLIC_URL + '/assets/kenney_tiny-town/Tiles/tile_0002.png', // crop
  3: process.env.PUBLIC_URL + '/assets/kenney_tiny-town/Tiles/tile_0003.png', // tree
  6: process.env.PUBLIC_URL + '/assets/images/props/Static/Farm.png', // farm prop (Pixel Crawler)
  7: process.env.PUBLIC_URL + '/assets/images/props/Static/Furniture.png', // furniture prop (Pixel Crawler)
  8: process.env.PUBLIC_URL + '/assets/images/props/Static/Trees/Model_01/Size_03.png', // pixel tree (Pixel Crawler)
};

export const PLAYER_SPRITE = process.env.PUBLIC_URL + '/assets/kenney_tiny-town/Tiles/tile_0004.png';
export const SPIRIT_SPRITE = process.env.PUBLIC_URL + '/assets/kenney_tiny-town/Tiles/tile_0005.png';
