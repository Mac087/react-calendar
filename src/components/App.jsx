import React, { Component } from 'react';

import Calendar from "./Calendar";


class App extends React.Component {
  render() {
    return (
      <div class="App">
        <header>
          <div id="logo">
            <span className="icon">date_range</span>
            <span>
              react<b>calendar</b>
            </span>
          </div>
        </header>
        <main>
          <Calendar />
        </main>
      </div>
    );
  }
}

export default App;
