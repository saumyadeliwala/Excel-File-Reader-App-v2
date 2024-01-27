import "./Menu1.css";

const Menu1 = () => {
  return (
    <nav className="menu1">
      <div className="bg1" />
      <div className="menu-inner2">
        <div className="frame-container">
          <div className="subtract-parent">
            <img className="subtract-icon3" alt="" src="/subtract.svg" />
            <img
              className="subtract-icon4"
              loading="eager"
              alt=""
              src="/subtract.svg"
            />
          </div>
          <h3 className="base2">Base</h3>
        </div>
      </div>
      <div className="frame-parent1">
        <div className="iconlyboldcategory-parent">
          <img
            className="iconlyboldcategory1"
            loading="eager"
            alt=""
            src="/iconlyboldcategory@2x.png"
          />
          <div className="dashboard1">Dashboard</div>
        </div>
        <div className="frame-wrapper">
          <div className="frame-parent2">
            <div className="chart-parent">
              <img
                className="chart-icon1"
                loading="eager"
                alt=""
                src="/chart1@2x.png"
              />
              <div className="chart-frame2" />
            </div>
            <div className="upload2">Upload</div>
          </div>
        </div>
      </div>
      <div className="menu-inner3">
        <div className="ticket-frame-parent">
          <div className="ticket-frame">
            <img
              className="iconlyboldticket1"
              loading="eager"
              alt=""
              src="/iconlyboldticket@2x.png"
            />
          </div>
          <div className="invoice1">Invoice</div>
        </div>
      </div>
      <div className="menu-inner4">
        <div className="iconlybolddocument-parent">
          <img
            className="iconlybolddocument1"
            loading="eager"
            alt=""
            src="/iconlybolddocument@2x.png"
          />
          <div className="schedule1">Schedule</div>
        </div>
      </div>
      <div className="menu-inner5">
        <div className="calendar-group">
          <img
            className="calendar-icon1"
            loading="eager"
            alt=""
            src="/calendar@2x.png"
          />
          <div className="calendar1">Calendar</div>
        </div>
      </div>
      <div className="menu-inner6">
        <div className="iconlyboldnotification-group">
          <img
            className="iconlyboldnotification1"
            loading="eager"
            alt=""
            src="/iconlyboldnotification@2x.png"
          />
          <div className="notification1">Notification</div>
        </div>
      </div>
      <div className="menu-inner7">
        <div className="iconlyboldsetting-group">
          <img
            className="iconlyboldsetting1"
            loading="eager"
            alt=""
            src="/iconlyboldsetting@2x.png"
          />
          <div className="settings1">Settings</div>
        </div>
      </div>
    </nav>
  );
};

export default Menu1;
