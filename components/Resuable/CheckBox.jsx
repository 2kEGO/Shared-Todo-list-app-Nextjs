import React from "react";
import styled from "styled-components";

const Checkbox = ({ checked, onChange, type = "checkbox" }) => {
  return (
    <StyledWrapper>
      <label className="checkbox-btn">
        <input
          id="checkbox"
          type={type}
          checked={checked}
          onChange={onChange}
        />
        <span className="checkmark" />
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* Customize the label (the checkbox-btn) */
  .checkbox-btn {
    display: block;
    position: relative;
    padding-left: 30px;
    margin-bottom: 10px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default checkbox */
  .checkbox-btn input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkbox-btn label {
    cursor: pointer;
    font-size: 14px;
  }
  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    border: 2.5px solid black;
    transition: 0.2s linear;
  }
  .checkbox-btn input:checked ~ .checkmark {
    background-color: transparent;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    visibility: hidden;
    opacity: 0;
    left: 50%;
    top: 40%;
    width: 10px;
    height: 14px;
    border: 2px solid #0ea021;
    filter: drop-shadow(0px 0px 10px #0ea021);
    border-width: 0 2.5px 2.5px 0;
    transition: 0.2s linear;
    transform: translate(-50%, -50%) rotate(-90deg) scale(0.2);
  }

  /* Show the checkmark when checked */
  .checkbox-btn input:checked ~ .checkmark:after {
    visibility: visible;
    opacity: 1;
    transform: translate(-50%, -50%) rotate(0deg) scale(1);
    animation: pulse 1s ease-in;
  }

  .checkbox-btn input:checked ~ .checkmark {
    transform: rotate(45deg);
    border: none;
  }

  @keyframes pulse {
    0%,
    100% {
      transform: translate(-50%, -50%) rotate(0deg) scale(1);
    }
    50% {
      transform: translate(-50%, -50%) rotate(0deg) scale(1.6);
    }
  }
`;

export default Checkbox;
