import "./App.css";
import React from "react";
import Blank from "./Blank";
import Summary from "./Summary";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        firstName: "",
        secondName: "",
        date: "",
        phoneNumber: "",
        site: "",
        about: "",
        stack: "",
        lastProj: "",
      },
      isSubmitted: false,
      isValid: false,

      errorStatus: {
        firstName: "",
        secondName: "",
        date: "",
        phoneNumber: "",
        site: "",
        about: "",
        stack: "",
        lastProj: "",
      },
    };
  }

  validateForm = () => {
    const nameRegExp = /^[А-Яа-яЁё]+$/;
    const phoneNumberRegExp =
      /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    const urlRegExp =
      /\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i;
    for (let [name, value] of Object.entries(this.state.formData)) {
      if (value === "") {
        this.setState((previous) => {
          return {
            errorStatus: {
              ...previous.errorStatus,
              [name]: "Поле пустое, пожалуйста заполните",
            },
            isValid: false,
          };
        });
        return;
      }
      if (
        (name === "firstName" || name === "secondName") &&
        !nameRegExp.test(value)
      ) {
        this.setState((previous) => {
          return {
            formData: {
              ...previous.formData,
              [name]: value,
            },
            errorStatus: {
              ...previous.errorStatus,
              [name]: "Имя должно быть на кириллице",
            },
            isValid: false,
          };
        });
        return;
      }
      if (
        (name === "firstName" || name === "secondName") &&
        value[0] !== value[0].toUpperCase()
      ) {
        this.setState((previous) => {
          return {
            errorStatus: {
              ...previous.errorStatus,
              [name]: `${name === "firstName" ? "Имя" : "Фамилия"} должн${
                name === "firstName" ? "о" : "а"
              } начинаться с заглавной буквы`,
            },
            isValid: false,
          };
        });
        return;
      }
      if (name === "phoneNumber" && !phoneNumberRegExp.test(value)) {
        this.setState((previous) => {
          return {
            formData: {
              ...previous.formData,
              [name]: value,
            },

            errorStatus: {
              ...previous.errorStatus,
              [name]: "Не соответствие формату. Формат: +X XXX XX XX",
            },
            isValid: false,
          };
        });
        return;
      }
      if (name === "site" && !urlRegExp.test(value)) {
        this.setState((previous) => {
          return {
            formData: {
              ...previous.formData,
              [name]: value,
            },

            errorStatus: {
              ...previous.errorStatus,
              [name]: "Не соответствие на формат. Формат: https://...",
            },
            isValid: false,
          };
        });
        return;
      }
      this.setState((previous) => {
        return {
          isValid: true,
        };
      });
    }
  };

  submitForm = (e) => {
    e.preventDefault();
    this.validateForm();
    this.setState(() => {
      return {
        isSubmitted: true,
      };
    });
  };

  changeForm = ({ target: { name, value } }) => {
    const nameRegExp = /^[А-Яа-яЁё]+$/;
    const phoneNumberRegExp =
      /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    const urlRegExp =
      /\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i;
    this.setState((previous) => {
      if (
        (name === "firstName" || name === "secondName") &&
        !nameRegExp.test(value)
      ) {
        return {
          formData: {
            ...previous.formData,
            [name]: value,
          },

          errorStatus: {
            ...previous.errorStatus,
            [name]: "Имя должно быть на кириллице",
          },
        };
      }

      if (name === "phoneNumber" && value.length > 12) {
        return null;
      }

      if (
        (name === "about" || name === "stack" || name === "lastProj") &&
        value.length > 600
      ) {
        return {
          formData: {
            ...previous.formData,
            [name]: value.slice(0, 600),
          },

          errorStatus: {
            ...previous.errorStatus,
            [name]: "Превышен лимит знаков",
          },
        };
      }

      if (
        (name === "about" || name === "stack" || name === "lastProj") &&
        value.length < 600
      ) {
        return {
          formData: {
            ...previous.formData,
            [name]: value,
          },

          errorStatus: {
            ...previous.errorStatus,
            [name]: "",
          },
        };
      }
      if (name === "phoneNumber" && !phoneNumberRegExp.test(value)) {
        return {
          formData: {
            ...previous.formData,
            [name]: value,
          },

          errorStatus: {
            ...previous.errorStatus,
            [name]: "Не соответствие формату. Формат: +X XXX XX XX",
          },
        };
      }
      if (name === "site" && !urlRegExp.test(value)) {
        return {
          formData: {
            ...previous.formData,
            [name]: value,
          },

          errorStatus: {
            ...previous.errorStatus,
            [name]: "Не соответствие на формат. Формат: https://...",
          },
        };
      }
      return {
        formData: {
          ...previous.formData,
          [name]: value,
        },

        errorStatus: {
          ...previous.errorStatus,
          [name]: "",
        },
      };
    });
  };

  handlerBlur = ({ target: { name, value } }) => {
    this.setState((previous) => {
      if (value === "") {
        return {
          errorStatus: {
            ...previous.errorStatus,
            [name]: "Поле пустое, пожалуйста заполните",
          },
        };
      }
      if (
        (name === "firstName" || name === "secondName") &&
        value[0] !== value[0].toUpperCase()
      ) {
        return {
          errorStatus: {
            ...previous.errorStatus,
            [name]: `${name === "firstName" ? "Имя" : "Фамилия"} должн${
              name === "firstName" ? "о" : "а"
            } начинаться с заглавной буквы`,
          },
        };
      }
    });
  };

  resetForm = (e) => {
    this.setState({
      firstName: "",
      secondName: "",
      date: "",
      phoneNumber: "",
      site: "",
      about: "",
      stack: "",
      lastProj: "",
      isSubmitted: false,
      isValid: false,

      errorStatus: {
        firstName: "",
        secondName: "",
        date: "",
        phoneNumber: "",
        site: "",
        about: "",
        stack: "",
        lastProj: "",
      },
    });
  };

  render() {
    const {
      firstName,
      secondName,
      date,
      phoneNumber,
      site,
      about,
      stack,
      lastProj,
    } = this.state.formData;

    if (this.state.isSubmitted && this.state.isValid) {
      return (
        <Summary
          firstName={firstName}
          secondName={secondName}
          date={date}
          phoneNumber={phoneNumber}
          site={site}
          date={date}
          phoneNumber={phoneNumber}
          site={site}
          about={about}
          stack={stack}
          lastProj={lastProj}
          changeForm={this.changeForm}
          resetForm={this.resetForm}
          submitForm={this.submitForm}
        />
      );
    }
    return (
      <div>
        <Blank
          firstName={firstName}
          secondName={secondName}
          date={date}
          phoneNumber={phoneNumber}
          site={site}
          date={date}
          phoneNumber={phoneNumber}
          site={site}
          about={about}
          stack={stack}
          lastProj={lastProj}
          changeForm={this.changeForm}
          resetForm={this.resetForm}
          submitForm={this.submitForm}
          errorStatus={this.state.errorStatus}
          handlerBlur={this.handlerBlur}
        />
      </div>
    );
  }
}

export default App;
