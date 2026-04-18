// Simple tilemap for a 5x5 world
// 0 = grass, 1 = path, 2 = crop, 3 = tree, 4 = player, 5 = spirit
// 0 = grass, 1 = path, 2 = crop, 3 = tree, 4 = player, 5 = spirit
// 6 = farm prop, 7 = furniture prop, 8 = pixel tree, 9 = meat, 10 = pan, 11 = alt pixel tree, 12 = vegetation, 13 = tools, 14 = third pixel tree, 15 = rocks, 16 = resources, 17 = dungeon props, 18 = esoteric, 19 = shadows, 20 = fourth pixel tree, 21 = bonfire, 22 = fifth pixel tree, 23 = building floor, 24 = building roof, 25 = building wall, 26 = building props, 27 = building shadows, 28 = water tile, 29 = dungeon tile, 30 = wall tile, 31 = wall variation
export const TILEMAP = [
  [0, 0, 1, 18, 15],
  [0, 2, 9, 3, 12],
  [1, 6, 23, 26, 21],
  [13, 24, 29, 27, 11],
  [16, 30, 25, 28, 31],
];

export const TILE_IMAGES = {
  0: process.env.PUBLIC_URL + '/assets/kenney_tiny-town/Tiles/tile_0000.png', // grass
  1: process.env.PUBLIC_URL + '/assets/kenney_tiny-town/Tiles/tile_0001.png', // path
  2: process.env.PUBLIC_URL + '/assets/kenney_tiny-town/Tiles/tile_0002.png', // crop
  3: process.env.PUBLIC_URL + '/assets/kenney_tiny-town/Tiles/tile_0003.png', // tree
  6: process.env.PUBLIC_URL + '/assets/images/props/Static/Farm.png', // farm prop (Pixel Crawler)
  7: process.env.PUBLIC_URL + '/assets/images/props/Static/Furniture.png', // furniture prop (Pixel Crawler)
  8: process.env.PUBLIC_URL + '/assets/images/props/Static/Trees/Model_01/Size_03.png', // pixel tree (Pixel Crawler)
  9: process.env.PUBLIC_URL + '/assets/images/props/Static/Meat.png', // meat prop (Pixel Crawler)
 10: process.env.PUBLIC_URL + '/assets/images/props/Static/Pan.png', // pan prop (Pixel Crawler)
 11: process.env.PUBLIC_URL + '/assets/images/props/Static/Trees/Model_02/Size_03.png', // alt pixel tree (Pixel Crawler)
 12: process.env.PUBLIC_URL + '/assets/images/props/Static/Vegetation.png', // vegetation prop (Pixel Crawler)
 13: process.env.PUBLIC_URL + '/assets/images/props/Static/Tools.png', // tools prop (Pixel Crawler)
 14: process.env.PUBLIC_URL + '/assets/images/props/Static/Trees/Model_03/Size_03.png', // third pixel tree (Pixel Crawler)
 15: process.env.PUBLIC_URL + '/assets/images/props/Static/Rocks.png', // rocks prop (Pixel Crawler)
 16: process.env.PUBLIC_URL + '/assets/images/props/Static/Resources.png', // resources prop (Pixel Crawler)
 17: process.env.PUBLIC_URL + '/assets/images/props/Static/Dungeon_Props.png', // dungeon props (Pixel Crawler)
 18: process.env.PUBLIC_URL + '/assets/images/props/Static/Esoteric.png', // esoteric prop (Pixel Crawler)
 19: process.env.PUBLIC_URL + '/assets/images/props/Static/Shadows.png', // shadows prop (Pixel Crawler)
 20: process.env.PUBLIC_URL + '/assets/images/props/Static/Trees/Model_01/Size_05.png', // fourth pixel tree (Pixel Crawler)
 21: process.env.PUBLIC_URL + '/assets/images/structures/Stations/Bonfire/Bonfire.png', // bonfire (Pixel Crawler)
 22: process.env.PUBLIC_URL + '/assets/images/props/Static/Trees/Model_02/Size_05.png', // fifth pixel tree (Pixel Crawler)
 23: process.env.PUBLIC_URL + '/assets/images/structures/Buildings/Floors.png', // building floor
 24: process.env.PUBLIC_URL + '/assets/images/structures/Buildings/Roofs.png', // building roof
 25: process.env.PUBLIC_URL + '/assets/images/structures/Buildings/Walls.png', // building wall
 26: process.env.PUBLIC_URL + '/assets/images/structures/Buildings/Props.png', // building props
 27: process.env.PUBLIC_URL + '/assets/images/structures/Buildings/Shadows.png', // building shadows
 28: process.env.PUBLIC_URL + '/assets/images/tilesets/Water_tiles.png', // water tile
 29: process.env.PUBLIC_URL + '/assets/images/tilesets/Dungeon_Tiles.png', // dungeon tile
 30: process.env.PUBLIC_URL + '/assets/images/tilesets/Wall_Tiles.png', // wall tile
 31: process.env.PUBLIC_URL + '/assets/images/tilesets/Wall_Variations.png', // wall variation
};

export const PLAYER_SPRITE = process.env.PUBLIC_URL + '/assets/kenney_tiny-town/Tiles/tile_0004.png';
export const SPIRIT_SPRITE = process.env.PUBLIC_URL + '/assets/kenney_tiny-town/Tiles/tile_0005.png';
