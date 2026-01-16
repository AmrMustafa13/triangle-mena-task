"use client";

import { useState } from "react";
import { VscDebugRestart } from "react-icons/vsc";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  jobTitle: string;
  companyWebsite: string;
  gender: string;
  hearAboutHub: string;
  interestedIn: string;
  country: string;
  marketingConsent: boolean;
}

interface FormErrors {
  [key: string]: string[];
}

export default function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    jobTitle: "",
    companyWebsite: "",
    gender: "",
    hearAboutHub: "",
    interestedIn: "",
    country: "",
    marketingConsent: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrors({});

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            companyName: formData.companyName,
            jobTitle: formData.jobTitle,
            companyWebsite: formData.companyWebsite,
            gender: formData.gender,
            hearAboutHub: formData.hearAboutHub,
            interestedIn: formData.interestedIn,
            country: formData.country,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 422 && data.errors) {
          setErrors(data.errors);
        }
        setSubmitStatus("error");
        return;
      }

      if (data.success) {
        setSubmitStatus("success");
        clearForm();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      companyName: "",
      jobTitle: "",
      companyWebsite: "",
      gender: "",
      hearAboutHub: "",
      interestedIn: "",
      country: "",
      marketingConsent: false,
    });
    setErrors({});
    setSubmitStatus("idle");
  };

  const inputClasses =
    "w-full px-4 py-3.5 text-sm border border-[#D9D9D9] outline-none bg-[#EFF1F57A]";
  const selectClasses =
    "w-full px-4 py-3.5 text-sm border border-[#D9D9D9] outline-none bg-[#EFF1F57A] text-gray-400 cursor-pointer";

  return (
    <div className="bg-[#EFF1F57A] py-14 px-8">
      {/* Header */}
      <div className="mb-6">
        <p className="text-[#0048FF] text-sm font-bold mb-2">
          DON&apos;T MISS UPCOMING SESSIONS
        </p>
        <h2 className="text-black text-4xl font-bold leading-tight">
          Register
          <br />
          Your Interest Now
        </h2>
      </div>

      <div className="h-px bg-[#D9D9D9] my-6"></div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-2.5">
        <div>
          <input
            type="text"
            name="firstName"
            placeholder="First Name *"
            value={formData.firstName}
            onChange={handleInputChange}
            className={`${inputClasses} ${errors.firstName ? "border-red-500" : ""}`}
            required
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs mt-1">{errors.firstName[0]}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name *"
            value={formData.lastName}
            onChange={handleInputChange}
            className={`${inputClasses} ${errors.lastName ? "border-red-500" : ""}`}
            required
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs mt-1">{errors.lastName[0]}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={handleInputChange}
            className={`${inputClasses} ${errors.email ? "border-red-500" : ""}`}
            required
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email[0]}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            name="companyName"
            placeholder="Company Name *"
            value={formData.companyName}
            onChange={handleInputChange}
            className={`${inputClasses} ${errors.companyName ? "border-red-500" : ""}`}
            required
          />
          {errors.companyName && (
            <p className="text-red-500 text-xs mt-1">{errors.companyName[0]}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            name="jobTitle"
            placeholder="Job Title *"
            value={formData.jobTitle}
            onChange={handleInputChange}
            className={`${inputClasses} ${errors.jobTitle ? "border-red-500" : ""}`}
            required
          />
          {errors.jobTitle && (
            <p className="text-red-500 text-xs mt-1">{errors.jobTitle[0]}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            name="companyWebsite"
            placeholder="Company Website *"
            value={formData.companyWebsite}
            onChange={handleInputChange}
            className={`${inputClasses} ${errors.companyWebsite ? "border-red-500" : ""}`}
            required
          />
          {errors.companyWebsite && (
            <p className="text-red-500 text-xs mt-1">
              {errors.companyWebsite[0]}
            </p>
          )}
        </div>

        <div>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className={`${selectClasses} ${errors.gender ? "border-red-500" : ""}`}
            required
          >
            <option value="" disabled>
              Gender *
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && (
            <p className="text-red-500 text-xs mt-1">{errors.gender[0]}</p>
          )}
        </div>

        <div>
          <select
            name="hearAboutHub"
            value={formData.hearAboutHub}
            onChange={handleInputChange}
            className={`${selectClasses} ${errors.hearAboutHub ? "border-red-500" : ""}`}
          >
            <option value="" disabled>
              How did you hear about Hub71
            </option>
            <option value="Social Media">Social Media</option>
            <option value="Friend/Colleague">Friend/Colleague</option>
            <option value="Event">Event</option>
            <option value="Search Engine">Search Engine</option>
            <option value="News Article">News Article</option>
            <option value="Other">Other</option>
          </select>
          {errors.hearAboutHub && (
            <p className="text-red-500 text-xs mt-1">
              {errors.hearAboutHub[0]}
            </p>
          )}
        </div>

        <div>
          <input
            type="text"
            name="interestedIn"
            placeholder="Interested In"
            value={formData.interestedIn}
            onChange={handleInputChange}
            className={`${inputClasses} ${errors.interestedIn ? "border-red-500" : ""}`}
          />
          {errors.interestedIn && (
            <p className="text-red-500 text-xs mt-1">
              {errors.interestedIn[0]}
            </p>
          )}
        </div>

        <div>
          <select
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            className={`${selectClasses} ${errors.country ? "border-red-500" : ""}`}
          >
            <option value="" disabled>
              Country of residence
            </option>
            <option value="UAE">United Arab Emirates</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Other">Other</option>
          </select>
          {errors.country && (
            <p className="text-red-500 text-xs mt-1">{errors.country[0]}</p>
          )}
        </div>

        {/* Marketing Consent Checkbox */}
        <label className="flex items-start gap-2.5 cursor-pointer mt-5">
          <input
            type="checkbox"
            name="marketingConsent"
            checked={formData.marketingConsent}
            onChange={handleInputChange}
            className="w-5 h-5 accent-[#0026AB] cursor-pointer"
          />
          <span className="text-sm text-black leading-relaxed">
            I agree to receive marketing emails and communications from Hub71
          </span>
        </label>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded text-sm">
            Thank you! Your registration has been submitted successfully.
          </div>
        )}

        {submitStatus === "error" && Object.keys(errors).length === 0 && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded text-sm">
            Something went wrong. Please try again.
          </div>
        )}

        {/* Submit and Clear */}
        <div className="flex items-center gap-32 mt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 bg-[#0048FF] text-white py-5 px-20 text-sm font-bold"
          >
            {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
          </button>
          <button
            type="button"
            onClick={clearForm}
            disabled={isSubmitting}
            className="flex items-center gap-2.5 text-black text-sm text-nowrap"
          >
            <VscDebugRestart size={20} color="#0026AB" className="rotate-45" />
            Clear Form
          </button>
        </div>
      </form>
    </div>
  );
}
