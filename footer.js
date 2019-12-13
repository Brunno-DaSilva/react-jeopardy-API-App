console.log("Ola Mundo");

class Footer extends React.Component {
  render() {
    return (
      <div>
        <img
          src="https://res.cloudinary.com/duprwuo4j/image/upload/c_scale,w_155/v1574831158/imgs_starwars/imgs/BLOGO_k36v5y.png"
          alt="logo"
        />
        <p>Bruno DaSilva</p>
        <br />
        <p>
          <span> Jeopardy APP</span>
        </p>
      </div>
    );
  }
}

ReactDOM.render(<Footer />, document.querySelector(".main-footer"));