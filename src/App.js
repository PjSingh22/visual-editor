import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './App.css';

import DragDrop from './components/DragDrop';

function App() {

  const clearBoard = (e, board) => {
    e.preventDefault();
    board([]);
  }
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <nav>
          <h1>Drag and Drop</h1>
          <button className='btn clear-btn'>Clear</button>
          <button className='btn horizontal-btn'>Split horizontal</button>
          <button className='btn vertical-btn'>Split Vertical</button>
        </nav>
        <DragDrop clearBoard={clearBoard} />
      </div>
    </DndProvider>
  );
}

export default App;
