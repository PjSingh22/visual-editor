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
  {
    id: 4,
    url: require("../assets/forest4.jpg")
  }
]

function DragDrop(props) {
  return (
    <div className='dragDrop'>
      <div className='Pictures'>{PictureList.map(picture => {
        return <Picture id={picture.id} url={picture.url} />
      })}
      </div>
      <div className='board-container'>
        <Board boardId={1} PictureList={PictureList} clearBoard={props.clearBoard}/>
        <Board boardId={2} PictureList={PictureList} clearBoard={props.clearBoard} />
        <Board boardId={3} PictureList={PictureList} clearBoard={props.clearBoard} />
        <Board boardId={4} PictureList={PictureList} clearBoard={props.clearBoard} />
      </div>
    </div>
  );
}

export default DragDrop;