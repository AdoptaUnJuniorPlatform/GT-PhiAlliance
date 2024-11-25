import Section from "../Section/Section";
import ResponsiveAppBar from "./Navbar/Navbar";

export default function Header({ setIsOpenManifiesto }) {
  return (
    <Section>
      <ResponsiveAppBar setIsOpenManifiesto={setIsOpenManifiesto} />
    </Section>
  );
}
