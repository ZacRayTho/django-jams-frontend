import { MusicalNoteIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

function SongCard({ song }) {
  return (
    <div className="flex flex-col text-slate-50 h-64 w-48 bg-slate-900/50 rounded-md mt-2 cursor-pointer">
      <MusicalNoteIcon className="flex mx-auto ml-6 mt-6 w-36 h-36 border-2 rounded-md" />
      {/* <Image
          src={song?.album.image}
          alt="Album art"
          height={100}
          width={100}
        /> */}
      <p className="text-center font-bold pt-6">{song?.name || "Song Name"}</p>
      <p className="text-center">{song?.artist.name || "Artist Name"}</p>
    </div>
  );
}

export default SongCard;
