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
    actions: "Actions"
  });

  useEffect(() => {
    // Load labels from local storage when the component mounts
    const savedLabels = JSON.parse(localStorage.getItem("personalDetailsLabels"));
    if (savedLabels) {
      setLabels(savedLabels);
    }
  }, []);

  const handleLabelChange = (field, value) => {
    setLabels(prevLabels => ({ ...prevLabels, [field]: value }));
  };

  const handleSaveLabels = () => {
    localStorage.setItem("personalDetailsLabels", JSON.stringify(labels));
    alert("Labels saved!");
  };

  const handleDetails = () => {
    setActive("details");
  };

  const handleDocuments = () => {
    setActive("documents");
  };

  const handleMandate = () => {
    setActive("mandate");
  };

  const handleNextOfKin = () => {
    setActive("nextOfKin");
  };

  const handleAML = () => {
    setActive("aml");
  };

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
        <div className="bg-white flex-wrap  shadow-md shadow-slate-300 pt-3 px-1 border border-black">
          <div className="flex  items-center justify-between gap-10">
            <div>
              <p>Personal Details</p>
            </div>
            
              <button className="flex flex-row px-2 items-center gap-1 p-1 text-white text-sm bg-black rounded-sm" onClick={handleSaveLabels}>
                <FaPlus />
                Save Labels
              </button>
          
          </div>
          <div className="">
          <table className="w-full ">
            <thead>
              <tr>
                {Object.keys(labels).map((key, index) => (
                  <th className="border " key={index}>
                    <input
                      type="text"
                      value={labels[key]}
                      onChange={(e) => handleLabelChange(key, e.target.value)}
                      className="border-none focus:outline-none"
                    />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300"></td>
                <td className="border border-gray-300"></td>
                <td className="border border-gray-300"></td>
                <td className="border border-gray-300"></td>
                <td className="border border-gray-300"></td>
                <td className="border border-gray-300"></td>
                <td className="border border-gray-300"></td>
                <td className="border border-gray-300"></td>
                <td className="border border-gray-300 flex flex-row gap-1 justify-center">
                  <RiEditBoxFill color="blue" />
                  <RiDeleteBin6Fill color="red" />
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      )}
      {active === "documents" && <div>Displaying Documents...</div>}
      {active === "mandate" && <div>Displaying Mandate / Signatory...</div>}
      {active === "nextOfKin" && <div>Displaying Next Of Kin...</div>}
      {active === "aml" && (
        <div className="flex flex-col">
          {/* AML Section Code Here */}
        </div>
      )}
    </div>
  );
}

export default Table;