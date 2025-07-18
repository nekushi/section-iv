import { MdOutlineGroup } from "react-icons/md";
import { IoAdd } from "react-icons/io5";

export default function Members() {
  return (
    <div className="">
      <div className="bg-fuchsia-100 rounded-4xl">
        <div className="p-4 flex justify-end">
          <button className="border border-black rounded-full p-2 text-3xl hover:bg-fuchsia-200 active:bg-fuchsia-300 transition-all">
            <IoAdd />
          </button>
        </div>
        <div className="h-96 flex flex-col justify-center items-center">
          <MdOutlineGroup className="size-32" />
          <p>No members yet.</p>
        </div>
      </div>
    </div>
  );
}
