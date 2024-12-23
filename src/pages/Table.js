import { useState } from "react";
import { CiSquareAlert } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { RiEditBoxFill } from "react-icons/ri";





function Table() {
  const [active, setActive] = useState(null)


 

  const handleDetails = () => {
    setActive("details");
  };

  const handleMandate = () => {
    setActive("mandate");
    // Add navigate logic for Mandate/Signatory here
  };

  const handleDocuments = () => {
    setActive("documents");
    // Add navigate logic for Documents here
  };

  const handleNextOfKin = () => {
    setActive("nextOfKin");
    // Add navigate logic for Next Of Kin here
  };

  const handleAML = () => {
    setActive("aml");
    // Add navigate logic for Anti Money Laundering here
  };

  

    return (
      <div className="flex mt-2 flex-col gap-5  ">
        <div className="bg-white  gap-y-7 flex w-[1000px]  shadow-md shadow-slate-300  h-20 border border-black ">
            <div className="flex flex-row ml-5 gap-10 mt-5 ">
               
                <div onClick={handleDetails} className=" flex flex-row gap-3  ">
                <CiSquareAlert className="mt-1" />
                <p className={`font-semibold ${active === "details" ? "text-violet-800" : "text-gray-500"} cursor-pointer`} >Personal Details</p>
                </div>
                <div onClick={handleDocuments} className=" flex flex-row gap-3  ">
                <CiSquareAlert className="mt-1" />
                <p className={`font-semibold ${active === "documents" ? "text-violet-800" : "text-gray-500"} cursor-pointer`} >Documents</p>
                </div>
                <div onClick={handleMandate} className=" flex flex-row gap-3  ">
                <CiSquareAlert className="mt-1" />
                <p className={`font-semibold ${active === "mandate" ? "text-violet-800" : "text-gray-500"} cursor-pointer`} >Mandate / Signatory</p>
                </div>
                <div onClick={handleNextOfKin} className=" flex flex-row gap-3  ">
                <CiSquareAlert className="mt-1" />
                <p className={`font-semibold ${active === "nextOfKin" ? "text-violet-800" : "text-gray-500"} cursor-pointer`} >Next Of Kin</p>
                </div>
                <div onClick={handleAML} className=" flex flex-row gap-3  ">
                <CiSquareAlert className="mt-1" />
                <p className={`font-semibold ${active === "aml" ? "text-violet-800" : "text-gray-500"} cursor-pointer`} >Anti Money Laundering</p>
                </div>
                
                
                
            </div>
            
           
        </div>
        {active === "details" &&  
          <div className="bg-white flex-col flex w-[1000px] shadow-md shadow-slate-300 pt-3 pl-3  px-2 h-[460px] border border-black ">
          <div className="flex flex-row justify-between   ">
             <div>
             <p>Personal Details</p>
             </div>
              <div className="flex flex-row items-center gap-1  ">
              <button className=" flex flex-row px-2 items-center gap-1 p-1 text-white text-sm bg-black rounded-sm">
              <FaPlus />
                  Add Column</button>
              </div>
              
          </div>
          <table className=" text-md  mt-5 py-2">
            <thead >
              <tr >
                <th className="border">No Of Relation</th>
                <th className="border">Relation ID</th>
                <th className="border">First Name</th>
                <th className="border">Middle Name</th>
                <th className="border">Surname</th>
                <th className="border" >Gender</th>
                <th className="border">Date Of Birth</th>
                <th className="border">Phone Number</th>
                <th className="border">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr >
              <td className="border border-gray-300"  ></td>
              <td className="border border-gray-300"  ></td>
              <td className="border border-gray-300"  ></td>
              <td className="border border-gray-300"  ></td>
              <td className="border border-gray-300"  ></td>
              <td className="border border-gray-300"  ></td>
              <td className="border border-gray-300"  ></td>
              <td className="border border-gray-300"  ></td>
              <td className="border border-gray-300 flex flex-row gap-1 justify-center"  >
              <RiEditBoxFill color="blue" />
              <RiDeleteBin6Fill color="red" />

              </td>

              
              </tr>
            </tbody>
          </table>
      </div>
         }
        {active === "documents" && <div>Displaying Documents...</div>}
        {active === "mandate" && <div>Displaying Mandate / Signatory...</div>}
        {active === "nextOfKin" && <div>Displaying Next Of Kin...</div>}
        {active === "aml" && 
        <div className="flex flex-col ">
          <div className="flex flex-row" >
          <div className="bg-white flex-col flex  w-[495px]  shadow-md shadow-slate-300 pt-3 pl-3  px-2 h-[230px] border border-black ">
            <div className="flex flex-row justify-between">
                <p>Source Of Wealth</p>
                <div className="flex flex-row items-center gap-1  ">
              <button className=" flex flex-row px-2 items-center gap-1 p-1 text-white text-sm bg-black rounded-sm">
              <FaPlus />
                  Add Column</button>
              </div>

              </div>

              <table className="mt-3" >
                <thead className="border">
                  <tr >
                    <th className=" border">Code</th>
                    <th className=" border">Description</th>
                    <th className=" border">Wealth Value</th>
                  </tr>
                  

                </thead>
              </table>
            </div>
            <div className="bg-white flex-col flex  w-[495px] ml-3 shadow-md shadow-slate-300 pt-3 pl-3  px-2 h-[230px] border border-black ">
            <div className="flex flex-row justify-between">
                <p>Source Of Fund</p>
                <div className="flex flex-row items-center gap-1  ">
              <button className=" flex flex-row px-2 items-center gap-1 p-1 text-white text-sm bg-black rounded-sm">
              <FaPlus />
                  Add Column</button>
              </div>
              

              </div>
              
              <table className="mt-3" >
                <thead className="border">
                  <tr >
                    <th className=" border">Code</th>
                    <th className=" border">Description</th>
                    <th className=" border">Check Box</th>
                  </tr>
                  

                </thead>
              </table>

              <div className="flex flex-row items-center gap-1   ">
              <button className=" flex flex-row px-2 items-center gap-1 p-1 text-white text-sm bg-black rounded-sm">
              <FaPlus />
                  Add Column</button>
              </div>


              
            </div>

          </div>
          <div className="flex flex-row mt-3">
          <div className="bg-white flex-col flex w-[495px] shadow-md shadow-slate-300 pt-3 pl-3  px-2 h-[230px] border border-black ">
          <div className="flex flex-row justify-between">
                <p>Transaction Type</p>
                <div className="flex flex-row items-center gap-1  ">
              <button className=" flex flex-row px-2 items-center gap-1 p-1 text-white text-sm bg-black rounded-sm">
              <FaPlus />
                  Add Column</button>
              </div>

              </div>
              <table className="mt-3" >
                <thead className="border">
                  <tr >
                    <th className=" border">Code</th>
                    <th className=" border">Description</th>
                    <th className=" border">Check</th>
                  </tr>
                  

                </thead>
              </table>
              </div>
              <div className="bg-white flex-col flex w-[495px] ml-3 shadow-md shadow-slate-300 pt-3 pl-3  px-2 h-[230px] border border-black ">
              <div className="flex flex-row justify-between border-b-2 border-gray-200 pb-1">
                <p className="text-gray-400 font-semibold">Other Details</p>
                <div className="flex flex-row items-center gap-1  ">
              <button className=" flex flex-row px-2 items-center gap-1 p-1 text-white text-sm bg-black rounded-sm">
              <FaPlus />
                  Add Row</button>
              </div>

              </div>
              <div className="mt-7">
                <div className="flex flex-row justify-between mb-1">
                  <p className="text-gray-500 font-semibold">No of WithDrawals Per Month</p>
                  <input className=" border px-2 py-1 rounded-md"/>
                </div>
                <div className="flex flex-row justify-between mb-1">
                  <p className="text-gray-500 font-semibold">Amt of WithDrawals Per Month</p>
                  <input className=" border px-2 py-1 rounded-md"/>
                </div>
                <div className="flex flex-row justify-between mb-1">
                  <p className="text-gray-500 font-semibold">No of Deposits Per Month</p>
                  <input className=" border px-2 py-1 rounded-md"/>
                </div>
                <div className="flex flex-row justify-between mb-1">
                  <p className="text-gray-500 font-semibold">No of WithDrawals Per Month</p>
                  <input className=" border px-2 py-1 rounded-md"/>
                </div>
              </div>
              </div>
          </div>
         


        </div>
        }
        </div>
       
    );
  }
  
  export default Table;
  