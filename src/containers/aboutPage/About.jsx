import "./About.css";

const About = () => {
  return (
    <>
      <h1 className="title">Барахолка</h1>
      <p className="lil-title">Продажа использованных вещей и техники.</p>
      <p className="lil-lil-title">
        Наш отдел по химчистке потрудился на славу, так что ваша девушка не
        заметит, что до неё, вещь носила пожилая цыганка.
      </p>
      <div className="about-pic-container">
        <img src="https://pressa40.ru/wp-content/uploads/2019/05/pens_schast.jpg"></img>
      </div>
    </>
  );
};

export default About;
