export interface Obj1 {
    id:String,
    name:String
}


const obj1:Obj1 = {
    id:"1",
    name:"test"
}

export interface Obj2 {
    id:Number,
    name?:String
}

const obj2:Obj2 = {id:1}

for(let key in obj1){
    console.log(key)
}








