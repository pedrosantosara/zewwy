import React from "react";
import { client } from "./client";
import "./App.css";
import Posts from "./components/Posts/Posts";

class App extends React.Component {
  state = {
    articles: [],
    isOverview: true,
  };

  componentDidMount() {
    client
      .getEntries()
      .then((response) => {
        console.log(response);
        this.setState({
          articles: response.items,
        });
      })
      .catch(console.error);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <header className="header">
            <h1 className="logo">Zewwy</h1>
            <h2>Welcome</h2>
          </header>
          <main>
            <Posts posts={this.state.articles} />
          </main>
        </div>
      </div>
    );
  }
}
export default App;
