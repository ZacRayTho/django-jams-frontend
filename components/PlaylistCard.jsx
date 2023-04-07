import { MusicalNoteIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

function PlaylistCard({ playlist }) {
  return (
    <div className="flex space-x-8 cursor-pointer">

      <div className="flex text-slate-50 bg-slate-900/50 w-80 h-24 rounded-md mt-2 ">
        <MusicalNoteIcon className="h-full border-2 rounded-md" />
        {/* <Image
        src={playlist.songs[0].album.image}
        alt="album art"
        height={100}
        width={100}
        /> */}
        <div className="flex items-center justify-between">
          <div>
            <p className="flex items-center pl-4 font-bold">
              {playlist?.name || "My Playlist"}
            </p>
          </div>
          {/* <div>
            <button
              className="bg-amber-800 py-2 px-4 rounded full"
            >
              Edit
            </button>
          </div> */}
        </div>
      </div>

    </div>
  );
}

export default PlaylistCard;
