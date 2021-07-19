import React, { Component } from 'react';
import loadingGif from "../loading.gif"
class LoadingComponent extends Component {
    render() {
        return (
            <>
                <img src={loadingGif}/>
            </>
        );
    }
}

export default LoadingComponent;
