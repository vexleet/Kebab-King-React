import React from "react";

let spinStyle = {
    width: '5rem',
    height: '5rem',
    top: '40%',
    left: '50%',
    position: 'absolute',
}

const Loading = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border" style={spinStyle} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}

export default Loading