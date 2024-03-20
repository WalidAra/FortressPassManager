import axios from "axios";

const BASE_URL = "https://fortresspassmanager.onrender.com/api/";

const api = {
  public: {
    auth: async ({ email, password }: { email: string; password: string }) => {
      try {
        const response = await axios.post(
          `${BASE_URL.trim()}auth/public/login`,
          {
            email,
            password,
          }
        );
        const data: HTTPResponseWithToken = await response.data;
        return data;
      } catch (error: any) {
        throw new Error("An error occurred: " + error.message);
      }
    },

    register: async ({
      email,
      password,
      username,
    }: {
      email: string;
      password: string;
      username: string;
    }) => {
      try {
         const response = await axios.post(
           `${BASE_URL.trim()}auth/public/login`,
           {
             email,
             password,
             username,
           }
         );
        const data: HTTPResponseWithToken = await response.data;
        return data;
      } catch (error: any) {
        throw new Error("An error occurred: " + error.message);
      }
    },
  },

  private: {},
};

export default api;
