import NavbarComponent from "@/components/NavbarComponent";
import FooterComponent from "@/components/FooterComponent";
import SearchComponent from "@/components/SearchComponent";
// import { tutors } from "@/data/constants";
import { useEffect, useState } from "react";
import TutorComponent from "@/components/tutor-component/TutorComponent";
import AddTutorsComponent from "@/components/tutor-component/addTutorsComponent";

export default function Tutors() {
  const [searchInput, setSearchInput] = useState("");
  const [activeTutor, setActiveTutor] = useState(null);
  const [tutors, setTutors] = useState([]);

  const handleSearchInputChange = (value) => {
    setSearchInput(value);
  };

  const handleTutorHover = (tutorId) => {
    setActiveTutor(tutorId);
  };

  const handleTutorBlur = () => {
    setActiveTutor(null);
  };

  const getTutors = async () => {
    try {
      const response = await fetch("http://localhost:8000/tutors");
      const jsonData = await response.json();
      setTutors(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTutors();
  }, []);

  return (
    <>
      <NavbarComponent page="Find Tutors" />
      <div className="px-10 md:px-24">
        <SearchComponent
          name="Tutors"
          onSearchInputChange={handleSearchInputChange}
        />
        <AddTutorsComponent />
        {tutors.map((data) => {
          console.log(data);
          return (
            <TutorComponent
              key={data.tutor_id}
              name={data.tutor_name}
              degree={data.speciality}
              language={data.native_language}
              miniDesc={data.tutor_desc}
              extraDesc={data.tutor_desc}
              video={data.intro_video_link}
              isActive={activeTutor == data.id}
              onHover={() => handleTutorHover(data.id)}
              onBlur={handleTutorBlur}
              tutor_id={data.tutor_id}
              tutor={data}
              imagePath={data.profile_image}
            />
          );
        })}
      </div>
      <FooterComponent />
    </>
  );
}
