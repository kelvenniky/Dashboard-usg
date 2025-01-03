import { useState, useEffect } from "react";
import { CiSquareAlert } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { RiDeleteBin6Fill, RiEditBoxFill } from "react-icons/ri";

function Table() {
  const [active, setActive] = useState(null);
  const [labels, setLabels] = useState({
    relationNo: "No Of Relation",
    relationId: "Relation ID",
    firstName: "First Name",
    middleName: "Middle Name",
    surname: "Surname",
    gender: "Gender",
    dob: "Date Of Birth",
    phone: "Phone Number",
    actions: "Actions",
  });

  const [columnCount, setColumnCount] = useState(Object.keys(labels).length);

  useEffect(() => {
    // Load labels from local storage when the component mounts
    const savedLabels = JSON.parse(localStorage.getItem("personalDetailsLabels"));
    if (savedLabels) {
      setLabels(savedLabels);
      setColumnCount(Object.keys(savedLabels).length);
    }
  }, []);

  const handleLabelChange = (field, value) => {
    setLabels((prevLabels) => ({ ...prevLabels, [field]: value }));
  };

  const handleSaveLabels = () => {
    localStorage.setItem("personalDetailsLabels", JSON.stringify(labels));
    alert("Labels saved!");
  };

  const handleAddColumn = () => {
    const newColumnKey = `newColumn${columnCount + 1}`;
    setLabels((prevLabels) => ({
      ...prevLabels,
      [newColumnKey]: `New Column ${columnCount + 1}`,
    }));
    setColumnCount(columnCount + 1);
  };

  const handleDeleteColumn = (key) => {
    const newLabels = { ...labels };
    delete newLabels[key];
    setLabels(newLabels);
    setColumnCount(columnCount - 1);
  };

  const handleDetails = () => setActive("details");
  const handleDocuments = () => setActive("documents");
  const handleMandate = () => setActive("mandate");
  const handleNextOfKin = () => setActive("nextOfKin");
  const handleAML = () => setActive("aml");

  return (
    <div className="flex-grow mt-2 mx-4 gap-5">
      <div className="bg-white mb-2 flex shadow-md shadow-slate-300 h-20 border border-black">
        <div className="flex flex-row ml-5 gap-10 mt-5">
          <div onClick={handleDetails} className="flex flex-row gap-3">
            <CiSquareAlert className="mt-1" />
            <p className={`font-semibold ${active === "details" ? "text-violet-800" : "text-gray-500"} cursor-pointer`}>Personal Details</p>
          </div>
          <div onClick={handleDocuments} className="flex flex-row gap-3">
            <CiSquareAlert className="mt-1" />
            <p className={`font-semibold ${active === "documents" ? "text-violet-800" : "text-gray-500"} cursor-pointer`}>Documents</p>
          </div>
          <div onClick={handleMandate} className="flex flex-row gap-3">
            <CiSquareAlert className="mt-1" />
            <p className={`font-semibold ${active === "mandate" ? "text-violet-800" : "text-gray-500"} cursor-pointer`}>Mandate / Signatory</p>
          </div>
          <div onClick={handleNextOfKin} className="flex flex-row gap-3">
            <CiSquareAlert className="mt-1" />
            <p className={`font-semibold ${active === "nextOfKin" ? "text-violet-800" : "text-gray-500"} cursor-pointer`}>Next Of Kin</p>
          </div>
          <div onClick={handleAML} className="flex flex-row gap-3">
            <CiSquareAlert className="mt-1" />
            <p className={`font-semibold ${active === "aml" ? "text-violet-800" : "text-gray-500"} cursor-pointer`}>Anti Money Laundering</p>
          </div>
        </div>
      </div>

      {active === "details" && (
        <div className="bg-white flex-wrap shadow-md shadow-slate-300 py-1 px-1 border border-black">
          <div className="flex py-2 items-center justify-between gap-10">
            <div>
              <p>Personal Details</p>
            </div>
            <div className="flex gap-2">
              <button className="flex flex-row px-2 items-center gap-1 p-1 text-white text-sm bg-black rounded-sm" onClick={handleSaveLabels}>
                Save Labels
              </button>
              <button className="flex flex-row px-2 items-center gap-1 p-1 text-white text-sm bg-black rounded-sm" onClick={handleAddColumn}>
                <FaPlus />
                Add Column
              </button>
            </div>
          </div>
          <div className="overflow-x-auto"> {/* Enable horizontal scrolling */}
            <table className="min-w-full overflow-x-auto">
              <thead>
              <tr>
  {Object.keys(labels).map((key, index) => (
    <th className="border text-sm text-center px-2 py-3 relative" key={index} style={{ width: "10%" }}>
      <input
        type="text"
        value={labels[key]}
        onChange={(e) => handleLabelChange(key, e.target.value)}
        className="border-none w-full text-center"
      />
      <button 
        onClick={() => handleDeleteColumn(key)} 
        className="text-black absolute top-1 right-1" // Position the button
        title="Delete Column"
      >
        <RiDeleteBin6Fill size={10} className="text-sm" />
      </button>
    </th>
  ))}
</tr>
              </thead>
              <tbody>
                {/* <tr>
                  {Object.keys(labels).map((i, index) => (
                    <td className="border border-gray-300" key={index}></td>
                  ))}
                  <td className="border border-gray-300 justify-center flex">
                    <RiEditBoxFill color="blue" />
                    <RiDeleteBin6Fill color="red" />
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {active === "documents" && <div>Displaying Documents...</div>}
      {active === "mandate" && <div>Displaying Mandate / Signatory...</div>}
      {active === "nextOfKin" && <div>Displaying Next Of Kin...</div>}
      {active === "aml" && <div className="flex flex-col">
          <div className="flex flex-row" >
          <div className="bg-white flex-col flex  w-1/2  shadow-md shadow-slate-300 pt-3 pl-3  px-2 min-h-[230px] border border-black ">
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
            <div className="bg-white flex-col flex  w-1/2 ml-3 shadow-md shadow-slate-300 pt-3 pl-3  px-2 min-h-[230px] border border-black ">
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
          <div className="bg-white flex-col flex w-1/2 shadow-md shadow-slate-300 pt-3 pl-3  px-2 min-h-[230px] border border-black ">
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
              <div className="bg-white flex-col flex w-1/2 ml-3 shadow-md shadow-slate-300 pt-3 pl-3  px-2 min-h-[230px] border border-black ">
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
         


      
        </div>}
    </div>
  );
}

export default Table;