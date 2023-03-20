import React from "react";
import { ValidatorMsg } from "../components/ValidatorMsg";

class Waters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      celciusValidator: "",
      farenheitValidator: "",
      msg: "No hay agua en el recipiente aún",
      switchTo: true,
    };
  }
  render() {
    console.log(this.switchTo);
    console.log(this.state.switchTo);
    /* handle de la temperatura en celcius y validación de msjs */
    const handleTemperature = (e) => {
      if (this.state.switchTo) {
        this.setState({
          celciusValidator: (this.celciusValidator = e.target.value),
          farenheitValidator: (this.farenheitValidator =
            (this.celciusValidator * 9) / 5 + 32),
        });
      } else {
        this.setState({
          farenheitValidator: (this.farenheitValidator = e.target.value),
          celciusValidator: (this.celciusValidator =
            (this.farenheitValidator - 32) * (5 / 9)),
        });
      }
      if (this.celciusValidator === 0 || this.farenheitValidator === 0) {
        this.setState({
          msg: (this.msg = "No hay agua en el recipiente aún"),
        });
      } else if (
        (this.celciusValidator > 0 && this.celciusValidator < 100) ||
        (this.farenheitValidator > 0 && this.farenheitValidator < 100)
      ) {
        this.setState({
          msg: (this.msg = "Aunque ya hay agua, aún le falta hervir"),
        });
      } else if (
        this.celciusValidator >= 100 ||
        this.farenheitValidator >= 100
      ) {
        this.setState({
          msg: (this.msg = "YA YA YA!!!! ESTÁ HIRVIENDO!! QUEMA QUEMA!"),
        });
      }
    };

    let validate = this.state.celciusValidator;
    let farenheit = this.state.farenheitValidator;
    if (this.celciusValidator === "") {
      farenheit = "";
    } else {
      farenheit = this.state.farenheitValidator;
    }

    if (this.farenheitValidator === "") {
      validate = "";
    } else {
      validate = this.state.celciusValidator;
    }
    const switcher = () => {
      this.setState({
        switchTo: (this.switchTo = !this.switchTo),
      });
    };

    const celciusToFahrenheit = (
      <form action="">
        <div>Celcius</div>
        <input
          value={validate}
          onChange={handleTemperature}
          type="text"
          placeholder="temperatura en Celcius"
        />
        <div>Fahrenheit</div>
        <input
          value={farenheit}
          onChange={handleTemperature}
          type="text"
          placeholder="temperatura en Fahrenheit"
        />
      </form>
    );

    const fahrenheitToCelcius = (
      <form action="">
        <div>Fahrenheit</div>
        <input
          value={farenheit}
          onChange={handleTemperature}
          type="text"
          placeholder="temperatura en Fahrenheit"
        />
        <div>Celcius</div>
        <input
          value={validate}
          onChange={handleTemperature}
          type="text"
          placeholder="temperatura en Celcius"
        />
      </form>
    );

    return (
      <div className="container">
        {this.switchTo ? (
          <h1>Celcius a Fahrenheit</h1>
        ) : (
          <h1>Fahrenheit a Celcius</h1>
        )}
        <div className="icon">
          <i onClick={switcher} className="bi bi-shuffle"></i>
        </div>
        {this.switchTo ? celciusToFahrenheit : fahrenheitToCelcius}
        <ValidatorMsg
          msg={this.msg}
          validator={this.celciusValidator}
          farenheitValidator={this.farenheitValidator}
          swicthTo={this.switchTo}
        />
      </div>
    );
  }
}

export const ReactPractice = () => {
  return <Waters />;
};
