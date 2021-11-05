import React from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const [file, setFile] = React.useState(null);
  const [error, setError] = React.useState(null);
  const allowedFileTypes = ["image/jpeg", "image/png", "image/heic"];

  const handleChange = (e) => {
    let selected = e.target.files[0];
    if (selected && allowedFileTypes.includes(selected.type)) {
      setFile(selected);
      setError(null);
    } else {
      setFile(null);
      setError("Please select an image file (jpg or png)");
    }
    console.log(selected);
  };

  return (
    <form>
      <label>
        <input type='file' onChange={handleChange} />
        <span>+</span>
      </label>
      <div className='output'>
        {error && <div className='error'>{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
