import Table from "../components/Table";

function TablePage (){

    const fruit = [
        { name: 'orange', color: 'bg-orange-500', score: 3 },
        { name: 'apple', color: 'bg-red-500', score: 5 },
        { name: 'banana', color: 'bg-yellow-500', score: 1 },
        { name: 'lime', color: 'bg-green-500', score: 4 },
    ];

    const Config = [
        { label: 'Name',
          render : (fruit) => fruit.name ,
        },
        { label: 'Color',
            render : (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div> ,
        },
        { label: 'Score',
            render : (fruit) => fruit.score,   
        },
    ];

    const keyFn = () =>{
        return fruit.name
    };

    return(
        <div className="container">
            <Table  data={fruit}  Config={Config} keyFn={keyFn}/>
        </div>
    )
}

export default TablePage;