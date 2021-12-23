export const url = "https://kk-to-do-app.herokuapp.com/api";
// export const url = "http://localhost:2000/api";

export const setHeaders = () => {
  const headers = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    }, 
  };

  return headers;
};
