export const Abilities: {[abilityid: string]: ModdedAbilityData} = {
	darkness: {
		desc: "On switch-in, this Pokémon summons Darkness for 5 turns.",
		shortDesc: "5 turns: Weakens Fairy moves, boosts Dark and Ghost moves.",
		onStart(source) {
			this.field.setWeather('darkness');
		},
		name: "Darkness",
		rating: 3,
		num: -1000,
	},

	providence: {
		desc: "While Absol is on the battlefield, moves stronger than or equal to base power 100 are stopped.",
		shortDesc: "Strong moves are neutralised.",
		onStart(pokemon) {
			this.add('-message', `${pokemon.name} is preventing disaster!`);
		},
		onFoeBasePower(basePower, attacker, defender, move) {
			if (basePower >= 100) {
				return this.chainModify(0.33);
			}
		},
		name: "Providence",
		rating: 4,
		num: -1001,
	},
	aptitude: {
		onPrepareHit(source, target, move) {
			if (move.hasBounced || move.sourceEffect === 'snatch') return;
			var types = [move.type, 'Grass'];
			if (move.type === 'Grass') {
				types = ['Grass'];
			}
			if (types && types[0] !== '???' && source.getTypes().join() !== types.join()) {
				if (!source.setType(types)) return;
				this.add('-start', source, 'typechange', types.join('/'), '[from] ability: aptitude');
			}
		},
		name: "Aptitude",
		rating: 4,
		num: -1002,
	},
	flytrap: {
		onFoeTrapPokemon(pokemon) {
			if (pokemon.hasType('Bug') && this.isAdjacent(pokemon, this.effectData.target)) {
				pokemon.tryTrap(true);
			}
		},
		onFoeMaybeTrapPokemon(pokemon, source) {
			if (!source) source = this.effectData.target;
			if (!source || !this.isAdjacent(pokemon, source)) return;
			if (!pokemon.knownType || pokemon.hasType('Bug')) {
				pokemon.maybeTrapped = true;
			}
		},
		name: "Fly Trap",
		rating: 4,
		num: -1004,
	},
	soultrap: {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Ghost') {
				if (!this.boost({spa: 1})) {
					this.add('-immune', target, '[from] ability: Soul Suck');
				}
				return null;
			}
		},
		onAnyRedirectTarget(target, source, source2, move) {
			if (move.type !== 'Ghost') return;
			const redirectTarget = ['randomNormal', 'adjacentFoe'].includes(move.target) ? 'normal' : move.target;
			if (this.validTarget(this.effectData.target, source, redirectTarget)) {
				if (move.smartTarget) move.smartTarget = false;
				if (this.effectData.target !== target) {
					this.add('-activate', this.effectData.target, 'ability: Soul Suck');
				}
				return this.effectData.target;
			}
		},
		name: "Soul Trap",
		rating: 3,
		num: -1003,
	},
	angrymode: {
		onResidual(pokemon) {
			if (pokemon.species.baseSpecies !== 'Primeape' || pokemon.transformed) return;
			const targetForme = pokemon.species.name === 'Primeape' ? 'Primeape-Angry' : 'Primeape';
			pokemon.formeChange(targetForme);
		},
		name: "Angry Mode",
		rating: 1,
		num: -1005,
	},
};