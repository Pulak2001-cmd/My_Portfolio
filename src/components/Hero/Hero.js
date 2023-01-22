import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Span } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am <Span>Pulak Kumar Ghosh</Span>, a professional Web & Android Developer, Enthusiastic in DSA, Machine Learning & AI.
      </SectionText>
      <Button onClick={()=> window.location = "/#about"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;