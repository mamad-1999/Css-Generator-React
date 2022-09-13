import React, { useContext, useState } from "react";
import { MainContext } from "../../components/Context/MainContextProvider";
import { motion } from "framer-motion";
import copyed from "../../func";
import "./../generalStyle.css";
import "./FlexBox.css";

export default function FlexBox() {
  const [flex, setFlex] = useState({
    display: "flex",
    "flex-direction": "row",
    "align-items": "center",
    "justify-content": "center",
  });

  const { copyClickText, btnCopyTextChange, mainVariant } =
    useContext(MainContext);

  const justifyContentHandler = (e) => {
    setFlex({ ...flex, "justify-content": e.target.value });
  };

  const alignItemsHandler = (e) => {
    setFlex({ ...flex, "align-items": e.target.value });
  };

  const directionHandler = (e) => {
    setFlex({ ...flex, "flex-direction": e.target.value });
  };

  const flexBoxCopyHandler = async () => {
    let text = JSON.stringify(flex).replaceAll(",", ";").replaceAll('"', "");
    await copyed(text);
    btnCopyTextChange();
  };

  return (
    <motion.div
      variants={mainVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="style_Container"
    >
      <span className="titr">FlexBox</span>
      <div className="top_box">
        <div className="preview_wraper">
          <span>Preview</span>
          <div
            className="preview_box flex-preview-box"
            style={{
              flexDirection: flex["flex-direction"],
              justifyContent: flex["justify-content"],
              alignItems: flex["align-items"],
            }}
          >
            <h2>text1</h2>
            <h2>text2</h2>
          </div>
        </div>
        <div className="copy_code_wraper">
          <span>Code</span>
          <div className="code_box flex-code-box">
            <pre>
              <span className="code_one">display:</span>
              <span className="code_two">flex;</span>
              <br />
              <span className="code_one">flex-direction:</span>
              <span className="code_two">{flex["flex-direction"]};</span>
              <br />
              <span className="code_one">justify-content:</span>
              <span className="code_two">{flex["justify-content"]};</span>
              <br />
              <span className="code_one">align-items:</span>
              <span className="code_two">{flex["align-items"]};</span>
            </pre>
          </div>
          <button onClick={flexBoxCopyHandler} className="copyBtn">
            {copyClickText ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
      <div className="option_wraper">
        <span>Option</span>
        <div className="options">
          <div className="input_box">
            <label>Justify Content</label>
            <select onChange={justifyContentHandler}>
              <option value="center">center</option>
              <option value="flex-start">flex start</option>
              <option value="flex-end">flex end</option>
              <option value="baseline">baseline</option>
              <option value="space-around">space around</option>
              <option value="space-between">space between</option>
              <option value="space-evenly">space evenly</option>
            </select>
          </div>
          <div className="input_box">
            <label>Align Items</label>
            <select onChange={alignItemsHandler}>
              <option value="center">center</option>
              <option value="flex-start">flex start</option>
              <option value="flex-end">flex end</option>
              <option value="baseline">baseline</option>
            </select>
          </div>
          <div className="input_box">
            <label>Direction</label>
            <select onChange={directionHandler}>
              <option value="row">row</option>
              <option value="column">column</option>
              <option value="row-reverse">row reverse</option>
              <option value="column-reverse">column reverse</option>
            </select>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
