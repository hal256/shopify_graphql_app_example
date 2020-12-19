import React, { useState } from "react";
import { gql } from "apollo-boost";
import ApolloClient from "apollo-boost";
import { useMutation } from "@apollo/client";
const client = new ApolloClient({
  fetch: fetch,
  fetchOptions: {
    credentials: "include",
  },
});
const ADD_PRODUCT = gql`
  mutation ADD_PRODUCT($title: String!) {
    productCreate(input: { title: $title }) {
      product {
        id
      }
    }
  }
`;
const AddProduct = () => {
  const [addProduct] = useMutation(ADD_PRODUCT, { client });
  const [productTitle, setProductTitle] = useState("");
  return (
    <div>
      <label>
        Title
        <input
          type="text"
          value={productTitle}
          onChange={(event) => {
            setProductTitle(event.target.value);
          }}
        />
        <button
          onClick={() => {
            addProduct({
              variables: {
                title: productTitle,
              },
            });
          }}
        >
          Submit
        </button>
      </label>
    </div>
  );
};
export default AddProduct;
