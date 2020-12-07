
const librarySong = ({song,songs,setCurrentSong, audioRef, isPlaying,setSongs}) => {
    const songSelectHandler = async () =>{
        await setCurrentSong(song);
        //Add Active State
        const newSongs = songs.map((s) =>{
            if(s.id === song.id){
                
                return {
                    ...s,
                    active:true,
                };
            }
            else{
               
                return {
                    ...s,
                    active: false,
                };
            }
        });

        setSongs(newSongs);
        if(isPlaying) audioRef.current.play();
    };

    return(
       <div className={`library-song ${song.active ? 'selected' : ''}`} onClick={songSelectHandler}>
           <img alt={song.name} src={song.cover}></img>
           <div className="song-description">
               <h3>{song.name}</h3>
               <h4>{song.artist}</h4>
           </div>
       </div>
    );
}


export default librarySong;