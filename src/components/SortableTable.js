import { useState } from "react";
import { GoChevronUp, GoChevronDown } from "react-icons/go";
import Table from "./Table";

function SortableTable(props) {
    const [SortOrder, setSortOrder] = useState(null);
    const [SortBy, setSortBy] = useState(null);

    const { Config, data } = props;

    const handleClick = (label) => {
        if(SortBy && label !== SortBy){
            setSortOrder('asc');
            setSortBy(label)
            return;
        }


        if (SortOrder === null) {
            setSortOrder('asc');
            setSortBy(label);
        } else if (SortOrder === 'asc') {
            setSortOrder('desc');
            setSortBy(label);
        } else if (SortOrder === 'desc') {
            setSortOrder(null);
            setSortBy(null);
        }
    };

    let sortedData = data; 

    if (SortOrder && SortBy) {
        const { sortValue } = Config.find(column => column.label === SortBy);

        sortedData = [...data].sort((a, b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);

            const reverseOrder = SortOrder === 'asc' ? 1 : -1;

            if (typeof valueA === 'string') {
                return reverseOrder * valueA.localeCompare(valueB);
            } else {
                return reverseOrder * (valueA - valueB);
            }
        });
    }

    const updatedConfig = Config.map((column) => {
        if (!column.sortValue) {
            return column;
        }

        return {
            ...column,
            header: () => (
                <th className="cursor-pointer hover:bg-gray-100" onClick={() => handleClick(column.label)}>
                    <div className="flex items center">
                    {getIcons(column.label, SortBy, SortOrder)}
                    {column.label}
                    </div>
                   
                </th>
            )
        };
    });

    return (
        <div>
            
            <Table {...props} data={sortedData} Config={updatedConfig} />
        </div>
    );
}

function getIcons(label, SortBy, SortOrder){
    if(label !== SortBy){
        return<div>
        <GoChevronUp/>
        <GoChevronDown/>
       </div>
    }

    if(SortOrder === null){
       return<div >
        <GoChevronUp/>
        <GoChevronDown/>
       </div>
       
    }else if(SortOrder === 'asc'){
       <GoChevronUp/>
    }else if(SortOrder === 'desc'){
       return <GoChevronDown/>
    }
}

export default SortableTable;