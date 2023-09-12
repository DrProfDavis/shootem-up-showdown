import React from "react";
import RevolverImage from "../images/revolver.png"
import bulletsF from "../images/bullets_f.png"
import bullets5 from "../images/bullets_5.png"
import bullets4 from "../images/bullets_4.png"
import bullets3 from "../images/bullets_3.png"
import bullets2 from "../images/bullets_2.png"
import bullets1 from "../images/bullets_1.png"

function DashRevolver({ bullets }) {



  return (
    <div>
      {bullets === 6 ? <img className="bullets" src={bulletsF} alt="Revolver with 6 bullet"></img> : null}
      {bullets === 5 ? <img className="bullets" src={bullets5} alt="Revolver with 5 bullet"></img> : null}
      {bullets === 4 ? <img className="bullets" src={bullets4} alt="Revolver with 4 bullet"></img> : null}
      {bullets === 3 ? <img className="bullets" src={bullets3} alt="Revolver with 3 bullet"></img> : null}
      {bullets === 2 ? <img className="bullets" src={bullets2} alt="Revolver with 2 bullet"></img> : null}
      {bullets === 1 ? <img className="bullets" src={bullets1} alt="Revolver with 1 bullet"></img> : null}
      {bullets === 0 ? <img className="bullets" src={RevolverImage} alt="Empty Revolver"></img> : null}
    </div>
  )
}

export default DashRevolver;