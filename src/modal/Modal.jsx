import "./Modal.css";

const Modal = ({ active, setActive }) => {
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
