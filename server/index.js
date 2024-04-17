const { log } = require('console');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public', 'stackable-items');
const imageFiles = fs.readdirSync(imagesDir);
let imageNames = imageFiles.map(file => path.parse(file).name);

const dye = imageNames.filter(item => item.includes('_dye'));
imageNames = imageNames.filter(item => !item.includes('_dye'));

const shulker = imageNames.filter(item => item.includes('shulker'));
imageNames = imageNames.filter(item => !item.includes('shulker'));

const chest = imageNames.filter(item => item.includes('chest'));
imageNames = imageNames.filter(item => !item.includes('chest'));

const wool = imageNames.filter(item => item.includes('_wool'));
imageNames = imageNames.filter(item => !item.includes('_wool'));

const carpet = imageNames.filter(item => item.includes('_carpet'));
imageNames = imageNames.filter(item => !item.includes('_carpet'));

const candle = imageNames.filter(item => item.includes('candle'));
imageNames = imageNames.filter(item => !item.includes('candle'));

const glassBottle = imageNames.filter(item => item.includes('glass_bottle'));
imageNames = imageNames.filter(item => !item.includes('glass_bottle'));

const spyglass = imageNames.filter(item => item.includes('spyglass'));
imageNames = imageNames.filter(item => !item.includes('spyglass'));

const stainedGlassPane = imageNames.filter(item => item.includes('_stained_glass_pane'));
imageNames = imageNames.filter(item => !item.includes('_stained_glass_pane'));
const stainedGlass = imageNames.filter(item => item.includes('_stained_glass'));
imageNames = imageNames.filter(item => !item.includes('_stained_glass'));

const glass = imageNames.filter(item => item.includes('glass'));
imageNames = imageNames.filter(item => !item.includes('glass'));

const glazedTerracotta = imageNames.filter(item => item.includes('_glazed_terracotta'));
imageNames = imageNames.filter(item => !item.includes('_glazed_terracotta'));
const terracotta = imageNames.filter(item => item.includes('terracotta'));
imageNames = imageNames.filter(item => !item.includes('terracotta'));

const concretePowder = imageNames.filter(item => item.includes('_concrete_powder'));
imageNames = imageNames.filter(item => !item.includes('_concrete_powder'));
const concrete = imageNames.filter(item => item.includes('_concrete'));
imageNames = imageNames.filter(item => !item.includes('_concrete'));

const banner = imageNames.filter(item => item.includes('_banner'));
imageNames = imageNames.filter(item => !item.includes('_banner'));
const bannerPattern = imageNames.filter(item => item.includes('_banner_pattern'));
imageNames = imageNames.filter(item => !item.includes('_banner_pattern'));

const deadCoralBlock = imageNames.filter(item => (item.includes('_coral_block') && item.includes('dead_')));
imageNames = imageNames.filter(item => !(item.includes('_coral_block') && item.includes('dead_')));
const coralBlock = imageNames.filter(item => item.includes('_coral_block'));
imageNames = imageNames.filter(item => !item.includes('_coral_block'));
const deadCoralFan = imageNames.filter(item => (item.includes('_coral_fan') && item.includes('dead_')));
imageNames = imageNames.filter(item => !(item.includes('_coral_fan') && item.includes('dead_')));
const coralFan = imageNames.filter(item => item.includes('_coral_fan'));
imageNames = imageNames.filter(item => !item.includes('_coral_fan'));
const deadCoral = imageNames.filter(item => (item.includes('_coral') && item.includes('dead_')));
imageNames = imageNames.filter(item => !(item.includes('_coral') && item.includes('dead_')));
const coral = imageNames.filter(item => item.includes('_coral'));
imageNames = imageNames.filter(item => !item.includes('_coral'));

const rail = imageNames.filter(item => item.includes('rail'));
imageNames = imageNames.filter(item => !item.includes('rail'));

const kelp = imageNames.filter(item => item.includes('kelp'));
imageNames = imageNames.filter(item => !item.includes('kelp'));

const inkSac = imageNames.filter(item => item.includes('ink_sac'));
imageNames = imageNames.filter(item => !item.includes('ink_sac'));

const itemFrame = imageNames.filter(item => item.includes('item_frame'));
imageNames = imageNames.filter(item => !item.includes('item_frame'));

//todo 'torchflower', 'pitcher_plant'
const flower = ['allium', 'azure_bluet', 'blue_orchid', 'cornflower', 'dandelion', 'lily_of_the_valley', 
  'oxeye_daisy', 'poppy', 'orange_tulip', 'pink_tulip', 'red_tulip', 'white_tulip', 'lilac', 'peony', 'rose_bush', 'sunflower', 'cactus', 'wither_rose'];
imageNames = imageNames.filter(item => !flower.includes(item));

const food = ["apple", "baked_potato", "beetroot", "beetroot_soup", "bread", "cake", "carrot", "chorus_fruit", "cooked_chicken", "cooked_cod", "cooked_mutton", "cooked_porkchop", "cooked_rabbit", "cooked_salmon", "cookie", "dried_kelp", "enchanted_golden_apple", "golden_apple", "golden_carrot", "honey_bottle", "melon_slice", "mushroom_stew", "poisonous_potato", "potato", "pumpkin_pie", "rabbit_stew", "raw_beef", "raw_chicken", "raw_cod", "raw_mutton", "raw_porkchop", "raw_rabbit", "raw_salmon", "steak", "suspicious_stew", "sweet_berries", "tropical_fish", 'glow_berries'];
imageNames = imageNames.filter(item => !food.includes(item));

const seeds = imageNames.filter(item => item.includes('seeds'));
imageNames = imageNames.filter(item => !item.includes('seeds'));

const pumpkin = imageNames.filter(item => item.includes('pumpkin'));
imageNames = imageNames.filter(item => !item.includes('pumpkin'));

const melon = imageNames.filter(item => item.includes('melon'));
imageNames = imageNames.filter(item => !item.includes('melon'));

const cocoa = imageNames.filter(item => item.includes('cocoa'));
imageNames = imageNames.filter(item => !item.includes('cocoa'));

const wheat = imageNames.filter(item => item.includes('wheat'));
imageNames = imageNames.filter(item => !item.includes('wheat'));

const hay = imageNames.filter(item => item.includes('hay'));
imageNames = imageNames.filter(item => !item.includes('hay'));

const iron = imageNames.filter(item => item.includes('iron'));
imageNames = imageNames.filter(item => !item.includes('iron'));

const heavyWeightedPressurePlate = imageNames.filter(item => item.includes('heavy_weighted_pressure_plate'));
imageNames = imageNames.filter(item => !item.includes('heavy_weighted_pressure_plate'));

const lightWeightedPressurePlate = imageNames.filter(item => item.includes('light_weighted_pressure_plate'));
imageNames = imageNames.filter(item => !item.includes('light_weighted_pressure_plate'));

const chain = imageNames.filter(item => item.includes('chain'));
imageNames = imageNames.filter(item => !item.includes('chain'));

const gold = imageNames.filter(item => item.includes('gold'));
imageNames = imageNames.filter(item => !item.includes('gold'));

const diamomd = imageNames.filter(item => item.includes('diamond'));
imageNames = imageNames.filter(item => !item.includes('diamond'));

const netherite = imageNames.filter(item => (item.includes('netherite') || item.includes('debris')));
imageNames = imageNames.filter(item => !(item.includes('netherite') || item.includes('debris')));

const coal = imageNames.filter(item => item.includes('coal'));
imageNames = imageNames.filter(item => !item.includes('coal'));

const emerald = imageNames.filter(item => item.includes('emerald'));
imageNames = imageNames.filter(item => !item.includes('emerald'));

const lapis = imageNames.filter(item => item.includes('lapis'));
imageNames = imageNames.filter(item => !item.includes('lapis'));

const amethyst = imageNames.filter(item => item.includes('amethyst'));
imageNames = imageNames.filter(item => !item.includes('amethyst'));

const redstone = imageNames.filter(item => item.includes('redstone'));
imageNames = imageNames.filter(item => !item.includes('redstone'));

const copper = imageNames.filter(item => item.includes('copper'));
imageNames = imageNames.filter(item => !item.includes('copper'));

const quartz = imageNames.filter(item => item.includes('quartz'));
imageNames = imageNames.filter(item => !item.includes('quartz'));

const netherrack = imageNames.filter(item => item.includes('netherrack'));
imageNames = imageNames.filter(item => !item.includes('netherrack'));

const basalt = imageNames.filter(item => item.includes('basalt'));
imageNames = imageNames.filter(item => !item.includes('basalt'));

const blackstone = imageNames.filter(item => item.includes('blackstone'));
imageNames = imageNames.filter(item => !item.includes('blackstone'));

const netherBrick = imageNames.filter(item => item.includes('nether_brick'));
imageNames = imageNames.filter(item => !item.includes('nether_brick'));

const mud = imageNames.filter(item => item.includes('mud'));
imageNames = imageNames.filter(item => !item.includes('mud'));

const prismarine = imageNames.filter(item => item.includes('prismarine'));
imageNames = imageNames.filter(item => !item.includes('prismarine'));

const purpur = imageNames.filter(item => item.includes('purpur'));
imageNames = imageNames.filter(item => !item.includes('purpur'));

const endStone = imageNames.filter(item => item.includes('end_stone'));
imageNames = imageNames.filter(item => !item.includes('end_stone'));

const redSandstone = imageNames.filter(item => (item.includes('red_sandstone') || item === 'red_sand'));
imageNames = imageNames.filter(item => !(item.includes('red_sandstone') || item === 'red_sand'));

const sandstone = imageNames.filter(item => (item.includes('sandstone') || item === 'sand'));
imageNames = imageNames.filter(item => !(item.includes('sandstone') || item === 'sand'));

const dripstone = imageNames.filter(item => item.includes('dripstone'));
imageNames = imageNames.filter(item => !item.includes('dripstone'));

const glowstone = imageNames.filter(item => item.includes('glowstone'));
imageNames = imageNames.filter(item => !item.includes('glowstone'));

const stone = imageNames.filter(item => (item.includes('stone_') || item.includes('_stone') || item.includes('cobblestone') || item === 'stone'));
imageNames = imageNames.filter(item => !(item.includes('stone_') || item.includes('_stone') || item.includes('cobblestone') || item === 'stone'));

const deepslate = imageNames.filter(item => item.includes('deepslate'));
imageNames = imageNames.filter(item => !item.includes('deepslate'));

const diorite = imageNames.filter(item => item.includes('diorite'));
imageNames = imageNames.filter(item => !item.includes('diorite'));

const andesite = imageNames.filter(item => item.includes('andesite'));
imageNames = imageNames.filter(item => !item.includes('andesite'));

const granite = imageNames.filter(item => item.includes('granite'));
imageNames = imageNames.filter(item => !item.includes('granite'));

const calcite = imageNames.filter(item => item.includes('calcite'));
imageNames = imageNames.filter(item => !item.includes('calcite'));

const tuff = imageNames.filter(item => item.includes('tuff'));
imageNames = imageNames.filter(item => !item.includes('tuff'));

const gravel = imageNames.filter(item => item.includes('gravel'));
imageNames = imageNames.filter(item => !item.includes('gravel'));

const brick = imageNames.filter(item => item.includes('brick'));
imageNames = imageNames.filter(item => !item.includes('brick'));

const clay = imageNames.filter(item => item.includes('clay'));
imageNames = imageNames.filter(item => !item.includes('clay'));

const dirt = imageNames.filter(item => item.includes('dirt'));
imageNames = imageNames.filter(item => !item.includes('dirt'));

const grass = imageNames.filter(item => item.includes('grass'));
imageNames = imageNames.filter(item => !item.includes('grass'));

const farmland = imageNames.filter(item => item.includes('farmland'));
imageNames = imageNames.filter(item => !item.includes('farmland'));

const podzol = imageNames.filter(item => item.includes('podzol'));
imageNames = imageNames.filter(item => !item.includes('podzol'));

const mycelium = imageNames.filter(item => item.includes('mycelium'));
imageNames = imageNames.filter(item => !item.includes('mycelium'));

const moss = imageNames.filter(item => item.includes('moss'));
imageNames = imageNames.filter(item => !item.includes('moss'));

const snow = imageNames.filter(item => item.includes('snow'));
imageNames = imageNames.filter(item => !item.includes('snow'));

const obsidian = imageNames.filter(item => item.includes('obsidian'));
imageNames = imageNames.filter(item => !item.includes('obsidian'));

const ice = imageNames.filter(item => item.includes('ice'));
imageNames = imageNames.filter(item => !item.includes('ice'));

const spruce = imageNames.filter(item => item.includes('spruce'));
imageNames = imageNames.filter(item => !item.includes('spruce'));

const darkOak = imageNames.filter(item => item.includes('dark_oak'));
imageNames = imageNames.filter(item => !item.includes('dark_oak'));

const oak = imageNames.filter(item => item.includes('oak'));
imageNames = imageNames.filter(item => !item.includes('oak'));

const mangrove = imageNames.filter(item => item.includes('mangrove'));
imageNames = imageNames.filter(item => !item.includes('mangrove'));

const jungle = imageNames.filter(item => item.includes('jungle'));
imageNames = imageNames.filter(item => !item.includes('jungle'));

const birch = imageNames.filter(item => item.includes('birch'));
imageNames = imageNames.filter(item => !item.includes('birch'));

const acacia = imageNames.filter(item => item.includes('acacia'));
imageNames = imageNames.filter(item => !item.includes('acacia'));

const bamboo = imageNames.filter(item => item.includes('bamboo'));
imageNames = imageNames.filter(item => !item.includes('bamboo'));

const crimson = imageNames.filter(item => item.includes('crimson'));
imageNames = imageNames.filter(item => !item.includes('crimson'));

const warped = imageNames.filter(item => item.includes('warped'));
imageNames = imageNames.filter(item => !item.includes('warped'));

const wood = ['stick', 'ladder', "scaffolding"];
imageNames = imageNames.filter(item => !wood.includes(item));

const chorus = imageNames.filter(item => item.includes('chorus'));
imageNames = imageNames.filter(item => !item.includes('chorus'));

const azalea = imageNames.filter(item => item.includes('azalea'));
imageNames = imageNames.filter(item => !item.includes('azalea'));

const dripleaf = imageNames.filter(item => item.includes('dripleaf'));
imageNames = imageNames.filter(item => !item.includes('dripleaf'));

const sporeBlossom = imageNames.filter(item => item.includes('spore_blossom'));
imageNames = imageNames.filter(item => !item.includes('spore_blossom'));

const lilyPad = imageNames.filter(item => item.includes('lily_pad'));
imageNames = imageNames.filter(item => !item.includes('lily_pad'));

const deadBush = imageNames.filter(item => item.includes('dead_bush'));
imageNames = imageNames.filter(item => !item.includes('dead_bush'));

const fern = imageNames.filter(item => item.includes('fern'));
imageNames = imageNames.filter(item => !item.includes('fern'));

const vine = imageNames.filter(item => item.includes('vine'));
imageNames = imageNames.filter(item => !item.includes('vine'));

const hangingRoots = imageNames.filter(item => item.includes('hanging_roots'));
imageNames = imageNames.filter(item => !item.includes('hanging_roots'));

const glowLichen = imageNames.filter(item => item.includes('glow_lichen'));
imageNames = imageNames.filter(item => !item.includes('glow_lichen'));

const netherSprouts = imageNames.filter(item => item.includes('nether_sprouts'));
imageNames = imageNames.filter(item => !item.includes('nether_sprouts'));

const head = imageNames.filter(item => (item.includes('head') || item.includes('skull')));
imageNames = imageNames.filter(item => !(item.includes('head') || item.includes('skull')));

const bone = imageNames.filter(item => item.includes('bone'));
imageNames = imageNames.filter(item => !item.includes('bone'));

const sculk = imageNames.filter(item => item.includes('sculk'));
imageNames = imageNames.filter(item => !item.includes('sculk'));

const soul = imageNames.filter(item => item.includes('soul'));
imageNames = imageNames.filter(item => !item.includes('soul'));

const fire = imageNames.filter(item => (item.includes('torch') || item.includes('campfire')));
imageNames = imageNames.filter(item => !(item.includes('torch') || item.includes('campfire')));

const firework = imageNames.filter(item => item.includes('fire'));
imageNames = imageNames.filter(item => !item.includes('fire'));

const froglight = imageNames.filter(item => item.includes('froglight'));
imageNames = imageNames.filter(item => !item.includes('froglight'));

const shroomlight = imageNames.filter(item => item.includes('shroomlight'));
imageNames = imageNames.filter(item => !item.includes('shroomlight'));

const lantern = imageNames.filter(item => item.includes('lantern'));
imageNames = imageNames.filter(item => !item.includes('lantern'));

const mushroom = imageNames.filter(item => item.includes('mushroom'));
imageNames = imageNames.filter(item => !item.includes('mushroom'));

const magma = imageNames.filter(item => item.includes('magma'));
imageNames = imageNames.filter(item => !item.includes('magma'));

const wart = imageNames.filter(item => item.includes('wart'));
imageNames = imageNames.filter(item => !item.includes('wart'));

const sugar = imageNames.filter(item => item.includes('sugar'));
imageNames = imageNames.filter(item => !item.includes('sugar'));

const blaze = imageNames.filter(item => item.includes('blaze'));
imageNames = imageNames.filter(item => !item.includes('blaze'));

const spider = imageNames.filter(item => item.includes('spider_eye'));
imageNames = imageNames.filter(item => !item.includes('spider_eye'));

const ingredients = ["rabbit_foot", "glistering_melon_slice", "pufferfish", "ghast_tear", "phantom_membrane"];
imageNames = imageNames.filter(item => !ingredients.includes(item));

const honey = imageNames.filter(item => item.includes('honey'));
imageNames = imageNames.filter(item => !item.includes('honey'));

const slime = imageNames.filter(item => item.includes('slime'));
imageNames = imageNames.filter(item => !item.includes('slime'));

const sponge = imageNames.filter(item => item.includes('sponge'));
imageNames = imageNames.filter(item => !item.includes('sponge'));

const flint = imageNames.filter(item => item.includes('flint'));
imageNames = imageNames.filter(item => !item.includes('flint'));

const tnt = ['gunpowder', 'tnt'];
imageNames = imageNames.filter(item => !tnt.includes(item));

const rabbitHide = imageNames.filter(item => item.includes('rabbit_hide'));
imageNames = imageNames.filter(item => !item.includes('rabbit_hide'));

const leather = imageNames.filter(item => item.includes('leather'));
imageNames = imageNames.filter(item => !item.includes('leather'));

const paper = imageNames.filter(item => item.includes('paper'));
imageNames = imageNames.filter(item => !item.includes('paper'));

const book = imageNames.filter(item => item.includes('book'));
imageNames = imageNames.filter(item => !item.includes('book'));

const ender = imageNames.filter(item => item.includes('ender'));
imageNames = imageNames.filter(item => !item.includes('ender'));

const bench = ['crafting_table', 'furnace', 'enchanting_table', 'lodestone', "barrel", "blast_furnace", "brewing_stand", "cartography_table", "cauldron", "composter", "fletching_table", "grindstone", "lectern", "loom", "smithing_table", "smoker", "stonecutter"];
imageNames = imageNames.filter(item => !bench.includes(item));

const anvil = imageNames.filter(item => item.includes('anvil'));
imageNames = imageNames.filter(item => !item.includes('anvil'));

const mechanics = ['lever', "piston", "sticky_piston", "observer", 'hopper', 'dropper', 'dispenser', "repeater", "comparator", 'jukebox', 'note_block', 'tripwire_hook', 'daylight_detector', "target"];
imageNames = imageNames.filter(item => !mechanics.includes(item));

const rod = imageNames.filter(item => item.includes('rod'));
imageNames = imageNames.filter(item => !item.includes('rod'));

const arrow = imageNames.filter(item => item.includes('arrow'));
imageNames = imageNames.filter(item => !item.includes('arrow'));

const beacon = ['nether_star', 'beacon'];
imageNames = imageNames.filter(item => !beacon.includes(item));

const dragon = ['dragon_egg', 'dragon_breath', "end_crystal"];
imageNames = imageNames.filter(item => !dragon.includes(item));

const water = ['conduit', 'heart_of_the_sea', "scute", 'sea_pickle', 'nautilus_shell'];
imageNames = imageNames.filter(item => !water.includes(item));

const map = imageNames.filter(item => item.includes('map'));
imageNames = imageNames.filter(item => !item.includes('map'));

const discFragment = imageNames.filter(item => item.includes('disc_fragment_5'));
imageNames = imageNames.filter(item => !item.includes('disc_fragment_5'));

const respawn = ['clock', 'compass', 'echo_shard', 'recovery_compass', 'respawn_anchor'];
imageNames = imageNames.filter(item => !respawn.includes(item));

const mobInteraction = ['lead', 'name_tag', 'shears'];
imageNames = imageNames.filter(item => !mobInteraction.includes(item));

const mobProducts = ['egg', 'feather', 'goat_horn', 'string', 'rotten_flesh'];
imageNames = imageNames.filter(item => !mobProducts.includes(item));

const silktouch = ['frogspawn', 'cobweb', "beehive", 'bee_nest'];
imageNames = imageNames.filter(item => !silktouch.includes(item));

const decorations = ['armor_stand', 'bell', 'bowl', 'flower_pot', 'painting'];
imageNames = imageNames.filter(item => !decorations.includes(item));

const experience = imageNames.filter(item => item.includes('experience'));
imageNames = imageNames.filter(item => !item.includes('experience'));
