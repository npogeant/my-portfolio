import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { Experience } from "components/Experience";
import { Education } from "components/Education";
import { Skillset } from "components/Skillset";
import Container from "components/Layout/Container";
import { StringProps } from "lib/types";
import { devices } from "lib/displayDevice";

import { Flex } from "components/Layout/Container/styles";

import ProfilePicture from "public/assets/png/Nicolas Pogeant Propre.jpg";

export default function Home() {
  return (
    <Container>
      <HeroFlex align="flex-start">
        <ContentWrapper>
          <h1>Nicolas Pogeant</h1>
          <h2>Data Scientist</h2>
          <p>
          Enthusiastic Data Scientist with over <b>2 years of experience</b> in diverse fields, blending analytical expertise with 
          cutting-edge technologies to create powerful and efficient data-driven solutions. My passion lies in developing <b>NLP </b> 
          models for language understanding, implementing <b>MLOps</b> practices to streamline machine learning workflows, and 
          crafting sophisticated <b>RecSys</b> algorithms to deliver personalized and engaging user experiences.
          </p>
          <ResumeDownloadLink />
        </ContentWrapper>
        <RightFlex>
          <RoundImage src={ProfilePicture} alt="Picture of Nicolas" width={150} height={150} />
          {/* Social Media Links */}
          <SocialMediaWrapper>
            <SocialMediaIcon href="https://github.com/npogeant" target="_blank">
              <Image className="icon" src="/assets/icons/github-original.svg" alt="GitHub" width={30} height={30} />
            </SocialMediaIcon>
            <SocialMediaIcon href="https://www.linkedin.com/in/nicolaspogeant/" target="_blank">
              <Image className="icon" src="/assets/icons/linkedin-plain.svg" alt="Linkedin" width={30} height={30} />
            </SocialMediaIcon>
            <SocialMediaIcon href="https://npogeant.medium.com/" target="_blank">
              <Image className="icon" src="/assets/icons/medium-icon-svgrepo-com.svg" alt="Medium" width={30} height={30} />
            </SocialMediaIcon>
          </SocialMediaWrapper>
        </RightFlex>
      </HeroFlex>
      <Experience />
      <Education />
      <Skillset />
      {/* <Projects />
      <Posts title="Featured Stories" /> */}
    </Container>
  );
}

export const ContentWrapper = styled.div<StringProps>`
  padding-right: 2rem;

  h1,
  h2 {
    margin: 0;
  }

  h2 {
    margin: 1rem 0;
    font-size: 1.25rem;
  }

  p {
    max-width: 65ch;
  }

  @media ${devices.mobileL} {
    margin-top: 2rem;
  }
`;

export const RoundImage = styled(Image)`
  border-radius: 50%;
`;

const HeroFlex = styled(Flex)`
  @media ${devices.mobileL} {
    flex-direction: column-reverse;
  }
`;

const RightFlex = styled(Flex)`
    align-items: center;
    display: block;
`;

// Add styles for Social Media Links
const SocialMediaWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  margin-left: 1rem;

  /* Add any spacing between icons */
  gap: 1rem;
`;

const SocialMediaIcon = styled.a`
  /* Add any custom styles for the icons */
  /* No need for additional styling with NextImage component */
`;

const ResumeDownloadLink = () => {
  // Replace the resume file URL with the actual URL of your resume file
  const resumeFileUrl = "/path/to/your/resume.pdf";

  return (
    <a href={resumeFileUrl} download="YourResumeName.pdf">
      Download my resume
    </a>
  );
};
