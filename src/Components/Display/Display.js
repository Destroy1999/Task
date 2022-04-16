import React from "react";
import "./Display.css"
import Nav from "./Nav/Nav";
import Courses from "./Courses/Courses"

function Display(props) {
    return(
        <div className="displayContainer">
            <Nav
                pageSelected = {props.pageSelected}
                filterList = {props.filterList}
                selectFilter = {props.selectFilter}
            />
            {props.state.pageSelected === "Courses" 
            ? 
            <Courses
                CoursesView = {props.CoursesView}
            />
            : null}
            {props.state.pageSelected === "Shoping List" ? "" : null}
            {props.state.pageSelected === "Group" ? "" : null}
        </div>
    )
}

export default Display