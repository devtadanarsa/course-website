import NavbarComponent from "@/components/NavbarComponent";
import TutorListComponent from "@/components/TutorListComponent";

export default function Home() {
  return (
    <div className="px-[24]">
      <NavbarComponent />
      <TutorListComponent />
    </div>
  );
}
