export const Scripts: ModdedBattleScriptsData = {
	init() {
		const newMoves = (mon: string, moves: string[]) => {
			for (const move of moves) {
				this.modData('Learnsets', this.toID(mon)).learnset[this.toID(move)] = ["8M"];
			}
		};
		newMoves("articuno", ["earthpower"]);
		newMoves("archeops", ["dragondance"]);
		newMoves("calyrex", ["blueflare", "earthpower", "moonblast", "willowisp", "hex", "recover"]);
		newMoves("carnivine", ["firelash", "coil", "snaptrap", "grassyglide", "venomdrench", "willowisp"]);
		newMoves("lumineon", ["lightofruin", "dazzlinggleam", "tailglow", "flipturn", "hydropump"]);
		newMoves("primeape", ["flamethrower", "grassyglide", "leafstorm", "flareblitz", "explosion", "nastyplot"]);
		newMoves("spiritomb", ["soulsuck"]);
		newMoves("turtonator", ["fierydarts", "spikes", "explosion"]);
	},
};