import { IoMdHome } from "react-icons/io";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { MdBarChart } from "react-icons/md";
import { IoDocumentOutline } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
import { GiMoneyStack } from "react-icons/gi";
import { BsTable } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SideNav() {
  const navigate = useNavigate();
  const [active, setActive] = useState(null); // State to track the active menu item

  const handleHeader = () => {
    setActive("header");
    navigate('/');
  };

  const handleDetails = () => {
    setActive("details");
    navigate('/details');
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
    setActive("antiMoneyLaundering");
    // Add navigate logic for Anti Money Laundering here
  };

  const handleTable = () => {
    
    setActive("table");
    navigate('/table')
    // Add navigate logic for Table here
  };

  return (
    <div>
      <div className="flex flex-col h-screen w-64 bg-white shadow-md shadow-slate-500 mr-5">
        <div className="justify-center flex pt-8 border-b-2">
          <p className="pb-3 text-4xl font-semibold hover:text-violet-800 cursor-pointer">x.100</p>
        </div>
        <div className="mt-5 ml-7">
          <div
            onClick={handleHeader}
            className={`flex flex-row py-2 items-center gap-2 hover:border-r-2 border-violet-800 rounded-ld ${active === "header" ? "text-violet-800" : "text-gray-500"}`}
          >
            <IoMdHome color={active === "header" ? "#6B21A8" : "gray"} />
            <p className={`font-semibold ${active === "header" ? "text-violet-800" : "text-gray-500"} cursor-pointer`}>Header</p>
          </div>

          <div
            onClick={handleDetails}
            className={`flex flex-row py-2 items-center gap-2 hover:border-r-2 border-violet-800 rounded-ld ${active === "details" ? "text-violet-800" : "text-gray-500"}`}
          >
            <BsFillPersonPlusFill color={active === "details" ? "#6B21A8" : "gray"} />
            <p className={`font-semibold ${active === "details" ? "text-violet-800" : "text-gray-500"} cursor-pointer`}>Personal Details</p>
          </div>

          <div
            onClick={handleMandate}
            className={`flex flex-row py-2 items-center gap-2 hover:border-r-2 border-violet-800 rounded-ld ${active === "mandate" ? "text-violet-800" : "text-gray-500"}`}
          >
            <MdBarChart color={active === "mandate" ? "#6B21A8" : "gray"} />
            <p className={`font-semibold ${active === "mandate" ? "text-violet-800" : "text-gray-500"} cursor-pointer`}>Mandate/Signatory</p>
          </div>

          <div
            onClick={handleDocuments}
            className={`flex flex-row py-2 items-center gap-2 hover:border-r-2 border-violet-800 rounded-ld ${active === "documents" ? "text-violet-800" : "text-gray-500"}`}
          >
            <IoDocumentOutline color={active === "documents" ? "#6B21A8" : "gray"} />
            <p className={`font-semibold ${active === "documents" ? "text-violet-800" : "text-gray-500"} cursor-pointer`}>Documents</p>
          </div>

          <div
            onClick={handleNextOfKin}
            className={`flex flex-row py-2 items-center gap-2 hover:border-r-2 border-violet-800 rounded-ld ${active === "nextOfKin" ? "text-violet-800" : "text-gray-500"}`}
          >
            <IoMdPerson color={active === "nextOfKin" ? "#6B21A8" : "gray"} />
            <p className={`font-semibold ${active === "nextOfKin" ? "text-violet-800" : "text-gray-500"} cursor-pointer`}>Next Of Kin</p>
          </div>

          <div
            onClick={handleAML}
            className={`flex flex-row py-2 items-center gap-2 hover:border-r-2 border-violet-800 rounded-ld ${active === "antiMoneyLaundering" ? "text-violet-800" : "text-gray-500"}`}
          >
            <GiMoneyStack color={active === "antiMoneyLaundering" ? "#6B21A8" : "gray"} />
            <p className={`font-semibold ${active === "antiMoneyLaundering" ? "text-violet-800" : "text-gray-500"} cursor-pointer`}>Anti Money Laundering</p>
          </div>

          <div
            onClick={handleTable}
            className={`flex flex-row py-2 items-center gap-2 hover:border-r-2 border-violet-800 rounded-ld ${active === "table" ? "text-violet-800" : "text-gray-500"}`}
          >
            <BsTable color={active === "table" ? "#6B21A8" : "gray"} />
            <p className={`font-semibold ${active === "table" ? "text-violet-800" : "text-gray-500"} cursor-pointer`}>Table</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
