import "./Menu.css";

const Menu = () => {
  return (
    <nav className="menu">
      <div className="bg" />
      <div className="setting-frame">
        <div className="dashboard-text">
          <div className="chart-frame">
            <img className="subtract-icon1" alt="" src="/subtract.svg" />
            <img
              className="subtract-icon2"
              loading="eager"
              alt=""
              src="/subtract.svg"
            />
          </div>
          <h3 className="base1">Base</h3>
        </div>
      </div>
      <div className="upload-text">
        <div className="category-frame">
          <img
            className="iconlyboldcategory"
            loading="eager"
            alt=""
            src="/iconlyboldcategory@2x.png"
          />
          <div className="dashboard">Dashboard</div>
        </div>
        <div className="mask-group-instance">
          <div className="input-container1">
            <div className="sub-chart-rectangle">
              <img
                className="chart-icon"
                loading="eager"
                alt=""
                src="/chart@2x.png"
              />
              <div className="sub-chart-rectangle-child" />
            </div>
            <div className="upload1">Upload</div>
          </div>
        </div>
      </div>
      <div className="upload-frame">
        <div className="frame-menu">
          <div className="iconly-bold-document">
            <img
              className="iconlyboldticket"
              loading="eager"
              alt=""
              src="/iconlyboldticket@2x.png"
            />
          </div>
          <div className="invoice">Invoice</div>
        </div>
      </div>
      <div className="frame-b-wrapper">
        <div className="frame-b">
          <img
            className="iconlybolddocument"
            loading="eager"
            alt=""
            src="/iconlybolddocument@2x.png"
          />
          <div className="schedule">Schedule</div>
        </div>
      </div>
      <div className="menu-inner">
        <div className="calendar-parent">
          <img
            className="calendar-icon"
            loading="eager"
            alt=""
            src="/calendar@2x.png"
          />
          <div className="calendar">Calendar</div>
        </div>
      </div>
      <div className="menu-child">
        <div className="iconlyboldnotification-parent">
          <img
            className="iconlyboldnotification"
            loading="eager"
            alt=""
            src="/iconlyboldnotification@2x.png"
          />
          <div className="notification">Notification</div>
        </div>
      </div>
      <div className="menu-inner1">
        <div className="iconlyboldsetting-parent">
          <img
            className="iconlyboldsetting"
            loading="eager"
            alt=""
            src="/iconlyboldsetting@2x.png"
          />
          <div className="settings">Settings</div>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
