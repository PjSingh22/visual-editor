import React, { useState } from 'react';
import { useDrop } from 'react-dnd/dist/hooks';

import Picture from './Picture';
import '../App.css';
import Board from './Board';

const PictureList = [
  {
    id: 1,
    url: require('../assets/forest1.jpg')
  },
  {
    id: 2,
    url: require("../assets/forest2.jpg")
  },
  {
    id: 3,
    url: require("../assets/forest3.jpg")
  },
]

function DragDrop(props) {
  // const [board, setBoard] = useState([])

  // const [{ isOver }, drop] = useDrop(() => ({
  //   accept: 'image',
  //   drop: (item) => addImageToBoard(item.id),
  //   collect: monitor => ({
  //     isOver: !!monitor.isOver(),
  //   })
  // }))

  // const addImageToBoard = (id) => {
  //   const filteredPL = PictureList.filter(picture => id === picture.id)
  //   setBoard((board) => [...board, filteredPL[0]]);
  // }
  return (
    <>
      <div className='Pictures'>{PictureList.map(picture => {
        return <Picture id={picture.id} url={picture.url} />
      })}
      </div>
      <div className='board-container'>
        <Board PictureList={PictureList} />
        <Board PictureList={PictureList} />
        <Board PictureList={PictureList} />
        <Board PictureList={PictureList} />
      </div>
    </>
  );
}

export default DragDrop;