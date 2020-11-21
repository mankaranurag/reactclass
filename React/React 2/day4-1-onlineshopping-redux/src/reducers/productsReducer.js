export function products(defaultStore = [], action) {
  switch (action.type) {
    case "INCREEMENT_LIKES":
      console.log("Within Products Reducer !! : " + action.type);
      // let theIndex = defaultStore.findIndex((p) => p.id === action.pid);
      // return [
      //   ...defaultStore.slice(0, theIndex),
      //   { ...defaultStore[theIndex], likes: defaultStore[theIndex].likes + 1 },
      //   ...defaultStore.slice(theIndex + 1),
      // ];
      return defaultStore.map((p) => {
        p.likes = p.id === action.pid ? p.likes + 1 : p.likes;
        return p;
      });
    case "ADD_PRODUCT":
      console.log("Within Products Reducer !! : " + action.type);
      let newProduct = action.newProduct;
      let newProductList = [
        ...defaultStore.filter((p) => p.id !== newProduct.id),
        newProduct,
      ];

      return newProductList;
    case "DELETE_PRODUCT":
      console.log("Within Products Reducer !! : " + action.type);
      return defaultStore.filter((p) => p.id !== action.pid);
    default:
      return defaultStore;
  }
}
