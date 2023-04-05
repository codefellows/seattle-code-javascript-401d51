// actions
export const set = (category) => {
  return {
    type: 'SET',
    payload: category,
  }
}

export const addProduct = (product) => {
  return {
    type: 'ADD-PRODUCT',
    payload: product
  }
}
