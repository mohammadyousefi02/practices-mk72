import React,{createContext} from "react"

import { IindexContext,Iproduct } from "../interfaces"

export const IndexContext = createContext<IindexContext>({
    data:[{id:"",url: "",description: "",price: "",size: [""]}],
    cartList:[{id:"",url: "",description: "",price: "",size: [""]}],
    addToCart:(id:string):void=>{},
    removeHandler:(id:string):void=>{},
    total:0,
    closeModal:()=>{},
    showModalHandler:(value:Iproduct)=>{},
    filterValue:'',
    changeFilter:(value:string)=>{},
    orderValue:'',
    changeOrder:(value:string)=>{},
    setDatasLength:(value:number)=>{},
    datasLength:0
})