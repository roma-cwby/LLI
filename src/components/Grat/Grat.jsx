import { GratSection } from './Grat.styled';
import img from '../../img/aw.png';

export const Grat = () => {
  return (
    <GratSection>
      <div className="container grat__container">
        <div className="grat_wrap">
          <h2>Дяка всім, хто були з нами</h2>
          <p style={{ color: 'red' }}>nikolo__hard</p>
          <p style={{ color: 'yellow' }}>4elovKEK</p>
          <p style={{ color: 'orange' }}>OleksiiUA92</p>
          <h2>Безмежна вдячність Альоні</h2>
          <img src={img} alt="logo" />
          <p className="grat_al" style={{ color: '#00ff00' }}>
            adult_woman
          </p>
        </div>
      </div>
    </GratSection>
  );
};
