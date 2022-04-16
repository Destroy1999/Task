import React from "react";
import "./Nav.css"

function Nav(props) {
    return(
        <>
            <nav className="displayNav">
                <div className="info">{props.pageSelected}</div>
                <ul>
                    {props.filterList.map((e,i) => {
                        return(
                            <li
                                key = {i}
                                id = {e.active ? "filterActive" : null}
                                onClick = {props.selectFilter.bind(this, e)}
                            >
                                {e.title}
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Nav