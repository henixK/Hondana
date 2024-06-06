import * as React from "react";

export default function GiphyEmbed() {
    return (
        <div style={{ width: "480px" }}>
            <iframe 
                allow="fullscreen" 
                frameBorder="0" 
                height="270" 
                src="https://giphy.com/embed/1ks7dg5cVbl0fz4umo/video" 
                width="480"
                title="Giphy Embed"
            ></iframe>
        </div>
    );
}
