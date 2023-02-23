import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }) {
    return document.cookie
        .split(";")
        .map((cookie) => cookie.split("="))
        .reduce(
            (accumulator, [key, value]) => ({
                ...accumulator,
                [key.trim()]: decodeURIComponent(value),
            }),
            {}
        )?.logged == "true" ? (
        children
    ) : document.cookie
          .split(";")
          .map((cookie) => cookie.split("="))
          .reduce(
              (accumulator, [key, value]) => ({
                  ...accumulator,
                  [key.trim()]: decodeURIComponent(value),
              }),
              {}
          )?.logged == "false" ? (
        <Navigate to="/" />
    ) : (
        <Navigate to="/" />
    );
}
