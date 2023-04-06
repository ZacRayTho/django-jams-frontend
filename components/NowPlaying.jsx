import {
  BackwardIcon,
  ForwardIcon,
  MusicalNoteIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import {
  ArrowPathRoundedSquareIcon,
  ArrowsPointingOutIcon,
  DevicePhoneMobileIcon,
  FireIcon,
  HeartIcon,
  ListBulletIcon,
  MicrophoneIcon,
  RectangleStackIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/24/outline";
import axios from "axios";

function NowPlaying({ song }) {
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
    <div className="flex items-center justify-center mx-0 bottom-0 bg-slate-900 z-50 text-slate-50 h-24 border-t border-slate-500">
      <div className="flex space-x-2 mx-10">
        {/* Could also make a {song.album.art} here instead of the following icon */}
        <MusicalNoteIcon className="h-12 w-12 border-2 rounded-md" />
        <div className="flex flex-col items-center px-4">
          <p className="font-bold">{song?.name || "Calling Baton Rouge"}</p>
          <p>{song?.artist.name || "Garth Brooks"}</p>
        </div>
        <div className="flex items-center space-x-2 px-2">
          <HeartIcon className="h-6 w-6" />
          <RectangleStackIcon className="h-6 w-6" />
        </div>
      </div>

      <div className="flex flex-grow flex-col text-center items-center mx-auto">
        <div className="flex space-x-4">
          <FireIcon className="h-8 w-8 cursor-pointer" />
          <BackwardIcon className="h-8 w-8 cursor-pointer" />
          <PlayCircleIcon className="h-8 w-8 cursor-pointer" />
          <ForwardIcon className="h-8 w-8 cursor-pointer" />
          <ArrowPathRoundedSquareIcon className="h-8 w-8 cursor-pointer" />
        </div>
        <hr className="w-96 my-4 border-2 rounded-sm text-slate-50 cursor-pointer" />
      </div>

      <div className="flex items-center space-x-2 mx-10">
        <MicrophoneIcon className="h-6 w-6" />
        <ListBulletIcon className="h-6 w-6" />
        <DevicePhoneMobileIcon className="h-6 w-6" />
        <SpeakerWaveIcon className="h-6 w-6" />
        <hr className="w-20 mx-2 border-2 rounded-sm text-slate-50" />
        <ArrowsPointingOutIcon className="h-6 w-6" />
      </div>
    </div>
  );
}

export default NowPlaying;
