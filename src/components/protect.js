import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

export function PrivateRoute({ children, ...rest }) {
    let token = localStorage.getItem('token');
    return (
      <Route
        {...rest}
        render={({ location }) =>
        token ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
  