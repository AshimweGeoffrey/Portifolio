import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Technologies from "./Technologies/Technologies";

type Props = {
  onContactClick: () => void;
};

export default function HomeContent({ onContactClick }: Props) {
  return (
    <>
      <Main onContactClick={onContactClick} />
      <Skills />
      <Projects />
      <Technologies />
    </>
  );
}
