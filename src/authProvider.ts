// in src/authProvider.ts
import { AuthProvider } from "react-admin"; // defines the structure of the authentication provider.

//  Declares an object named authProvider that conforms to the AuthProvider type.
export const authProvider: AuthProvider = {
  // Defines the login function, which is called when a user tries to log in.
  login: ({ username }) => {
    // Saves the username in the browser’s localStorage for later use.
    localStorage.setItem("username", username);
    // always returns a successful result, meaning the login is considered successful.
    return Promise.resolve();
  },
  // defines the logout function, which is called when a user logs out.
  logout: () => {
    // removes the username from localStorage, effectively logging the user out.
    localStorage.removeItem("username");
    // always returns a successful result, meaning the logout is considered successful.
    return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }: { status: number }) => {
    // checks if the error status is 401 (Unauthorized) or 403 (Forbidden).
    if (status === 401 || status === 403) {
      // removes the username from localStorage
      localStorage.removeItem("username");
      // returns a rejected promise, meaning the user should be considered logged out due to the error.
      return Promise.reject();
    }
    // returns a successful result.
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    // checks if there’s a username in localStorage.
    return localStorage.getItem("username")
      ? Promise.resolve() // If there is a username, returns a successful result.
      : Promise.reject(); // rejects
  },
  //  which currently just returns a successful result without checking for any permissions
  getPermissions: () => Promise.resolve(),
};
