export interface Iproduct {
    id: string,
    url: string,
    description: string,
    price: string,
    size: string[],
    total?:number,
    amount?:number
}


export type TproductsList = Iproduct[]

export interface IindexContext {
    data: TproductsList,
    addToCart:(id:string)=>void,
    removeHandler:(id:string)=>void,
    cartList: TproductsList,
    total:number,
    closeModal:()=>void,
    showModalHandler:(value:Iproduct)=>void,
    filterValue:string,
    changeFilter:(value:string)=>void,
    orderValue:string,
    changeOrder:(value:string)=>void,
    setDatasLength:(value:number)=>void
    datasLength:number
}