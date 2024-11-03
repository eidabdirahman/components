// import Table from "../components/Table";

import SortableTable from "../components/SortableTable";
function TablePage (){

    const fruit = [
        { name: 'orange', color: 'bg-orange-500', score: 3 },
        { name: 'apple', color: 'bg-red-500', score: 5 },
        { name: 'banana', color: 'bg-yellow-500', score: 1 },
        { name: 'lime', color: 'bg-green-500', score: 4 },
        { name: 'lemon', color: 'bg-yellow-700', score: 8 },
    ];

    const   Config = [
        {
          label: 'Name',
          render: (fruit) => fruit.name,
          sortValue: (fruit) => fruit.name,
        },
        {
          label: 'Color',
          render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`} />,
        },
        {
          label: 'Score',
          render: (fruit) => fruit.score,
          sortValue: (fruit) => fruit.score,
        },
        {
          label: 'lemon',
          render: (fruit) => fruit.score **2,
          sortValue: (fruit) => fruit.lemon,
        },
      ];

    const keyFn = () =>{
        return fruit.name
    };

    return(
        <div className="container">
            <SortableTable  data={fruit}  Config={Config} keyFn={keyFn}/>
        </div>
    )
}

export default TablePage;