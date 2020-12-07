import { v4 as uuidv4 } from "uuid";
function chillHop() {
  return [
    {
      name: "Space Race",
      cover:
        "https://www.free-stock-music.com/thumbnails/tubebackr-space-race.jpg",
      audio:"https://www.free-stock-music.com/music/tubebackr-space-race.mp3",
      artist:"Tubebackr",
      color:['#003361', '#350038'],
      soundCloud: "https://soundcloud.com/tubebackr",
      promoted: "https://www.free-stock-music.com",
      id: uuidv4(),
      active:true
    },
    {
      name: "RollerCoaster",
      cover:
        "https://www.free-stock-music.com/thumbnails/jayjen-rollercoaster.jpg",
      audio:"https://www.free-stock-music.com/music/jayjen-rollercoaster.mp3",
      artist:"JayJen & Enine",
      color:['#FFEC76', '#973D0A'],
      soundCloud: "https://soundcloud.com/jayjenmusic",
      promoted: "https://www.free-stock-music.com",
      id: uuidv4(),
      active:false
    },
    {
      name: "Colourful",
      cover:
        "https://www.free-stock-music.com/thumbnails/jayjen-colourful.jpg",
      audio:"https://www.free-stock-music.com/music/jayjen-colourful.mp3",
      artist:"JayJen",
      color:['#FFEC38', '#FFEC38'],
      soundCloud: "https://soundcloud.com/jayjenmusic",
      promoted: "https://www.free-stock-music.com",
      id: uuidv4(),
      active:false
    },
    {
      name: "Give it",
      cover:
        "https://www.free-stock-music.com/thumbnails/n3wport-give-it.jpg",
      audio:"https://www.free-stock-music.com/music/n3wport-give-it.mp3",
      artist:"N3wport",
      color:['#D2D5E4', '#4E5464'],
      soundCloud: "https://soundcloud.com/n3wp0rt",
      promoted: "https://www.free-stock-music.com",
      id: uuidv4(),
      active:false
    },
    {
      name: "Sun Down",
      cover:
        "https://www.free-stock-music.com/thumbnails/tubebackr-sun-down.jpg",
      audio:"https://www.free-stock-music.com/music/tubebackr-sun-down.mp3",
      artist:"Tubebackr",
      color:['#F2BD3E', '#58200E'],
      soundCloud: "https://soundcloud.com/tubebackr",
      promoted: "https://www.free-stock-music.com",
      id: uuidv4(),
      active:false
    },
    {
      name: "Embrace",
      cover:
        "https://www.free-stock-music.com/thumbnails/sappheiros-embrace.jpg",
      artist: "Sappheiros",
      audio: "https://www.free-stock-music.com/music/sappheiros-embrace.mp3",
      color: ['#FFF38C','#CE8444'],
      soundCloud: "https://soundcloud.com/sappheirosmusic",
      promoted:"https://www.free-stock-music.com",
      id: uuidv4(),
      active:false
    },
    {
      name: "Seashells",
      cover:
        "https://www.free-stock-music.com/thumbnails/scandinavianz-seashells.jpg",
      artist:"Scandinavianz",
      audio:"https://www.free-stock-music.com/music/scandinavianz-seashells.mp3",
      color:['#8B826C','#126D7A'],
      soundCloud: "https://soundcloud.com/scandinavianz",
      promoted: "https://www.free-stock-music.com",
      id: uuidv4(),
      active:false
    },
    

    //ADD MORE HERE
  ];
}

export default chillHop;