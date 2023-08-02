import { Navigation } from "components/Layout/Navigation";
import { ExternalLinkProps, StringProps } from "lib/types";
import ScrollToTop from "components/Layout/ScrollToTop";

import { Flex, StyledContainer } from "components/Layout/Container/styles";
import {
  FooterContainer,
  GridContainer,
  FlexLinks,
} from "components/Layout/Footer/styles";

const ExternalLink = ({ href, children }: ExternalLinkProps) => (
  <a target="_blank" rel="noopener noreferrer" href={href}>
    {children}
  </a>
);

export const Footer = ({ darkTheme }: StringProps) => {
  return (
    <FooterContainer darkTheme={darkTheme}>
      <StyledContainer>
        <Flex justify="center" direction="column">
          <hr />
          <GridContainer>
            <FlexLinks>
              <Navigation href="/" text="Home" />
              <Navigation href="/blog" text="Blog" />
            </FlexLinks>
            <FlexLinks>
              <Navigation href="/portfolio" text="Portfolio" />
              <ExternalLink href="https://medium.com/@npogeant">
                Medium
              </ExternalLink>
            </FlexLinks>
            <FlexLinks>
              <ExternalLink href="https://github.com/npogeant">
                GitHub
              </ExternalLink>
              <ExternalLink href="https://www.linkedin.com/in/nicolaspogeant/">
                LinkedIn
              </ExternalLink>
            </FlexLinks>
          </GridContainer>
          <ScrollToTop darkTheme={darkTheme} />
        </Flex>
      </StyledContainer>
    </FooterContainer>
  );
};
