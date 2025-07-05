import { MdEventAvailable } from "react-icons/md";
import { IoAdd } from "react-icons/io5";

export default function Events() {
  return (
    <div className="">
      <div className="bg-pink-100 rounded-4xl">
        <div className="p-4 flex justify-end">
          <button className="border border-black rounded-full p-2 text-3xl hover:bg-pink-200 active:bg-pink-300 transition-all">
            <IoAdd />
          </button>
        </div>
        <div className="h-96 flex flex-col justify-center items-center">
          <MdEventAvailable className="size-32" />
          <p>No events yet.</p>
        </div>
      </div>
    </div>
  );
}
