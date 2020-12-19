import { Heading, Page } from "@shopify/polaris";
import ShowProducts from "../Components/ShowProducts";
import AddProduct from "../Components/AddProduct";

const Index = () => (
  <Page>
    <Heading>Shopify app with Node and React 🎉</Heading>
    <ShowProducts />
    <AddProduct />
  </Page>
);

export default Index;
