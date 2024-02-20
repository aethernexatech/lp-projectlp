import axios from "axios";
import secureLocalStorage from "react-secure-storage";

export async function GET(api, param) {
  const parameter = param ?? "";
  const token = secureLocalStorage.getItem("token");
  try {
    const response = await axios(
      `${process.env.REACT_APP_API_URL}${api}${parameter}`,
      {
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
        method: "GET",
      }
    );
    if (response.data.code === 200) {
      const data = response.data;
      return data;
    } else if (
      response.data.message == "Session inactive" ||
      response.data.message === "Token cannot be empty" ||
      response.data.message === "An error while decoding token" ||
      response.data.message === "Provided token is expired"
    ) {
      localStorage.clear();
      return {};
    } else {
      throw new Error("Request failed");
    }
  } catch (error) {
    if (error.response.data.code === 401) {
    } else if (
      error.response.data.message == "Session inactive" ||
      error.response.data.message === "Token cannot be empty" ||
      error.response.data.message === "An error while decoding token" ||
      error.response.data.message === "Provided token is expired"
    ) {
    }
    return null;
  }
}

export async function POST(api, data) {
  const token = secureLocalStorage.getItem("token");
  try {
    const response = await axios(`${process.env.REACT_APP_API_URL}${api}`, {
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
      method: "post",
      data: JSON.stringify(data),
    });
    if (response.data.code === 200) {
      const data = response.data;
      return data;
    } else if (
      response.data.message == "Session inactive" ||
      response.data.message === "Token cannot be empty" ||
      response.data.message === "An error while decoding token" ||
      response.data.message === "Provided token is expired"
    ) {
      return {};
    } else {
      throw new Error("Request failed");
    }
  } catch (error) {
    if (error.response.data.code === 401) {
    } else if (
      error.response.data.message == "Session inactive" ||
      error.response.data.message === "Token cannot be empty" ||
      error.response.data.message === "An error while decoding token" ||
      error.response.data.message === "Provided token is expired"
    ) {
    }
    return null;
  }
}

export async function POST_FILE(api, data) {
  const token = secureLocalStorage.getItem("token");
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/${api}`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          token: token,
        },
      }
    );
    if (response.data.code === 200) {
      const data = response.data;
      return data;
    } else if (
      response.data.message == "Session inactive" ||
      response.data.message === "Token cannot be empty" ||
      response.data.message === "An error while decoding token"
    ) {
      return {};
    } else {
      throw new Error("Request failed");
    }
  } catch (error) {
    if (error.response.data.code === 401) {
    }
    return null;
  }
}
