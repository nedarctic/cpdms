import Actions from "./const";

export const selecteItem = item => {
  return {
    type: Actions.AC_SELECT_ITEM,
    payload: { item: item }
  };
};

export const addTask = () => {
  return {
    type: Actions.AC_ADD_TASK,
    payload: null
  };
};

export const updateTask = (item, props) => {
  return {
    type: Actions.AC_UPDATE_TASK,
    payload: {
      item: item,
      props: props
    }
  };
};

export const deleteItem = item => {
  return {
    type: Actions.AC_DELETE,
    payload: {
      item: item
    }
  };
};

export const addLink = item => {
  return {
    type: Actions.AC_ADD_LINK,
    payload: {
      item: item
    }
  };
};
