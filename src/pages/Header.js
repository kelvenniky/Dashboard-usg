import { CiSquareAlert } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";



function Header() {
    return (
      <div className="flex mt-2 flex-col gap-5  ">
        <div className="bg-white flex-col gap-y-7 flex w-[1000px]  shadow-md shadow-slate-300  h-20 border border-black ">
            <div className="flex flex-row ml-5 gap-20 mt-5 ">
                <div className=" flex flex-row gap-3  ">
                <CiSquareAlert className="mt-1" />
                <p >Member Account Name</p>
                </div>
                <div className=" flex flex-row gap-3  ">
                <CiSquareAlert className="mt-1" />
                <p>Member ID</p>
                </div>
                <div className=" flex flex-row gap-3  ">
                <CiSquareAlert className="mt-1" />
                <p>Member Category</p>
                </div>
                <div className=" flex flex-row gap-3  ">
                <CiSquareAlert className="mt-1" />
                <p>Reciept Code</p>
                </div>
                <div className="bg-black flex items-center justify-center rounded-md p-2">
                <FaPlus color="white" />
                </div>
                
            </div>
           
        </div>
        <div className="bg-white flex w-[1000px]  shadow-md shadow-slate-300 h-[465px] border border-black ">
        </div>
      </div>
       
    );
  }
  
  export default Header;
  