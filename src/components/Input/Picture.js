import React, { useState } from "react";

const Picture = ({ setReadablePicture, setPicture, readablePicture }) => {
  const [error, setError] = useState("");
  const handlePicture = (e) => {
    try {
      const imageFile = e.target.files[0];

      const reader = new FileReader(); // asynchronously read the contents of files (or raw data buffers) stored on the user's computer

      // max size is greater than 5mb
      if (imageFile.size > 1024 * 1024 * 5) {
        setError("File too large");
      }

      if (imageFile && imageFile.type.match("image.*")) {
        reader.readAsDataURL(imageFile);
        reader.onload = (e) => {
          console.log("e", e.target);
          setReadablePicture(e.target?.result);
        };
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-y-3">
        <label htmlFor="picture">Picture (Optional)</label>
        <input
          onChange={handlePicture}
          placeholder="Enter your picture (Optional)"
          type="file"
          label="Picture (Optional)"
          accept=".png, .jpg, .jpeg"
        />
        {error.length > 0 && <p> {error}</p>}
        {readablePicture && (
          <img src={readablePicture} className="w-20 h-20 rounded-lg" alt="" />
        )}
      </div>
    </div>
  );
};

export default Picture;
