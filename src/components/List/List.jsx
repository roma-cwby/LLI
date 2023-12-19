import { useEffect, useRef, useState } from 'react';
import { text } from '../../text';
import { ListSection } from './List.styled';
import { FaHeart } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa6';
import { FaPause } from 'react-icons/fa6';

let i = 0;
let listItems;

export const List = () => {
  const listRef = useRef();
  const [interval, setSlidesInterval] = useState(false);

  function focusItem(item) {
    item.style = `top: 50%; left: 50%; z-index: ${listItems.length}; transform: translate(-50%, -50%) rotateZ(0) scale(2)`;
    item.classList.add('show');
  }

  function getRandomPosition() {
    listItems.map(item => {
      let left = Math.floor(Math.random() * listRef.current.offsetWidth);

      while (
        left > listRef.current.offsetWidth / 3 &&
        left < (listRef.current.offsetWidth / 3) * 2
      ) {
        left = Math.floor(Math.random() * listRef.current.offsetWidth);
      }

      item.classList.remove('show');
      item.style = `top: ${Math.floor(
        Math.random() * listRef.current.offsetHeight
      )}px; left: ${left}px; transform: translate(-50%, -50%) rotateZ(${Math.floor(
        Math.random() * 360
      )}deg) scale(1); z-index: ${Math.floor(Math.random() * listItems.length)}`;
      return 0;
    });
  }

  const click = e => {
    if (
      e.target === e.currentTarget ||
      e.target.closest('li').classList.contains('show') ||
      interval
    )
      return;
    getRandomPosition();
    focusItem(listItems[Number(e.target.closest('li').id)]);
  };

  const slide = e => {
    if (interval) {
      clearInterval(interval);
      setSlidesInterval(false);
    } else {
      getRandomPosition();
      focusItem(listItems[i + 1]);
      i += 1;

      setSlidesInterval(
        setInterval(() => {
          if (i >= text.length - 1) i = 0;
          else i += 1;

          getRandomPosition();
          focusItem(listItems[i]);
        }, 3000)
      );
    }
  };

  useEffect(() => {
    listItems = Object.values(listRef.current.children);
    getRandomPosition();
    focusItem(listItems[Math.floor(Math.random() * text.length)]);
  }, []);

  return (
    <ListSection>
      <div className="container list__container">
        <button className="list__slide-btn" onClick={slide}>
          {interval ? <FaPause /> : <FaPlay />}
        </button>
        <ul ref={listRef} onClick={click}>
          {text.map((i, idx) => {
            return (
              <li id={idx} key={idx}>
                <FaHeart />
                <p>{i}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </ListSection>
  );
};
