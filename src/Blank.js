import React from "react";

const Blank = ({
  formData: {
    firstName,
    secondName,
    date,
    phoneNumber,
    site,
    about,
    stack,
    lastProj,
  },
  changeForm,
  resetForm,
  submitForm,
  errorStatus,
  handlerBlur,
}) => {
  const maxTextLength = 600;
  return (
    <div id="container">
      <header>
        <p id="headerName">Создание анкеты</p>
      </header>
      <form onSubmit={submitForm} onReset={resetForm} id="form">
        <label className="label">Имя:</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={changeForm}
          className="input"
          onBlur={handlerBlur}
        />
        {errorStatus.firstName ? (
          <div className="errorMessage">{errorStatus.firstName}</div>
        ) : (
          ""
        )}
        <label className="label">Фамилия:</label>
        <input
          type="text"
          name="secondName"
          value={secondName}
          onChange={changeForm}
          onBlur={handlerBlur}
        />
        {errorStatus.secondName ? (
          <div className="errorMessage">{errorStatus.secondName}</div>
        ) : (
          ""
        )}
        <label className="label">Дата рождения:</label>
        <input
          type="date"
          name="date"
          value={date}
          onChange={changeForm}
          onBlur={handlerBlur}
        />
        {errorStatus.date ? (
          <div className="errorMessage">{errorStatus.date}</div>
        ) : (
          ""
        )}
        <label className="label">Телефон:</label>
        <input
          type="text"
          name="phoneNumber"
          value={phoneNumber}
          onChange={changeForm}
          onBlur={handlerBlur}
        />
        {errorStatus.phoneNumber ? (
          <div className="errorMessage">{errorStatus.phoneNumber}</div>
        ) : (
          ""
        )}
        <label className="label">Сайт:</label>
        <input
          type="text"
          name="site"
          value={site}
          onChange={changeForm}
          onBlur={handlerBlur}
        />
        {errorStatus.site ? (
          <div className="errorMessage">{errorStatus.site}</div>
        ) : (
          ""
        )}
        <label className="label">О себе:</label>
        <textarea
          cols="30"
          rows="4"
          value={about}
          name="about"
          onChange={changeForm}
          onBlur={handlerBlur}
        />
        {errorStatus.about ? (
          <div className="errorMessage">{errorStatus.about}</div>
        ) : (
          <p className="symbols">
            {maxTextLength - about.length}
            {"/600"}
          </p>
        )}
        <label className="label">Стек технологий:</label>
        <textarea
          cols="30"
          rows="4"
          value={stack}
          name="stack"
          onChange={changeForm}
          onBlur={handlerBlur}
        />
        {errorStatus.stack ? (
          <div className="errorMessage">{errorStatus.stack}</div>
        ) : (
          <p className="symbols">
            {maxTextLength - stack.length}
            {"/600"}
          </p>
        )}
        <label className="label">Описание последнего проекта:</label>
        <textarea
          cols="30"
          rows="4"
          value={lastProj}
          name="lastProj"
          onChange={changeForm}
          onBlur={handlerBlur}
        />
        {errorStatus.lastProj ? (
          <div className="errorMessage">{errorStatus.lastProj}</div>
        ) : (
          <p className="symbols">
            {maxTextLength - lastProj.length}
            {"/600"}
          </p>
        )}
        <button type="reset" id="cancel-btn" className="default-button">
          Отменить
        </button>
        <button type="submit" id="submit-btn" className="default-button">
          Сохранить
        </button>
      </form>
    </div>
  );
};

export default Blank;
