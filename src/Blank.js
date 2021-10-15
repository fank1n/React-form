import React from "react";

class Blank extends React.Component {

  //   this.state = {
  //     firstName: undefined,
  //     secondName: undefined,
  //     date: undefined,
  //     phoneNumber: undefined,
  //     site: undefined,
  //     about: undefined,
  //     stack: undefined,
  //     lastProj: undefined,
  //     isEdit: false,
  //   };
  // }
  // change = (e) => {
  //   const { name, value } = e.target;
  //   this.setState({ [name]: value });
  // };

  // submitForm = (e) => {
  //   e.preventDefault();
  //   console.log(this.state);
  //   this.setState({
  //       firstName: this.state.firstName,
  //       secondName: this.state.secondName,
  //       date: this.state.date,
  //       phoneNumber: this.state.phoneNumber,
  //       site: this.state.site,
  //       about: this.state.about,
  //       stack: this.state.stack,
  //       lastProj: this.state.lastProj,
  //       isEdit: true,
  //   });
    
  // };


  // resetForm = (e) => {
  //   this.setState({
  //     firstName: "",
  //     secondName: "",
  //     date: "",
  //     phoneNumber: "",
  //     site: "",
  //     about: "",
  //     stack: "",
  //     lastProj: "",
  //     isEdit:false,
  //   });
  // };

//   validation = (values) => {
//       let errors = {};
//       this.if(this.state.firstName === ''){

//       }
//   }

//   if(this.state.firstName === ''){
//       errors.this.state.firstName
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
          />
          <label className="label">Фамилия:</label>
          <input
            type="text"
            name="secondName"
            value={this.props.secondName}
            onChange={this.props.changeForm}
          />
          <label className="label">Дата рождения:</label>
          <input type="date" name="date" value={this.props.date} onChange={this.props.changeForm}/>
          <label className="label">Телефон:</label>
          <input
            type="number"
            name="phoneNumber"
            value={this.props.phoneNumber}
            onChange={this.props.changeForm}
          />
          <label className="label">Сайт:</label>
          <input type="text" name="site" value={this.props.site} onChange={this.props.changeForm}/>
          <label className="label">О себе:</label>
          <textarea
            cols="30"
            rows="4"
            value={this.props.about}
            name="about"
            onChange={this.props.changeForm}
          />
          <p className = 'symbols'>{maxTextLength - this.props.about.length}{'/600'}</p>
          <label className="label">Стек технологий:</label>
          <textarea
            cols="30"
            rows="4"
            value={this.props.stack}
            name="stack"
            onChange={this.props.changeForm}
          />
          <p className = 'symbols'>{maxTextLength - this.props.stack.length}{'/600'}</p>
          <label className="label">Описание последнего проекта:</label>
          <textarea
            cols="30"
            rows="4"
            value={this.props.lastProj}
            name="lastProj"
            onChange={this.props.changeForm}
          />
          <p className = 'symbols'>{maxTextLength - this.props.lastProj.length}{'/600'}</p>
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