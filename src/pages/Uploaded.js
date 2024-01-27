import { useCallback, useEffect, useState } from "react";
import Menu1 from "../components/Menu";
import { useNavigate } from "react-router-dom";
import "./Uploaded.css";
import DataTable from "../components/DataTable";

const Uploaded = () => {
  const navigate = useNavigate();
  const [showTable, setShowTable] = useState(false);

  return (
    <div>
      <div className="upload">
        <div className="white">
          <div className="button" />
        </div>
        <div className="upload-inner">
          <div className="menu-wrapper">
            <Menu1 />
          </div>
        </div>
        <section className="upload-child">
          <div className="subtract-frame-parent">
            <div className="subtract-frame">
              <div className="upload-c-s-v-frame">
                <div className="upload-c-s-v-frame-inner">
                  <div className="upload-csv-wrapper">
                    <h3 className="upload-csv">Upload CSV</h3>
                  </div>
                </div>
              </div>
              <div className="vector">
                <img
                  className="vector-icon5"
                  loading="eager"
                  alt=""
                  src="/vector1.svg"
                />
                <img
                  className="mask-group-icon"
                  loading="eager"
                  alt=""
                  src="/mask-group@2x.png"
                />
              </div>
            </div>
            <div className="input-container-wrapper">
              <div className="input-container">
                <div className="placeholdertext-parent">
                  <img
                    className="placeholdertext-icon"
                    loading="eager"
                    alt=""
                    src="/frame-76821.svg"
                  />
                  <div className="placeholder-text">
                    <span>{`Drop your excel sheet here or `}</span>
                    <span className="browse">browse</span>
                  </div>
                  <div className="frame-inner" />
                  <div className="frame-div" />
                </div>
                <button
                  className="uploadclick"
                  onClick={() => setShowTable(true)} // Set showTable to true on button click
                >
                  <img className="icon" alt="" src="/icon.svg" />
                  <div className="value">Upload</div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <DataTable show={showTable} /> {/* Render DataTable below Upload section */}
    </div>
  );
};

export default Uploaded;









// import Menu from "../components/Menu";
// import DataTable from "../components/DataTable"; // Import DataTable component
// import { useNavigate } from "react-router-dom";

// import React, { useState, useCallback } from "react"; // Import useState
// // import "./Uploaded   .css";


// const Uploaded = () => {
//     const [showTable, setShowTable] = useState(false);
//     const navigate = useNavigate();
//     // const [showTable, setShowTable] = useState(false); // Define showTable state

//     const onSizemdIconLeftTypePrimaClick = useCallback(() => {
//         setShowTable(true);

//     }, []);

//     return (
//         <div className="upload">
//             <div className="menu-frame">
//                 <Menu />
//             </div>
//             <section className="upload-child">
//                 <div className="subtract-frame-parent">
//                     <div className="subtract-frame">
//                         <div className="upload-c-s-v-frame">
//                             <div className="upload-c-s-v-frame-inner">
//                                 <div className="upload-csv-wrapper">
//                                     <h3 className="upload-csv">Upload CSV</h3>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="vector">
//                             <img
//                                 className="vector-icon5"
//                                 loading="eager"
//                                 alt=""
//                                 src="/vector1.svg"
//                             />
//                             <img
//                                 className="mask-group-icon"
//                                 loading="eager"
//                                 alt=""
//                                 src="/mask-group@2x.png"
//                             />
//                         </div>
//                     </div>
//                     <div className="input-container-wrapper">
//                         <div className="input-container">
//                             <div className="placeholdertext-parent">
//                                 <img
//                                     className="placeholdertext-icon"
//                                     loading="eager"
//                                     alt=""
//                                     src="/frame-76821.svg"
//                                 />
//                                 <div className="placeholder-text">
//                                     <span>{`Drop your excel sheet here or `}</span>
//                                     <span className="browse">browse</span>
//                                 </div>
//                                 <div className="frame-inner" />
//                                 <div className="frame-div" />
//                             </div>
//                             <button
//                                 className="sizemd-iconleft-typeprima"
//                                 onClick={onSizemdIconLeftTypePrimaClick}
//                             >
//                                 <img className="icon" alt="" src="/icon.svg" />
//                                 <div className="value">Upload</div>
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <DataTable show={showTable} />
//         </div>

//     );
// };

// export default Uploaded;
