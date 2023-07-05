

		let trait = [

		"aggressive",
		"angry",
		"anxious",
		"apathetic",
		"arrogant",
		"athletic",
		"awkward",
		"beautiful",
		"brawny",
		"careless",
		"charming",
		"chubby",
		"clever",
		"clumsy",
		"confident",
		"cowardly",
		"curious",
		"deceptive",
		"diplomatic",
		"excited",
		"fat",
		"foolish",
		"funny",
		"graceful",
		"handsome",
		"happy",
		"hideous",
		"honest",
		"honorable",
		"hostile",
		"humble",
		"hyperactive",
		"inexperienced",
		"lazy",
		"mean",
		"muscular",
		"nice",
		"passionate",
		"peaceful",
		"polite",
		"poor",
		"proud",
		"rude",
		"sad",
		"sarcastic",
		"scared",
		"serious",
		"short",
		"skinny",
		"svelte",
		"tall",
		"thin",
		"trustworthy",
		"ugly",
		"wealthy",
		"wiry",
		"wise"
		]

		let race = [
		"dark elf" ,
		"dragonborn",
		"dwarf",
		"elf",
		"human",
		"half-elf",
		"halfling", 
		"orc",
		"tabaxi",
		"tiefling",
		]


		let playclass = [
		"warrior",
		"rogue",
		"wizard",
		"warlock",
		"sorcerer",
		"barbarian",
		"cleric",
		"druid",
		"paladin",
		"bard"
		]


		let pickedtrait=trait[Math.floor(Math.random() * trait.length)]
		let pickedrace=race[Math.floor(Math.random() * race.length)]
		let pickedplayclass=playclass[Math.floor(Math.random() * playclass.length)]

		let vowelcheck = function(word) {
			let vowels = [ "a", "e", "i", "o", "u"]
			if (vowels.includes(word[0])) {
				return "An"
			} else {
				return "A" 
			}
		}

		let generate = () => {
			let pickedrace = race[Math.floor(Math.random() * race.length)]
			let pickedtrait1 = trait[Math.floor(Math.random() * trait.length)]
			let pickedtrait2 = trait[Math.floor(Math.random() * trait.length)]
			let pickedplayclass = playclass[Math.floor(Math.random() * playclass.length)]
	
			let description = document.querySelector('.character-description')
			description.classList.remove('hidden')
			description.textContent = vowelcheck(pickedtrait1) +" "+ pickedtrait1 + ", " + pickedtrait2 + " " + pickedrace + " " + pickedplayclass
		}
	

		const generator = document.querySelector("#generator"); 
		generator.addEventListener("click", generate)	