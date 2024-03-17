import React from "react";
import "../../index.css";
import "./Shop.css";
import imgs from "../Images/Images.js";

function Shop() {
    return (
        <div className="shop">
            <h2>Shop</h2>
            <p>Shop for all of your guitar needs!</p>

            <div className="products">
                <div>
                    <img src={imgs[0]} alt="Knobs" />
                    <h3>Knobs</h3>
                    <p>$6.50</p>
                    <button>Add to Cart</button>
                </div>

                <div>
                    <img src={imgs[1]} alt="Tuning Bridge" />
                    <h3>Tuning Bridge</h3>
                    <p>$59.00 - $64.00</p>
                    <button>Select Options</button>
                </div>

                <div>
                    <img src={imgs[2]} alt="Strings" />
                    <h3>Strings</h3>
                    <p>$20.00 - $27.00</p>
                    <button>Select Options</button>
                </div>
            </div>
        </div>
    );
}

export default Shop;