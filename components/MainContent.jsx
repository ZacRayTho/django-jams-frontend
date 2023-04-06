import axios from "axios";
import ArtistCard from "./ArtistCard";
import PlaylistCard from "./PlaylistCard";
import SongCard from "./SongCard";

function MainContent() {
  axios
    .get("/user?ID=12345")
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });

  return (
    <div className="bg-gradient-to-b from-yellow-900 to-slate-900 text-white flex-grow space-y-8 p-8">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">Good day!</h1>
        {/* TODO: Use an axios call to get your playlists and map over them here */}
        {/* You can also lift up this axios call so you can access it in Sidebar */}
        <div className="flex space-x-8">
          {/* {playlists.slice(0, 3).map((playlist) => (
          <PlaylistCard playlist={playlist} />
        ))} */}
          {/* TODO: Remove the following line if pulling in playlists from api */}
          <PlaylistCard />
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">Your Top Songs</h1>
        {/* TODO: Use an axios call to get your songs and map over them here */}
        <div className="flex space-x-8">
          {/* {songs.slice(0, 5).map((playlist) => (
          <SongCard song={song} />
        ))} */}
          {/* TODO: Remove the following line if pulling in songs from api */}
          <SongCard />
        </div>
      </div>

      <div className="hidden 2xl:flex flex-col">
        <h1 className="text-2xl font-bold">Your Top Artists</h1>
        {/* TODO: Use an axios call to get your artists and map over them here */}
        {/* You can also lift up this axios call so you can access it in NowPlaying */}
        <div className="flex space-x-8">
          {/* {artists.slice(0, 5).map((artist) => (
          <ArtistCard artist={artist} />
        ))} */}
          {/* TODO: Remove the following line if pulling in artists from api */}
          <ArtistCard />
        </div>
      </div>
    </div>
  );
}

export default MainContent;
