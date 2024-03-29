import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (
    <div className="video">
        <iframe
            width="900"
            height="480"
            src={`https://www.youtube.com/embed/${embedId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            frameBorder= "0"
            allowFullScreen
            title="Embedded youtube"
        />
    </div>
);

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;