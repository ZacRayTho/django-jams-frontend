import Image from "next/image";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  HeartIcon,
} from "@heroicons/react/20/solid";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import axios from "axios";

function Sidebar() {
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
        <div className="flex items-center cursor-pointer pt-6">
          <PlusCircleIcon className="h-8 w-8" />
          <p className="pl-2 font-bold">Create Playlist</p>
        </div>
        <div className="flex items-center cursor-pointer">
          <HeartIcon className="h-8 w-8 border-2 rounded-md" />
          <p className="pl-2 font-bold">Liked Songs</p>
        </div>
      </div>

      <hr className="bg-slate-50 my-4" />

      <div className="text-slate-50 flex flex-col pl-1 space-y-4">
        <p className="font-bold">Playlists</p>
        {/* {playlists.map((list) => {
          <p>{list.name}</p>;
        })} */}
      </div>
    </div>
  );
}

export default Sidebar;
