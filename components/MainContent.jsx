import axios from "axios";
import ArtistCard from "./ArtistCard";
import PlaylistCard from "./PlaylistCard";
import SongCard from "./SongCard";
import { UsersIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";


import { Button, Modal } from "flowbite-react";

function MainContent(props) {
  const { songs, playlists, artists } = props;
  // const [songs, setSongs] = useState([])
  // const [playlists, setPlaylists] = useState([])
  // const [artists, setArtists] = useState([])

  // let urls = [
  //   "https://8000-zacraytho-djangojamspro-p5yq4vj0c9s.ws-us93.gitpod.io/api/songs/",
  //   "https://8000-zacraytho-djangojamspro-p5yq4vj0c9s.ws-us93.gitpod.io/api/playlists/",
  //   "https://8000-zacraytho-djangojamspro-p5yq4vj0c9s.ws-us93.gitpod.io/api/artists/"
  // ];

  // useEffect(() => {
  //   axios.all(urls.map((url) => axios.get(url)))
  //     .then(axios.spread((songs, playlists, artists) => {

  //       setSongs([...songs.data])
  //       setPlaylists([...playlists.data])
  //       setArtists([...artists.data])

  //     }))
  // }, [])
  // console.log("songs", songs)
  // console.log("playlists", playlists)
  // console.log("artists", artists)
  // .get("https://8000-zacraytho-djangojamspro-p5yq4vj0c9s.ws-us93.gitpod.io/api/songs/")
  // .then(function (response) {
  //   let songs = response.data
  //   console.log(songs);
  // })
  // .catch(function (error) {
  //   // handle error
  //   console.log(error);
  // })
  // .finally(function () {
  //   // always executed
  // });

  return (
    <div className="bg-gradient-to-b from-yellow-900 to-slate-900 text-white flex-grow space-y-8 p-8">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">Good day!</h1>
        {/* TODO: Use an axios call to get your playlists and map over them here */}
        {/* You can also lift up this axios call so you can access it in Sidebar */}
        <div className="flex space-x-8">
          {playlists.slice(0, 3).map((playlist, index) => (
            <PlaylistCard playlist={playlist} key={index + playlist.name} />
          ))}
          {/* TODO: Remove the following line if pulling in playlists from api */}
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">Your Top Songs</h1>
        {/* TODO: Use an axios call to get your songs and map over them here */}
        <div className="flex space-x-8">
          {songs.slice(0, 5).map((song, index) => (
            <SongCard song={song} key={index + song.name} />

          ))}

          {/* TODO: Remove the following line if pulling in songs from api */}
        </div>
      </div>

      <div className="hidden 2xl:flex flex-col">
        <h1 className="text-2xl font-bold">Your Top Artists</h1>
        {/* TODO: Use an axios call to get your artists and map over them here */}
        {/* You can also lift up this axios call so you can access it in NowPlaying */}
        <div className="flex space-x-8">
          {artists.slice(0, 5).map((artist, index) => (

            <ArtistCard artist={artist} key={index + artist.name} />

          ))}
          {/* TODO: Remove the following line if pulling in artists from api */}
        </div>
      </div>

    </div>
  );
}

export default MainContent;
