import React from "react";
import "../../index.css";
import "./Resources.css";
import YoutubeEmbed from "./Videos";

function Resources() {
    return (
        <div className="resources">
            <h1>Videos</h1>
            <p>Check out our latest videos!</p>
            <YoutubeEmbed embedId="WHTH9TnQ7lU" />
            <YoutubeEmbed embedId="WK0mmXBtLjk" />
            <YoutubeEmbed embedId="TjBdgphiTSQ" />
        </div>
    )
}

export default Resources;