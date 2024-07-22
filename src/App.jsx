import React from 'react';
import ItemList from './ItemList';

const itemsData = [
  { id: 1, title: 'Item 1', summary: 'Short description...', fullDescription: 'Full description of item 1...' },
  { id: 2, title: 'Item 2', summary: 'Short description...', fullDescription: 'Full description of item 2...' },
];

function App() {
  return (
    <div className="App">
      <ItemList items={itemsData} />
    </div>
  );
}

export default App;
