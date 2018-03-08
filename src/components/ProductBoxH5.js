import React from "react";
import ProductDetailH5 from './ProductDetailH5.js';
import Pagnation from './Pagnation.js';


function ProductBoxH5(props) {
    return (
        <div className="products-box">
            <div className="products">
                <h5><span>{props.currentContent.subTitle1} </span>{props.currentContent.subTitle2}</h5>
                {props.currentContent.pagnation && <Pagnation changeContent={props.changeContent} currentContent={props.currentContent} />}
                <div className="section group">
                    {props.contents
                    .filter(content => content.type === "singleProduct" && content.category === props.currentContent.category && !content.special)
                    .map(content => <ProductDetailH5 changeContent={props.changeContent} content={content} />)}
                </div>
            </div>
            <div className="products products-secondbox">
                <h5><span>Our</span> Specials</h5>
                <div className="section group">
                    {props.contents
                    .filter(content => content.type === "singleProduct" && content.category === props.currentContent.category && content.special)
                    .map(content => <ProductDetailH5 changeContent={props.changeContent} content={content} />)}
                </div>
            </div>
        </div>
    );
}
        
export default ProductBoxH5;
