import { BrowserRouter, Routes, Route } from "react-router-dom";

import { JoinRoom } from "../pages/join/Index";
import { ChatRoom } from "../pages/chat/Index";
import { Register } from "../pages/register/Index";
import { Profile } from "../pages/profile/Index";
import { Redirect } from "./Redirect";
import { PrivateRoute } from "./privateRoute";

export function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/profile"
                        element={
                            <PrivateRoute>
                                <Profile />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/join"
                        element={
                            <PrivateRoute>
                                <JoinRoom />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/room"
                        element={
                            <PrivateRoute>
                                <ChatRoom />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/"
                        element={
                            <Redirect>
                                <Register />
                            </Redirect>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
