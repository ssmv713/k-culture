import { useCustomMediaQuery } from "@/common/theme";
import { useRef } from "react";
import { Header, MobileHeader } from "../../components/header";
import {
  AwardsSection,
  EmailSection,
  ExampleSection,
  FooterSection,
  MainSection,
  RequirementsSection,
  RulesSection,
  ThemeSection,
  VideoSection,
} from "./sections";
import { MobileMainSection } from "./sections/mobile";

export const MainView = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const OverviewRef = useRef<HTMLDivElement>(null);
  const PrizeRef = useRef<HTMLDivElement>(null);
  const RulesRef = useRef<HTMLDivElement>(null);
  const ContactRef = useRef<HTMLDivElement>(null);
  console.log(mainRef);
  const handleScrollToTop = () => {
    mainRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const refArr = [OverviewRef, PrizeRef, RulesRef, ContactRef];

  const scrollToSection = (index: number) => {
    refArr[index].current?.scrollIntoView({ behavior: "smooth" });
  };
  const { isMedium } = useCustomMediaQuery();
  return (
    <>
      {isMedium ? (
        <MobileHeader scrollToSection={scrollToSection} />
      ) : (
        <Header scrollToSection={scrollToSection} />
      )}
      {isMedium ? (
        <MobileMainSection mainRef={mainRef} />
      ) : (
        <MainSection mainRef={mainRef} />
      )}
      <VideoSection />
      <ThemeSection OverviewRef={OverviewRef} />
      <ExampleSection />
      <RequirementsSection />
      <AwardsSection PrizeRef={PrizeRef} />
      <RulesSection RulesRef={RulesRef} />
      <EmailSection ContactRef={ContactRef} />
      <FooterSection handleScrollToTop={handleScrollToTop} />
    </>
  );
};
