import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";

const Newsletter = () => {
  const [formState, setFormState] = useState({
    email: "",
  });
  const form = useRef();

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  const {
    REACT_APP_SERVICE_ID,
    REACT_APP_NEWSLETTER_TEMPLATE_ID,
    REACT_APP_API_KEY,
  } = process.env;

  const sendEmail = (e) => {
    e.preventDefault();
    if (!formState.email) {
      setTimeout(() => {
        toast.info("Please enter your email", {
          toastId: "custom-id-yes",
        });
      }, 750);
    } else {
      emailjs.sendForm(
        `${REACT_APP_SERVICE_ID}`,
        `${REACT_APP_NEWSLETTER_TEMPLATE_ID}`,
        form.current,
        `${REACT_APP_API_KEY}`
      );
      setFormState({ email: "" });
      setTimeout(() => {
        toast.success("Thank you for subscribing", {
          toastId: "custom-id-yes",
        });
      }, 500);
    }
  };

  return (
    <Wrapper>
      <div className="section-center">
        <h3>Join our news letter and receive exclusive offers every week</h3>
        <div className="content">
          <p>
            O my friend - but it is too much for my strength - I sink under the
            weight of the splendour of these visions!A wonderful serenity has
            taken possession of my entire soul
          </p>
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Your email here..."
              value={formState.email}
              onChange={handleChange}
              maxLength="30"
            />
            <button type="submit" className="submit-btn">
              subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Newsletter;

const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
    font-size: 1.85rem;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    opacity: 0.25;
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`;