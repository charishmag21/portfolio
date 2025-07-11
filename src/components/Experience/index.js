import React from 'react';
import styled from 'styled-components';
import ExperienceCard from '../Cards/ExperienceCard';
import { experiences } from '../../data/constants';

// Timeline vertical line, always in center
const TimelineContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1800px;   // enough for 2 large cards plus some space
  margin: 0 auto;
  padding-bottom: 80px;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    background: #854CE6;
    transform: translateX(-50%);
    z-index: 0;
  }
`;

const TimelineRow = styled.div`
  display: flex;
  width: 100%;
  min-height: 220px;
  justify-content: space-between;
  position: relative;
  margin-bottom: 80px;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    min-height: unset;
    margin-bottom: 40px;
  }
`;

const CardWrapper = styled.div`
  width: 150%;
  display: flex;
  justify-content: ${({ align }) => (align === "left" ? "flex-end" : "flex-start")};
  align-items: flex-start;
  z-index: 2;

  @media (max-width: 1100px) {
    width: 100%;
    justify-content: center;
    margin: 0 0 24px 0;
  }
`;

const NodeWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 38px;
  transform: translate(-50%, 0);
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1100px) {
    position: static;
    transform: none;
    margin-bottom: 12px;
  }
`;

const Node = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #854CE6;
  border: 4px solid ${({ theme }) => theme.bg || "#191924"};
  z-index: 3;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0px 80px 0px;
  @media (max-width: 1100px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1600px;
  padding: 80px 0;
  gap: 12px;
  align-items: center;
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 48px;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;


const Experience = () => (
  <SectionContainer id="experience">
    <Wrapper>
      <Title>Experience</Title>
      <Desc>
        My work experience as a software engineer and working on different companies and projects.
      </Desc>
      <TimelineContainer>
        {experiences.map((exp, idx) => (
          <TimelineRow key={idx}>
            {/* Left side: Show card if EVEN, otherwise empty */}
            <CardWrapper align="left">
              {idx % 2 === 0 && <ExperienceCard experience={exp} />}
            </CardWrapper>
            {/* Center Node */}
            <NodeWrapper>
              <Node />
            </NodeWrapper>
            {/* Right side: Show card if ODD, otherwise empty */}
            <CardWrapper align="right">
              {idx % 2 !== 0 && <ExperienceCard experience={exp} />}
            </CardWrapper>
          </TimelineRow>
        ))}
      </TimelineContainer>
    </Wrapper>
  </SectionContainer>
);

export default Experience;
