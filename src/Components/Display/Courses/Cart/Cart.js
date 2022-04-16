import React from "react";
import "./Cart.css"

function Cart(props) {
    return(
        <>
            {props.CoursesView.map((e,i)=>{
                return(
                    <div 
                        key = {i} 
                        className = "cartBody"
                    >
                        <img src={e.img}  width="100%" height={"100%"}/>
                        <h2>{e.title}</h2>
                        <h3>{e.Lessons} Lessons</h3>
                        <h4>{e.date} min</h4>
                        <img className="startIco" src="https://iconarchive.com/download/i42734/oxygen-icons.org/oxygen/Actions-media-playback-start.ico" wdith="100px" height="100px" />
                    </div>
                )
            })}
        </>
    )
}

export default Cart