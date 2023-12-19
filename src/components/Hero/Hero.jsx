import { HeroSection } from './Hero.styled';

export const Hero = ({ text }) => {
  return (
    <HeroSection>
      <div className="container hero__container">
        <h1 className="hero__title">{text}</h1>
      </div>
    </HeroSection>
  );
};
