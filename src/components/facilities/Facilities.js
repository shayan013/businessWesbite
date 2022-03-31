import React from "react";
import "./facilities.css";
import Facility from "./Facility";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaHotel, FaShoppingBag } from "react-icons/fa";
function Facilities() {
  return (
    <div className="app__facilities">
      <div className="container">
        {/* each facility */}
        <div className="row g-2 wrapper">
          <Facility
            item="foods and drinks"
            icon={<IoFastFoodSharp />}
            number="100"
          />
          <Facility item="health" number="79" icon={<IoFastFoodSharp />} />
          <Facility item="hotels" number="80" icon={<IoFastFoodSharp />} />
          <Facility item="shopping" number="100" icon={<IoFastFoodSharp />} />
          <Facility item="beauty" number="100" icon={<IoFastFoodSharp />} />
          <Facility item="fitness" number="34" icon={<IoFastFoodSharp />} />
          <Facility item="bar and club" number="5" icon={<IoFastFoodSharp />} />
          <Facility item="games" number="70" icon={<IoFastFoodSharp />} />
          <Facility item="places" number="60" icon={<IoFastFoodSharp />} />
          <Facility item="circus" number="12" icon={<IoFastFoodSharp />} />
          <Facility item="theater" number="100" icon={<IoFastFoodSharp />} />
          <Facility item="sports" number="30" icon={<IoFastFoodSharp />} />
        </div>
      </div>
    </div>
  );
}

export default Facilities;
