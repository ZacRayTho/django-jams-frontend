import Image from "next/image";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  HeartIcon,
} from "@heroicons/react/20/solid";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import Modal from "./Modal";
import { useRef } from "react";

function Sidebar(props) {
  const { songs, playlists, artists, setPlaylists } = props;
  const inputRef = useRef(null)
  // axios
  //   .get("https://8000-zacraytho-djangojamspro-p5yq4vj0c9s.ws-us93.gitpod.io/api/songs/")
  //   .then(function (response) {
  //     // handle success
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   })
  //   .finally(function () {
  //     // always executed
  //   });
  function post() {

    axios
      .post("https://8000-zacraytho-djangojamspro-p5yq4vj0c9s.ws-us93.gitpod.io/api/playlists/", {
        name: inputRef.current.value
      })
      .then(function (response) {
        alert("Playlist Created! Please Refresh")
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  function destroy(id) {

    axios
      .delete("https://8000-zacraytho-djangojamspro-p5yq4vj0c9s.ws-us93.gitpod.io/api/playlists/" + id + "/")
      .then(function (response) {
        alert("Playlist destroyed! Please Refresh")
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }


  return (
    <div className="bg-slate-900 p-4 h-screen w-[15%]">
      <Image
        src="/images/spotify.png"
        alt="spotify logo"
        height={60}
        width={180}
        className="flex mx-auto"
      />

      <div className="text-slate-50 px-2 py-6 space-y-4">
        <div className="flex items-center cursor-pointer">
          <HomeIcon className="h-8 w-8" />
          <p className="pl-2 font-bold">Home</p>
        </div>
        <div className="flex items-center cursor-pointer">
          <MagnifyingGlassIcon className="h-8 w-8" />
          <p className="pl-2 font-bold">Search</p>
        </div>
        <div className="flex items-center cursor-pointer">
          <Bars3Icon className="h-8 w-8" />
          <p className="pl-2 font-bold">Your Library</p>
        </div>

        <input type="text" placeholder="New Playlist Name" className="text-black" ref={inputRef} />
        <button
          className="flex items-center cursor-pointer"
          onClick={post}
          type="button">
          <div className="flex items-center">
            <PlusCircleIcon className="h-8 w-8" />
            <p className="pl-2 font-bold">Create Playlist</p>
          </div>
        </button>

        <div className="flex items-center cursor-pointer">
          <HeartIcon className="h-8 w-8 border-2 rounded-md" />
          <p className="pl-2 font-bold">Liked Songs</p>
        </div>
      </div>

      <hr className="bg-slate-50 my-4" />

      <div className="text-slate-50 flex flex-col pl-1 space-y-4">
        <p className="font-bold">Playlists</p>
        {playlists.map((playlist, index) => (
          <div className="flex items-center justify-between">
            <p
              key={index + playlist.name}
              >
              {playlist.name}
            </p>
            <button
            className="bg-amber-800 py-2 px-4 rounded-full"
              onClick={() => destroy(playlist.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <Modal />

    </div>
  );
}

export default Sidebar;
