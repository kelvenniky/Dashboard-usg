import { CiSquareAlert } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";



function PersonalDetails() {
    return (
      <div className="flex mt-2 flex-col gap-5  ">
        <div className="bg-white flex-col  flex w-[1000px] shadow-md shadow-slate-300 h-32 border border-black ">
            <div className="flex flex-row ml-5 gap-10 mt-5 ">
                <div className=" flex flex-row gap-3  ">
                <CiSquareAlert className="mt-1" />
                <p >First Name</p>
                </div>
                <div className=" flex flex-row gap-3  ">
                <CiSquareAlert className="mt-1" />
                <p>Last Name</p>
                </div>
                <div className=" flex flex-row gap-3  ">
                <CiSquareAlert className="mt-1" />
                <p>Date Of Birth</p>
                </div>
                <div className=" flex flex-row gap-3  ">
                <CiSquareAlert className="mt-1" />
                <p>Gender</p>
                </div>
                <div className=" flex flex-row gap-3  ">
                <CiSquareAlert className="mt-1" />
                <p>Marital Status</p>
                </div>
                <div className=" flex flex-row gap-3  ">
                <CiSquareAlert className="mt-1" />
                <p>Status Role</p>
                </div>
                <div className="bg-black ml-10 flex items-center justify-center rounded-md p-2">
                <FaPlus color="white" />
                </div>
                



                
            </div>
            <div className="flex flex-row ml-5 gap-10 mt-5 ">
                <div className=" flex flex-row gap-3  ">
                <CiSquareAlert className="mt-1" />
                <p >Email</p>
                </div>
                <div className=" flex flex-row gap-3  ">
                <CiSquareAlert className="mt-1" />
                <p>Nationality</p>
                </div>
                <div className=" flex flex-row gap-3  ">
                <CiSquareAlert className="mt-1" />
                <p>Phone Number</p>
                </div>
                <div className=" flex flex-row gap-3  ">
                <CiSquareAlert className="mt-1" />
                <p>Department</p>
                </div>
                <div className=" flex flex-row gap-3  ">
                <CiSquareAlert className="mt-1" />
                <p>Employee ID</p>
                </div>
                <div className=" flex flex-row gap-3  ">
                <CiSquareAlert className="mt-1" />
                <p>Department ID</p>
                </div>
               

            </div>

        </div>
        <div className="bg-white flex-col flex w-[1000px] shadow-md shadow-slate-300 pt-3 pl-3  h-[420px] border border-black ">
            <div className="flex flex-row justify-between   ">
               <div>
               <p>Personal Details</p>
               </div>
                <div className="flex flex-row items-center gap-1 mr-3 ">
                <button className=" flex flex-row px-2 items-center gap-1 p-1 text-white text-sm bg-black rounded-sm">
                <FaPlus />
                    Add Column</button>
                </div>
                
            </div>
        </div>
      </div>
       
    );
  }
  
  export default PersonalDetails;
  