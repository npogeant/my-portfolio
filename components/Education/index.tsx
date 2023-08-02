import { useState } from "react";
import { ChildrenStringProps } from "lib/types";
import { COLOR_SPOTIFY_GREEN, COLOR_BLACK } from "lib/colorPalette";

import { DividerBorder, StepLi, MoreButton } from "components/Education/styles";

const Divider = () => <DividerBorder />;

const Exp = ({ children }: ChildrenStringProps) => <h4>{children}</h4>;

export const Education = () => {
  const [isShowingFullEducation, showFullEducation] = useState(false);

  const Step = ({ children }) => (
    <ul style={{ paddingLeft: '20px', fontSize: '18px', listStyle: 'none' }}>
      <li style={{ position: 'relative', paddingLeft: '20px', marginBottom: '8px' }}>
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            border: '1px solid',
            marginTop: '6px',
          }}
        ></div>
        <span>{children}</span>
      </li>
    </ul>
  );

  const Title = ({ children }) => (
    <p className="title" style={{ marginBlockStart: -20, fontSize: '1rem'}}><em>{children}</em></p>
  );

  const Year = ({ children }) => (
    <p style={{ color: 'grey', marginBlockStart: -20, fontSize: '1rem'}}>{children}</p>
  );

  const FullEducation = () => (
    <>
      <Exp>Université Paris I Panthéon-Sorbonne</Exp>
      <Title>Bachelor in Economics With Honors</Title>
      <Year>September 2018</Year>
      <Divider />
    </>
  );

  return (
    <>
      <h3>Education</h3>

      <Exp>Université Gustave Eiffel</Exp>
      <Title>Master in Data Science With Honors</Title>
      <Year>September 2021</Year>

      <Exp>University of Amsterdam</Exp>
      <Title>Winter Data Sprint - Digital Methods</Title>
      <Year>January 2021</Year>

      <Exp>Université Paris II Panthéons-Assas</Exp>
      <Title>Master in Finance With Honors</Title>
      <Year>September 2020</Year>
      {isShowingFullEducation ? (
        <FullEducation />
      ) : (
        <MoreButton type="button" onClick={() => showFullEducation(true)}>
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
      )}
    </>
  );
};
