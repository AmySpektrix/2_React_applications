import React from "react";

const Product = (props) => {
    return (
    <div className="product">
        <h2 className="name">{props.name}</h2>
        <p className="description">{props.description}</p>
        <p className="price">{props.price}</p>
    </div>
        );
};

export default Product;