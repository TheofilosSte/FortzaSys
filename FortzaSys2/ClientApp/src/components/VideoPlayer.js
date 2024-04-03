
import React from 'react';

function VideoPlayer({ videoUrl }) {
    return (
        <div>
            {/* Render video player UI */}
            <video src={videoUrl} controls />
        </div>
    );
}

export default VideoPlayer;
