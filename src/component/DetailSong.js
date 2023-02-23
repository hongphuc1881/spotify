import { useContext } from "react";
import { Songs } from "./Context";

function DetailSong() {
    const {song} = useContext(Songs)
   
    return ( 
        <div className="col-span-1 p-3">
            <h2 className="text-cyan-500 font-bold">Now playing</h2>
            <h3 className="text-gray-500 text-xl">{song.name}</h3>
            <div className="w-[240px] m-auto mt-3">
                <img className="w-full" src={song.links.images[0].url} alt="avatar" />
            </div>
            <div className="flex justify-evenly items-center mt-3">
                <img className="w-[70px] h-[70px] rounded-[50%]" src={song.links.images[1].url} alt="avatar"/>
                <span className="text-xl text-white">{song.author}</span>
            </div>
        </div>
     );
}

export default DetailSong;