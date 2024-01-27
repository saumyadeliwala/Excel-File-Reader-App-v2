// ChartFrame.js
import { useState, useCallback } from "react";
import "./ChartFrame.css";
import { useNavigate } from "react-router-dom";
import DataTable from "./DataTable.js"; 

const ChartFrame = ({ filename }) => {
  const [showTable, setShowTable] = useState(false);
  
  const navigate = useNavigate();

  const onSizemdIconLeftTypePrimaClick = useCallback(() => {
    navigate("/uploaded");
  }, [navigate]);

  return (
    <section className="chart-frame1">
      <div className="upload-c-s-v">
        <div className="subtract-frame1">
          <div className="base-frame">
            <div className="rectangle-frame">
              <div className="upload-csv-container">
                <h3 className="upload-csv1">Upload CSV</h3>
              </div>
            </div>
          </div>
          <div className="mask-group-instance1">
            <img
              className="input-container-icon"
              loading="eager"
              alt=""
              src="/vector1.svg"
            />
            <img
              className="mask-group-icon1"
              loading="eager"
              alt=""
              src="/mask-group@2x.png"
            />
          </div>
        </div>
        <div className="frame-input-container">
          <div className="input-container2">
            <div className="frame-placeholdertext">
              <img
                className="frame-frame-icon"
                loading="eager"
                alt=""
                src="/frame-7682.svg"
              />
              <div className="placeholdertext-frame">
                <div className="placeholder-text1">{filename}</div>
              </div>
              <div className="frame-placeholdertext-child" />
              <div className="placeholder-text2">
                <div className="placeholder-text3">Remove</div>
              </div>
            </div>
            <div
              className="sizemd-iconleft-typeprima1"
              onClick={onSizemdIconLeftTypePrimaClick}
            >
              <div className="rectangle-shape" />
            </div>
          </div>
        </div>
      </div>
      {/* <DataTable show={showTable} /> */}
    </section>
  );
};

export default ChartFrame;