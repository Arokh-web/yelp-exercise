import React from "react";

const Contact = () => {
  return (
    <div className="font-mono w-auto p-8">
      <p className="m-4">Contact</p>
      <div className="join">
        <input className="input join-item" placeholder="Email" />
        <button className="btn join-item rounded-r-full">
          Subscribe to our Newsletter
        </button>
      </div>
    </div>
  );
};

export default Contact;
