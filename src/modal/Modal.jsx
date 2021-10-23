import "./Modal.css";

const Modal = ({ active, setActive }) => {
  return (
    <div
      className={active ? "modal active " : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal-content active " : "modal-content"}
        onClick={(e) => e.stopPropagation()}
      >
        <p className="modal-name">Авторизация</p>
        <form className="modal-inputs-container">
          <p className="paragraph">Login</p>
          <input className="modal-inputs" type="text"></input>
          <p className="paragraph">Password</p>
          <input className="modal-inputs" type="password"></input>
          <br />
          <button id="modal-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
