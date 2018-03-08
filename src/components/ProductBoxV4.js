import React from "react";
import ProductDetailV4 from './ProductDetailV4.js';
import Pagnation from './Pagnation.js';


function ProductBoxV4(props) {
    return (
        <div className="Cartires">
            <h5><span>{props.currentContent.subTitle1} </span>{props.currentContent.subTitle2}</h5>
            {props.currentContent.pagnation && <Pagnation changeContent={props.changeContent} currentContent={props.currentContent} />}
            <div className="cartires-grids">
                {props.contents
                .filter(content => content.type === "singleProduct" && content.category === props.currentContent.category)
                .map(content => <ProductDetailV4 changeContent={props.changeContent} content={content} />)}
            </div>
        </div>
    );
}
        
export default ProductBoxV4;