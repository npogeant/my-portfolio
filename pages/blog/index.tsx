import styled from "styled-components";
import Container from "components/Layout/Container";
import { Posts } from "components/Posts";

export default function Blog() {
  return (
    <Container title="Blog - Nicolas Pogeant">
      <h1>Blog</h1>
      <Paragraph>
        Over the past few years, I've discovered the immense value of writing blogs
        in reinforcing my knowledge and facilitating clear documentation. Initially 
        intended for my own benefit, these blogs gradually garnered a wider audience, 
        compelling me to articulate my thoughts more precisely, enhance the organization 
        of my writing, and delve deeper into the specific subjects I was exploring.{" "}
        <br />
        <br />
        Through this transformative journey, I've come to appreciate the dual benefits 
        of personal growth and knowledge-sharing that blogging has brought to my life.{" "}
        <br />
        <br />
        You can find my last 10 articles on Medium here :
      </Paragraph>
      <Posts title="Last 10 Posts" />
    </Container>
  );
}

export const Paragraph = styled.p`
  br {
    content: "";
    margin: 1rem;
    display: block;
  }
`;
