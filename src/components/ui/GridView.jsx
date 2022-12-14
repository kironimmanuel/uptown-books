import styled from "styled-components";
import Product from "../product/Product";

const GridView = ({ products }) => {
  return (
    <Wrapper>
      <div className="products-container">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
};
export default GridView;

const Wrapper = styled.section`
  img {
    height: 475px;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 552px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
    img {
      height: 320px;
    }
  }
  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;
