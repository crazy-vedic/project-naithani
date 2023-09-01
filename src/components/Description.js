import React, { useState, useRef} from 'react';
import './Description.css'

function DescriptionAndContact() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const buttonRef = useRef(null); // Ref for the "Contact Us" button

  const formStyle = {};
  if (buttonRef.current) {
    const rect = buttonRef.current.getBoundingClientRect();
    formStyle.top = `${rect.top}px`;
    formStyle.left = `${rect.left}px`;
  }

  return (
    <div className="description-container">
      <div className="contact-info">
        <p>
        <p>
          To place an order or for any queries, please contact us at:
          <br />
          Phone: +1-234-567-8901
          <br />
          Email: contact@averytime.com
        </p>
        </p>
        <button ref={buttonRef} onClick={() => setIsFormVisible(true)}>
          Contact Us
        </button>
      </div>

      {isFormVisible && (
        <div className="overlay" onClick={() => setIsFormVisible(false)}>
          <div className="modal-form" style={formStyle} onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setIsFormVisible(false)}>X</button>
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
