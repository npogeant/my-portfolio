import { useState } from "react";
import React, { ReactNode } from "react";
import { ChildrenStringProps } from "lib/types";
import { COLOR_SPOTIFY_GREEN, COLOR_BLACK } from "lib/colorPalette";

import { DividerBorder, StepLi, MoreButton } from "components/Experience/styles";

const Divider = () => <DividerBorder />;

const Exp = ({ children }: ChildrenStringProps) => <h4>{children}</h4>;

export const Experience = () => {
  const [isShowingFullExperience, showFullExperience] = useState(false);

  const Step = ({ children }: { children: ReactNode }) => (
    <ul style={{ paddingLeft: '20px', fontSize: '18px', listStyle: 'none' }}>
      <li style={{ position: 'relative', paddingLeft: '20px', marginBottom: '8px' }}>
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            border: '5px solid',
            marginTop: '9px',
          }}
        ></div>
        <span>{children}</span>
      </li>
    </ul>
  );

  const Title = ({ children }: { children: ReactNode }) => (
    <p className="title" style={{ marginBlockStart: -20, fontSize: '1rem'}}><em>{children}</em></p>
  );

  const Year = ({ children }: { children: ReactNode }) => (
    <p style={{ color: 'grey', marginBlockStart: -20, fontSize: '1rem'}}>{children}</p>
  );

  const FullExperience = () => (
    <>
      <Exp>Bourse des Crédits</Exp>
      <Title>Financial Analyst Assistant</Title>
      <Year>January 2020 - June 2020</Year>
      {/* <Step>Analysing customers files in order to obtain information</Step>
      <Step>Credit scoring</Step>
      <Step>Transmitting offers to banking partners and following-up of customers files</Step> */}
      <Divider />
    </>
  );

  return (
    <>
      <h3>Experience</h3>

      <Exp>ePerf Consulting</Exp>
      <Title>Data Scientist</Title>
      <Year>September 2021 - Present</Year>
      {/* <Step>Using Data Science tools, Machine Learning algorithms to help identify potential areas of improvement for websites, such as increasing website traffic or improving conversion rates</Step>
      <Step>Improving, analyzing most viewed (over 50 millions impressions daily) French media content (France Info, Ouest France, La Dépêche, Sud Ouest, Les Echos...) and optimizing search engine results</Step>
      <Step>Clustering media articles and identifying trendy queries by using NLP algorithms on thousands documents (articles title and content)</Step>
      <Step>Creating data collection pipelines between data sources (Google Search Console) and Databases (PostgreSQL)</Step> */}

      <Exp>Menarini</Exp>
      <Title>In charge of Studies/Data Analyst</Title>
      <Year>September 2020 - September 2021</Year>
      {/* <Step>Processing and using CRM data</Step>
      <Step>Updating customer databases</Step>
      <Step>Updating dashboards and monitoring of sales, activity and marketing operations</Step>
      <Step>Updating and verifying the reliability of databases and markets</Step> */}

      <Exp>Bourse des Crédits</Exp>
      <Title>Financial Analyst Assistant</Title>
      <Year>January 2020 - June 2020</Year>
      {/* <Step>Analysing customers files in order to obtain information</Step>
      <Step>Credit scoring</Step>
      <Step>Transmitting offers to banking partners and following-up of customers files</Step> */}
      <Divider />
      
      {/* {isShowingFullExperience ? (
        <FullExperience />
      ) : (
        <MoreButton type="button" onClick={() => showFullExperience(true)}>
          See More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </MoreButton>
      )} */}
    </>
  );
};
