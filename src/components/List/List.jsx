import React, { useState } from "react";

function BasketList({ list, setList, setBasketActive, basket, setBasket }) {
  const [isSaving, setIsSaving] = useState(false);
  const [listName, setListName] = useState("");

  const handleRemoveItem = (id) => {
    const updatedList = list.filter((item, index) => index !== id);
    setList(updatedList);
  };

  const handleAddToBasket = () => {
    setBasket({
      ...basket,
      title: listName,
      orders: [...list],
    });
    setList([]);
    setListName("");
  };

  return (
    <div className="basket-list">
      <input
        type="text"
        placeholder="Create a new list"
        value={listName}
        onChange={(e) => setListName(e.target.value)}
        className="list-name-input"
      />
      {list.length > 0 && (
        <div className="list-items">
          {list.map((item, index) => (
            <div key={index} className="list-item">
              <p className="list-item-title">{item.title}</p>
              <button className="remove-item-button" onClick={() => handleRemoveItem(index)}>
                ✖
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="list-actions">
        <button
          disabled={!(listName && list.length)}
          onClick={() => {
            setIsSaving(!isSaving);
            handleAddToBasket();
          }}
          className="save-button"
        >
          Save
        </button>
        <button onClick={() => setBasketActive(true)} className="go-to-basket-button">
          Go to Basket
        </button>
      </div>
    </div>
  );
}

export default BasketList;
