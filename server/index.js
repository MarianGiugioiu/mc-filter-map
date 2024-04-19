const { log } = require('console');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public', 'stackable-items');
const imageFiles = fs.readdirSync(imagesDir);
let imageNames = imageFiles.map(file => path.parse(file).name);

const dye = imageNames.filter(item => item.includes('_dye')); //x
imageNames = imageNames.filter(item => !item.includes('_dye'));

const shulker = imageNames.filter(item => item.includes('shulker')); //x
imageNames = imageNames.filter(item => !item.includes('shulker'));

const chest = imageNames.filter(item => item.includes('chest')); //x
imageNames = imageNames.filter(item => !item.includes('chest'));

const wool = imageNames.filter(item => item.includes('_wool')); //x
imageNames = imageNames.filter(item => !item.includes('_wool'));

const carpet = imageNames.filter(item => item.includes('_carpet')); //x
imageNames = imageNames.filter(item => !item.includes('_carpet'));

const candle = imageNames.filter(item => item.includes('candle')); //x
imageNames = imageNames.filter(item => !item.includes('candle'));

const glassBottle = imageNames.filter(item => item.includes('glass_bottle')); //x
imageNames = imageNames.filter(item => !item.includes('glass_bottle'));

const spyglass = imageNames.filter(item => item.includes('spyglass')); //x
imageNames = imageNames.filter(item => !item.includes('spyglass'));

const stainedGlassPane = imageNames.filter(item => item.includes('_stained_glass_pane')); //x
imageNames = imageNames.filter(item => !item.includes('_stained_glass_pane'));
const stainedGlass = imageNames.filter(item => item.includes('_stained_glass')); //x
imageNames = imageNames.filter(item => !item.includes('_stained_glass'));

const glass = imageNames.filter(item => item.includes('glass')); //x
imageNames = imageNames.filter(item => !item.includes('glass'));

const glazedTerracotta = imageNames.filter(item => item.includes('_glazed_terracotta')); //x
imageNames = imageNames.filter(item => !item.includes('_glazed_terracotta'));
const terracotta = imageNames.filter(item => item.includes('terracotta')); //x
imageNames = imageNames.filter(item => !item.includes('terracotta'));

const concretePowder = imageNames.filter(item => item.includes('_concrete_powder')); //x
imageNames = imageNames.filter(item => !item.includes('_concrete_powder'));
const concrete = imageNames.filter(item => item.includes('_concrete')); //x
imageNames = imageNames.filter(item => !item.includes('_concrete'));

const banner = imageNames.filter(item => item.includes('_banner')); //x
imageNames = imageNames.filter(item => !item.includes('_banner'));
const bannerPattern = imageNames.filter(item => item.includes('_banner_pattern')); //x
imageNames = imageNames.filter(item => !item.includes('_banner_pattern'));

const deadCoralBlock = imageNames.filter(item => (item.includes('_coral_block') && item.includes('dead_'))); //x
imageNames = imageNames.filter(item => !(item.includes('_coral_block') && item.includes('dead_')));
const coralBlock = imageNames.filter(item => item.includes('_coral_block')); //x
imageNames = imageNames.filter(item => !item.includes('_coral_block'));
const deadCoralFan = imageNames.filter(item => (item.includes('_coral_fan') && item.includes('dead_'))); //x
imageNames = imageNames.filter(item => !(item.includes('_coral_fan') && item.includes('dead_')));
const coralFan = imageNames.filter(item => item.includes('_coral_fan')); //x
imageNames = imageNames.filter(item => !item.includes('_coral_fan'));
const deadCoral = imageNames.filter(item => (item.includes('_coral') && item.includes('dead_'))); //x
imageNames = imageNames.filter(item => !(item.includes('_coral') && item.includes('dead_')));
const coral = imageNames.filter(item => item.includes('_coral')); //x
imageNames = imageNames.filter(item => !item.includes('_coral'));

const rail = imageNames.filter(item => item.includes('rail')); //x
imageNames = imageNames.filter(item => !item.includes('rail'));

const kelp = imageNames.filter(item => item.includes('kelp')); //x
imageNames = imageNames.filter(item => !item.includes('kelp'));

const inkSac = imageNames.filter(item => item.includes('ink_sac')); //x
imageNames = imageNames.filter(item => !item.includes('ink_sac'));

const itemFrame = imageNames.filter(item => item.includes('item_frame')); //x
imageNames = imageNames.filter(item => !item.includes('item_frame'));

//todo 'torchflower', 'pitcher_plant'
const flower = ['allium', 'azure_bluet', 'blue_orchid', 'cornflower', 'dandelion', 'lily_of_the_valley', 
  'oxeye_daisy', 'poppy', 'orange_tulip', 'pink_tulip', 'red_tulip', 'white_tulip', 'lilac', 'peony', 'rose_bush', 'sunflower', 'cactus', 'wither_rose']; //x
imageNames = imageNames.filter(item => !flower.includes(item));

const food = ["apple", "baked_potato", "beetroot", "beetroot_soup", "bread", "cake", "carrot", "chorus_fruit", "cooked_chicken", "cooked_cod", "cooked_mutton", "cooked_porkchop", "cooked_rabbit", "cooked_salmon", "cookie", "enchanted_golden_apple", "golden_apple", "golden_carrot", "honey_bottle", "melon_slice", "mushroom_stew", "poisonous_potato", "potato", "pumpkin_pie", "rabbit_stew", "raw_beef", "raw_chicken", "raw_cod", "raw_mutton", "raw_porkchop", "raw_rabbit", "raw_salmon", "steak", "suspicious_stew", "sweet_berries", "tropical_fish", 'glow_berries']; //x
imageNames = imageNames.filter(item => !food.includes(item));

const seeds = imageNames.filter(item => item.includes('seeds')); //x
imageNames = imageNames.filter(item => !item.includes('seeds'));

const pumpkin = imageNames.filter(item => item.includes('pumpkin')); //x
imageNames = imageNames.filter(item => !item.includes('pumpkin'));

const melon = imageNames.filter(item => item.includes('melon')); //x
imageNames = imageNames.filter(item => !item.includes('melon'));

const cocoa = imageNames.filter(item => item.includes('cocoa')); //x
imageNames = imageNames.filter(item => !item.includes('cocoa'));

const wheat = imageNames.filter(item => item.includes('wheat')); //x
imageNames = imageNames.filter(item => !item.includes('wheat'));

const hay = imageNames.filter(item => item.includes('hay')); //x
imageNames = imageNames.filter(item => !item.includes('hay'));

const iron = imageNames.filter(item => item.includes('iron')); //x
imageNames = imageNames.filter(item => !item.includes('iron'));

const heavyWeightedPressurePlate = imageNames.filter(item => item.includes('heavy_weighted_pressure_plate')); //x
imageNames = imageNames.filter(item => !item.includes('heavy_weighted_pressure_plate'));

const lightWeightedPressurePlate = imageNames.filter(item => item.includes('light_weighted_pressure_plate')); //x
imageNames = imageNames.filter(item => !item.includes('light_weighted_pressure_plate'));

const chain = imageNames.filter(item => item.includes('chain')); //x
imageNames = imageNames.filter(item => !item.includes('chain'));

const gold = imageNames.filter(item => item.includes('gold')); //x
imageNames = imageNames.filter(item => !item.includes('gold'));

const diamomd = imageNames.filter(item => item.includes('diamond')); //x
imageNames = imageNames.filter(item => !item.includes('diamond'));

const netherite = imageNames.filter(item => (item.includes('netherite') || item.includes('debris'))); //x
imageNames = imageNames.filter(item => !(item.includes('netherite') || item.includes('debris')));

const coal = imageNames.filter(item => item.includes('coal')); //x
imageNames = imageNames.filter(item => !item.includes('coal'));

const emerald = imageNames.filter(item => item.includes('emerald')); //x
imageNames = imageNames.filter(item => !item.includes('emerald'));

const lapis = imageNames.filter(item => item.includes('lapis')); //x
imageNames = imageNames.filter(item => !item.includes('lapis'));

const amethyst = imageNames.filter(item => item.includes('amethyst')); //x
imageNames = imageNames.filter(item => !item.includes('amethyst'));

const redstone = imageNames.filter(item => item.includes('redstone')); //x
imageNames = imageNames.filter(item => !item.includes('redstone'));

const copper = imageNames.filter(item => item.includes('copper')); //x
imageNames = imageNames.filter(item => !item.includes('copper'));

const quartz = imageNames.filter(item => item.includes('quartz')); //x
imageNames = imageNames.filter(item => !item.includes('quartz'));

const netherrack = imageNames.filter(item => item.includes('netherrack')); //x
imageNames = imageNames.filter(item => !item.includes('netherrack'));

const basalt = imageNames.filter(item => item.includes('basalt')); //x
imageNames = imageNames.filter(item => !item.includes('basalt'));

const blackstone = imageNames.filter(item => item.includes('blackstone')); //x
imageNames = imageNames.filter(item => !item.includes('blackstone'));

const netherBrick = imageNames.filter(item => item.includes('nether_brick')); //x
imageNames = imageNames.filter(item => !item.includes('nether_brick'));

const mud = imageNames.filter(item => item.includes('mud')); //x
imageNames = imageNames.filter(item => !item.includes('mud'));

const prismarine = imageNames.filter(item => item.includes('prismarine')); //x
imageNames = imageNames.filter(item => !item.includes('prismarine'));

const purpur = imageNames.filter(item => item.includes('purpur')); //x
imageNames = imageNames.filter(item => !item.includes('purpur'));

const endStone = imageNames.filter(item => item.includes('end_stone')); //x
imageNames = imageNames.filter(item => !item.includes('end_stone'));

const redSandstone = imageNames.filter(item => (item.includes('red_sandstone') || item === 'red_sand')); //x
imageNames = imageNames.filter(item => !(item.includes('red_sandstone') || item === 'red_sand'));

const sandstone = imageNames.filter(item => (item.includes('sandstone') || item === 'sand')); //x
imageNames = imageNames.filter(item => !(item.includes('sandstone') || item === 'sand'));

const dripstone = imageNames.filter(item => item.includes('dripstone')); //x
imageNames = imageNames.filter(item => !item.includes('dripstone'));

const glowstone = imageNames.filter(item => item.includes('glowstone')); //x
imageNames = imageNames.filter(item => !item.includes('glowstone'));

const stoneProducts = imageNames.filter(item => (item.includes('stone_') || item.includes('_stone'))); //x
imageNames = imageNames.filter(item => !(item.includes('stone_') || item.includes('_stone')));

const stone = ['stone', 'cobblestone']; //x
imageNames = imageNames.filter(item => !stone.includes(item));

const deepslate = imageNames.filter(item => item.includes('deepslate')); //x
imageNames = imageNames.filter(item => !item.includes('deepslate'));

const diorite = imageNames.filter(item => item.includes('diorite')); //x
imageNames = imageNames.filter(item => !item.includes('diorite'));

const andesite = imageNames.filter(item => item.includes('andesite')); //x
imageNames = imageNames.filter(item => !item.includes('andesite'));

const granite = imageNames.filter(item => item.includes('granite')); //x
imageNames = imageNames.filter(item => !item.includes('granite'));

const calcite = imageNames.filter(item => item.includes('calcite')); //x
imageNames = imageNames.filter(item => !item.includes('calcite'));

const tuff = imageNames.filter(item => item.includes('tuff')); //x
imageNames = imageNames.filter(item => !item.includes('tuff'));

const gravel = imageNames.filter(item => item.includes('gravel')); //x
imageNames = imageNames.filter(item => !item.includes('gravel'));

const brick = imageNames.filter(item => item.includes('brick')); //x
imageNames = imageNames.filter(item => !item.includes('brick'));

const clay = imageNames.filter(item => item.includes('clay')); //x
imageNames = imageNames.filter(item => !item.includes('clay'));

const dirt = imageNames.filter(item => item.includes('dirt')); //x
imageNames = imageNames.filter(item => !item.includes('dirt'));

const grass = imageNames.filter(item => item.includes('grass')); //x
imageNames = imageNames.filter(item => !item.includes('grass'));

const farmland = imageNames.filter(item => item.includes('farmland')); //x
imageNames = imageNames.filter(item => !item.includes('farmland'));

const podzol = imageNames.filter(item => item.includes('podzol')); //x
imageNames = imageNames.filter(item => !item.includes('podzol'));

const mycelium = imageNames.filter(item => item.includes('mycelium')); //x
imageNames = imageNames.filter(item => !item.includes('mycelium'));

const moss = imageNames.filter(item => item.includes('moss')); //x
imageNames = imageNames.filter(item => !item.includes('moss'));

const snow = imageNames.filter(item => item.includes('snow')); //x
imageNames = imageNames.filter(item => !item.includes('snow'));

const obsidian = imageNames.filter(item => item.includes('obsidian')); //x
imageNames = imageNames.filter(item => !item.includes('obsidian'));

const ice = imageNames.filter(item => item.includes('ice')); //x
imageNames = imageNames.filter(item => !item.includes('ice'));

const spruce = imageNames.filter(item => item.includes('spruce')); //x
imageNames = imageNames.filter(item => !item.includes('spruce'));

const darkOak = imageNames.filter(item => item.includes('dark_oak')); //x
imageNames = imageNames.filter(item => !item.includes('dark_oak'));

const oak = imageNames.filter(item => item.includes('oak')); //x
imageNames = imageNames.filter(item => !item.includes('oak'));

const mangrove = imageNames.filter(item => item.includes('mangrove')); //x
imageNames = imageNames.filter(item => !item.includes('mangrove'));

const jungle = imageNames.filter(item => item.includes('jungle')); //x
imageNames = imageNames.filter(item => !item.includes('jungle'));

const birch = imageNames.filter(item => item.includes('birch')); //x
imageNames = imageNames.filter(item => !item.includes('birch'));

const acacia = imageNames.filter(item => item.includes('acacia')); //x
imageNames = imageNames.filter(item => !item.includes('acacia'));

const bamboo = imageNames.filter(item => item.includes('bamboo')); //x
imageNames = imageNames.filter(item => !item.includes('bamboo'));

const crimson = imageNames.filter(item => item.includes('crimson')); //x
imageNames = imageNames.filter(item => !item.includes('crimson'));

const warped = imageNames.filter(item => item.includes('warped')); //x
imageNames = imageNames.filter(item => !item.includes('warped'));

const wood = ['stick', 'ladder', "scaffolding"]; //x
imageNames = imageNames.filter(item => !wood.includes(item));

const chorus = imageNames.filter(item => item.includes('chorus')); //x
imageNames = imageNames.filter(item => !item.includes('chorus'));

const azalea = imageNames.filter(item => item.includes('azalea')); //x
imageNames = imageNames.filter(item => !item.includes('azalea'));

const dripleaf = imageNames.filter(item => item.includes('dripleaf')); //x
imageNames = imageNames.filter(item => !item.includes('dripleaf'));

const sporeBlossom = imageNames.filter(item => item.includes('spore_blossom')); //x
imageNames = imageNames.filter(item => !item.includes('spore_blossom'));

const lilyPad = imageNames.filter(item => item.includes('lily_pad')); //x
imageNames = imageNames.filter(item => !item.includes('lily_pad'));

const deadBush = imageNames.filter(item => item.includes('dead_bush')); //x
imageNames = imageNames.filter(item => !item.includes('dead_bush'));

const fern = imageNames.filter(item => item.includes('fern')); //x
imageNames = imageNames.filter(item => !item.includes('fern'));

const vine = imageNames.filter(item => item.includes('vine')); //x
imageNames = imageNames.filter(item => !item.includes('vine'));

const hangingRoots = imageNames.filter(item => item.includes('hanging_roots')); //x
imageNames = imageNames.filter(item => !item.includes('hanging_roots'));

const glowLichen = imageNames.filter(item => item.includes('glow_lichen')); //x
imageNames = imageNames.filter(item => !item.includes('glow_lichen'));

const netherSprouts = imageNames.filter(item => item.includes('nether_sprouts')); //x
imageNames = imageNames.filter(item => !item.includes('nether_sprouts'));

const head = imageNames.filter(item => (item.includes('head') || item.includes('skull'))); //x
imageNames = imageNames.filter(item => !(item.includes('head') || item.includes('skull')));

const bone = imageNames.filter(item => item.includes('bone')); //x
imageNames = imageNames.filter(item => !item.includes('bone'));

const sculk = imageNames.filter(item => item.includes('sculk')); //x
imageNames = imageNames.filter(item => !item.includes('sculk'));

const soul = imageNames.filter(item => item.includes('soul')); //x
imageNames = imageNames.filter(item => !item.includes('soul'));

const fire = imageNames.filter(item => (item.includes('torch') || item.includes('campfire'))); //x
imageNames = imageNames.filter(item => !(item.includes('torch') || item.includes('campfire')));

const firework = imageNames.filter(item => item.includes('fire')); //x
imageNames = imageNames.filter(item => !item.includes('fire'));

const froglight = imageNames.filter(item => item.includes('froglight')); //x
imageNames = imageNames.filter(item => !item.includes('froglight'));

const shroomlight = imageNames.filter(item => item.includes('shroomlight')); //x
imageNames = imageNames.filter(item => !item.includes('shroomlight'));

const lantern = imageNames.filter(item => item.includes('lantern')); //x
imageNames = imageNames.filter(item => !item.includes('lantern'));

const mushroom = imageNames.filter(item => item.includes('mushroom')); //x
imageNames = imageNames.filter(item => !item.includes('mushroom'));

const magma = imageNames.filter(item => item.includes('magma')); //x
imageNames = imageNames.filter(item => !item.includes('magma'));

const wart = imageNames.filter(item => item.includes('wart')); //x
imageNames = imageNames.filter(item => !item.includes('wart'));

const sugar = imageNames.filter(item => item.includes('sugar')); //x
imageNames = imageNames.filter(item => !item.includes('sugar'));

const blaze = imageNames.filter(item => item.includes('blaze')); //x
imageNames = imageNames.filter(item => !item.includes('blaze'));

const spider = imageNames.filter(item => item.includes('spider_eye')); //x
imageNames = imageNames.filter(item => !item.includes('spider_eye'));

const ingredients = ["rabbit_foot", "pufferfish", "ghast_tear", "phantom_membrane"]; //x
imageNames = imageNames.filter(item => !ingredients.includes(item));

const honey = imageNames.filter(item => item.includes('honey')); //x
imageNames = imageNames.filter(item => !item.includes('honey'));

const slime = imageNames.filter(item => item.includes('slime')); //x
imageNames = imageNames.filter(item => !item.includes('slime'));

const sponge = imageNames.filter(item => item.includes('sponge')); //x
imageNames = imageNames.filter(item => !item.includes('sponge'));

const flint = imageNames.filter(item => item.includes('flint')); //x
imageNames = imageNames.filter(item => !item.includes('flint'));

const tnt = ['gunpowder', 'tnt']; //x
imageNames = imageNames.filter(item => !tnt.includes(item));

const rabbitHide = imageNames.filter(item => item.includes('rabbit_hide')); //x
imageNames = imageNames.filter(item => !item.includes('rabbit_hide'));

const leather = imageNames.filter(item => item.includes('leather')); //x
imageNames = imageNames.filter(item => !item.includes('leather'));

const paper = imageNames.filter(item => item.includes('paper')); //x
imageNames = imageNames.filter(item => !item.includes('paper'));

const book = imageNames.filter(item => item.includes('book')); //x
imageNames = imageNames.filter(item => !item.includes('book'));

const ender = imageNames.filter(item => item.includes('ender')); //x
imageNames = imageNames.filter(item => !item.includes('ender'));

const bench = ['crafting_table', 'furnace', 'enchanting_table', 'lodestone', "barrel", "blast_furnace", "brewing_stand", "cartography_table", "cauldron", "composter", "fletching_table", "grindstone", "lectern", "loom", "smithing_table", "smoker", "stonecutter"]; //x
imageNames = imageNames.filter(item => !bench.includes(item));

const anvil = imageNames.filter(item => item.includes('anvil')); //x
imageNames = imageNames.filter(item => !item.includes('anvil'));

const mechanics = ['lever', "piston", "sticky_piston", "observer", 'hopper', 'dropper', 'dispenser', "repeater", "comparator", 'jukebox', 'note_block', 'tripwire_hook', 'daylight_detector', "target"]; //x
imageNames = imageNames.filter(item => !mechanics.includes(item));

const rod = imageNames.filter(item => item.includes('rod')); //x
imageNames = imageNames.filter(item => !item.includes('rod'));

const arrow = imageNames.filter(item => item.includes('arrow')); //x
imageNames = imageNames.filter(item => !item.includes('arrow'));

const beacon = ['nether_star', 'beacon']; //x
imageNames = imageNames.filter(item => !beacon.includes(item));

const dragon = ['dragon_egg', 'dragon_breath', "end_crystal"]; //x
imageNames = imageNames.filter(item => !dragon.includes(item));

const water = ['conduit', 'heart_of_the_sea', "scute", 'sea_pickle', 'nautilus_shell']; //x
imageNames = imageNames.filter(item => !water.includes(item));

const map = imageNames.filter(item => item.includes('map')); //x
imageNames = imageNames.filter(item => !item.includes('map'));

const discFragment = imageNames.filter(item => item.includes('disc_fragment_5')); //x
imageNames = imageNames.filter(item => !item.includes('disc_fragment_5'));

const respawn = ['clock', 'compass', 'echo_shard', 'recovery_compass', 'respawn_anchor']; //x
imageNames = imageNames.filter(item => !respawn.includes(item));

const mobInteraction = ['lead']; //x
imageNames = imageNames.filter(item => !mobInteraction.includes(item));

const mobProducts = ['egg', 'feather', 'goat_horn', 'string', 'rotten_flesh']; //x
imageNames = imageNames.filter(item => !mobProducts.includes(item));

const silktouch = ['frogspawn', 'cobweb', "beehive", 'bee_nest']; //x
imageNames = imageNames.filter(item => !silktouch.includes(item));

const decorations = ['armor_stand', 'bell', 'bowl', 'flower_pot', 'painting']; //x
imageNames = imageNames.filter(item => !decorations.includes(item));

const experience = imageNames.filter(item => item.includes('experience')); //x
imageNames = imageNames.filter(item => !item.includes('experience'));

const bigGroupsObject = {};

bigGroupsObject.stoneList = [...stone, ...stoneProducts, ...deepslate, ...diorite, ...andesite, ...granite, ...calcite, ...tuff, ...gravel, ...netherrack, ...basalt, ...blackstone, ...netherBrick, ...obsidian, ...magma];
bigGroupsObject.sandList = [...redSandstone, ...sandstone, ...glass, ...stainedGlass, ...stainedGlassPane];
bigGroupsObject.clayList = [...clay, ...brick, ...mud, ...terracotta, ...glazedTerracotta, ...concrete, ...concretePowder];
bigGroupsObject.oreList = [...iron, ...chain, ...heavyWeightedPressurePlate, ...gold, ...lightWeightedPressurePlate, ...diamomd, ...netherite, ...coal, ...emerald, ...lapis, ...amethyst, ...glowstone, ...redstone, ...quartz, ...copper, ...prismarine ];
bigGroupsObject.woodList = [...spruce, ...darkOak, ...oak, ...mangrove, ...jungle, ...birch, ...acacia, ...bamboo, ...crimson, ...warped, ...wood];
bigGroupsObject.dirtList = [...dirt, ...grass, ...farmland, ...podzol, ...mycelium, ...moss, ...snow, ...ice];
bigGroupsObject.woolList = [...chest, ...shulker, ...wool, ...carpet, ...bannerPattern, ...banner];
bigGroupsObject.plantList = [...dye, ...flower, ...seeds, ...food, ...pumpkin, ...melon, ...wheat, ...hay, ...cocoa, ...chorus, ...azalea, ...dripleaf, ...sporeBlossom,
  ...lilyPad, ...deadBush, ...fern, ...vine, ...hangingRoots, ...glowLichen, ...netherSprouts, ...kelp, ...mushroom, ...dripstone];
bigGroupsObject.waterList = [...coral, ...deadCoral, ...coralBlock, ...deadCoralBlock, ...coralFan, ...deadCoralFan, ...water, ...sponge];
bigGroupsObject.endNetherList = [...purpur, ...endStone, ...dragon, ...ender, ...rod, ...blaze, ...beacon];
bigGroupsObject.edgyList = [...head, ...bone, ...soul, ...sculk];
bigGroupsObject.lightList = [...fire, ...froglight, ...shroomlight, ...lantern, ...candle];
bigGroupsObject.animalList = [...mobInteraction, ...mobProducts, ...leather, ...rabbitHide, ...spider, ...inkSac, ...honey, ...slime, ...tnt, ...firework, ...arrow, ...flint];
bigGroupsObject.ingredientList = [...glassBottle, ...sugar, ...wart, ...ingredients];
bigGroupsObject.bookList = [...map, ...paper, ...book];
bigGroupsObject.benchList = [...bench, ...anvil];
bigGroupsObject.mechanicsList = [...mechanics, ...rail];
bigGroupsObject.decorationList = [...itemFrame, ...decorations];
bigGroupsObject.miscellaneous = [...discFragment, ...respawn, ...spyglass, ...silktouch, ...experience];

let itemList = [];
for (let group in bigGroupsObject) {
  itemList = itemList.concat(bigGroupsObject[group]);
}
console.log(imageFiles.length);
console.log(itemList.length);
// console.log(JSON.stringify(itemList));

function transformList(items) {
  let result = [[[], []], [[], []], [[], []]];

  let index = 0;
  let subIndex = 0;
  let subSubIndex = 0;

  items.forEach(item => {
      result[index][subIndex][subSubIndex] = item;

      subSubIndex++;
      if (subSubIndex >= 300) {
          subSubIndex = 0;
          subIndex++;
          if (subIndex >= 2) {
              subIndex = 0;
              index++;
          }
      }
  });

  return result;
}

let transformedList = transformList(itemList);
console.log(JSON.stringify(transformedList));