import { MusicalNoteIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import Image from "next/image";
import { useRef, useState } from "react";


function SongCard({ song }) {
  const [edit, updateEdit] = useState(false)
  const editRef = useRef(null)

  function patch(id) {

    axios
      .patch("https://8000-zacraytho-djangojamspro-p5yq4vj0c9s.ws-us93.gitpod.io/api/songs/" + id + "/", {
        name: editRef.current.value
      })
      .then(function (response) {
        alert("Song Edited! Please Refresh")
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  return (
    
      <div className="flex flex-col text-slate-50 h-64 w-48 bg-slate-900/50 rounded-md mt-2 cursor-pointer">
        <MusicalNoteIcon className="flex mx-auto ml-6 mt-6 w-36 h-36 border-2 rounded-md" />
        {/* <Image
          src={song?.album.image}
          alt="Album art"
          height={100}
          width={100}
        /> */}

        {edit ? <input type="text" placeholder="Update song Name" ref={editRef} className="text-black"/> : <p className="text-center font-bold pt-6">{song?.name || "Song Name"}</p>}
        <p className="text-center">{song?.artist[0] || "Artist Name"}</p>
        {edit ? 
        <button
        className="py-1 bg-amber-800"
        onClick={() => {
          patch(song.id)
          updateEdit(!edit)}}
        >
          Complete Edit
        </button>
        :
        <button
        className="py-1 bg-amber-800"
        onClick={() => {updateEdit(!edit)}}
        >
          Edit
        </button>}
      </div>
      
    
  );
}

export default SongCard;
