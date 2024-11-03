import { useState } from "react";


function useSort (data, Config){

    const [SortOrder, setSortOrder] = useState(null);
    const [SortBy, setSortBy] = useState(null);

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

    return {
        sortedData,
        SortBy,
        SortOrder,
        handleClick
    }

}

export default useSort;