class ItemsManager {
  constructor() {
    this.storageKey = 'items';
  }

  // Method to read items from local storage
  readItems() {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error reading data from local storage:', error);
      return [];
    }
  }

  // Method to write items to local storage
  writeItems(items) {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(items));
      console.log('Data saved successfully.');
    } catch (error) {
      console.error('Error writing data to local storage:', error);
    }
  }

  // Method to add an item
  addItem(item) {
    const items = this.readItems();
    items.push(item);
    this.writeItems(items);
  }

  // Method to update an item
  updateItem(updatedItem) {
    const items = this.readItems();
    const index = items.findIndex(item => item.id === updatedItem.id);
    if (index !== -1) {
      items[index] = updatedItem;
      this.writeItems(items);
    } else {
      console.error('Item not found.');
    }
  }

  // Method to delete an item
  deleteItem(itemId) {
    const items = this.readItems();
    const updatedItems = items.filter(item => item.id !== itemId);
    this.writeItems(updatedItems);
  }
}

export default ItemsManager;