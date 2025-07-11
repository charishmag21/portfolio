import React from 'react';
import styled from 'styled-components';
import { certifications } from '../../data/constants';

const Section = styled.div`
  max-width: 800px;
  margin: 40px auto 0 auto;
  padding: 24px;
  background: ${({ theme }) => theme.bg || '#fff'};
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.07);
`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.text_primary || '#222'};
  text-align: center;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const Item = styled.li`S
  margin-bottom: 14px;
  font-size: 18px;
  color: ${({ theme }) => theme.text_secondary || '#555'};
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Org = styled.span`
  color: ${({ theme }) => theme.text_primary || '#111'};
  font-weight: 500;
  margin-left: 6px;
`;

const Certifications = () => (
  <Section id="certifications">
    <Title>Certifications</Title>
    <List>
      {certifications.map((cert, idx) => (
        <Item key={idx}>
          🎓 {cert.name} <Org>({cert.org})</Org>
        </Item>
      ))}
    </List>
  </Section>
);

export default Certifications;
