import { MdOutlineInsertPhoto } from "react-icons/md";
import { IoAdd } from "react-icons/io5";

export default function PhotoDump() {
  return (
    <div className="">
      <div className="bg-zinc-100 rounded-4xl">
        <div className="p-4 flex justify-end">
          <button className="border border-black rounded-full p-2 text-3xl hover:bg-zinc-200 active:bg-zinc-300 transition-all">
            <IoAdd />
          </button>
        </div>
        <div className="h-96 flex flex-col justify-center items-center">
          <MdOutlineInsertPhoto className="size-32" />
          <p>No photos yet.</p>
        </div>
      </div>
    </div>
  );
}
