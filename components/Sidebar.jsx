import Image from "next/image";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  HeartIcon,
} from "@heroicons/react/20/solid";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import axios from "axios";

function Sidebar(props) {
  const { songs, playlists, artists } = props;
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
        name: "test"
      })
      .then(function (response) {
        // handle success
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
        <button
          data-modal-target="authentication-modal"
          data-modal-toggle="authentication-modal"
          type="button">
          <div onClick={() => { console.log(playlists) }} className="flex items-center cursor-pointer pt-6">
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
          <p key={index + playlist.name}>{playlist.name}</p>
        ))}
      </div>

      <>
        {/* Main modal */}
        <div
          id="authentication-modal"
          tabIndex={-1}
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full"
        >
          <div className="relative w-full h-full max-w-md md:h-auto">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-hide="authentication-modal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                  Name your playlist
                </h3>
                <form className="space-y-6" action="#">
                  <div>
                    <input
                      type="text"
                      name="playlist"
                      id="playlist"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="ex: Dope Beats"
                      required=""
                    />
                  </div>
                  <button
                    onClick={post}
                    data-modal-target="authentication-modal"
                    data-modal-toggle="authentication-modal"
                    className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                  >
                    Create Playlist
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
      {/*  {end modal}  */}
    </div>
  );
}

export default Sidebar;
