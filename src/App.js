import "./App.css";
import React, { useState } from "react";
import Blank from "./Blank";
import Summary from "./Summary";

const App = () => {
  const [state, setState] = useState({
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
  });
  const validateForm = () => {
    const nameRegExp = /^[А-Яа-яЁё]+$/;
    const phoneNumberRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/
    const urlRegExp =
      /\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i;
    for (let [name, value] of Object.entries(state.formData)) {
      if (value === "") {
        setState((previous) => {
          return {
            ...previous,
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
        setState((previous) => {
          return {
            ...previous,
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
        setState((previous) => {
          return {
            ...previous,
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
        setState((previous) => {
          return {
            ...previous,
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
        setState((previous) => {
          return {
            ...previous,
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
      setState((previous) => {
        return {
          ...previous,
          isValid: true,
        };
      });
    }
  };
  const submitForm = (e) => {
    e.preventDefault();
    validateForm();
    setState((previous) => {
      return {
        ...previous,
        isSubmitted: true,
      };
    });
  };

  const changeForm = ({ target: { name, value } }) => {
    const nameRegExp = /^[А-Яа-яЁё]+$/;
    const phoneNumberRegExp =
      /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    const urlRegExp =
      /\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i;
    setState((previous) => {
      if (
        (name === "firstName" || name === "secondName") &&
        !nameRegExp.test(value)
      ) {
        return {
          ...previous,
          formData: {
            ...previous.formData,
            [name]: value,
          },

          errorStatus: {
            ...previous.errorStatus,
            [name]: "Имя должно быть на кириллице",
          },
          isSubmitted: false,
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
          ...previous,
          formData: {
            ...previous.formData,
            [name]: value.slice(0, 600),
          },

          errorStatus: {
            ...previous.errorStatus,
            [name]: "Превышен лимит знаков",
          },
          isSubmitted: false,
        };
      }

      if (
        (name === "about" || name === "stack" || name === "lastProj") &&
        value.length < 600
      ) {
        return {
          ...previous,
          formData: {
            ...previous.formData,
            [name]: value,
          },

          errorStatus: {
            ...previous.errorStatus,
            [name]: "",
          },
          isSubmitted: false,
        };
      }
      if (name === "phoneNumber" && !phoneNumberRegExp.test(value)) {
        return {
          ...previous,
          formData: {
            ...previous.formData,
            [name]: value,
          },

          errorStatus: {
            ...previous.errorStatus,
            [name]: "Не соответствие формату. Формат: +X XXX XX XX",
          },
          isSubmitted: false,
        };
      }
      if (name === "site" && !urlRegExp.test(value)) {
        return {
          ...previous,
          formData: {
            ...previous.formData,
            [name]: value,
          },

          errorStatus: {
            ...previous.errorStatus,
            [name]: "Не соответствие на формат. Формат: https://...",
          },
          isSubmitted: false,
        };
      }
      return {
        ...previous,
        formData: {
          ...previous.formData,
          [name]: value,
        },

        errorStatus: {
          ...previous.errorStatus,
          [name]: "",
        },
        isSubmitted: false,
      };
    });
  };

  const handlerBlur = ({ target: { name, value } }) => {
    setState((previous) => {
      if (value === "") {
        return {
          ...previous,
          errorStatus: {
            ...previous.errorStatus,
            [name]: "Поле пустое, пожалуйста заполните",
          },
          isSubmitted: false,
        };
      }
      if (
        (name === "firstName" || name === "secondName") &&
        value[0] !== value[0].toUpperCase()
      ) {
        return {
          ...previous,
          errorStatus: {
            ...previous.errorStatus,
            [name]: `${name === "firstName" ? "Имя" : "Фамилия"} должн${
              name === "firstName" ? "о" : "а"
            } начинаться с заглавной буквы`,
          },
          isSubmitted: false,
        };
      }
      return {
        ...previous,
        isValid: true,
      };
    });
  };

  const resetForm = (e) => {
    setState({
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

  if (state.isSubmitted && state.isValid) {
    return <Summary formData={state.formData} />;
  }
  return (
    <div>
      <Blank
        formData={state.formData}
        changeForm={changeForm}
        resetForm={resetForm}
        submitForm={submitForm}
        errorStatus={state.errorStatus}
        handlerBlur={handlerBlur}
      />
    </div>
  );
};

export default App;
