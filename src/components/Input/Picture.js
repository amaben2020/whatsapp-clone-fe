import React, { useState } from "react";

const Picture = ({ setReadablePicture, setPicture, readablePicture }) => {
  const [error, setError] = useState("");
  const handlePicture = (e) => {
    try {
      const imageFile = e.target.files[0];
      if (imageFile) {
        setPicture(imageFile);
        setError("");
      }

      const reader = new FileReader(); // asynchronously read the contents of files (or raw data buffers) stored on the user's computer

      // max size is greater than 5mb
      if (imageFile.size > 1024 * 1024 * 2) {
        setError("File must be less than 5mb");
        setReadablePicture("");
        setPicture({});
        return;
      }

      if (imageFile && imageFile.type.match("image.*")) {
        reader.readAsDataURL(imageFile);
        reader.onload = (e) => {
          setReadablePicture(e.target?.result);
          setError("");
        };
      }
    } catch (error) {
      console.log(error);
      setError("Something went wrong");
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
        {error.length > 0 && <p className="text-red-500"> {error}</p>}
        {readablePicture && (
          <div className="relative border">
            <img
              src={readablePicture}
              className="w-[300px] h-[200px] rounded-lg mx-auto shadow-lg"
              alt="img"
            />

            <button className="absolute z-10 p-2 rounded-full right-[110px] -top-3 bg-red-300">
              🗑️
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Picture;
