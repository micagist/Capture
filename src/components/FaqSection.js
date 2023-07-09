import React, { useState } from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { LayoutGroup } from "framer-motion";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <LayoutGroup>
        <Toggle title="How do I start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet,</p>
            <p>
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.{" "}
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet,</p>
            <p>
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.{" "}
            </p>
          </div>
        </Toggle>
        <Toggle title="Payment Methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet,</p>
            <p>
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.{" "}
            </p>
          </div>
        </Toggle>
        <Toggle title="What Products do you offer?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet,</p>
            <p>
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.{" "}
            </p>
          </div>
        </Toggle>
      </LayoutGroup>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 1rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
