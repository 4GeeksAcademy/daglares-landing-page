import React from "react";

//create your first component
const Card = () => {
  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-3 mt-4">
      <div className="card h-100">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAFic7hGwAKN_Kb2LAPltna7c5bBUHIZYmcA&s"
          className="card-img-top"
          alt="..."
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
        <div className="card-footer text-center">
          <a href="#" class="btn btn-primary">
            Find Out More!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
