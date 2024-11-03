import Link from "./Link";

function Sidebar (){

    const Links = [
        {label: 'dropdown', path:'/'},
        {label: 'accordion', path:'/accordion'},
        {label: 'buttons', path:'/buttons'},
        {label: 'modal', path:'/modal'},
        {label: 'table', path:'/table'},
        {label: 'counter', path:'/counter'},
    ];

    const renderedLinks = Links.map((link)=>{
        return <Link 
        key={link.label}
         to={link.path}
         className="mb-3"
         activeClassName= "font-blod border-l-4 border-blue-500 pl-2 items-start"
         >
            {link.label}</Link>
    })
    return (
        <div className="sticky top-0 overflow-y-scroll flex flex-col">
            {renderedLinks}
        </div>
    )
}


export default Sidebar;