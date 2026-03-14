import axios from "axios";

// const backendUrl = "http://localhost:3000/api";
const backendUrl = "https://notesera-back-end.onrender.com/api";

const fetchSubjects = async ({ yearValue, programmeValue, branchValue }) => {
  try {
    const res = await axios.get(`${backendUrl}/premium/data`);
    const data = res.data.body.data;
    const subjects = data
      .filter(
        ({ year, programme, branch }) =>
          year === yearValue &&
          programme === programmeValue &&
          branch === branchValue,
      )
      .map(({ subject, link, image }) => {
        return { name: subject, link, imgLink: image };
      });
    return subjects;
  } catch (err) {
    console.error(err);
  }
};

const addSubscription = async (email) => {
  try {
    const res = await axios.post(`${backendUrl}/subscribe`, {
      email: email,
    });
    if (res.status === "success") return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};

export { addSubscription, fetchSubjects };
