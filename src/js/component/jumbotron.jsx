import React from "react";


const Jumbotron = () => {
	return (
		<div className="p-2 mb-4 rounded-3 mt-3 text-start bg-secondary bg-opacity-25"> 
      <div className="container-fluid py-5 text start">
        <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
        <p className="fs-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore nobis accusamus voluptatibus voluptas placeat vel blanditiis autem minus voluptatem quia?</p>
        <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
      </div>
    </div>
	);
};

export default Jumbotron;