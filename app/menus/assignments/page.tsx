import { MdOutlineAssignment } from "react-icons/md";
import { IoAdd } from "react-icons/io5";

export default function Assignments() {
  return (
    <div className="">
      <div className="bg-cyan-100 rounded-4xl">
        <div className="p-4 flex justify-end">
          <button className="border border-black rounded-full p-2 text-3xl hover:bg-cyan-200 active:bg-cyan-300 transition-all">
            <IoAdd />
          </button>
        </div>
        <div className="h-96 flex flex-col justify-center items-center">
          <MdOutlineAssignment className="size-32" />
          <p>No assignment yet.</p>
        </div>
      </div>
    </div>
  );
}
