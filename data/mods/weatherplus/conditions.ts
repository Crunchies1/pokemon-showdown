export const Conditions: {[k: string]: ConditionData} = {
	darkness: {
		name: 'Darkness',
		effectType: 'Weather',
		duration: 5,
		durationCallback(source, effect) {
			if (source?.hasItem('tr00')) {
				return 8;
			}
			return 5;
		},
		onStart(battle, source, effect) {
			if (effect?.effectType === 'Ability') {
				if (this.gen <= 5) this.effectData.duration = 0;
				this.add('-ability', source, 'Darkness');
				this.add('-weather', 'Darkness', '[silent]');
				this.add('-message', `Darkness filled the battlefield!`);
			} else {
				this.add('-weather', 'Darkness', '[silent]');
			}
		},
		onWeatherModifyDamage(damage, attacker, defender, move) {
			if (defender.hasItem('utilityumbrella')) return;
			if (move.type === 'Fairy') {
				this.debug('Darkness is constricting');
				return this.chainModify(0.5);
			}
			if (move.type === 'Dark' || move.type === 'Ghost') {
				this.debug('Darkness boosted');
				return this.chainModify(1.2);
			}
		},
		onResidual() {
			this.add('-weather', 'Darkness', '[upkeep]');
			this.add('-message', `The darkness is unyielding!`);
		},
		onEnd() {
			this.add('-weather', 'none', '[silent]');
			this.add('-message', `The darkness fades away!`);
		},
	},
};
