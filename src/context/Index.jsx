import React, { createContext, useState } from "react";

export const context = createContext(null);

export function AppContext({ children }) {
    // states
    const [isAsideVisible, setIsAsideVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    // values to be shared across the context
    var contextValues = {
        searchTerm,
        setSearchTerm,
        isAsideVisible,
        setIsAsideVisible,
    };

    return (
        <context.Provider value={contextValues}>{children}</context.Provider>
    );
}
