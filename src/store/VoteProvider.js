import React, { useState} from "react";
import VoteContext from "./vote-context";


const VoteProvider = props => {

    const [items, updateItems] = useState([]);

    const addItemToCart = (item) => {
        updateItems((prevItems) => [...prevItems, item]);
        console.log(item);
      };

      const removeItemFromCartHandler =  (id) => {
        updateItems((prevItems) => prevItems.filter((item) => item.id !== id));
      };
    
    const votevalue = {
        items: items,
        totolAmount: 0,
        addItem: addItemToCart,
        removeItem: removeItemFromCartHandler ,
        
    };
    return (

        <VoteContext.Provider value={votevalue}>
        {props.children}
    </VoteContext.Provider>
    );
};

export default VoteProvider;