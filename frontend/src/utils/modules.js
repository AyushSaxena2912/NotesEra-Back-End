import axios from "axios";

// const backendUrl = "http://localhost:3000/api";
const backendUrl = "https://notesera-modules-backend.onrender.com/api"; // NotesEra main
// const backendUrl = "https://notes-era-backend.onrender.com/api"; // NotesEra alt

const fetchAllRepos = async () => {
  try {
    const { data } = await axios.get(`${backendUrl}/modules`);
    return data;
  } catch (err) {
    console.error(`Error fetching all repos: ${err}.`);
    return { isErr: true };
  }
};

const fetchRepo = async (repoId) => {
  try {
    const { data } = await axios.get(`${backendUrl}/modules/${repoId}`);
    return data;
  } catch (err) {
    console.error(`Error fetching repo(${repoId}): ${err}.`);
    return { isErr: true };
  }
};

const createOrder = async (slug, type) => {
  try {
    const { data } = await axios.post(`${backendUrl}/payment/create-order`, {
      productId: slug,
      type,
    });
    return data;
  } catch (err) {
    console.error(`Error creating order: ${err}.`);
    return { isErr: true };
  }
};

const verifyPayment = async (paymentDetails, successCallback) => {
  const { data } = await axios.post(
    `${backendUrl}/payment/verify`,
    paymentDetails,
  );
  if (data.status === "success") successCallback();
};

export { fetchAllRepos, fetchRepo, createOrder, verifyPayment };
