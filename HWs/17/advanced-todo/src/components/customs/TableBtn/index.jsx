import React, {useEffect} from "react";




export default function TableBtn({Icon,color="#DA3544",hoverColor="#bb2d3b"}) {
    console.log(color,hoverColor)
    const btnClass = `bg-[${color}] hover:bg-[${hoverColor}] py-1 px-2 rounded`

    return (
        <button className={btnClass}><Icon/></button>
    )
}
