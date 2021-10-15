import './App.css';
import React from 'react';
import Blank from './Blank'
import Summary from './Summary'

class App extends React.Component{
    constructor(props) {
      super(props);
  
      this.state = {
        firstName: '',
        secondName: '',
        date: '',
        phoneNumber: '',
        site: '',
        about: '',
        stack: '',
        lastProj: '',
        isSubmitted: false,
      };
    }
  
    submitForm = (e) => {
      e.preventDefault();
      console.log(this.state);
      this.setState(()=>{
        return {
          isSubmitted: true,
        }
      });
      console.log(this.state.isSubmitted)
    };
    
    changeForm = ({target: {name, value}}) => {
      this.setState((prev) => {
          if (name === "phoneNumber" && value.length > 12) {
              return null;
          }
          return {
                  [name]: value,
              }
          })
          console.log(name,value)
      }

      formValidation = () =>{
        const nameRegExp = /^[А-Яа-яЁё]+$/;
        const urlRegExp = /\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i;
        const phoneNumberRegExp = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
        
      }
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
        isEdit:false,
      });
    };
    render(){
      const {
        firstName,
        secondName,
        date,
        phoneNumber,
        site,
        about,
        stack,
        lastProj,
      } = this.state;
      if(this.state.isSubmitted){
        return (
          <Summary
           firstName = {firstName}
           secondName = {secondName}
           date = {date}
           phoneNumber = {phoneNumber}
           site = {site}
           date = {date}
           phoneNumber = {phoneNumber}
           site = {site}
           about = {about}
           stack = {stack}
           lastProj = {lastProj}
           changeForm = {this.changeForm}
           resetForm = {this.resetForm}
           submitForm = {this.submitForm}
          />
        )
      }
      return(
        <div>
          <Blank firstName = {firstName}
           secondName = {secondName}
           date = {date}
           phoneNumber = {phoneNumber}
           site = {site}
           date = {date}
           phoneNumber = {phoneNumber}
           site = {site}
           about = {about}
           stack = {stack}
           lastProj = {lastProj}
           changeForm = {this.changeForm}
           resetForm = {this.resetForm}
           submitForm = {this.submitForm}
           />
        </div>
      )
    }
  }

export default App;