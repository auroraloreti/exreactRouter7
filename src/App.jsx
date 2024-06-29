import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GithubUserList from "./GithubUserList";
import ShowGithubUser from "./ShowGithubUser";

const App = () => {
  return (
    <div className="App">
      <container>
        <routes>
          <Route path="/" element={<div>Home Page Content</div>} />
          <Route path="/users" element={<GithubUserList />} />
          <Route path="/users/:username" element={<ShowGithubUser />} />
        </routes>
      </container>
      <h1>GitHub User Search</h1>
      <ul>
        <li>
          <link to="/">Home</link>
        </li>
        <li>
          <link to="/users/:username">User</link>
        </li>
        <li>
          <link to="/">Search</link>
        </li>
      </ul>
      <GithubUsers />
    </div>
  );
};

export default App;
