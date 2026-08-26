import axios from "axios";

const API = `${import.meta.env.VITE_API_URL}/api/chat`;

export const sendMessage = async (message) => {
  const res = await axios.post(API, {
    message,
  });

  return res.data.reply;
};