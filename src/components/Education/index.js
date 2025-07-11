import React from 'react';
import styled from 'styled-components';
import EducationCard from '../Cards/EducationCard';
import { education } from '../../data/constants';

const TimelineOuter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const TimelineContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  min-height: 400px;
  padding-bottom: 80px;
`;

const TimelineRow = styled.div`
  display: flex;
  width: 100%;
  min-height: 160px;
  position: relative;
  margin-bottom: 60px;
  justify-content: ${({ align }) =>
    align === 'left' ? 'flex-start' : 'flex-end'};

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    min-height: unset;
    margin-bottom: 40px;
    justify-content: center;
  }
`;

const CardWrapper = styled.div`
  width: 46%;
  display: flex;
  justify-content: ${({ align }) =>
    align === 'left' ? 'flex-end' : 'flex-start'};
  align-items: flex-start;
  z-index: 2;
  margin: ${({ align }) =>
    align === 'left'
      ? '0 40px 0 0'
      : '0 0 0 40px'};

  @media (max-width: 900px) {
    width: 100%;
    justify-content: center;
    margin: 0 0 24px 0;
  }
`;

const NodeWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 32px;
  transform: translate(-50%, 0);
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 900px) {
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

const TimelineLine = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background: #854CE6;
  transform: translateX(-50%);
  z-index: 0;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0px 80px 0px;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
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

const Education = () => (
  <SectionContainer id="education">
    <Wrapper>
      <Title>Education</Title>
      <Desc>
        My education has been a journey of self-discovery and growth. My educational details are as follows.
      </Desc>
      <TimelineOuter>
        <TimelineContainer>
          <TimelineLine />
          {education.map((edu, idx) => (
            <TimelineRow key={idx} align={idx % 2 === 0 ? 'left' : 'right'}>
              {/* Left Card */}
              {idx % 2 === 0 && (
                <CardWrapper align="left">
                  <EducationCard education={edu} />
                </CardWrapper>
              )}
              {/* Timeline Center Node */}
              <NodeWrapper>
                <Node />
              </NodeWrapper>
              {/* Right Card */}
              {idx % 2 !== 0 && (
                <CardWrapper align="right">
                  <EducationCard education={edu} />
                </CardWrapper>
              )}
            </TimelineRow>
          ))}
        </TimelineContainer>
      </TimelineOuter>
    </Wrapper>
  </SectionContainer>
);

export default Education;
