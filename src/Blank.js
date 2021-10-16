import React from "react";

class Blank extends React.Component {
  
  render() {
    const maxTextLength = 600;
    return (
      <div id="container">
        <header>
          <p id="headerName">Создание анкеты</p>
        </header>
        <form onSubmit = {this.props.submitForm} onReset = {this.props.resetForm} id="form">
          <label className="label">Имя:</label>
          <input
            type="text"
            name="firstName"
            value={this.props.firstName}
            onChange={this.props.changeForm}
            className="input"
            onBlur = {this.props.handlerBlur}
          />
          {this.props.errorStatus.firstName ? <div className = "errorMessage">{this.props.errorStatus.firstName}</div> : ''}
          <label className="label">Фамилия:</label>
          <input
            type="text"
            name="secondName"
            value={this.props.secondName}
            onChange={this.props.changeForm}
            onBlur = {this.props.handlerBlur}
          />
          {this.props.errorStatus.secondName ? <div className = "errorMessage">{this.props.errorStatus.secondName}</div> : ''}
          <label className="label">Дата рождения:</label>
          <input 
            type="date" 
            name="date" 
            value={this.props.date} 
            onChange={this.props.changeForm}
            onBlur = {this.props.handlerBlur}
          />
          {this.props.errorStatus.date ? <div className = "errorMessage">{this.props.errorStatus.date}</div> : ''}
          <label className="label">Телефон:</label>
          <input
            type="text"
            name="phoneNumber"
            value={this.props.phoneNumber}
            onChange={this.props.changeForm}
            onBlur = {this.props.handlerBlur}
          />
          {this.props.errorStatus.phoneNumber ? <div className = "errorMessage">{this.props.errorStatus.phoneNumber}</div> : ''}
          <label className="label">Сайт:</label>
          <input 
          type="text" 
          name="site" 
          value={this.props.site} 
          onChange={this.props.changeForm}
          onBlur = {this.props.handlerBlur}
          />
          {this.props.errorStatus.site ? <div className = "errorMessage">{this.props.errorStatus.site}</div> : ''}
          <label className="label">О себе:</label>
          <textarea
            cols="30"
            rows="4"
            value={this.props.about}
            name="about"
            onChange={this.props.changeForm}
            onBlur = {this.props.handlerBlur}
          />
          {this.props.errorStatus.about 
          ? <div className = "errorMessage">{this.props.errorStatus.about}</div> 
          : <p className = 'symbols'>{maxTextLength - this.props.about.length}{'/600'}</p>}
          <label className="label">Стек технологий:</label>
          <textarea
            cols="30"
            rows="4"
            value={this.props.stack}
            name="stack"
            onChange={this.props.changeForm}
            onBlur = {this.props.handlerBlur}
          />
          {this.props.errorStatus.stack 
          ? <div className = "errorMessage">{this.props.errorStatus.stack}</div> 
          : <p className = 'symbols'>{maxTextLength - this.props.stack.length}{'/600'}</p>}
          <label className="label">Описание последнего проекта:</label>
          <textarea
            cols="30"
            rows="4"
            value={this.props.lastProj}
            name="lastProj"
            onChange={this.props.changeForm}
            onBlur = {this.props.handlerBlur}
          />
          {this.props.errorStatus.lastProj 
          ? <div className = "errorMessage">{this.props.errorStatus.lastProj}</div> 
          : <p className = 'symbols'>{maxTextLength - this.props.lastProj.length}{'/600'}</p>}
          <button type = "reset" id="cancel-btn" className="default-button">
            Отменить
          </button>
          <button type="submit" id="submit-btn" className="default-button">
            Сохранить
          </button>
        </form>
      </div>
    );
  }
}

export default Blank;