import { TitleSection } from './SectionTitle.styled';

export const SectionTitle = ({ text, top, colour }) => {
  return (
    <TitleSection
      className="section__title"
      style={{ backgroundPosition: `center ${top}%`, color: `${colour}` }}
    >
      <div className="container section-title__container">
        <p>{text}</p>
      </div>
    </TitleSection>
  );
};
