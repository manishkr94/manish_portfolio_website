import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 10, text: 'Projects completed inside as well as outside industries' },
  { number: 5, text: 'Certifications Achieved', },
  { number: 190, text: 'Github Followers', },
  { number: 50, text: 'Github Stars', },
  { number: 3, text: 'Client Apreciation Token', }

];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Acomplishments</SectionTitle>
    <Boxes>
      {data.map((box, index) => (
        <Box>
          <BoxNum>{box.number}+</BoxNum>
          <BoxText>{box.text}</BoxText>
        </Box>
      ))}
    </Boxes>

  </Section>
);

export default Acomplishments;
