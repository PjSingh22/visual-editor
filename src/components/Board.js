import React, { useState } from 'react';
import { useDrop } from 'react-dnd/dist/hooks';

import Picture from './Picture';

function Board({PictureList}) {

  const [board, setBoard] = useState([])

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'image',
    drop: (item) => addImageToBoard(item.id),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    })
  }))

  const addImageToBoard = (id) => {
    const filteredPL = PictureList.filter(picture => id === picture.id)
    setBoard((board) => [...board, filteredPL[0]]);
  }

  return (
    <div className='Board' ref={drop}>{board.map((picture) => {
      return <Picture key={picture.id} url={picture.url} />
    })}</div>
  );
}

export default Board;