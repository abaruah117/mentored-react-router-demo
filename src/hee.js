import React from "react";
import {
  Route,
  Switch,
  Link,
  NavLink,
  Redirect,
  withRouter
} from "react-router-dom";
import "./index.css";

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users(props) {
  return (
    <div>
      This is a User Page
      <Route path={props.match.url + "/parth"} component={Parth} />
    </div>
  );
}
function Parth() {
  return <h3> Partyshah </h3>;
}

function Name(props) {
  return <h2> Hello, {props.name} </h2>;
}

function Always() {
  return <h2> I render always </h2>;
}
function Never() {
  return <Redirect to="/" />;
}
function noMatch() {
  return <h1> 404 </h1>;
}
function Greet(props) {
  return <h2> Good evening, {props.match.params.name} </h2>;
}
function Child(props) {
  return <h2> ID: {props.match.params.id} </h2>;
}
function AppRouter(props) {
  console.log(props);
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about/">About</NavLink>
          </li>
          <li>
            <Link to="/users/">Users</Link>
          </li>
          <li>
            <Link to="/never/">Never</Link>
          </li>
        </ul>
      </nav>

      <Route exact path="/" component={Index} />
      <Route path="/about/" component={About} />
      <Route path="/users/" component={Users} />
      <Route path="/name/" render={props => <Name {...props} name="Ami" />} />
      <Route path="/greet/:name(parth)" render={Greet} />
      <Route path="/never/" component={Never} />
      <Route path="/:id" component={Child} />
      <Route component={Always} />
    </div>
  );
}

export default withRouter(AppRouter);
