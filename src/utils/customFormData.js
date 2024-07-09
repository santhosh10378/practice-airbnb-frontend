const customFormData = (data) => {
  const formData = new FormData();

  for (const key in data) {
    if (key === "listingImages") {
      Array.from(data[key]).forEach((file, index) => {
        formData.append(`listingImages`, file);
      });
    } else {
      formData.append(key, data[key]);
    }
  }

  return formData;
};

export default customFormData;
