import React, { useReducer } from 'react';
import AddItem from '../../components/AddItem/AddItem';
import ItemList from '../../components/ItemList/ItemList';

const nextId = 4;

const initialItems = [
  { id: 0, text: 'Wizard wand', done: false },
  { id: 1, text: 'Dragon eggs', done: false },
  { id: 2, text: 'Faerie dust', done: false },
  { id: 3, text: 'Eye of newt', done: false },
];

function itemsReducer(items, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...items,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'changed': {
      return items.map((item) => {
        if (item.id === action.task.id) {
          return action.task;
        }
        return item;
      });
    }
    case 'deleted': {
      return items.filter((item) => item.id !== action.id);
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}

function Shopping() {
  const [items, dispatch] = useReducer(itemsReducer, initialItems);

  const handleAddItem = (text) => {
    dispatch({
      type: 'added',
      id: nextId + 1,
      text,
    });
  };
  const handleChangeItem = (task) => {
    dispatch({
      type: 'changed',
      task,
    });
  };
  const handleDeleteItem = (taskId) => {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  };

  return (
    <>
      <h1>Shopping list!</h1>
      <AddItem onAddItem={handleAddItem} />
      <ItemList
        items={items}
        onChangeItem={handleChangeItem}
        onDeleteItem={handleDeleteItem}
      />
    </>
  );
}

export default Shopping;
