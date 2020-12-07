import {useState,useRef} from 'react';
//Importing Styles
import "./styles/app.scss";
//Importing Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
//Importing Util
import data from "./data";

function App() {
  //Ref
  const audioRef = useRef(null);

  //States
  const[songs,setSongs] = useState(data());
  const[currentSong, setCurrentSong] = useState(songs[0]);
  const[isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime:0,
    duration: 0,
    animationPercentage: 0,
  });
  const[libraryStatus, setLibraryStatus] = useState(false);

  const timeUpdateHandler = (e) =>{
    const current = e.target.currentTime;
    const duration = e.target.duration;
    //Calculating Percentage
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animate = Math.round( (roundedCurrent/roundedDuration) * 100);
    console.log(animate);
    setSongInfo({...songInfo, currentTime: current, duration,animationPercentage:animate});
  };

  const songEndHandler = async() =>{
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex+1) % songs.length]);
    if(isPlaying) audioRef.current.play();
    
  };

  return (
    <div className={`App ${libraryStatus ? "library-active" : "" }`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong} />
      <Player isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying} 
        currentSong={currentSong} 
        audioRef = {audioRef}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
      <Library 
        audioRef={audioRef} 
        songs={songs} 
        setCurrentSong={setCurrentSong} 
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <audio 
        onTimeUpdate={timeUpdateHandler} 
        ref={audioRef} 
        src={currentSong.audio} 
        onLoadedMetadata={timeUpdateHandler}
        onEnded={songEndHandler}>
      </audio>
    </div>
  );
}

export default App;
