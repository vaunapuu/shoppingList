var shopper = {
    items : [], // Array of current shopping list
  }

  add : function (evt) {
    // add() : add a new item to the list
    
      // Prevent form submit
      evt.preventDefault();
    
      // Add new entry to shopper.items
      var item = document.getElementById('add-item');
      shopper.items.push({
        name : item.value, // Item name
        done : false // True for "completed" item, false for not
      });
    
      // Remove current add item
      item.value = "";
    
      // Redraw the shopping list
      shopper.draw();
    
      // Save the shopping list to local storage
      shopper.save();
    },