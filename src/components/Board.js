import React, { useState, useEffect } from 'react';
import { useDrop, useDrag } from 'react-dnd/dist/hooks';

import Picture from './Picture';

function useStickyState(defaultValue, key) {
  const [value, setValue] = React.useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null
      ? JSON.parse(stickyValue)
      : defaultValue;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}


function Board({PictureList, boardId}) {
  const [board, setBoard] = useStickyState([], boardId);
  // const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'image',
    drop: (item) => addImageToBoard(item.id),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    })
  }))

  useEffect(() => {
    const clearBtn = document.querySelector(`.clear-btn`);
    clearBtn.addEventListener(`click`, () => {
      setBoard([]);
    });
  })

  const addImageToBoard = (id) => {
    const filteredPL = PictureList.filter(picture => id === picture.id)
    setBoard((board) => [...board, filteredPL[0]]);
  }

  return (
    <div className='Board' ref={drop}>{board.map((picture) => {
      return (
        <div className='picture-container'>
          <Picture key={picture.id} url={picture.url} />
        </div>
      )
    })}</div>
  );
}

export default Board;