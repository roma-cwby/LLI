import { HeroSection } from './Hero.styled';

export const Hero = ({ text }) => {
  return (
    <HeroSection>
      <div className="container hero__container">
        <h2 className="hero__title">{text}</h2>
      </div>
    </HeroSection>
  );
};
