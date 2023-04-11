import React from "react";
import Card from "./card";
import Jumbo from "./jumbo.js";
import Top from "./top";

//create your first component
const Home = () => {
  return (
	<><div>
		  <Top />
	  </div><div className="container">
			  <div className="head">
				  <Jumbo />
			  </div>
			  <div className="d-flex mp-4">
				  <div className="p-3"><Card /></div>
				  <div className="p-3"><Card /></div>
				  <div className="p-3"><Card /></div>
				  <div className="p-3"><Card /></div>
			  </div>
		  </div></>
  );
};

export default Home;