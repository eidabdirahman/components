import { FaAngleLeft, FaAngleDown } from "react-icons/fa6";

import { useState } from "react";

function Accordion ({items}){
    const [expendedIndex, setEXpendedindex]= useState(-1);

    const HandleClick = (Nextindex)=>{

        setEXpendedindex((currentIndexValue)=>{
            if (currentIndexValue === Nextindex) {
                return -1;}
                else {
                    return Nextindex;}

        })

    };

    

   const renderedItems = items.map ((item , index)=>{
    const isEXpended = index === expendedIndex;

    const icon = <span>
        {isEXpended ? <FaAngleDown /> : <FaAngleLeft />}
    </span>

        return (
            <div key={item.id}>
                <div className="flex border-b bg-grey-500 items-center justify-between cursor-point"
                onClick={()=> HandleClick(index)}> 
                    {item.label} 
                    {icon}
                    </div>
                <div> {isEXpended && <div className="border-b p-3 ">{item.content}</div>} </div>
            </div>
        )
    })
return (
    <div className="border-x border-t rounded">
        {renderedItems}
        
    </div>
)
}

export default Accordion;