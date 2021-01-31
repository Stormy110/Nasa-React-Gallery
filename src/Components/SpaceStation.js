import React from 'react';

function SpaceStation() {
    return (
        <div className="station-feed">
            <iframe width="1080" height="620" src="https://ustream.tv/embed/17074538"  title="Live Stream Feed"></iframe>
            <br/>
            <iframe src="https://isstracker.spaceflight.esa.int/" id="iss-pos" scrolling="no" title="ESU ISS tracking map"></iframe>
        </div>
    )
}

export default SpaceStation;