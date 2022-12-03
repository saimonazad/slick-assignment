import axios from "./axios";

export const getBusinessById = async (
  id: string
): Promise<Business | undefined> => {
  try {
    const { data } = await axios.get(`/businesses/${id}`);
    return data;
  } catch (error) {}
};
