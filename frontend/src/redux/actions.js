import {
    CATEGORIES,
    CLEAR_SEARCH,
    CLEAR_ITEMS,
    ITEM,
    ITEMS,
    SEARCH_FIELD
  } from "./actionTypes";
  
  export const setSearch = text => ({
    type: SEARCH_FIELD,
    payload: {
      text
    }
  });
  
  export const setItems = ({ items, categories }) => ({
    type: ITEMS,
    payload: {
      items,
      categories
    }
  });
  
  export const selectItem = selectedItem => ({
    type: ITEM,
    payload: {
      selectedItem
    }
  });
  
  export const setCategories = categories => ({
    type: CATEGORIES,
    payload: {
      categories
    }
  });
  
  export const clearItems = () => ({
    type: CLEAR_ITEMS,
    payload: {}
  })
  
  export const clearSearch = () => ({
    type: CLEAR_SEARCH,
    payload: {}
  })