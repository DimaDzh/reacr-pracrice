import { DELETE_ITEM, GET_ITEM_SUCSESS, EDIT_ITEM } from "./constants";

export const getItemSucsess = (data) => ({
  type: GET_ITEM_SUCSESS,
  payload: {
    data,
  },
});

export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  payload: {
    id,
  },
});

export const editItem = (id, newName) => ({
  type: EDIT_ITEM,
  payload: {
    id,
    newName,
  },
});
