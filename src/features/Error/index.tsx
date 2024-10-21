import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import errorMessageData, { type ErrorMessageData } from "./configs";
import { useAppDispatch } from '../../hooks/hooks';
import { setSearchQuery } from '../../redux/searchSlice';
import "./index.scss";

type ErrorProps = {
  type: keyof ErrorMessageData;
}

const Error: React.FC<ErrorProps> = ({ type }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { imgUrl, title, description, button } = errorMessageData[type];

  const handleButtonClick = () => {
    if (type === "employeeSearch") {
      dispatch(setSearchQuery(''));
      navigate('/');
    } else {
      navigate("/");
    }
  };

  return (
    <div className="error">
      <img src={imgUrl} alt="Error-icon" />
      <h4 className="error__title">{title}</h4>
      <p className="error__message">{description}</p>
      {button && (
        <Button
          onClick={handleButtonClick}
          className="error__back-button">
          {button}
        </Button>
      )}
    </div>
  )
}

export default Error;
