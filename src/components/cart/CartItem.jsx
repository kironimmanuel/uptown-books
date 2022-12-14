import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useCartContext } from "../../context/cart_context";
import { formatPrice } from "../../utils/formatPrice";
import { AmountButtons } from "../button";

const CartItem = ({ id, name, image, edition, price, amount }) => {
  const { removeCartItem, toggleCartItemAmount } = useCartContext();
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div className="title">
        <img
          src={image}
          alt={name}
          onClick={() => navigate(`/products/${parseInt(id)}`)}
        />
        <div>
          <h5 className="name">{name}</h5>
          <p className="edition">{edition}</p>
          <h5 className="price-small">{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className="price">{formatPrice(price)}</h5>
      <AmountButtons
        amount={amount}
        increaseAmount={() => toggleCartItemAmount(id, "increase")}
        decreaseAmount={() => toggleCartItemAmount(id, "decrease")}
      />
      <h5 className="subtotal">{formatPrice(price * amount)}</h5>
      <button
        type="button"
        className="remove-btn"
        onClick={() => removeCartItem(id)}>
        <FaTrash />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .subtotal {
    display: none;
  }
  .price {
    display: none;
  }
  display: grid;
  grid-template-columns: 200px auto auto;
  grid-template-rows: 125px;
  gap: 3rem 1rem;
  justify-items: center;
  margin-bottom: 3rem;
  align-items: center;
  .title {
    grid-template-rows: 125px;
    display: grid;
    grid-template-columns: 75px 125px;
    align-items: center;
    text-align: left;
    gap: 1rem;
  }
  img {
    width: auto;
    height: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
    cursor: pointer;
  }
  h5 {
    font-size: 1rem;
    margin-bottom: 0;
  }

  .edition {
    color: var(--clr-grey-5);
    font-size: 0.8rem;
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .price-small {
    color: var(--clr-primary-3);
    font-size: 0.85rem;
  }
  .amount-btns {
    width: 75px;
    button {
      width: 1rem;
      height: 0.5rem;
      font-size: 0.75rem;
    }
    h2 {
      font-size: 1rem;
    }
  }
  .remove-btn {
    color: var(--clr-white);
    background: transparent;
    border: transparent;
    letter-spacing: var(--spacing);
    background: var(--clr-red-dark);
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    font-size: 0.75rem;
    cursor: pointer;
  }
  @media (min-width: 776px) {
    .subtotal {
      display: block;
      margin-bottom: 0;
      color: var(--clr-grey-5);
      font-weight: 400;
      font-size: 1rem;
    }
    .price-small {
      display: none;
    }
    .price {
      display: block;
      font-size: 1rem;
      color: var(--clr-primary-3);
      font-weight: 400;
    }
    .name {
      font-size: 1rem;
    }

    .edition {
      font-size: 1rem;
    }
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    align-items: center;
    grid-template-rows: 225px;
    img {
      height: 200px;
      width: auto;
    }
    .title {
      display: grid;
      grid-template-columns: 90px 170px;
      align-items: center;
      gap: 3rem;
      text-align: left;
    }
    .amount-btns {
      width: 100px;
      margin-left: -0.25rem;
      button {
        width: 1.2rem;
        height: 1rem;
        font-size: 1rem;
      }
      h2 {
        font-size: 1.5rem;
      }
    }
  }
`;

export default CartItem;
