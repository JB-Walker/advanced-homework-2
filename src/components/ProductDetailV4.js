import React from "react";

function ProductDetailV4(props) {
    return (
        <div className="cartire-grid">
            <div className="cartire-grid-img">
                <img src={props.content.imgUrl} title={props.content.fullTitle} alt={props.content.fullTitle}/>
            </div>
            <div className="cartire-grid-info">
                <ul>
                    <li><span>New</span> |&nbsp;&nbsp;Available !</li>
                </ul>
                <h3>{props.content.name}</h3>
                <p>{props.content.description}</p>
            </div>
            <div className="cartire-grid-cartinfo">
                <h4>REDUCED PRICE!</h4>
                <span></span>
                <ul>
                    <li><input type="checkbox" /></li>
                    <li><p>Select to compare</p></li>
                </ul>
                <a href="#" onClick={(e) => props.changeContent(props.content.id, e)}>Add to Cart</a><br />
                <a href="#" onClick={(e) => props.changeContent(props.content.id, e)}>View</a>
            </div>
            <div className="clear"></div>
            <br />
        </div>
    );
}

export default ProductDetailV4;