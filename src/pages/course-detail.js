import CourseDetailComponent from "@/components/CourseDetailComponent";
import { courseList } from "@/data/constants";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Course() {
  const router = useRouter();
  const [pathID, setPathID] = useState(router.query.id);

  useEffect(() => {
    setPathID(router.query.id);
  }, [router.query.id]);

  console.log(pathID);

  return courseList.map((data) => {
    if (data.id === pathID) {
      return (
        <CourseDetailComponent
          desc={data.desc}
          title={data.title}
          pathID={pathID} // Pass pathID as a prop
          key={data.id}
        />
      );
    }
    return null;
  });
}
