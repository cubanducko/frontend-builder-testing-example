import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { User } from "./User.component";
import { UserBuilder } from "models/user/__fixtures__";

export function App() {
  const user = new UserBuilder().withNetwork().getInstance();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section>
        <User data={user} />
      </section>
    </div>
  );
}
