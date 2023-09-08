import React, { useState, useEffect } from 'react';
import './Description.css';

function DescriptionAndContact() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formPosition, setFormPosition] = useState({ top: 0, left: 0 });

  // Function to calculate the form position
  const calculateFormPosition = () => {
    const button = document.querySelector('.contact-button');
    if (button) {
      const rect = button.getBoundingClientRect();
      setFormPosition({
        top: `${rect.bottom}px`,
        left: `${rect.left}px`,
      });
    }
  };

  // Effect to calculate form position when the component is mounted or isFormVisible changes
  useEffect(() => {
    if (isFormVisible) {
      calculateFormPosition();
    }
  }, [isFormVisible]);

  return (
    <div className="description-container">
      <div className="contact-info">
        <p>
          To place an order or for any queries, please contact us at:
          <br />
          Phone: +1-234-567-8901
          <br />
          Email: contact@averytime.com
        </p>
        <button
          className="contact-button"
          onClick={() => setIsFormVisible(true)}
        >
          Contact Us
        </button>
      </div>

      {isFormVisible && (
        <div
          className="overlay"
          onClick={() => setIsFormVisible(false)}
        >
          <div
            className="modal-form"
            style={formPosition}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setIsFormVisible(false)}
            >
              X
            </button>
            <form>
              <label>
                Email:
                <input type="email" name="email" required />
              </label>
              <label>
                Phone:
                <input type="tel" name="phone" required />
              </label>
              <label>
                Description:
                <textarea name="description" rows="4" required></textarea>
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}

      <p>Please let us know your information phone number:</p>
    </div>
  );
}

export default DescriptionAndContact;
