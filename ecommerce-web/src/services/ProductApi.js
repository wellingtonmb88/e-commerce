import {
  apolloQueryService,
  apolloMutateService
} from "./apollo/ApolloService";

import { ALL_PRODUCTS, ADD_PRODUCT } from "./gqls/ProductQueryTags";

const getProductList = async () => {
  const { allProducts: products } = await apolloQueryService(ALL_PRODUCTS);
  return products;
};

const addProduct = async product => {
  const { title, price, description } = product;
  const { addProduct: addedProduct } = await apolloMutateService(ADD_PRODUCT, {
    title,
    price: parseFloat(price),
    description
  });
  return addedProduct;
};

export { getProductList, addProduct };
