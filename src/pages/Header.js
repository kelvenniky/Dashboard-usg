import { useEffect, useState } from "react";
import { CiSquareAlert } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { SketchPicker } from "react-color"; // Import SketchPicker
import { PiTextAlignLeftLight } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";

function Header() {
  const [memberAccountName, setMemberAccountName] = useState("");
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
      setMemberAccountName(
        localStorage.getItem("memberAccountName") || "Member Account Name"
      );
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

  const toggleBold = () => {
    setIsBold((prev) => !prev);
  };

  const toggleItalic = () => {
    setIsItalic((prev) => !prev);
  };

  const toggleUnderline = () => {
    setIsUnderline((prev) => !prev);
  };

  const handleEdit = (field, currentText) => {
    setEditingField(field);
    setNewText(currentText);
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
      case "memberAccountName":
        setMemberAccountName(styledText);
        localStorage.setItem("memberAccountName", newText);
        break;
      case "memberId":
        setMemberId(styledText);
        localStorage.setItem("memberId", newText);
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
    setActive("add");
    if (newInputText.trim()) {
      setAdditionalTexts((prev) => [
        { text: newInputText, editable: false },
        ...prev,
      ]);
      setNewInputText("");
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
    <div className="flex-grow my-2 mx-4">
      <div className="bg-white flex-col mb-2 flex-grow shadow-sm shadow-slate-300 h-20 border border-black">
        <div className="flex flex-row ml-5 gap-20 mt-5">
          <div
            onClick={() => handleEdit("memberAccountName", memberAccountName)}
            className="flex flex-row gap-3 cursor-pointer"
          >
            <CiSquareAlert className="mt-1" />
            <p>{memberAccountName}</p>
          </div>
          <div
            onClick={() => handleEdit("memberId", memberId)}
            className="flex flex-row gap-3 cursor-pointer"
          >
            <CiSquareAlert className="mt-1" />
            <p>{memberId}</p>
          </div>
          <div
            onClick={() => handleEdit("memberCategory", memberCategory)}
            className="flex flex-row gap-3 cursor-pointer"
          >
            <CiSquareAlert className="mt-1" />
            <p>{memberCategory}</p>
          </div>
          <div
            onClick={() => handleEdit("receiptCode", receiptCode)}
            className="flex flex-row gap-3 cursor-pointer"
          >
            <CiSquareAlert className="mt-1" />
            <p>{receiptCode}</p>
          </div>
          <div
            className="bg-black flex items-center justify-center rounded-sm p-2"
            onClick={handleAddText}
          >
            <FaPlus color="white" />
          </div>
        </div>
        {additionalTexts.length > 0 && (
          <div className="ml-5 mt-2">
            {additionalTexts.map((item, index) => (
              <div key={index} style={inputTextStyle}>
                <CiSquareAlert className="mt-1 inline-block" />
                <input
                  type="text"
                  value={item.text}
                  onChange={(e) =>
                    handleAdditionalTextEdit(index, e.target.value)
                    
                  }
                  style={{
                    ...inputTextStyle,
                    border: "none",
                    outline: "none",
                    background: "transparent",
                  }}
                  
                />
              </div>
            ))}
          </div>
        )}
       
      </div>
      {active === "add" ? 
          <div className="border bg-white border-black flex-grow">
          <div className="border border-black flex mx-20 my-7 justify-between">
            <div className="ml-5 gap-20 my-5 pr-7">
              {editingField && (
                <div className="flex flex-row gap-10">
                  <div>
                    <input
                      type="text"
                      value={newInputText}
                      onChange={(e) => setNewInputText(e.target.value)}
                      style={inputTextStyle}
                      className="py-5 px-20 text-xl bg-gray-100 outline-none"
                    />
                    <div className="mt-1 flex gap-4 ml-1">
                      <button onClick={toggleBold} className="text-2xl font-light">
                        B
                      </button>
                      <button onClick={toggleItalic} className="text-2xl font-light">
                        I
                      </button>
                      <button onClick={toggleUnderline} className="text-2xl font-light underline">
                        U
                      </button>
                      <button onClick={toggleItalic} className="text-2xl font-light">
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
                      <button className="px-3 py-2 rounded-sm bg-slate-300">
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
                      className="bg-slate-200 py-3 px-3 outline-none border border-black"
                    >
                      <option value="date">Text Input</option>
                      <option value="name">Alphabetical Order</option>
                      <option value="time">Time</option>
                      <option value="LocationID">LocationID</option>
                    </select>
                  </div>
                </div>
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
        :
        <div className="border bg-white border-black flex-grow">
        <div className="border border-black flex mx-20 my-7 justify-between">
          <div className="ml-5 gap-20 my-5 pr-7">
            {editingField && (
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
                    <button onClick={toggleBold} className="text-2xl font-light">
                      B
                    </button>
                    <button onClick={toggleItalic} className="text-2xl font-light">
                      I
                    </button>
                    <button onClick={toggleUnderline} className="text-2xl font-light underline">
                      U
                    </button>
                    <button onClick={toggleItalic} className="text-2xl font-light">
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
                    <button className="px-3 py-2 rounded-sm bg-slate-300">
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
                    className="bg-slate-200 py-3 px-3 outline-none border border-black"
                  >
                    <option value="date">Text Input</option>
                    <option value="name">Alphabetical Order</option>
                    <option value="time">Time</option>
                    <option value="LocationID">LocationID</option>
                  </select>
                </div>
              </div>
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
        
        
        
        }




      
    </div>
  );
}

export default Header;