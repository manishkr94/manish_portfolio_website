import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with a range of Technologies in the web developement world.
      From backend to design
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListTitle>Frontend</ListTitle>
        <ListParagraph>Experience with <br />React.Js</ListParagraph>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListTitle>back-End</ListTitle>
        <ListParagraph>Experience with <br />Node.Js and SQL</ListParagraph>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListTitle>UI/UX</ListTitle>
        <ListParagraph>Experience with <br />tools like Figma</ListParagraph>
      </ListItem>
    </List>


  </Section>
);

export default Technologies;
