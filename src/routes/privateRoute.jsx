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
        )?.username != "" ? (
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
          )?.username == "" ? (
        <Navigate to="/" />
    ) : (
        <Navigate to="/" />
    );
}
