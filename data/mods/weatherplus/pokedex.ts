export const Pokedex: {[speciesid: string]: ModdedSpeciesData} = {
	zarude: {
		inherit: true,
		abilities: {0: "Leaf Guard", H: "Darkness"},
	},
	zarudedada: {
		inherit: true,
		abilities: {0: "Leaf Guard", H: "Darkness"},
	},
	absol: {
		inherit: true,
		baseStats: {hp: 65, atk: 130, def: 60, spa: 75, spd: 60, spe: 95},
		abilities: {0: "Pressure", 1: "Super Luck", H: "Providence"},
	},
	absolmega: {
		inherit: true,
		baseStats: {hp: 65, atk: 150, def: 60, spa: 105, spd: 90, spe: 115},
		abilities: {0: "Providence"},
	},
	archeops: {
		inherit: true,
		abilities: {0: "No Guard"},
	},
	articuno: {
		inherit: true,
		abilities: {0: "Pressure", H: "Snow Warning"},
	},
	calyrex: {
		inherit: true,
		baseStats: {hp: 100, atk: 80, def: 80, spa: 95, spd: 80, spe: 101},
		abilities: {0: "Unnerve", H: "Aptitude"},
	},
	carnivine: {
		inherit: true,
		types: ["Grass", "Fire"],
		baseStats: {hp: 94, atk: 100, def: 102, spa: 90, spd: 72, spe: 66},
		abilities: {0: "Levitate", H: "Fly Trap"},
	},
	genesect: {
		inherit: true,
		baseStats: {hp: 71, atk: 110, def: 95, spa: 110, spd: 95, spe: 99},
	},
	lumineon: {
		inherit: true,
		baseStats: {hp: 89, atk: 69, def: 76, spa: 79, spd: 106, spe: 91},
		abilities: {0: "Swift Swim", 1: "Storm Drain", H: "Dazzling"},
	},
	naganadel: {
		inherit: true,
		baseStats: {hp: 115, atk: 50, def: 60, spa: 95, spd: 75, spe: 121},
		abilities: {0: "Color Change"},
	},
	primeape: {
		inherit: true,
		name: "Primeape",
		types: ["Fighting", "Grass"],
		baseStats: {hp: 80, atk: 105, def: 85, spa: 105, spd: 85, spe: 95},
		abilities: {0: "Angry Mode"},
		otherFormes: ["Primeape-Angry"],
		formeOrder: ["Primeape", "Primeape-Angry"],
	},
	primeapeangry: {
		num: 57,
		name: "Primeape-Angry",
		baseSpecies: "Primeape",
		forme: "Angry",
		types: ["Fighting", "Fire"],
		baseStats: {hp: 80, atk: 125, def: 60, spa: 125, spd: 60, spe: 105},
		abilities: {0: "Angry Mode"},
		heightm: 0.5,
		weightkg: 28,
		color: "Brown",
		eggGroups: ["Field"],
		requiredAbility: "Angry Mode",
		battleOnly: "Primeape",
	},
	spiritomb: {
		inherit: true,
		baseStats: {hp: 60, atk: 92, def: 108, spa: 92, spd: 108, spe: 35},
		abilities: {0: "Wandering Spirit", H: "Soul Trap"},
	},
	turtonator: {
		inherit: true,
		baseStats: {hp: 65, atk: 80, def: 110, spa: 90, spd: 100, spe: 50},
		abilities: {0: "Shell Armor", 1: "Flame Body", H: "Skill Link"},
	},
};