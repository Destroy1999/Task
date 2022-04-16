import React from "react";
import Cart from "./Cart/Cart";
import "./Courses.css"

function Courses(props) {
    return(
        <div className="cartContainer">
            <Cart
                CoursesView = {props.CoursesView}
            />
        </div>
    )
}

export default Courses