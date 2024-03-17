import React from "react";
import { NavLink } from "react-router-dom";
import homeimgs from "../Images/Images.js";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <img src={homeimgs[3]} alt="Home header image" />
            <h2>Featured Products</h2>

            <div className="featured">
                <div>
                    <NavLink to="/shop">
                    <img src={homeimgs[0]} alt="Knobs" />
                    <h3>Knobs</h3>
                    </NavLink>
                </div>

                <div>
                    <NavLink to="/shop">
                    <img src={homeimgs[1]} alt="Tuning Bridge" />
                    <h3>Tuning Bridge</h3>
                    </NavLink>
                </div>

                <div>
                    <NavLink to="/shop">
                    <img src={homeimgs[2]} alt="Strings" />
                    <h3>Strings</h3>
                    </NavLink>
                </div>
            </div>

            <div className="newsletter">
                <h2>Newsletter</h2>
                <p>Subscribe to keep up with our latest releases and content!</p>
                <form>
                    <input type="email" placeholder="Email" />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </div>
    );
}

export default Home;