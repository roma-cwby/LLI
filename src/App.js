import { Hero } from './components/Hero/Hero';
import { List } from './components/List/List';
import { SectionTitle } from './components/SectionTitle/SectionTitle';
import { Footer } from './components/Footer/Footer';
import { titleText } from './text';

function App() {
  return (
    <>
      <Hero text="LLlOnOrOJliK" />
      <SectionTitle text={titleText[0]} top={30} colour="#000000" />
      <Hero text="Мої 30 причин любити тебе" />
      <List />
      <SectionTitle text={titleText[1]} top={100} colour="#ffffff" />
      <Hero text="Дякую тобі!" />
      <Footer />
    </>
  );
}

export default App;
