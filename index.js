const fetch = require('node-fetch');
const compatibleLanguages = ["en", "fr", "es", "de", "nl", "it", "ru", "ja", "jp"];

const mapsURL   = "https://splatoon2.ink/data/schedules.json";
const salmonURL = "https://splatoon2.ink/data/coop-schedules.json";
const splatGear = "https://splatoon2.ink/data/merchandises.json";

const baseURL = "https://splatoon2.ink/assets/splatnet";

class Client {
	constructor(lang) {
		if(!lang) {lang = "en"}
		if(lang.toLowerCase() === "en" || !compatibleLanguages[lang]) {
			this.translation = require("./lang/english.json");
		}
		if(lang.toLowerCase() === "fr") {
			this.translation = require("./lang/french.json");
		}
		if(lang.toLowerCase() === "es") {
			this.translation = require("./lang/spanish.json");
		}
		if(lang.toLowerCase() === "de") {
			this.translation = require("./lang/german.json");
		}
		if(lang.toLowerCase() === "nl") {
			this.translation = require("./lang/dutch.json");
		}
		if(lang.toLowerCase() === "it") {
			this.translation = require("./lang/italian.json");
		}
		if(lang.toLowerCase() === "ru") {
			this.translation = require("./lang/russian.json");
		}
		if(lang.toLowerCase() === "jp" || lang.toLowerCase() === "ja") {
			this.translation = require("./lang/japanese.json");
		}
	}

	getCurrentStages(callback) {
		if(!callback) {return console.log("Splatoon2api - Please enter a function!")};
		fetch(mapsURL)
			.catch(err => console.error(err))
		  	.then(res => res.json())
		  	.then(json => {
		  		let data = {};
		  		data.regular = {
		  			start_time: json.regular[0].start_time,
		  			end_time: json.regular[0].end_time,
		  			stage1: {
		  				name: this.translation.stages[json.regular[0].stage_a.id].name,
		  				image: baseURL + json.regular[0].stage_a.image
		  			},
		  			stage2: {
						name: this.translation.stages[json.regular[0].stage_b.id].name,
		  				image: baseURL + json.regular[0].stage_b.image
		  			},
		  			rules: this.translation.rules[json.regular[0].rule.key].name
		  		}
		  		data.ranked = {
		  			start_time: json.gachi[0].start_time,
		  			end_time: json.gachi[0].end_time,
		  			stage1: {
						name: this.translation.stages[json.gachi[0].stage_a.id].name,
		  				image: baseURL + json.gachi[0].stage_a.image
		  			},
		  			stage2: {
		  				name: this.translation.stages[json.gachi[0].stage_b.id].name,
		  				image: baseURL + json.gachi[0].stage_b.image
		  			},
		  			rules: this.translation.rules[json.gachi[0].rule.key].name
		  		}
		  		data.league = {
		  			start_time: json.league[0].start_time,
		  			end_time: json.league[0].end_time,
		  			stage1: {
						name: this.translation.stages[json.league[0].stage_a.id].name,
		  				image: baseURL + json.league[0].stage_a.image
		  			},
		  			stage2: {
		  				name: this.translation.stages[json.league[0].stage_b.id].name,
		  				image: baseURL + json.league[0].stage_b.image
		  			},	
		  			rules: this.translation.rules[json.league[0].rule.key].name
		  		}
		  		return callback(data);
		  	});
	}

	getNextStages(callback) {
		if(!callback) {return console.log("Splatoon2api - Please enter a function!")};
		fetch(mapsURL)
			.catch(err => console.error(err))
		  	.then(res => res.json())
		  	.then(json => {
		  		let data = {};
		  		data.regular = {
		  			start_time: json.regular[1].start_time,
		  			end_time: json.regular[1].end_time,
		  			stage1: {
		  				name: this.translation.stages[json.regular[1].stage_a.id].name,
		  				image: baseURL + json.regular[1].stage_a.image
		  			},
		  			stage2: {
						name: this.translation.stages[json.regular[1].stage_b.id].name,
		  				image: baseURL + json.regular[1].stage_b.image
		  			},
		  			rules: this.translation.rules[json.regular[1].rule.key].name
		  		}
		  		data.ranked = {
		  			start_time: json.gachi[1].start_time,
		  			end_time: json.gachi[1].end_time,
		  			stage1: {
						name: this.translation.stages[json.gachi[1].stage_a.id].name,
		  				image: baseURL + json.gachi[1].stage_a.image
		  			},
		  			stage2: {
		  				name: this.translation.stages[json.gachi[1].stage_b.id].name,
		  				image: baseURL + json.gachi[1].stage_b.image
		  			},
		  			rules: this.translation.rules[json.gachi[1].rule.key].name
		  		}
		  		data.league = {
		  			start_time: json.league[1].start_time,
		  			end_time: json.league[1].end_time,
		  			stage1: {
						name: this.translation.stages[json.league[1].stage_a.id].name,
		  				image: baseURL + json.league[1].stage_a.image
		  			},
		  			stage2: {
		  				name: this.translation.stages[json.league[1].stage_b.id].name,
		  				image: baseURL + json.league[1].stage_b.image
		  			},	
		  			rules: this.translation.rules[json.league[1].rule.key].name
		  		}
		  		return callback(data);
		  	});
	}

	getSplanetGear(callback) {
		if(!callback) {return console.log("Splatoon2api - Please enter a function!")};
		fetch(splatGear)
			.catch(err => console.error(err))
		  	.then(res => res.json())
		  	.then(json => {
		  		let data = {};
		  		data.merchandises = {
		  			0: {
		  				name: this.translation.gear[json.merchandises[0].kind][json.merchandises[0].gear.id].name,
		  				image: baseURL + json.merchandises[0].gear.image,
		  				end_time: json.merchandises[0].end_time,
		  				price: json.merchandises[0].price,
		  				rarity: json.merchandises[0].gear.rarity,
		  				kind: json.merchandises[0].kind,
		  				brand: {
		  					name: this.translation.brands[json.merchandises[0].gear.brand.id].name,
		  					image: baseURL + json.merchandises[0].gear.brand.image 
		  				},
		  				skills: {
		  					name: this.translation.skills[json.merchandises[0].skill.id].name,
		  					image: baseURL + json.merchandises[0].skill.image
		  				},
		  				original_gear: {
		  					rarity: json.merchandises[0].original_gear.rarity,
		  					price: json.merchandises[0].original_gear.price,
		  					skills: {
		  						name: this.translation.skills[json.merchandises[0].original_gear.skill.id].name,
		  						image: baseURL + json.merchandises[0].original_gear.skill.image 
		  					}
		  				}
		  			},
		  			1: {
		  				name: this.translation.gear[json.merchandises[1].kind][json.merchandises[1].gear.id].name,
		  				image: baseURL + json.merchandises[1].gear.image,
		  				end_time: json.merchandises[1].end_time,
		  				price: json.merchandises[1].price,
		  				rarity: json.merchandises[1].gear.rarity,
		  				kind: json.merchandises[1].kind,
		  				brand: {
		  					name: this.translation.brands[json.merchandises[1].gear.brand.id].name,
		  					image: baseURL + json.merchandises[1].gear.brand.image 
		  				},
		  				skills: {
		  					name: this.translation.skills[json.merchandises[1].skill.id].name,
		  					image: baseURL + json.merchandises[1].skill.image
		  				},
		  				original_gear: {
		  					rarity: json.merchandises[1].original_gear.rarity,
		  					price: json.merchandises[1].original_gear.price,
		  					skills: {
		  						name: this.translation.skills[json.merchandises[1].original_gear.skill.id].name,
		  						image: baseURL + json.merchandises[1].original_gear.skill.image 
		  					}
		  				}
		  			},
		  			2: {
		  				name: this.translation.gear[json.merchandises[2].kind][json.merchandises[2].gear.id].name,
		  				image: baseURL + json.merchandises[2].gear.image,
		  				end_time: json.merchandises[2].end_time,
		  				price: json.merchandises[2].price,
		  				rarity: json.merchandises[2].gear.rarity,
		  				kind: json.merchandises[2].kind,
		  				brand: {
		  					name: this.translation.brands[json.merchandises[2].gear.brand.id].name,
		  					image: baseURL + json.merchandises[2].gear.brand.image 
		  				},
		  				skills: {
		  					name: this.translation.skills[json.merchandises[2].skill.id].name,
		  					image: baseURL + json.merchandises[2].skill.image
		  				},
		  				original_gear: {
		  					rarity: json.merchandises[2].original_gear.rarity,
		  					price: json.merchandises[2].original_gear.price,
		  					skills: {
		  						name: this.translation.skills[json.merchandises[2].original_gear.skill.id].name,
		  						image: baseURL + json.merchandises[2].original_gear.skill.image 
		  					}
		  				}
		  			},
		  			3: {
		  				name: this.translation.gear[json.merchandises[3].kind][json.merchandises[3].gear.id].name,
		  				image: baseURL + json.merchandises[3].gear.image,
		  				end_time: json.merchandises[3].end_time,
		  				price: json.merchandises[3].price,
		  				rarity: json.merchandises[3].gear.rarity,
		  				kind: json.merchandises[3].kind,
		  				brand: {
		  					name: this.translation.brands[json.merchandises[3].gear.brand.id].name,
		  					image: baseURL + json.merchandises[3].gear.brand.image 
		  				},
		  				skills: {
		  					name: this.translation.skills[json.merchandises[3].skill.id].name,
		  					image: baseURL + json.merchandises[3].skill.image
		  				},
		  				original_gear: {
		  					rarity: json.merchandises[3].original_gear.rarity,
		  					price: json.merchandises[3].original_gear.price,
		  					skills: {
		  						name: this.translation.skills[json.merchandises[3].original_gear.skill.id].name,
		  						image: baseURL + json.merchandises[3].original_gear.skill.image 
		  					}
		  				}
		  			},
		  			4: {
		  				name: this.translation.gear[json.merchandises[4].kind][json.merchandises[4].gear.id].name,
		  				image: baseURL + json.merchandises[4].gear.image,
		  				end_time: json.merchandises[4].end_time,
		  				price: json.merchandises[4].price,
		  				rarity: json.merchandises[4].gear.rarity,
		  				kind: json.merchandises[4].kind,
		  				brand: {
		  					name: this.translation.brands[json.merchandises[4].gear.brand.id].name,
		  					image: baseURL + json.merchandises[4].gear.brand.image 
		  				},
		  				skills: {
		  					name: this.translation.skills[json.merchandises[4].skill.id].name,
		  					image: baseURL + json.merchandises[4].skill.image
		  				},
		  				original_gear: {
		  					rarity: json.merchandises[4].original_gear.rarity,
		  					price: json.merchandises[4].original_gear.price,
		  					skills: {
		  						name: this.translation.skills[json.merchandises[4].original_gear.skill.id].name,
		  						image: baseURL + json.merchandises[4].original_gear.skill.image 
		  					}
		  				}
		  			},
		  			5: {
		  				name: this.translation.gear[json.merchandises[5].kind][json.merchandises[5].gear.id].name,
		  				image: baseURL + json.merchandises[5].gear.image,
		  				end_time: json.merchandises[5].end_time,
		  				price: json.merchandises[5].price,
		  				rarity: json.merchandises[5].gear.rarity,
		  				kind: json.merchandises[5].kind,
		  				brand: {
		  					name: this.translation.brands[json.merchandises[5].gear.brand.id].name,
		  					image: baseURL + json.merchandises[5].gear.brand.image 
		  				},
		  				skills: {
		  					name: this.translation.skills[json.merchandises[5].skill.id].name,
		  					image: baseURL + json.merchandises[5].skill.image
		  				},
		  				original_gear: {
		  					rarity: json.merchandises[5].original_gear.rarity,
		  					price: json.merchandises[5].original_gear.price,
		  					skills: {
		  						name: this.translation.skills[json.merchandises[5].original_gear.skill.id].name,
		  						image: baseURL + json.merchandises[5].original_gear.skill.image 
		  					}
		  				}
		  			}
		  		}
		  		return callback(data);
		  	});
	}

	getSalmonRun(callback) {
		if(!callback) {return console.log("Splatoon2api - Please enter a function!")};
		fetch(salmonURL)
			.catch(err => console.error(err))
		  	.then(res => res.json())
		  	.then(json => {
		  		let data = {};
		  		data.details = {
		  			0: {
		  				start_time: json.details[0].start_time,
		  				end_time:  json.details[0].end_time,
		  				stage: {
		  					name: this.translation.coop_stages[json.details[0].stage.image].name,
		  					image: baseURL + json.details[0].stage.image
		  				},
		  				weapons: {
		  					0: {},
		  					1: {},
		  					2: {},
		  					3: {}
		  				}
		  			},
		  			1: {
		  				start_time: json.details[1].start_time,
		  				end_time:  json.details[1].end_time,
		  				stage: {
		  					name: this.translation.coop_stages[json.details[1].stage.image].name,
		  					image: baseURL + json.details[1].stage.image
		  				},
		  				weapons: {
		  					0: {},
		  					1: {},
		  					2: {},
		  					3: {}
		  				}
		  			}
		  		}
		  		data.next = {
		  			0: {
		  				start_time: json.schedules[0].start_time,
		  				end_time: json.schedules[0].end_time,
		  			},
		  			1: {
		  				start_time: json.schedules[1].start_time,
		  				end_time: json.schedules[1].end_time,
		  			},
		  			2: {
		  				start_time: json.schedules[2].start_time,
		  				end_time: json.schedules[2].end_time,
		  			},
		  			3: {
		  				start_time: json.schedules[3].start_time,
		  				end_time: json.schedules[3].end_time,
		  			},
		  			4: {
		  				start_time: json.schedules[4].start_time,
		  				end_time: json.schedules[4].end_time,
		  			}
		  		}
				
				if(!json.details[0].weapons[0].weapon) {
					data.details[0].weapons[0].name  = this.translation.coop_special_weapons[json.details[0].weapons[0].coop_special_weapon.image].name;
					data.details[0].weapons[0].image = baseURL + json.details[0].weapons[0].coop_special_weapon.image;
				} else {
					data.details[0].weapons[0].name  = this.translation.weapons[json.details[0].weapons[0].id].name;
					data.details[0].weapons[0].image = baseURL + json.details[0].weapons[0].weapon.image;
				}

				if(!json.details[0].weapons[1].weapon) {
					data.details[0].weapons[1].name  = this.translation.coop_special_weapons[json.details[0].weapons[1].coop_special_weapon.image].name;
					data.details[0].weapons[1].image = baseURL + json.details[0].weapons[1].coop_special_weapon.image;
				} else {
					data.details[0].weapons[1].name  = this.translation.weapons[json.details[0].weapons[1].id].name;
					data.details[0].weapons[1].image = baseURL + json.details[0].weapons[1].weapon.image;
				}

				if(!json.details[0].weapons[2].weapon) {
					data.details[0].weapons[2].name  = this.translation.coop_special_weapons[json.details[0].weapons[2].coop_special_weapon.image].name;
					data.details[0].weapons[2].image = baseURL + json.details[0].weapons[2].coop_special_weapon.image;
				} else {
					data.details[0].weapons[2].name  = this.translation.weapons[json.details[0].weapons[2].id].name;
					data.details[0].weapons[2].image = baseURL + json.details[0].weapons[2].weapon.image;
				}

				if(!json.details[0].weapons[3].weapon) {
					data.details[0].weapons[3].name  = this.translation.coop_special_weapons[json.details[0].weapons[3].coop_special_weapon.image].name;
					data.details[0].weapons[3].image = baseURL + json.details[0].weapons[3].coop_special_weapon.image;
				} else {
					data.details[0].weapons[3].name  = this.translation.weapons[json.details[0].weapons[3].id].name;
					data.details[0].weapons[3].image = baseURL + json.details[0].weapons[3].weapon.image;
				}
				
				if(!json.details[1].weapons[0].weapon) {
					data.details[1].weapons[0].name  = this.translation.coop_special_weapons[json.details[1].weapons[0].coop_special_weapon.image].name;
					data.details[1].weapons[0].image = baseURL + json.details[1].weapons[0].coop_special_weapon.image;
				} else {
					data.details[1].weapons[0].name  = this.translation.weapons[json.details[1].weapons[0].id].name;
					data.details[1].weapons[0].image = baseURL + json.details[1].weapons[0].weapon.image;
				}

				if(!json.details[1].weapons[1].weapon) {
					data.details[1].weapons[1].name  = this.translation.coop_special_weapons[json.details[1].weapons[1].coop_special_weapon.image].name;
					data.details[1].weapons[1].image = baseURL + json.details[1].weapons[1].coop_special_weapon.image;
				} else {
					data.details[1].weapons[1].name  = this.translation.weapons[json.details[1].weapons[1].id].name;
					data.details[1].weapons[1].image = baseURL + json.details[1].weapons[1].weapon.image;
				}

				if(!json.details[1].weapons[2].weapon) {
					data.details[1].weapons[2].name  = this.translation.coop_special_weapons[json.details[1].weapons[2].coop_special_weapon.image].name;
					data.details[1].weapons[2].image = baseURL + json.details[1].weapons[2].coop_special_weapon.image;
				} else {
					data.details[1].weapons[2].name  = this.translation.weapons[json.details[1].weapons[2].id].name;
					data.details[1].weapons[2].image = baseURL + json.details[1].weapons[2].weapon.image;
				}

				if(!json.details[1].weapons[3].weapon) {
					data.details[1].weapons[3].name  = this.translation.coop_special_weapons[json.details[1].weapons[3].coop_special_weapon.image].name;
					data.details[1].weapons[3].image = baseURL + json.details[1].weapons[3].coop_special_weapon.image;
				} else {
					data.details[1].weapons[3].name  = this.translation.weapons[json.details[1].weapons[3].id].name;
					data.details[1].weapons[3].image = baseURL + json.details[1].weapons[3].weapon.image;
				}

				return callback(data);
		  	});
	}
}

module.exports = {Client: Client}