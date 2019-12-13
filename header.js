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
                  src="https://res.cloudinary.com/duprwuo4j/image/upload/c_scale,w_155/v1574831158/imgs_starwars/imgs/BLOGO_k36v5y.png"
                  alt="logo"
                />
              </a>
            </li>
            <li>
              <a href="/#">Home</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
            <li>
              <a href="#">About</a>
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