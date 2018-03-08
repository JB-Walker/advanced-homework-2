import React from "react";
import TopHeader from './components/TopHeader.js';
import SubHeader from './components/SubHeader.js';
import TopNav from './components/TopNav.js';
import Footer from './components/Footer.js';
import SingleProductView from './components/SingleProductView.js';
import NavPageContent from './components/NavPageContent.js';


import "./App.css";

function App(props) {
    return (
      	<div className="App">
        	<div className="wrap">
				<div className="header">
					<TopHeader changeContent={props.changeContent} />
					<div className="clear"></div>
					<SubHeader changeContent={props.changeContent} />
					<div className="clear"></div>
					<TopNav changeContent={props.changeContent} contents={props.state.contents} />
				</div>
			{props.state.currentContent.type === "navPage" && <NavPageContent changeContent={props.changeContent} currentContent={props.state.currentContent} contents={props.state.contents} />}
			{props.state.currentContent.type === "singleProduct" && <SingleProductView changeContent={props.changeContent} currentContent={props.state.currentContent} />}
			<div className="clear"></div>
			<Footer />
			</div>
		</div>
    );
}

export default App;
