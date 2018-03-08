import React from "react";

function Pagnation(props) {
    return (
        <div className="car-tires-top-pagnation">
            <ul>
                <li><a href="#" onClick={(e) => props.changeContent(0, e)}>Home /</a></li>
                <li><span>{props.currentContent.fullTitle}</span></li>
            </ul>
        </div>
    );
}
                
export default Pagnation;