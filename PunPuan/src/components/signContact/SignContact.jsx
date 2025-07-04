import React, { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import './signContact.css';

const SignContract = () => {
  const sigPad = useRef(null);
  const [name, setName] = useState('');
  const [signed, setSigned] = useState(false);
  const [signatureURL, setSignatureURL] = useState(null);

  const clearSignature = () => {
    sigPad.current.clear();
    setSignatureURL(null);
  };

  const handleSubmit = () => {
    if (!name.trim()) {
      alert('Please enter your full name');
      return;
    }
    if (sigPad.current.isEmpty()) {
      alert('Please provide your signature');
      return;
    }

    const signatureData = sigPad.current.getTrimmedCanvas().toDataURL('image/png');
    setSignatureURL(signatureData);
    setSigned(true);

    // Here you can send `name` and `signatureData` to your backend
    console.log('Signed by:', name);
    console.log('Signature image:', signatureData);
  };

  return (
    <div className="contract-container">
      <h2>Digital Contract</h2>
      <div className="contract-text">
        <p>
          By signing this agreement, you agree to the terms and conditions
          outlined in the contract. This digital signature is legally binding.
        </p>
      </div>

      <input
        type="text"
        placeholder="Enter your full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="name-input"
      />

      <h4>Sign below:</h4>
      <SignatureCanvas
        penColor="black"
        canvasProps={{ className: 'signature-canvas' }}
        ref={sigPad}
      />
      <div className="button-group">
        <button onClick={clearSignature}>Clear</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>

      {signed && signatureURL && (
        <div className="signed-preview">
          <h4>Signature Preview</h4>
          <p>Name: {name}</p>
          <img src={signatureURL} alt="Signature" />
        </div>
      )}
    </div>
  );
};

export default SignContract;
