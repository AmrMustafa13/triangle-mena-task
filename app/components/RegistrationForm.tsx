"use client";

import { useState, useCallback } from "react";
import { VscDebugRestart } from "react-icons/vsc";
import { FormData, FormErrors, SubmitStatus } from "../types/form";
import { validateField, validateForm, RegistrationFormData } from "../utils/validation";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

const formContainerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function RegistrationForm() {
  const { t } = useLanguage();
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
    "w-full px-3 sm:px-4 py-3 sm:py-3.5 text-xs sm:text-sm border border-border-gray outline-none bg-light-gray-bg-alpha font-poppins";
  const selectClasses =
    "w-full px-3 sm:px-4 py-3 sm:py-3.5 text-xs sm:text-sm border border-border-gray outline-none bg-light-gray-bg-alpha text-gray-400 cursor-pointer font-poppins";

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={formContainerVariants}
      className="bg-light-gray-bg-alpha py-8 sm:py-10 lg:py-14 px-4 sm:px-6 lg:px-8"
    >
      {/* Header */}
      <div className="mb-4 sm:mb-6">
        <p className="text-accent-blue text-xs sm:text-sm font-bold mb-1.5 sm:mb-2">
          {t.form.dontMiss}
        </p>
        <h2 className="text-black text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
          {t.form.registerTitle}
          <br />
          {t.form.registerSubtitle}
        </h2>
      </div>

      <div className="h-px bg-border-gray my-4 sm:my-6"></div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-2.5">
        <div>
          <input
            type="text"
            name="firstName"
            placeholder={t.form.firstName}
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
            placeholder={t.form.lastName}
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
            placeholder={t.form.email}
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
            placeholder={t.form.companyName}
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
            placeholder={t.form.jobTitle}
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
            placeholder={t.form.companyWebsite}
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
              {t.form.gender}
            </option>
            <option value="male">{t.form.genderMale}</option>
            <option value="female">{t.form.genderFemale}</option>
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
              {t.form.howHeard}
            </option>
            <option value="Social Media">{t.form.howHeardSocialMedia}</option>
            <option value="Friend/Colleague">{t.form.howHeardFriend}</option>
            <option value="Event">{t.form.howHeardEvent}</option>
            <option value="Search Engine">{t.form.howHeardSearch}</option>
            <option value="News Article">{t.form.howHeardNews}</option>
            <option value="Other">{t.form.howHeardOther}</option>
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
            placeholder={t.form.interestedIn}
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
              {t.form.country}
            </option>
            <option value="UAE">{t.form.countryUAE}</option>
            <option value="Saudi Arabia">{t.form.countrySaudi}</option>
            <option value="United States">{t.form.countryUS}</option>
            <option value="United Kingdom">{t.form.countryUK}</option>
            <option value="Other">{t.form.countryOther}</option>
          </select>
          {errors.country && (
            <p className="text-red-500 text-xs mt-1">{errors.country[0]}</p>
          )}
        </div>

        {/* Marketing Consent Checkbox */}
        <div className="mt-4 sm:mt-5">
          <label className="flex items-start gap-2 sm:gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              name="marketingConsent"
              checked={formData.marketingConsent}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className="w-4 h-4 sm:w-5 sm:h-5 accent-dark-blue-accent cursor-pointer mt-0.5"
            />
            <span className="text-xs sm:text-sm text-black leading-relaxed font-poppins">
              {t.form.marketingConsent}
            </span>
          </label>
          {errors.marketingConsent && (
            <p className="text-red-500 text-xs mt-1">{errors.marketingConsent[0]}</p>
          )}
        </div>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-3 sm:px-4 py-2.5 sm:py-3 rounded text-xs sm:text-sm">
            {t.form.successMessage}
          </div>
        )}

        {submitStatus === "error" && Object.keys(errors).length === 0 && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-3 sm:px-4 py-2.5 sm:py-3 rounded text-xs sm:text-sm">
            {t.form.errorMessage}
          </div>
        )}

        {/* Submit and Clear */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-8 lg:gap-32 mt-5 sm:mt-6">
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 bg-accent-blue text-white py-3.5 sm:py-4 lg:py-5 px-6 sm:px-12 lg:px-20 text-xs sm:text-sm font-bold"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.15 }}
          >
            {isSubmitting ? t.form.submitting : t.form.submit}
          </motion.button>
          <motion.button
            type="button"
            onClick={clearForm}
            disabled={isSubmitting}
            className="flex items-center justify-center sm:justify-start gap-2 sm:gap-2.5 text-black text-xs sm:text-sm whitespace-nowrap font-poppins py-2 sm:py-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.15 }}
          >
            <VscDebugRestart className="w-4 h-4 sm:w-5 sm:h-5 rotate-45" color="var(--dark-blue-accent)" />
            {t.form.clearForm}
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
}
