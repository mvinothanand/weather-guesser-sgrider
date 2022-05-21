import React from "react";
import { createRoot } from "react-dom/client";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount (){
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      error => this.setState({ errorMessage: error.message})
    );
  }

  renderContent () {
    if (this.state.errorMessage) {
      return (
        <div>
          <h1>Error: {this.state.errorMessage}</h1>
        </div>
      )      
    }

    if(this.state.lat) {
      return (
        <SeasonDisplay latitude={this.state.lat}/>
      )
    }

    return   <Spinner message="Please allow access to read location"/>;    
  }

  render() {
    return(
      <div>
        {this.renderContent()}
      </div>
    )
  }
}
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);