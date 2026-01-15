"use client";

import { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  jobTitle: string;
  companyWebsite: string;
  iAmA: string;
  howDidYouHear: string;
  interestedIn: string;
  countryOfResidence: string;
  marketingConsent: boolean;
}

const RefreshIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 8A6 6 0 1 1 8 2" stroke="#666666" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M8 2L10 4L8 6" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    jobTitle: "",
    companyWebsite: "",
    iAmA: "",
    howDidYouHear: "",
    interestedIn: "",
    countryOfResidence: "",
    marketingConsent: true,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const clearForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      companyName: "",
      jobTitle: "",
      companyWebsite: "",
      iAmA: "",
      howDidYouHear: "",
      interestedIn: "",
      countryOfResidence: "",
      marketingConsent: false,
    });
  };

  const inputClasses = "w-full px-4 py-3 text-sm border border-gray-200 rounded focus:outline-none focus:border-[#00A651] transition-colors bg-white";
  const selectClasses = "w-full px-4 py-3 text-sm border border-gray-200 rounded focus:outline-none focus:border-[#00A651] transition-colors bg-white text-gray-500 cursor-pointer";

  return (
    <div className="bg-[#F5F5F5] rounded-lg p-8">
      {/* Header */}
      <div className="mb-6">
        <p className="text-[#00A651] text-xs font-bold tracking-wider mb-2">
          DON&apos;T MISS UPCOMING SESSIONS
        </p>
        <h2 className="text-[#1A2B4A] text-2xl font-bold leading-tight">
          Register<br />Your Interest Now
        </h2>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name *"
          value={formData.firstName}
          onChange={handleInputChange}
          className={inputClasses}
          required
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name *"
          value={formData.lastName}
          onChange={handleInputChange}
          className={inputClasses}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address *"
          value={formData.email}
          onChange={handleInputChange}
          className={inputClasses}
          required
        />

        <input
          type="text"
          name="companyName"
          placeholder="Company Name *"
          value={formData.companyName}
          onChange={handleInputChange}
          className={inputClasses}
          required
        />

        <input
          type="text"
          name="jobTitle"
          placeholder="Job Title *"
          value={formData.jobTitle}
          onChange={handleInputChange}
          className={inputClasses}
          required
        />

        <input
          type="text"
          name="companyWebsite"
          placeholder="Company Website *"
          value={formData.companyWebsite}
          onChange={handleInputChange}
          className={inputClasses}
          required
        />

        <select
          name="iAmA"
          value={formData.iAmA}
          onChange={handleInputChange}
          className={selectClasses}
          required
        >
          <option value="" disabled>I am a *</option>
          <option value="startup">Startup Founder</option>
          <option value="investor">Investor</option>
          <option value="corporate">Corporate Representative</option>
          <option value="other">Other</option>
        </select>

        <select
          name="howDidYouHear"
          value={formData.howDidYouHear}
          onChange={handleInputChange}
          className={selectClasses}
        >
          <option value="" disabled>How did you hear about Hub71</option>
          <option value="social">Social Media</option>
          <option value="friend">Friend/Colleague</option>
          <option value="event">Event</option>
          <option value="search">Search Engine</option>
          <option value="news">News Article</option>
          <option value="other">Other</option>
        </select>

        <input
          type="text"
          name="interestedIn"
          placeholder="Interested In"
          value={formData.interestedIn}
          onChange={handleInputChange}
          className={inputClasses}
        />

        <select
          name="countryOfResidence"
          value={formData.countryOfResidence}
          onChange={handleInputChange}
          className={selectClasses}
        >
          <option value="" disabled>Country of residence</option>
          <option value="ae">United Arab Emirates</option>
          <option value="sa">Saudi Arabia</option>
          <option value="us">United States</option>
          <option value="uk">United Kingdom</option>
          <option value="other">Other</option>
        </select>

        {/* Marketing Consent Checkbox */}
        <label className="flex items-start gap-3 cursor-pointer mt-4">
          <input
            type="checkbox"
            name="marketingConsent"
            checked={formData.marketingConsent}
            onChange={handleInputChange}
            className="mt-1 w-4 h-4 accent-[#00A651] cursor-pointer"
          />
          <span className="text-xs text-gray-600 leading-relaxed">
            I agree to receive marketing emails and communications from Hub71
          </span>
        </label>

        {/* Submit and Clear */}
        <div className="flex items-center gap-4 mt-6">
          <button
            type="submit"
            className="flex-1 bg-[#1A2B4A] text-white py-3.5 px-8 text-sm font-semibold rounded hover:bg-[#0f1a2e] transition-colors"
          >
            SUBMIT
          </button>
          <button
            type="button"
            onClick={clearForm}
            className="flex items-center gap-2 text-gray-500 text-sm hover:text-gray-700 transition-colors"
          >
            <RefreshIcon />
            Clear Form
          </button>
        </div>
      </form>
    </div>
  );
}
