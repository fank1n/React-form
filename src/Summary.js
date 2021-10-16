import React from "react";

const Summary = ({
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
}) => {
  return (
    <div className="summary-container">
      <div className="summary-header">
        <p className="summary-header-name">Анкета</p>
      </div>
      <p className="summary-data">
        <span>Имя:</span>
        {firstName}
      </p>
      <p className="summary-data">
        <span>Фамилия:</span>
        {secondName}
      </p>
      <p className="summary-data">
        <span>Дата рождения:</span>
        {date}
      </p>
      <p className="summary-data">
        <span>Телефон:</span>
        {phoneNumber}
      </p>
      <p className="summary-data">
        <span>Сайт:</span>
        {site}
      </p>
      <span className="summary-data">О себе:</span>
      <p className="summary-data">{about}</p>
      <span className="summary-data">Стэк технологий:</span>
      <p className="summary-data">{stack}</p>
      <span className="summary-data">Описание последнего проекта:</span>
      <p className="summary-data">{lastProj}</p>
    </div>
  );
};

export default Summary;
