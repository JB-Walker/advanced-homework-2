import React from "react";
import ProductBoxH5 from './ProductBoxH5.js';
import ProductBoxV4 from './ProductBoxV4.js';
import ImageSlider from './ImageSlider.js';
import ContactBox from './ContactBox.js';

function NavPageContent(props) {
    return (
        <div className="content">
            {props.currentContent.slider && <ImageSlider />}
            {props.currentContent.productBox && props.currentContent.boxStyle === "horizontal5"
            && <ProductBoxH5 changeContent={props.changeContent} currentContent={props.currentContent} contents={props.contents}/>}
            {props.currentContent.productBox && props.currentContent.boxStyle === "vertical4"
            && <ProductBoxV4 changeContent={props.changeContent} currentContent={props.currentContent} contents={props.contents}/>}
            {props.currentContent.contactBox && <ContactBox />}
        </div>
    );
}
        
export default NavPageContent;