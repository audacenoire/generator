const vampEmbrace = (name, generation, clan, sect) => {
    return {
        name,
        generation,
        clan,
        sect,
        introduce() {
            console.log(`I am ${name} of Clan ${clan}. My generation is ${generation} and I am aligned with the ${sect}.`)
        }
    }
}

const solace = vampEmbrace("Solace", 11, "Malkavian", "Anarchs")
const paleRider = vampEmbrace("The Pale Rider", 11, "Hecata", "Anarchs")
const blkWidow = vampEmbrace("BLKW1D0W", 12, "Malkavian", "Anarchs")
const hellHound = vampEmbrace("Hellhound", 11, "Hecata", "Anarchs")
const ccTurner = vampEmbrace("Cecilia Turner", 8, "Tremere", "Anarchs")

solace.introduce()
paleRider.introduce()
blkWidow.introduce()
hellHound.introduce()
ccTurner.introduce()

