console.log("Ola Mundo");

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="nav-bar">
          <ul>
            <li>
              <a href="/">
                <img
                  src="https://res.cloudinary.com/duprwuo4j/image/upload/v1574831158/Logo/BLOGO_k36v5y.png"
                  alt="logo"
                />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://bruno-dasilva.com/">
                Home
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/bruno-dasilva/"
              >
                Categories
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/Brunno-DaSilva">
                About
              </a>
            </li>
          </ul>
        </div>
        <br />
        <div className="header-ld">
          <h2> Welcome to Jeopardy!</h2>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.querySelector(".main-header"));
