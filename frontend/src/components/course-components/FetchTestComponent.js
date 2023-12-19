import { useState, useEffect } from "react";
import axios from 'axios';


export default function FetchTestComponent(props){
    // const url = `http://localhost:8000/lessons/${props.pathID}/${props.pathSubID}`;
    // const [courseChapters, setCourseChapters] = useState(null);

    // const fetchInfo = () => {
    //     return fetch(url)
    //         .then((res) => res.json())
    //         .then((data) => setCourseChapters(data));
    // }

    // useEffect(() => {
    //     fetchInfo();
    // }, []);
    const {courseId} = props;
    const {chapterId} = props;
    const [chapterData, setChapterData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`http://localhost:8000/lessons/${courseId}/${chapterId}`);
            setChapterData(response.data);
            // Handle the response data as needed
          } catch (error) {
            console.error('Error fetching data:', error.message);
          }
        };
    
        fetchData();
      }, [courseId]);

    return(
        <div>
            {chapterData.map((data) => {
                return(
                    <h1 key={data.chapter_id}>{data.chapter_title}</h1>
                )
            })}


        </div>
        
    )
}