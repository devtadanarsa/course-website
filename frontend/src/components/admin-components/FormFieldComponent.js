export default function FormField(props){
    return(
        <div className="mt-4">
            <p>{props.label}</p>
            {props.type === "select" ? (
            <select className="border outline-none pr-4 pl-1 py-2" name={props.name} value={props.value} onChange={props.onChange}>
                {props.children}
            </select>
            ) : (
            <input
                type={props.type}
                placeholder={props.placeholder}
                className={`border w-full px-2 py-2 border-gray-300 outline-none`}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
            />
            )}
        </div>
    )
}