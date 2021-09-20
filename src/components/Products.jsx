import styled from "styled-components";
import { popularProducts } from "../data";
import ProductItem from "./ProductItem";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Products;
