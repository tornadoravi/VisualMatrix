import TemplateSampleData, { ETemplate } from "./TemplateSampleData";
import { useState, createContext, useContext } from "react";
import './TemplateSelector.css'


export const UserContext = createContext('')


export default function WizardSettings() {
  const [templateValue, setTemplate] = useState("Spreadsheet");
  const [subTotalColumnValue, setSubTotalColumn] = useState("Off");
  const [subTotalRowValue, setSubTotalRow] = useState("Off");
  const [grandTotalColumnValue, setGrandTotalColumn] = useState(false);
  const [grandTotalRowValue, setGrandTotalRow] = useState(true);
  const [themeValue, setThemeValue] = useState("light");
  const presetChange = (event: any) => {
    setTemplate(event.target.value);
  };
  const setSubTotalColumnValue = (event: any) => {
    setSubTotalColumn(event.target.value);
  };
  const setSubTotalRowValue = (event: any) => {
    setSubTotalRow(event.target.value);
  };
  const setGrandTotalColumnValue = (event: any) => {
    setGrandTotalColumn(event.target.checked);
  };
  const setGrandTotalRowValue = (event: any) => {
    setGrandTotalRow(event.target.checked);
  };
  const setTheme = (event: any) => {
    setThemeValue(event.target.value);
  };
  console.log("preset", templateValue);
  console.log("subTotlaColumn", subTotalColumnValue);
  console.log("subTotalRowValue", subTotalRowValue);
  console.log("grandTotalColumnValue", grandTotalColumnValue);
  console.log("grandTotalRowValue", grandTotalRowValue);
  console.log("themeValue", themeValue);

  return (
    <>
      <div className={themeValue}>
        <div className="split">
          <div className="control">
            <div className="label-section-container">
              <div className="label-header1">Preset:</div>

              <div className="options-container1">
                <select
                  name="cars"
                  id="cars"
                  onChange={(event) => presetChange(event)}
                >
                  <option value="Spreadsheet">Spreadsheet</option>
                  <option value="Simple">Simple</option>
                  <option value="T05">T05</option>
                </select>
              </div>
            </div>
            <div className="label-section-container">
              <div className="label-header">{"Subtotal position:"}</div>
              <div className="options-containerFIRST">
                <div className="mr-6 subtoal_container">
                  <span className="subtotal_label ">Column</span>
                  <select
                    name="cars"
                    id="cars"
                    onChange={(event) => setSubTotalColumnValue(event)}
                  >
                    <option value="right">Right</option>
                    <option value="left">Left</option>
                    <option value="off">Off</option>
                  </select>
                </div>
                <div className="subtoal_container">
                  <span className="subtotal_label">Row</span>
                  <select id="rff" onChange={(event) => setSubTotalRowValue(event)}>
                    <option value="above">Top</option>
                    <option value="below">Bottom</option>
                    <option value="hybrid">Split</option>
                    <option value="clear">Off</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="label-section-container">
              <div className="label-header">Grand Total</div>
              <div className="options-container">
                <div className="mr-6 subtoal_container">
                  <input
                    checked={grandTotalColumnValue}
                    type="checkbox"
                    onClick={setGrandTotalColumnValue}
                  ></input>
                  <label>column</label>
                </div>
                <div className="mr-6 subtoal_container">
                  <input
                    type="checkbox"
                    checked={grandTotalRowValue}
                    onClick={setGrandTotalRowValue}
                  ></input>
                  <label>Row</label>
                </div>
              </div>
            </div>
            <div className="label-section-container">
              <div className="label-header">Theme</div>
              <div className="options-container">
                <select name="cars" id="cars" onChange={(event) => setTheme(event)}>
                  <option value="light">light</option>
                  <option value="dark">Dark</option>

                </select>
              </div>
            </div>



          </div>
          <div className="vl"></div>

          <div className="vizal">

            <UserContext.Provider value={{ subTotalColumnValue, subTotalRowValue, grandTotalColumnValue }}>

              <TemplateSampleData templateType={templateValue as ETemplate} />

            </UserContext.Provider>
          </div>
        </div>
      </div>
    </>
  );
}
