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
            <div className="partners">
                <h2>Partners</h2>
                <div>
                    <a href="https://rockagainsttrafficking.org/"><img src={homeimgs[4]} alt="Rock Against Trafficking" /></a>
                    <p>We are a proud partner with Rock Against Trafficking to stop the suffering of modern slavery and child sex exploitation.</p>
                </div>
                <div>
                    <a href="https://www.fredguitar.com/en/"><img src={homeimgs[5]} alt="Fred's Guitar Parts" /></a>
                    <p>We are partners with Fred’s Guitar Parts to help with distribution of our products in Europe.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;