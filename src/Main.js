import React from "react";
import {
    Route, Routes,
    NavLink,
    HashRouter
} from "react-router-dom";
import logo from "./Logo.png";
import search from "./search.png";
import facebook from "./facebook.png";
import youtube from "./youtube.png";
import account from "./account.png";
import cart from "./cart.png";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import OEM from "./components/OEM/OEM";
import Products from "./components/Products/Products";
import Resources from "./components/Resources/Resources";
import Support from "./components/Support/Support";
import "./index.css";

function Main() {
    return (
        <HashRouter>
            <div className="logoHeader">
                <NavLink to="/"><img src={logo} alt="Logo" /></NavLink>
                <div className="headerIcons">
                    <NavLink to="/account"><img src={account} /></NavLink>
                    <NavLink to="/cart"><img src={cart} /></NavLink>
                </div>
            </div>
            <ul className="header">
                <li><NavLink to="/shop">Shop</NavLink></li>
                <li><NavLink to="/oem">O.E.M</NavLink></li>
                <li><NavLink to="/products">Products</NavLink></li>
                <li><NavLink to="/resources">Resources</NavLink></li>
                <li><NavLink to="/support">Support</NavLink></li>
                <li><input type="text" /></li>
                <li><button><img src={search} /></button></li>
            </ul>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/oem" element={<OEM />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/support" element={<Support />} />
                </Routes>
            </div>
            <div className="footer">
                <div className="footerIcons">
                    <a href="https://www.facebook.com/apollomusicparts/"><img src={facebook}/></a>
                    <a href="https://www.youtube.com/@crossroadguitars"><img src={youtube}/></a>
                </div>
                <ul>
                    <li><NavLink to="/shop">Shop</NavLink></li>
                    <li><NavLink to="/oem">O.E.M</NavLink></li>
                    <li><NavLink to="/products">Products</NavLink></li>
                    <li><NavLink to="/resources">Resources</NavLink></li>
                    <li><NavLink to="/support">Support</NavLink></li>
                </ul>
                <hr />
                <p>© 2024 Apollo Music Parts</p>
            </div>
        </HashRouter>
    )
}

export default Main;