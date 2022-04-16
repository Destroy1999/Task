import React from "react";
import "./Navbar.css"



function Navbar (props) {

    return(
        <nav className="leftNav">
            <ul>
                {props.state.pageList.map((e,i) => {
                    return(
                        <li
                            key = {i}
                            onClick = {props.selectPage.bind(this, e)}
                            id = {e.active ? "pageActive" : null}
                        >
                            <img src={e.url} width="40%" />
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}


export default Navbar