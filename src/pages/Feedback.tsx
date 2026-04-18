import { useState, useEffect } from "react";
import type { ChangeEvent, FormEvent } from "react";
import "./Feedback.css";

interface FormData {
  captchaInput: string;
  name: string;
  email: string;
  feedback: string;
}

const Feedback = () => {
  const [generatedCaptcha, setGeneratedCaptcha] = useState<string>("");

  const [formData, setFormData] = useState<FormData>({
    captchaInput: "",
    name: "",
    email: "",
    feedback: "",
  });

  // Generate random captcha
  const generateCaptcha = (): void => {
    const random = Math.floor(1000 + Math.random() * 9000); // 4-digit
    setGeneratedCaptcha(random.toString());
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (
      !formData.captchaInput ||
      !formData.name ||
      !formData.email ||
      !formData.feedback
    ) {
      alert("Fill all required fields.");
      return;
    }

    if (formData.captchaInput !== generatedCaptcha) {
      alert("Invalid captcha.");
      generateCaptcha(); // regenerate on failure
      return;
    }

    alert("Feedback submitted.");

    // Implement the feedback submitted logic to be stored in a database table and also send an email notification as well.

    setFormData({
      captchaInput: "",
      name: "",
      email: "",
      feedback: "",
    });

    generateCaptcha(); // regenerate after success
  };

  return (
    <div className="feedback-container">
      <div className="feedback-header">Feedback Form</div>

      <p className="feedback-text">
        Please take your valuable time to provide feedback about this website.
      </p>
      <p className="feedback-text">
        Your feedback helps me to improve the quality of this website.
      </p>

      {/* CAPTCHA */}
      <div className="captcha-row">
        <div className="captcha-box">{generatedCaptcha}</div>
        <button type="button" onClick={generateCaptcha} className="refresh-btn">
          ↻
        </button>
      </div>
        {/* Modify this logic to include email notification and database storage later */}
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Enter the code given in the above image :</label>
          <div>
            <input
              type="text"
              name="captchaInput"
              value={formData.captchaInput}
              onChange={handleChange}
              className="small-input"
            />
            <span className="required">*</span>
          </div>
        </div>

        <div className="form-row">
          <label>Your Name :</label>
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="text-input"
            />
            <span className="required">*</span>
          </div>
        </div>

        <div className="form-row">
          <label>Your Email Address :</label>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="text-input"
            />
            <span className="required">*</span>
          </div>
        </div>

        <div className="form-row textarea-row">
          <label>Your Feedback :</label>
          <div>
            <textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              className="textarea-input"
            />
            <span className="required">*</span>
          </div>
        </div>

        <div className="button-row">
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Feedback;