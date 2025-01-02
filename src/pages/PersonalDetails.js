import { useEffect, useState } from "react";
import { CiSquareAlert } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { SketchPicker } from "react-color"; // Import SketchPicker
import { PiTextAlignLeftLight } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiSquareInfo } from "react-icons/ci";


function PersonalDetails() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");

  const [memberId, setMemberId] = useState("");
  const [memberCategory, setMemberCategory] = useState("");
  const [receiptCode, setReceiptCode] = useState("");
  const [textColor, setTextColor] = useState("#000000");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [editingField, setEditingField] = useState(null);
  const [newText, setNewText] = useState("");
  const [additionalTexts, setAdditionalTexts] = useState([]);
  const [newInputText, setNewInputText] = useState("");
  const [active, setActive] = useState(null);
  const [sortOption, setSortOption] = useState("");

  // Load data from local storage
  useEffect(() => {
    const loadData = () => {
      setFirstName(localStorage.getItem("firstName") || "First Name");
      setLastName(localStorage.getItem("lastName") || "Last Name");
      setDob(localStorage.getItem("dob") || "Date of Birth");
      setMemberId(localStorage.getItem("memberId") || "Member ID");
      setMemberCategory(
        localStorage.getItem("memberCategory") || "Member Category"
      );
      setReceiptCode(localStorage.getItem("receiptCode") || "Receipt Code");
    };
    loadData();
  }, []);

  const handleColorChange = (color) => {
    setTextColor(color.hex); // Update text color from SketchPicker
  };

  const toggleBold = () => setIsBold((prev) => !prev);
  const toggleItalic = () => setIsItalic((prev) => !prev);
  const toggleUnderline = () => setIsUnderline((prev) => !prev);

  const handleEdit = (field, currentText) => {
    setEditingField(field);
    setNewText(currentText);
    setActive(null); // Hide newInput when editing
  };

  const handleSave = () => {
    const styledText = (
      <span
        style={{
          color: textColor,
          fontWeight: isBold ? "bold" : "normal",
          fontStyle: isItalic ? "italic" : "normal",
          textDecoration: isUnderline ? "underline" : "none",
        }}
      >
        {newText}
      </span>
    );

    switch (editingField) {
      case "firstName":
        setFirstName(styledText);
        localStorage.setItem("firstName", newText);
        break;
      case "lastName":
        setLastName(styledText);
        localStorage.setItem("lastName", newText);
        break;
      case "dob":
        setMemberId(styledText);
        localStorage.setItem("dob", newText);
        break;

      case "memberCategory":
        setMemberCategory(styledText);
        localStorage.setItem("memberCategory", newText);
        break;
      case "receiptCode":
        setReceiptCode(styledText);
        localStorage.setItem("receiptCode", newText);
        break;
      default:
        break;
    }
    setEditingField(null);
  };

  const handleAddText = () => {
    if (newInputText.trim()) {
      setAdditionalTexts((prev) => [
        { text: newInputText, editable: false },
        ...prev,
      ]);
      setNewInputText("");
      setActive(null); // Hide new input after adding
    }
  };

  const handleAdditionalTextEdit = (index, text) => {
    const updatedTexts = [...additionalTexts];
    updatedTexts[index].text = text;
    setAdditionalTexts(updatedTexts);
  };

  const inputTextStyle = {
    color: textColor,
    fontWeight: isBold ? "bold" : "normal",
    fontStyle: isItalic ? "italic" : "normal",
    textDecoration: isUnderline ? "underline" : "normal",
  };

  return (
    <div className="flex-grow my-2 mx-2  ">
      <div className="bg-white items-center mb-2 flex flex-grow justify-between shadow-sm shadow-slate-300 px-2 py-2 border border-black">

       <div className="flex flex-col ">
       <div className="flex gap-y-2  flex-wrap  ">
          {[
            { label: firstName, field: "firstName" },
            { label: lastName, field: "lastName" },
            { label: dob, field: "dob" },
            { label: memberId, field: "memberId" },
            { label: memberCategory, field: "memberCategory" },
            { label: receiptCode, field: "receiptCode" },
          ].map(({ label, field }) => (
            <div
              key={field}
              onClick={() => handleEdit(field, label)}
              className="flex flex-row gap-3 cursor-pointer w-1/4" // Set width to 1/4 for 4 items per row
            >
              <CiSquareAlert className="mt-1" />
              <p>{label}</p>
            </div>
          ))}
         
        </div>
        <div >
          {additionalTexts.length > 0 && (
            <div className="flex flex-wrap gap-20 ">
              {additionalTexts.map((item, index) => (
                <div className="flex items-center gap-3" key={index}>
                    <CiSquareAlert className="mt-1" />
                    <input
                    type="text"
                    value={item.text}
                    style={inputTextStyle}
                    onChange={(e) =>
                      handleAdditionalTextEdit(index, e.target.value)
                    }
                  />
                </div>
              ))}
            </div>
          )}
        </div>

       </div>
      

        <div
            className="bg-black flex items-center justify-center rounded-sm p-2 " // Ensure the button also fits within the row
            onClick={() => setActive("add")}
          >
            <FaPlus color="white" />

          </div>
      </div>
      
      <div className="border bg-white border-black flex-grow">
        <div className="border border-black flex mx-20 my-7 justify-between">
          <div className="ml-5 gap-20 my-5 pr-7">
            {active === "add" ? (
              <div className="flex flex-row gap-10">
                <div>
                  <input
                    type="text"
                    value={newInputText}
                    onChange={(e) => setNewInputText(e.target.value)}
                    placeholder="Add new Text"
                    style={inputTextStyle}
                    className="py-5 px-20 text-xl bg-gray-100 outline-none"
                  />
                  <div className="mt-1 flex gap-4 ml-1">
                    <button
                      onClick={toggleBold}
                      className="text-2xl font-light"
                    >
                      B
                    </button>
                    <button
                      onClick={toggleItalic}
                      className="text-2xl font-light"
                    >
                      I
                    </button>
                    <button
                      onClick={toggleUnderline}
                      className="text-2xl font-light underline"
                    >
                      U
                    </button>
                    <button
                      onClick={toggleItalic}
                      className="text-2xl font-light"
                    >
                      <PiTextAlignLeftLight />
                    </button>
                  </div>

                  <div className="mt-10">
                    <input
                      type="text"
                      placeholder="YTUI"
                      className="py-4 border border-black px-20 text-xl bg-gray-100 outline-none"
                    />
                  </div>

                  <div className="mt-28 flex gap-1">
                    <button
                      className="px-3 py-2 rounded-sm bg-slate-300"
                      onClick={() => setNewInputText("")}
                    >
                      Reset
                    </button>
                    <button
                      className="px-3 py-2 rounded-sm text-white bg-blue-500 hover:bg-blue-700"
                      onClick={handleAddText}
                    >
                      Add
                    </button>
                  </div>
                </div>

                <div>
                  <select
                    id="sort"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="bg-slate-200 py-3 px-3 outline-none border border-black"
                  >
                    <option value="date">Text Input</option>
                    <option value="name">List Box</option>
                    <option value="time">Table</option>
                    <option value="LocationID">Desc Box</option>
                  </select>
                </div>
              </div>
            ) : (
              editingField && (
                <div className="flex flex-row gap-10">
                  <div>
                    <input
                      type="text"
                      value={newText}
                      onChange={(e) => setNewText(e.target.value)}
                      style={inputTextStyle}
                      className="py-5 px-20 text-xl bg-gray-100 outline-none"
                    />
                    <div className="mt-1 flex gap-4 ml-1">
                      <button
                        onClick={toggleBold}
                        className="text-2xl font-light"
                      >
                        B
                      </button>
                      <button
                        onClick={toggleItalic}
                        className="text-2xl font-light"
                      >
                        I
                      </button>
                      <button
                        onClick={toggleUnderline}
                        className="text-2xl font-light underline"
                      >
                        U
                      </button>
                      <button
                        onClick={toggleItalic}
                        className="text-2xl font-light"
                      >
                        <PiTextAlignLeftLight />
                      </button>
                    </div>

                    <div className="mt-10">
                      <input
                        type="text"
                        placeholder="YTUI"
                        className="py-4 border border-black px-20 text-xl bg-gray-100 outline-none"
                      />
                    </div>

                    <div className="mt-28 flex gap-1">
                      <button
                        className="px-3 py-2 rounded-sm bg-slate-300"
                        onClick={() => setNewText("")}
                      >
                        Reset
                      </button>
                      <button
                        className="px-3 py-2 rounded-sm text-white bg-blue-500 hover:bg-blue-700"
                        onClick={handleSave}
                      >
                        Save
                      </button>
                      <button className="px-3 py-2 rounded-sm flex items-center gap-1 text-white bg-red-600">
                        Delete
                        <RiDeleteBin6Line color="white" />
                      </button>
                    </div>
                  </div>

                  <div>
                    <select
                      id="sort"
                      value={sortOption}
                      onChange={(e) => setSortOption(e.target.value)}
                      className="bg-slate-200 py-3 px-3 outline-none border border-black"
                    >
                      <option value="date">Text Input</option>
                      <option value="name">Alphabetical Order</option>
                      <option value="time">Time</option>
                      <option value="LocationID">LocationID</option>
                    </select>
                  </div>
                </div>
              )
            )}
          </div>
          <div className="flex flex-col p-4 border-l border-black">
            <div className="flex-grow items-center mb-2">
              <button className="px-8 py-2 rounded-sm border border-gray-100">
                Label
              </button>
              <button className="px-8 py-2 bg-slate-200 border border-gray-100">
                Inputs
              </button>
            </div>
            <SketchPicker
              color={textColor}
              onChangeComplete={handleColorChange}
              className="mb-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalDetails;
