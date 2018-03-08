import React from "react";

function ProductDetailH5(props) {
    return (
        <div className="grid_1_of_5 images_1_of_5">
            <img src={props.content.imgUrl} title={props.content.fullTitle} alt={props.content.fullTitle}/>
            <h3>{props.content.name}</h3>
            <p>{props.content.description}</p>
            {props.content.special ? <h4><span>{props.content.price}</span>{props.content.special}</h4> : <h4>{props.content.price}</h4>}
            <div className="button"><span><a href="#" onClick={(e) => props.changeContent(props.content.id, e)}>Read More</a></span></div>
        </div>
    );
}

export default ProductDetailH5;
