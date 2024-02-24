import React from "react";

const Picture = () => {
  return (
    <div>
      <>
        <label htmlFor="picture">Picture (Optional)</label>
        <input
          placeholder="Enter your picture (Optional)"
          type="file"
          label="Picture (Optional)"
        />
      </>
    </div>
  );
};

export default Picture;
