import {
    CATEGORIES,
    CLEAR_ITEMS,
    CLEAR_SEARCH,
    ITEM,
    ITEMS,
    SEARCH_FIELD
  } from "./actionTypes";
  
  const initialState = {
    items: [],
    categories: [],
    search: "",
    selectedItem: "",
    noItems: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case SEARCH_FIELD: {
        const { text } = action.payload;
        return { ...state, search: text };
      }
      case ITEMS: {
        const { items, categories } = action.payload;
        const noItems = items.length ? false : true;
        return { ...state, items, categories, noItems };
      }
      case CATEGORIES: {
        const { categories } = action.payload;
        return { ...state, categories };
      }
      case ITEM: {
        const { selectedItem } = action.payload;
        return { ...state, selectedItem };
      }
      case CLEAR_ITEMS: {
        return { ...state, items: [], categories: [] };
      }
      case CLEAR_SEARCH: {
        return { ...state, search: "" };
      }
      default:
        return state;
    }
  }
  