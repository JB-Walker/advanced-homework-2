import React from "react";

function TopHeader(props) {
  return (
    <div className="top-header">
      <div className="top-header-left">
        <ul>
          <li className="active"><a href="#" onClick={(e) => props.changeContent(0, e)}>Home</a></li>
          <li><a href="#">Specials</a></li>
          <li><a href="#">Delivery</a></li>
          <li><a href="#" onClick={(e) => props.changeContent(6, e)}>Contact</a></li>
        </ul>
      </div>
      <div className="top-header-right">
        <ul>
          <li><a href="#">CURRENCY:</a></li>
          <li>
            <select>
              <option>Dollar</option>
              <option>Euro</option>
              <option>Pound</option>
            </select>
          </li>
        </ul>
      </div>
      <div className="clear"></div>
    </div>
  );
}

export default TopHeader;
