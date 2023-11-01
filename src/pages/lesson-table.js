import LessonsTableComponent from "@/components/LessonsTableComponent";
import { lessonTable } from "@/data/constants";

export default function LessonTable() {
  return (
    <>
      {lessonTable.map((data) => {
        return (
          <LessonsTableComponent
            title={data.title}
            description={data.description}
            language={data.language}
          />
        );
      })}
    </>
  );
}
