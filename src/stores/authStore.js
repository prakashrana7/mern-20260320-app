import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
    persist((set)=>({
        user: null,
        isAuthenticated: false,

        loginUser: ({user, remember }) => {
        set({
            user,
            isAuthenticated: true,
        });

        if(remember) {
        localStorage.setItem("authToken", user.token);
        sessionStorage.removeItem("authToken");
        } else {
        sessionStorage.setItem("authToken", user.token);
        localStorage.removeItem("authToken");
        }
           },

        registerUser: ({user}) => 
            {
             set({
            user,
            isAuthenticated: true,
        });
        localStorage.setItem("authToken", user.token);
           },

        setUser: ({ user }) => {
            set({ user });
        },
        
        logout: () => {
            localStorage.removeItem("authToken");
            sessionStorage.removeItem("authToken");

            set({
            user: null,
            isAuthenticated: false,
            });
        }}),
    {name:"zustand:auth-storage"},
    ),
);

export default useAuthStore;