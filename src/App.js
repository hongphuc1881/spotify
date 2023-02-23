import { useState } from 'react';
import './App.css';
import { Songs } from './component/Context';
import DetailSong from './component/DetailSong';
import ListSong from './component/ListSong';
import Navbar from './component/Navbar';
import Playing from './component/Playing';
import DataSongs from "./data/songs.json";


function App() {
  const [song, setSong] = useState(DataSongs[0]);
  const handleSetSong = (idSong) => {
    const song = DataSongs.find(song => song.id === idSong)
    setSong(song)
  }
  return (
    <div>
    <Songs.Provider value={{DataSongs, song, handleSetSong}}>
        <Navbar />
        <div className='grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden'>
          <DetailSong />
          <ListSong />
        </div>
        <Playing/>
    </Songs.Provider>
    </div>
  );
}

export default App;
