export const fileUpload = async (file) => {
  const url = "https://api.cloudinary.com/v1_1/ermike/upload";
  const formData = new FormData();
  formData.append("upload_preset", "Blockmaster");
  formData.append("file", file);

  const resp = await fetch(url, {
    method: "POST",
    body: formData,
  });

  const cloudResp = await resp.json();
  return cloudResp.secure_url;
};
