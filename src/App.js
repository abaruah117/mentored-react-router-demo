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
function Example() {
  return <h2> hi parth </h2>;
}
function Warren({ match }) {
  return <Route path={match.url + "/basketball"} component={Ball} />;
}
function Ball() {
  return <h2> warren is great at basketball! </h2>;
}
function ComponentWithProps(props) {
  return <h2> {props.name} </h2>;
}
function Greet(props) {
  console.log(props);
  return <h2> hi {props.match.params.name} </h2>;
}
function NeverRenders() {
  return (
    <div>
      <h2> this rendered??? </h2>
      <Redirect to="/warren/basketball" />
    </div>
  );
}
function App(props) {
  console.log(props);
  return (
    <div>
      <h3> i love react </h3>
      <Link to="/warren/basketball"> Warren balls? </Link>
      <Switch>
        <Route exact path="/" component={Example} />
        <Route path="/warren" component={Warren} />
        <Route path="/props" render={() => <ComponentWithProps name="hi" />} />
        <Route path="/hi/:name(parth)" component={Greet} />
        <Route path="/never" component={NeverRenders} />
        <Route component={NeverRenders} />
      </Switch>
      Wow react
    </div>
  );
}

export default withRouter(App);
