import React from "react";

export const ValidatorMsg = ({
  msg,
  validator,
  farenheitValidator,
  swicthTo,
}) => {
  return (
    <div>
      <h3>{msg}</h3>
      {validator && swicthTo ? (
        <h2 id="color">
          Celcius: {validator}° <br></br> Fahrenheit: {farenheitValidator}°
        </h2>
      ) : validator && !swicthTo ? (
        <h2 id="color">
          Fahrenheit: {farenheitValidator}° <br></br> Celcius: {validator}°
        </h2>
      ) : (
        ""
      )}
    </div>
  );
};
