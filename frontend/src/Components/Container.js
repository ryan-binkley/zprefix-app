import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../ComponentCSS/Container.css'

export const Container = (props) => {


    return (
        <div id="container" className="rounded-4 border-dark border border-4">
            {props.children}
        </div>
    )
}