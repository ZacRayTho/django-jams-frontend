import { MusicalNoteIcon } from "@heroicons/react/24/outline";

function ArtistCard({ artist }) {
  return (
    <div className="flex flex-col text-slate-50 h-56 w-48 bg-slate-900/70 rounded-md mt-2 cursor-pointer">
      <MusicalNoteIcon className="flex mx-auto ml-6 mt-6 w-36 h-36 border-2 rounded-md" />
      {/* <Image
      src={artist?.image}
      alt="Artist image"
      height={100}
      width={100}
    /> */}
      <p className="text-center font-bold pt-6">
        {artist?.name || "Artist Name"}
      </p>
    </div>
  );
}

export default ArtistCard;
