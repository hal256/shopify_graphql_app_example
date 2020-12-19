import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
const GET_PRODUCTS = gql`
  query GET_PRODUCTS {
    products(first: 10) {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`;
import ApolloClient from "apollo-boost";
const client = new ApolloClient({
  fetch: fetch,
  fetchOptions: {
    credentials: "include",
  },
});
const ShowProducts = () => {
  const { data, loading, refetch } = useQuery(GET_PRODUCTS, { client: client });
  if (loading || !data.products) {
    return <div>Loading...</div>;
  }
  const products = data.products.edges.map((productEdge) => (
    <div key={productEdge.node.id}>
      <p>id: {productEdge.node.id}</p>
      <p>title:{productEdge.node.title}</p>
    </div>
  ));
  return (
    <div>
      {products}
      <button
        onClick={() => {
          refetch();
        }}
      >
        refeatch
      </button>
    </div>
  );
};
export default ShowProducts;
