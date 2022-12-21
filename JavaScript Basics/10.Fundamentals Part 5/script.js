const myFavoriteBand = {
    name: 'BTS',
    nationality: 'Korea',
    genre: 'KPOP',
    members: 7,
    formed: 2014,
    split: 2022,
    albums: [first = {
        name: 'BTS For Ever',
        released: 2016,
    }, second = {
        name: 'BTS Its ending',
        released: 2022,
    }]
}
let bandInfo;

bandInfo = `The band ${myFavoriteBand.name} from ${myFavoriteBand.nationality} formed in ${myFavoriteBand.formed} was a extreme success on the genre ${myFavoriteBand.genre} and the ${myFavoriteBand.members} members were primed from their album: ${myFavoriteBand.albums[0].name} released in ${myFavoriteBand.albums[0].released}. As every good may end, the band splitted up in ${myFavoriteBand.split} after came out with the album: ${myFavoriteBand.albums[1].name} in ${myFavoriteBand.albums[1].released}! `

const section = document.querySelector('section');
const para = document.createElement('p');
para.textContent = bandInfo;
section.appendChild(para);