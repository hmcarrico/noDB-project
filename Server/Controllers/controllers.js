let superheros = [
    {name: 'Black-Panther',
    url: 'https://cdn.vox-cdn.com/thumbor/kflbs19pDrdPetSAMaaFYsVUGJ0=/0x0:3000x2000/1200x800/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/58692603/black_panther.0.jpg',
    superPower: 'Superhuman strength, speed, stamina, reflexes, endurance, and durability',
    homePlanet: 'Earth',
    id: 1},

    {name: 'Daredevil',
    url: 'http://cdn-static.denofgeek.com/sites/denofgeek/files/styles/main_wide/public/7/79//daredevil_comics.jpg?itok=0FPkyEPC',
    superPower: 'Four senses were heightened to a superhuman level',
    homePlanet: 'Earth',
    id: 2},

    {name: 'Hawkeye',
    url: 'https://www.desktopbackground.org/t/2015/09/07/1007379_comics-marvel-hawkeye-house-of-m-wallpapers_1920x1080_h.jpg',
    superPower: 'Exceptional fencer, acrobat and marksman',
    homePlanet: 'Earth',
    id: 3},

    {name: 'Wolverine',
    url: 'http://marvel-avengers.com/wp-content/uploads/2015/12/X-Men-Wolverine-comic-758x379.jpg',
    superPower: 'Animal-keen senses, powerful regenerative ability known as a healing factor, and three retractable claws in each hand',
    homePlanet: 'Earth',
    id: 4},

    {name: 'Green Lantern',
    url: 'https://www.dccomics.com/sites/default/files/HJFLC_Cv1_R3_gallery_57fc3635f2c6a2.45566872.jpg',
    superPower: 'Comprehensible powers and abilities by harnessing willpower',
    homePlanet: 'Korugar ',
    id: 5},

    {name: 'Ghost Rider',
    url: 'https://static.comicvine.com/uploads/original/0/3347/1938896-ghost_rider_1.jpg',
    superPower: 'Superhuman strength and immunity to must forms of conventional injury.',
    homePlanet: 'Earth',
    id: 6},

    {name: 'Green Arrow',
    url: 'http://jonvilma.com/images/green-arrow-4.jpg',
    superPower: 'Very strong and highly skilled with a bow and arrow',
    homePlanet: 'Earth',
    id: 7},

    {name: 'Ant-Man',
    url: 'https://geekandsundry.com/wp-content/uploads/2015/06/antman-title-970x545.jpg',
    superPower: 'Shrink or Grow to size of choice',
    homePlanet: 'Earth',
    id: 8 },

    {name: 'Batman',
    url: 'https://www.screengeek.net/wp-content/uploads/2018/01/batman-dc-comics.jpg',
    superPower: ' genius intellect, physical prowess, martial arts abilities, detective skills, science and technology, and vast wealth',
    homePlanet: 'Earth',
    id: 9 },

    {name: 'Superman',
    url: 'https://fsmedia.imgix.net/e7/5c/e2/6e/48fb/4815/9cab/0bedf5b502d7/superman-dc-comics-75jpg.jpeg?rect=0%2C0%2C1920%2C960&auto=format%2Ccompress&w=650',
    superPower: 'Flight, superhuman strength, x-ray vision, super heat vision, cold breath, super-speed, enhanced hearing, and nigh-invulnerability',
    homePlanet: 'Krypton',
    id: 10 },
];

let id = 11;

module.exports = {
    read: (req,res) => {
        res.status(200).send(superheros);
    },
    create: (req, res) => {
        let {name, superPower, imgUrl, homePlanet} = req.body;
        let newHero = {
            name: name,
            url: imgUrl,
            superPower: superPower,
            homePlanet: homePlanet,
            id: id
        }
        id++
        superheros.push(newHero);
        res.status(200).send(superheros);
        },

    update: (req, res)=>{
        let {id} = req.params;
        let {name, superPower, homePlanet} = req.body;
        let index = superheros.findIndex(e=>e.id == id)
        let newHero = superheros[index];
        superheros[index] = {
            id: +id,
            name: name || newHero.name,
            url: newHero.url,
            superPower: superPower || newHero.superPower,
            homePlanet: homePlanet || newHero.homePlanet,
        } 
        res.status(200).send(superheros)
    },  
    delete: (req, res) => {
        let {id} = req.params;
        let index = superheros.findIndex(e=>e.id == id)
        if(index !== -1){
            superheros.splice(index, 1)
            res.status(200).send(superheros)
        } else{
            res.status(404).send('hero does not exist')
        }
    }
}