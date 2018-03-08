import React from "react";

function SingleProductView(props) {
    return (
        <div className="single-page"><br />
            <div className="single-top-pagination">
                <ul>
                    <li><a href="#" onClick={(e) => props.changeContent(0, e)}>Home /</a></li>
                    <li><span>{props.currentContent.name}</span></li>
                </ul>
            </div>
            <div className="clear"> </div>
            <div className="product-info">
                <div className="product-image">
                    <div className="clearfix" id="content" >
                        <div className="clearfix">
                            <a href={props.currentContent.imgUrl} className="jqzoom" rel='gal1' title={props.currentContent.name} >
                                <img className="img-small" src={props.currentContent.imgUrl}  title="triumph" alt="" />
                            </a>
                        </div>
                        <br/>
                        <div className="clearfix" >
                        <ul id="thumblist" className="clearfix" >
                            <li><a className="zoomThumbActive" href='javascript:void(0);' rel="{gallery: 'gal1', smallimage: 'images/triumph_small1.jpg',largeimage: 'images/triumph_big1.jpg'}"><img src={props.currentContent.imgUrl} alt="" /></a></li>
                            <li><a href='javascript:void(0);' rel="{gallery: 'gal1', smallimage: 'images/triumph_small2.jpg',largeimage: 'images/triumph_big2.jpg'}"><img src={props.currentContent.imgUrl} alt="" /></a></li>
                            <li><a href='javascript:void(0);' rel="{gallery: 'gal1', smallimage: 'images/triumph_small3.jpg',largeimage: 'images/triumph_big3.jpg'}"><img src={props.currentContent.imgUrl} alt="" /></a></li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div className="product-price-info">
                    <div className="product-catrgory-pagenation">
                        <ul>
                            <li><h3>Categories :</h3></li>
                            <li className="active3"><a href="#">{props.currentContent.name}</a></li>
                            <li><a href="#">Product2</a></li>
                            <li><a href="#">Product3</a></li>
                        </ul>
                    </div>
                        <div className="product-value">
                        <h4>Product-Complete Details With Value</h4>
                        <ul>
                            <li><h2>Price :</h2></li>
                            <li><span>$350</span></li>
                            <li><h5>$500</h5></li>
                            <li><a href="#">Instock</a></li>
                        </ul>
                        <ul>
                            <li><h3>Not rated</h3></li>
                            <li><h5>No reviews</h5></li>
                        </ul>
                    </div>
                    <div className="product-shipping">
                        <span>Shipping :</span>
                        <p><lable>FREE</lable> - Flat Rate Courier - Delivery anywhere in </p>
                        <div className="clear"></div>
                    </div>
                    <div className="product-payments">
                        <span>Payments: :</span>
                        <p><lable>paypal</lable> - (Credit card, EMI, Debit card, Online Bank Transfer), PaisaPay COD  </p>
                        <div className="clear"></div>
                    </div>
                    <div className="product-description">
                        <h3>Description :</h3>
                        <p>{props.currentContent.descriptionLong}</p>
                        <a href="#">Addcart</a>
                    </div>
                    <div className="product-share">
                        <h3>share on:</h3>
                        <ul>
                            <li><a href="#"><img src="images/facebook.png" title="facebook" alt="" />Facebook</a></li>
                            <li><a href="#"><img src="images/twitter.png" title="Twitter" alt="" />Twitter</a></li>
                            <li><a href="#"><img src="images/rss.png" title="Rss" alt="" />Rss</a></li>
                            <li><a href="#"><img src="images/gpluse.png" title="Googlepluse" alt="" />Google+</a></li>
                        </ul>
                    </div>
                </div>
                <div className="clear"></div>
            </div>
        </div>
    );
}

export default SingleProductView;