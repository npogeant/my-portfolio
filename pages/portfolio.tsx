import Container from "components/Layout/Container";
import { Projects } from "components/Projects";
import { Paragraph } from "pages/blog";

export default function Portfolios() {
  return (
    <Container title="Portfolio - Nicolas Pogeant">
      <h1>Portfolio</h1>
      <Paragraph>
        
        Practicing with side projects has been a rewarding journey, and now I'm thrilled 
        to showcase my GitHub repositories on this portfolio page. These projects reflect 
        my passion for learning, problem-solving, and innovation, and I'm excited to share them with you. 
        <br />
        <br />
        Here are the latest projects I've worked on :
      </Paragraph>
      <Projects />
    </Container>
  );
}
