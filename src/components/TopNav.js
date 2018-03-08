import React from "react";

function TopNav(props) {
    return (
        <div className="top-nav">
            <ul>
                {props.contents
                .filter(content => content.type === "navPage")
                .map(content => <li><a href="#" onClick={(e) => props.changeContent(content.id, e)}>{content.fullTitle}</a></li>)}
                <div className="clear"></div>
            </ul>
        </div>
    );
}

export default TopNav;


