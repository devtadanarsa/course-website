"use client";

import NavbarComponent from "@/components/NavbarComponent"
import HeroComponent from "@/components/landing-page/HeroComponent"
import PurchaseTutorsComponent from "@/components/landing-page/PurchaseTutorsComponent"
import BenefitComponent from "@/components/landing-page/BenefitComponent"
import SummaryComponent from "@/components/landing-page/SummaryComponent"
import FooterComponent from "@/components/FooterComponent"

export default function Home() {
  return (
    <>
      <NavbarComponent page="Home"/>
      <div className="px-8 lg:px-2 xl:px-16 2xl:px-24">
        <HeroComponent/>
        <PurchaseTutorsComponent />
        <BenefitComponent />
        <SummaryComponent />
      </div>
      <FooterComponent />
    </>
  )
}
