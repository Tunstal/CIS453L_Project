import React from "react";
import "../../index.css";
import "./Support.css";

function Support() {
    return (
        <div className="support">
            <h1>Support</h1>
            <h2>Need help? We've got you covered!</h2>
            <form action="mailto: " method="post" enctype="text/plain">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Phone Number" />
                <textarea placeholder="How can we help you?" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Support;