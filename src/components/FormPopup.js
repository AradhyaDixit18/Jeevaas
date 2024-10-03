import React from 'react';

const FormPopup = ({ closeModal }) => {
  return (
    <div className="form-popup">
      <form onSubmit={(e) => e.preventDefault()}>
        <h2>Book Your Slot</h2>
        <input type="text" name="first_name" placeholder="First Name" required />
        <input type="text" name="last_name" placeholder="Last Name" required />
        <input type="tel" name="phone" placeholder="Phone Number" required />
        <input type="text" name="issue" placeholder="Issue" required />
        <select name="doctor">
          <option value="">Select Doctor</option>
          <option value="Dr. A">Dr. A</option>
          <option value="Dr. B">Dr. B</option>
          <option value="Dr. C">Dr. C</option>
        </select>
        <button type="submit">Submit</button>
        <button type="button" onClick={closeModal} style={{ marginTop: '10px' }}>Close</button>
      </form>
    </div>
  );
};

export default FormPopup;
