import React from "react";
import RevolverImage from "../images/revolver.png"
import bulletsF from "../images/bullets_f.png"
import bullets5 from "../images/bullets_5.png"
import bullets4 from "../images/bullets_4.png"
import bullets3 from "../images/bullets_3.png"
import bullets2 from "../images/bullets_2.png"
import bullets1 from "../images/bullets_1.png"

function Dashboard({ bullets }) {



  return (
    <div className="">
      {bullets === 6 ? <img className="bullets" src={bulletsF} alt="bullets"></img> : null}
      {bullets === 5 ? <img className="bullets" src={bullets5} alt="bullets"></img> : null}
      {bullets === 4 ? <img className="bullets" src={bullets4} alt="bullets"></img> : null}
      {bullets === 3 ? <img className="bullets" src={bullets3} alt="bullets"></img> : null}
      {bullets === 2 ? <img className="bullets" src={bullets2} alt="bullets"></img> : null}
      {bullets === 1 ? <img className="bullets" src={bullets1} alt="bullets"></img> : null}
      {bullets === 0 ? <img className="bullets" src={RevolverImage} alt="bullets"></img> : null}
    </div>
  )
}

export default Dashboard;