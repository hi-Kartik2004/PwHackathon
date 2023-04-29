import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "GigBridge");

  try {
    const res = await axios.post("cloudinary://727299443939275:HCHHj3d7lKyzXcXjfgNfc7r8kGg@dfrlw9irm", data);

    const { url } = res.data;
    return url;
  } catch (err) {
    console.log(err);
  }
};

export default upload;