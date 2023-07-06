import React, { useState } from "react";
import "../LoginPage/LoginPage.css";

const Step3 = () => {
  const [error, setError] = useState("");
  const [formVisible, setFormVisible] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const openMultiFormInNewTab = () => {
    window.open("/Step4");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      setError("Please upload a file.");
      return;
    }

    const formData = new FormData();
    formData.append("single_file", selectedFile);

    try {
      const url =
        "https://x8ki-letl-twmt.n7.xano.io/apidoc:XooRuQbs/auth/login";
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log(data);
      setFormVisible(true);
      console.log(formVisible);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="flex justify-center p-[9rem] bg-black/50 h-screen ">
      <div className="form-container h-[300px]">
        <p className="title">File Upload</p>
        <form className="form">
          <div className="input-group">
            <label htmlFor="fileUpload">Choose File</label>
            <input
              type="file"
              name="file"
              id="file"
              accept=".png,.pdf"
              placeholder=""
              onChange={handleFileUpload}
            />
          </div>

          <button className="sign my-12" onClick={handleSubmit}>
            Upload
          </button>
        </form>
        {error && (
          <div>
            <p className="grid justify-center p-4 capitalize font-bold text-xl">
              {error}
            </p>
          </div>
        )}
      </div>
      {formVisible && openMultiFormInNewTab()}
    </div>
  );
};

export default Step3;
