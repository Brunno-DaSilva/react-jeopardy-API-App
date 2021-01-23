class JeopardyQuestion extends React.Component {
  state = {
    showAnswer: true,
  };
  render() {
    return (
      <div>
        <div className="answer-card">
          <div className="card-title">
            <h3>Question:</h3>
            <h3> {this.props.data.question}</h3>
          </div>
          <div className="extra-info-card">
            <p>
              <span>Category: </span>
              {this.props.data.category.title}
            </p>
            <p>
              <span>Points:</span> {this.props.data.value}
            </p>
          </div>
          <div className="answer-format">
            <button
              type="button"
              className="btn-answer"
              onClick={() =>
                this.setState({ showAnswer: !this.state.showAnswer })
              }
            >
              {this.state.showAnswer ? "Show Answer" : "Hide Answer"}
            </button>
            <p className={this.state.showAnswer ? "hide" : "show"}>
              <span>Answer: </span>
              {this.props.data.answer}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    baseURL: "https://jservice.io/api/random",
    random: "",
    score: 0,
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState(
      {
        random: this.state.baseURL,
      },
      () => {
        fetch(this.state.random)
          .then((response) => response.json())
          .then(
            (json) =>
              this.setState({
                data: json,
              }),
            (err) => console.log(err)
          );
      }
    );
  };

  render() {
    return (
      <React.Fragment>
        <div className="main-score">
          <h2>
            Score: <span>{this.state.score}</span>
          </h2>
          <button
            type="button"
            onClick={() =>
              this.setState({
                score: (this.state.score += this.state.data[0].value),
              })
            }
            className="btn-add-score"
          >
            Add Points <i class="fas fa-arrow-up"></i>
          </button>
          <button
            type="button"
            onClick={() =>
              this.setState({
                score: (this.state.score -= this.state.data[0].value),
              })
            }
            className="btn-remove-score"
          >
            Remove Points <i class="fas fa-arrow-down"></i>
          </button>
        </div>
        <div>
          <div>
            <form onSubmit={this.handleSubmit}>
              <input type="submit" value="Get Question" />
            </form>
          </div>
          <div>
            {this.state.data && <JeopardyQuestion data={this.state.data[0]} />}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
