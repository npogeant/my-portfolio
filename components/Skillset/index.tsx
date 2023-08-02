import React, { ReactElement } from "react";
import { IconContext, IconType } from "react-icons";
import {
  FaPython,
  FaChartLine,
  FaRProject,
  FaAws,
  FaSnowflake
} from "react-icons/fa";

import {
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiKeras,
  SiTensorflow,
  SiPytorch,
  SiMlflow,
  SiWeightsandbiases,
  SiDvc,
  SiDuckdb,
  SiPlotly
} from "react-icons/si";

import {
  BsFiletypeSql
} from "react-icons/bs"

import {
  VscLibrary
} from "react-icons/vsc";

interface SkillProps {
  icon: ReactElement<IconType>; // Explicitly typing the icon prop as ReactElement of IconType
  name: string; // Explicitly typing the name prop as a string
}

const Skill = ({ icon, name }: SkillProps) => (
  <li style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
    <IconContext.Provider value={{ size: "24px", style: { marginRight: "10px" } }}>
    {React.cloneElement(icon, { className: "skill-item" } as Partial<IconType>)} {/* Use type assertion 'as Partial<IconType>' */}
    </IconContext.Provider>
    <span>{name}</span>
  </li>
);

export const Skillset = () => {
  const programmingSkills = [
    { name: "Python", icon: <FaPython /> },
    { name: "R", icon: <FaRProject /> },
  ];

  const machineLearningSkills = [
    { name: "Scikit-Learn", icon: <SiScikitlearn /> },
    { name: "XGboost", icon: <VscLibrary /> },
    { name: "TensorFlow", icon: <SiTensorflow /> },
    { name: "Keras", icon: <SiKeras /> },
    { name: "Pytorch", icon: <SiPytorch /> }
  ];

  const dataManipSkills = [
    { name: "Pandas", icon: <SiPandas /> },
    { name: "NumPy", icon: <SiNumpy /> }
  ];
  FaAws
  const mlopsSkills = [
    { name: "AWS", icon: <FaAws /> },
    { name: "MLflow", icon: <SiMlflow /> },
    { name: "Prefect", icon: <VscLibrary /> },
    { name: "Metaflow", icon: <VscLibrary /> },
    { name: "Weight & Biases", icon: <SiWeightsandbiases /> },
    { name: "DVC", icon: <SiDvc /> }
  ];

  const databaseSkills = [
    { name: "SQL (PostgreSQL, NoSQL)", icon: <BsFiletypeSql /> },
    { name: "Snowflake", icon: <FaSnowflake /> },
    { name: "DuckDB", icon: <SiDuckdb /> }
  ];

  const datavizSkills = [
    { name: "Matplotlib", icon: <FaChartLine /> },
    { name: "Seaborn", icon: <FaChartLine /> },
    { name: "Plotly", icon: <SiPlotly /> }
  ];

  return (
    <>
      <h3>Skills</h3>
      <div style={{ display: "flex" }}>
        <ul style={{ flex: 1, paddingRight: "20px" }}>
          <h4>Programming Languages</h4>
          {programmingSkills.map((skill, index) => (
            <Skill key={index} icon={skill.icon} name={skill.name} />
          ))}
        </ul>
        <ul style={{ flex: 1, paddingLeft: "20px" }}>
          <h4>Machine Learning</h4>
          {machineLearningSkills.map((skill, index) => (
            <Skill key={index} icon={skill.icon} name={skill.name} />
          ))}
        </ul>
        <ul style={{ flex: 1, paddingLeft: "20px" }}>
          <h4>Data Manipulation</h4>
          {dataManipSkills.map((skill, index) => (
            <Skill key={index} icon={skill.icon} name={skill.name} />
          ))}
        </ul>
      </div>
      <div style={{ display: "flex" }}>
        <ul style={{ flex: 1, paddingRight: "20px" }}>
          <h4>MLOps</h4>
          {mlopsSkills.map((skill, index) => (
            <Skill key={index} icon={skill.icon} name={skill.name} />
          ))}
        </ul>
        <ul style={{ flex: 1, paddingLeft: "20px" }}>
          <h4>Databases</h4>
          {databaseSkills.map((skill, index) => (
            <Skill key={index} icon={skill.icon} name={skill.name} />
          ))}
        </ul>
        <ul style={{ flex: 1, paddingLeft: "20px" }}>
          <h4>Data Visualization</h4>
          {datavizSkills.map((skill, index) => (
            <Skill key={index} icon={skill.icon} name={skill.name} />
          ))}
        </ul>
      </div>
    </>
  );
};
