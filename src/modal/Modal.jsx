import "./Modal.css";
import { useState, useContext, useEffect } from "react";
import Context from "../context";

const Modal = ({ active, setActive }) => {
  const {loggedInfo, setFormValid, setIsAdmin} = useContext(Context);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginClicked, setIsLoginClicked] = useState(false)
  const [isPasswordClicked, setIsPasswordClicked] = useState(false)
  const [loginError, setLoginError] = useState('Некорректный логин')
  const [passwordError, setPasswordError] = useState('Некорректный пароль')
  

  useEffect(() => {
    if(loginError || passwordError){
      setFormValid(false)
    }
    else{
      setActive(false)
      setFormValid(true);
    }
  }, [loginError, passwordError])

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'login':
          setIsLoginClicked(true)
        break
    
      case 'password':
        setIsPasswordClicked(true)
        break
    }
  }
  const loginHandler = (e) => {
    setLogin(e.target.value)
    const trueAdminLogin = loggedInfo.userData[0].login;
    const trueCustomerLogin = loggedInfo.userData[1].login;

    if(e.target.value === trueAdminLogin){
      setLoginError('');
      setIsAdmin(true);
    }
    else if (e.target.value === trueCustomerLogin){
      setLoginError('');
      setIsAdmin(false);
    }
    else{
      setLoginError('Некорректно введенный логин')
      setIsAdmin(false);
    }
  }
  const passwordHandler = (e) => {
    setPassword(e.target.value)
    const trueAdminPassword = loggedInfo.userData[0].password;
    const trueCustomerPassword = loggedInfo.userData[1].password;
    
    if(e.target.value === trueAdminPassword){
      setPasswordError('');
      setIsAdmin(true);
    }
    else if(e.target.value === trueCustomerPassword){
      setPasswordError('');
      setIsAdmin(false);
    }
    else{
      setPasswordError('Некорректно введенный пароль');
      setIsAdmin(false);
    }
  }

  return (
    <div
      className={active ? "modal active " : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal-content active " : "modal-content"}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        <div>
          <img
            className="modal-cross"
            src="https://cdn-icons-png.flaticon.com/512/659/659891.png"
            height="20px"
            width="20px"
            onClick={() => {
              setActive(false);
            }}
          ></img>
          <p className="modal-name">Авторизация</p>
        </div>
        <form className="modal-inputs-container">
          <p className="paragraph">Логин</p>
          <input 
          className="modal-inputs" 
          value = {login} 
          name = "login" 
          type="text"
          onBlur = {e => blurHandler(e)}
          onChange = {e => loginHandler(e)}
          >
          </input>
          {(isLoginClicked && loginError) && <p className = "modal-errors">{loginError}</p>}
          <p className="paragraph">Пароль</p>
          <input 
          className="modal-inputs"
           value = {password} 
           name = "password" 
           type="password"
           onBlur = {e => blurHandler(e)}
           onChange = {e => passwordHandler(e)}
           >
           </input>
           {(isPasswordClicked && passwordError) && <p className = "modal-errors">{passwordError}</p>}
        </form>
      </div>
    </div>
  );
};

export default Modal;
