import React from "react";
import Badge from "../Badge";
import TableBtn from "../TableBtn";
import {AiFillEye, MdDelete, MdModeEdit} from "../../../icons";


export default function TableRow({task,priority,status,deadline}) {
    return (
    <tr>
        <td>{task}</td>
        <td><Badge title={priority}/></td>
        <td><Badge title={status}/> </td>
        <td>{deadline}</td>
        <td className="text-white flex gap-1 justify-center items-center">
            <TableBtn Icon={MdDelete}/>
            <TableBtn Icon={MdModeEdit} color={"#0d6efd"} hoverColor={"#0b5ed7"}/>
            <TableBtn Icon={AiFillEye} color={"#6c757d"} hoverColor={"#5c636a"}/>
        </td>
    </tr>
    )
}