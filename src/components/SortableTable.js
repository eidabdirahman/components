
import { GoChevronUp, GoChevronDown } from "react-icons/go";
import useSort from "../hooks/use-sort";
import Table  from '../components/Table';

function SortableTable(props) {
   const { Config, data } = props;

  const {
    sortedData,
    SortBy,
    SortOrder,
    handleClick
  } = useSort(data, Config)

   

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