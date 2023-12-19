export default function CourseIconComponent(props){
    return(
        <div className="rounded-full h-[70px] w-[70px] border-4 border-white">
            <img src={props.image}/>
        </div>
    )
}