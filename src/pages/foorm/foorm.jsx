import React from 'react';
import './foorm.css'; // Import the CSS file

const Foorm = () => {
  return (
    <div>
      {/* Contact Us Section */}
      <div className="contact-us">
        <h2>Contact Us</h2>
        <form className="space-y-6">
          {/* Name Field */}
          <div>
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          {/* Phone Number Field */}
          <div>
            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Inquiry Type Field */}
          <div>
            <label>Inquiry Type</label>
            <select>
              <option>Select a type</option>
              <option>General Inquiry</option>
              <option>Partner with Us</option>
              <option>Feedback</option>
              <option>Support</option>
            </select>
          </div>

          {/* Message Field */}
          <div>
            <label>Message</label>
            <textarea
              rows="5"
              placeholder="Write your message here"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Foorm;
