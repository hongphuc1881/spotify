import { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import { Songs } from "./Context";
function Playing() {
    const { song, DataSongs, handleSetSong } = useContext(Songs);

    const handleClickNext = () => {
        if (song.id === DataSongs.length - 1) {
            handleSetSong(0);
            return;
        }
        handleSetSong(song.id + 1);
    };
    const handleClickPrevious = () => {
        if (song.id === 0) {
            handleSetSong(DataSongs.length - 1);
            return;
        }
        handleSetSong(song.id - 1);
    };

    return (
        <div>
            <AudioPlayer
                className="player-music"
                src={song.url}
                showSkipControls={true}
                showJumpControls={true}
                onClickNext={handleClickNext}
                onClickPrevious={handleClickPrevious}
            />
        </div>
    );
}

export default Playing;
