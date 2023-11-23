import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const ItemListWithDelete = ({ onDelete }) => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/items');
        setItemList(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  const handleDeleteClick = async (itemId) => {
    try {
      await axios.delete(`http://localhost:4000/api/v1/items/${itemId}`);
      onDelete(itemId);
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div>
      <div>
        <h2>Delete Items</h2>
      </div>
      <ul>
        {itemList.map((item) => (
          <li key={item.id}>
            {item.title}
            {' '}
            <button type="button" onClick={() => handleDeleteClick(item.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ItemListWithDelete.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

export default ItemListWithDelete;
