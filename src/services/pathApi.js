import axiosInstance from "./axiosInstance";

export const newPath = async (pathData) => {
  try {
    const response = await axiosInstance.post("/paths/get-path", pathData);
    return response.data;
  } catch (error) {
    console.error("Error geting new path", error);
    throw error;
  }
};

export const savePath = async (pathData) => {
  try {
    const response = await axiosInstance.post("/paths/save-path", pathData);
    return response.data;
  } catch (error) {
    console.error("Error saving path", error);
    throw error;
  }
};
