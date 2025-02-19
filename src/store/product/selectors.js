export const selectProductState = (state) => state.product;

export const selectProductIds = (state) => selectProductState(state).ids;
export const selectProductById = (state, id) =>
  selectProductState(state).entities[id];

export const selectProductNameById = (state, id) =>
  selectProductState(state).entities[id]?.name;
