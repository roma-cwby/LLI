import { Hero } from './components/Hero/Hero';
import { List } from './components/List/List';
import { SectionTitle } from './components/SectionTitle/SectionTitle';
import { Grat } from './components/Grat/Grat';
import { Footer } from './components/Footer/Footer';
import { titleText } from './text';
import song from './audio/music.mp3';
import { useEffect } from 'react';
import useSound from 'use-sound';

function App() {
  const [playSound, { stop }] = useSound(song, { volume: 0.5, interrupt: true });

  window.onkeydown = e => {
    if (e.key === 'p') playSound();
    else stop();
  };

  useEffect(() => playSound(), [playSound]);

  return (
    <>
      <Hero text="LLlOnOrOJliK" />
      <SectionTitle text={titleText[0]} top={30} colour="#000000" />
      <Hero text="30 причин любити тебе" />
      <List />
      <Hero text="Дякую тобі!" />
      <SectionTitle text={titleText[1]} top={100} colour="#ffffff" />
      <Grat />
      <Footer />
    </>
  );
}

export default App;
