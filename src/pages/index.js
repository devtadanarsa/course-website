import NavbarComponent from "@/components/NavbarComponent"
import HeroComponent from "@/components/HeroComponent"
import PurchaseTutorsComponent from "@/components/PurchaseTutorsComponent"
import BenefitComponent from "@/components/BenefitComponent"
import SummaryComponent from "@/components/SummaryComponent"

export default function Home() {
  return (
    <div className="px-24">
      <NavbarComponent />
      <HeroComponent />
      <PurchaseTutorsComponent />
      <BenefitComponent />
      <SummaryComponent />
    </div>
  )
}
