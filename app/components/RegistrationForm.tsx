"use client";

import { useState, useCallback } from "react";
import { VscDebugRestart } from "react-icons/vsc";
import { FormData, FormErrors, SubmitStatus } from "../types/form";
import { validateField, validateForm, RegistrationFormData } from "../utils/validation";

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
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateSingleField = useCallback(
    (name: string, value: string | boolean) => {
      const error = validateField(name as keyof RegistrationFormData, value);
      setErrors((prev) => {
        if (error) {
          return { ...prev, [name]: [error] };
        }
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    },
    []
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    const newValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    // Validate on change only if the field has been touched
    if (touched[name]) {
      validateSingleField(name, newValue);
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const fieldValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    // Mark field as touched
    setTouched((prev) => ({ ...prev, [name]: true }));

    // Validate on blur
    validateSingleField(name, fieldValue);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched: Record<string, boolean> = {};
    Object.keys(formData).forEach((key) => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    // Validate all fields before submitting
    const validationErrors = validateForm(formData as RegistrationFormData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

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
    setTouched({});
    setSubmitStatus("idle");
  };

  const inputClasses =
    "w-full px-4 py-3.5 text-sm border border-border-gray outline-none bg-light-gray-bg-alpha font-poppins";
  const selectClasses =
    "w-full px-4 py-3.5 text-sm border border-border-gray outline-none bg-light-gray-bg-alpha text-gray-400 cursor-pointer font-poppins";

  return (
    <div className="bg-light-gray-bg-alpha py-14 px-8">
      {/* Header */}
      <div className="mb-6">
        <p className="text-accent-blue text-sm font-bold mb-2">
          DON&apos;T MISS UPCOMING SESSIONS
        </p>
        <h2 className="text-black text-4xl font-bold leading-tight">
          Register
          <br />
          Your Interest Now
        </h2>
      </div>

      <div className="h-px bg-border-gray my-6"></div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-2.5">
        <div>
          <input
            type="text"
            name="firstName"
            placeholder="First Name *"
            value={formData.firstName}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={`${inputClasses} ${errors.firstName ? "border-red-500" : ""}`}
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
            onBlur={handleBlur}
            className={`${inputClasses} ${errors.lastName ? "border-red-500" : ""}`}
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
            onBlur={handleBlur}
            className={`${inputClasses} ${errors.email ? "border-red-500" : ""}`}
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
            onBlur={handleBlur}
            className={`${inputClasses} ${errors.companyName ? "border-red-500" : ""}`}
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
            onBlur={handleBlur}
            className={`${inputClasses} ${errors.jobTitle ? "border-red-500" : ""}`}
          />
          {errors.jobTitle && (
            <p className="text-red-500 text-xs mt-1">{errors.jobTitle[0]}</p>
          )}
        </div>

        <div>
          <input
            type="url"
            name="companyWebsite"
            placeholder="Company Website *"
            value={formData.companyWebsite}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={`${inputClasses} ${errors.companyWebsite ? "border-red-500" : ""}`}
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
            onBlur={handleBlur}
            className={`${selectClasses} ${errors.gender ? "border-red-500" : ""}`}
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
            onBlur={handleBlur}
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
            onBlur={handleBlur}
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
            onBlur={handleBlur}
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
        <div className="mt-5">
          <label className="flex items-start gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              name="marketingConsent"
              checked={formData.marketingConsent}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className="w-5 h-5 accent-dark-blue-accent cursor-pointer"
            />
            <span className="text-sm text-black leading-relaxed font-poppins">
              I agree to receive marketing emails and communications from Hub71 *
            </span>
          </label>
          {errors.marketingConsent && (
            <p className="text-red-500 text-xs mt-1">{errors.marketingConsent[0]}</p>
          )}
        </div>

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
            className="flex-1 bg-accent-blue text-white py-5 px-20 text-sm font-bold"
          >
            {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
          </button>
          <button
            type="button"
            onClick={clearForm}
            disabled={isSubmitting}
            className="flex items-center gap-2.5 text-black text-sm text-nowrap font-poppins"
          >
            <VscDebugRestart size={20} color="var(--dark-blue-accent)" className="rotate-45" />
            Clear Form
          </button>
        </div>
      </form>
    </div>
  );
}
