

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
	"wise",
	"deranged",
	"selfish",
	"treasonous",
	"monstrous",
	"dishonest",
	"sexy", 
	"repulsive",
	"perverse",
	"hedonistic",
	"paranoid",
	"self-absorbed"
	]

	let sect = [
	"Camarilla",
	"Anarch",
	"Sabbat",
	"Autarkis"
	]


	let playclan = [
	"Ventrue",
	"Toreador",
	"Tremere",
	"Gangrel",
	"Malkavian",
	"Brujah",
	"Nosferatu",
	"Hecata",
	"Lasombra",
	"Tzimisce",
	"Banu Haqim",
	"Ravnos",
	"Setite"
	]


	let pickedtrait1=trait[Math.floor(Math.random() * trait.length)]
	let pickedtrait2=trait[Math.floor(Math.random() * trait.length)]
	
	let pickedsect=sect[Math.floor(Math.random() * sect.length)]
	let pickedplayclan=playclan[Math.floor(Math.random() * playclan.length)]

	let vowelcheck = function(word) {
		let vowels = [ "a", "e", "i", "o", "u"]
		if (vowels.includes(word[0])) {
			return "An"
		} else {
			return "A" 
		}
	}


	console.log(vowelcheck(pickedtrait1) +" "+ pickedtrait1 + ", " + pickedtrait2 + " " + pickedsect + " " + pickedplayclan);
	
/* Template Literal structure

This vampire is a [num >3 && <=12] generation [age = Elder, Ancilla, Neonate or Fledgling] [clan] [pronoun] [is/are] [sect = Camarilla, Sabbat, or Anarch] 


*/