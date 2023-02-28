import React from "react";
const BubGraph = () => {
  return (
    <div className="bubbles item-center">

    <><br /></>
    <><br /></>
    <div style={{fontSize:"20px",fontFamily:"open",letterSpacing:"6px",color:"#3D3D60"}}><p>TIMELINE</p></div>
      <div className="time-period">
        <span>1W</span>
        <span>1M</span>
 <span className="mbub" >3M</span>
        <span>1Y</span>
        <span>All</span>
      </div>
      {/* bubbles  */}
      <div className="all-bubles item-center">
        <div className="pink first">
          <p>Development</p>
          <p className="updown">$12,875</p>
        </div>
        <div className="pink second">Business <br></br>$1,000</div>
        <div className="center-div item-center">
          <div className="innermost">
            <p style={{fontSize:"20px",fontWeight:"600"}}>Investments</p>
            <p className="updown" style={{fontSize:"20px",fontWeight:"600"}}>$12,875</p>
          </div>
        </div>
        <div className="blue blue4"></div>
        <div className="blue blue5"></div>
        <div className="blue blue6"></div>
        <div className="blue blue7"></div>
        <div className="blue blue8"></div>
        <div className="blue blue9"></div>
        <div className="blue blue10"></div>
        <div className="yellow"></div>
        <div className="purple purple1"></div>
        <div className="purple purple2"></div>
        <div className="purple purple3"></div>
        <div className="purple purple4"></div>
        <div className="blue blue1"></div>
        <div className="blue blue2"></div>
        <div className="blue blue3">
          <p></p>
          <p className="updown" >$875</p>
        </div>
        <div className="blue blue4" ></div>
        <div className="blue blue5"></div>
        <div className="pink third">
          <p>Finance</p>
          <p className="updown" style={{fontSize:"20px",fontWeight:"600"}}>$1,295</p>
        </div>
        <div className="pink forth">
          <p>Design</p>
          <p className="updown" style={{fontSize:"20px",fontWeight:"600"}}>$1,875</p>
          <p> 3 month</p>
        </div>
      </div>
      <div className="data">
        <div><span className="title">TREND GOOD</span><br /><span>204</span></div>
        <div><span className="title">SHOPPING VIEWS</span><br /><span>65,540</span></div>
        <div><span className="title">STORE DYNAMICS</span><br /><span>324</span></div>
      </div>
    </div>
  );
};

export default BubGraph;
