import HowItWorksComponent from "@/components/HowItWorksComponent";
import NavbarComponent from "@/components/NavbarComponent";
import TutorListComponent from "@/components/TutorListComponent";
import TutorProfileComponent from "@/components/TutorProfileComponent";
import TutorSearchComponent from "@/components/TutorSearchComponent";

export default function Home() {
  return (
    <div className="px-[24]">
      <NavbarComponent />
      <TutorProfileComponent />
    </div>
  );
}
