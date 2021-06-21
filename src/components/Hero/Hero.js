import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Welcome To <br />my personal portfolio
      </SectionTitle>
      <SectionText>
        I am a web developer. Through my past experiences, I can balance the need of users and businesses to understand their pain points and how I can contribute as a Front-end developer and solve their problems.
        <br />I've worked with a wide range of people from different backgrounds and demographics. This has enabled me to adapt and become flexible in the workplace.
      </SectionText>
      <Button onClick={() => window.open('https://drive.google.com/file/d/1x1POfuwOAE-VFqX-9_spMlm7AfiRlmDs/view?usp=sharing', "_blank")}>Read More</Button>
    </LeftSection>
  </Section>
);

export default Hero;