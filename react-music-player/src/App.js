import  {useState,useEffect} from 'react';
import Player from './components/Player';
function App() {
  const [songs]=useState([ 
  {
    title: "Forget me too ft. Halsey",
  artist: "Machine Gun Kelly",
  img_src: "./images/song-1.jpg",
  src: "./music/public_music_on-n-on.mp3"},
  {
    title: "song 2",
  artist: "Artist 2 ",
  img_src: "./images/song-1.jpg",
  src: "./music/public_music_somebody-new.mp3"},
 
])  ;
const [currentSongIndex,setCurrentSongIndex]=useState(0);
const [nextSongIndex,setNextSongIndex]=useState(currentSongIndex+1) ;
 useEffect ( ()=>{
 setNextSongIndex(()=>{
   if(currentSongIndex+1 > songs.length -1){
     return 0;
    } else {
       return currentSongIndex+1;
     }
      
 });},[currentSongIndex]);
 
  return (
    <div className="App"> 
    <Player 
    currentSongIndex={currentSongIndex}
    setCurrentSongIndex={setCurrentSongIndex}
    nextSongIndex={nextSongIndex}
    songs={songs}
    /> 
    
    
    </div>
  );
}
export default App;
