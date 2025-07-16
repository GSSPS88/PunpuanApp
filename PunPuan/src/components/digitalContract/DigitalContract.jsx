import React, { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import "./digitalContract.css"; // Optional styling

const DigitalContract = () => {
  const sigCanvas = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    signatureURL: "",
  });

  const clearSignature = () => {
    sigCanvas.current.clear();
    setFormData({ ...formData, signatureURL: "" });
  };

  const saveSignature = () => {
    if (!sigCanvas.current.isEmpty()) {
      const signatureURL = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
      setFormData({ ...formData, signatureURL });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveSignature();
    if (formData.name && formData.email && sigCanvas.current && !sigCanvas.current.isEmpty()) {
      // Simulate contract submission
      console.log("Contract Signed:", formData);
      alert("Contract signed successfully!");
    } else {
      alert("Please fill all fields and sign the contract.");
    }
  };

  return (
    <div className="contract-container">
      <h2>Digital Contract Agreement</h2>

      <div className="contract-box">
        <p>
          This is a rental agreement contract between the landlord and tenant. By signing below,
          you agree to all terms and conditions mentioned in the agreement.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="contract-form">
        <input
          type="text"
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />

        <div className="signature-pad">
          <p>Please sign below:</p>
          <SignatureCanvas
            penColor="black"
            canvasProps={{ width: 400, height: 150, className: "sigCanvas" }}
            ref={sigCanvas}
          />
          <button type="button" onClick={clearSignature}>Clear</button>
        </div>

        <button type="submit" className="submit-btn">Submit Contract</button>
      </form>

      {formData.signatureURL && (
        <div className="signature-preview">
          <h4>Signature Preview:</h4>
          <img src={formData.signatureURL} alt="Signature" />
        </div>
      )}
    </div>
  );
};

export default DigitalContract;
