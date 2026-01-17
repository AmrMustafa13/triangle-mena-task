import { z } from "zod";

export const registrationSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .min(2, "First name must be at least 2 characters"),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .min(2, "Last name must be at least 2 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"),
  companyName: z
    .string()
    .min(1, "Company name is required"),
  jobTitle: z
    .string()
    .min(1, "Job title is required"),
  companyWebsite: z
    .string()
    .min(1, "Company website is required")
    .regex(
      /^https?:\/\/[^\s/$.?#].[^\s]*$/,
      "Please enter a valid URL (e.g., https://example.com)"
    ),
  gender: z
    .string()
    .min(1, "Please select your gender"),
  hearAboutHub: z.string().optional(),
  interestedIn: z.string().optional(),
  country: z.string().optional(),
  marketingConsent: z.boolean(),
});

export type RegistrationFormData = z.infer<typeof registrationSchema>;

export function validateField(
  fieldName: keyof RegistrationFormData,
  value: string | boolean,
): string | null {
  const fieldSchema = registrationSchema.shape[fieldName];
  const result = fieldSchema.safeParse(value);

  if (!result.success && result.error) {
    const issues = result.error.issues || [];
    return issues[0]?.message || "Invalid value";
  }
  return null;
}

export function validateForm(data: RegistrationFormData): Record<string, string[]> {
  const result = registrationSchema.safeParse(data);

  if (result.success) {
    return {};
  }

  const errors: Record<string, string[]> = {};
  const issues = result.error?.issues || [];
  for (const issue of issues) {
    const field = issue.path[0] as string;
    if (!errors[field]) {
      errors[field] = [];
    }
    errors[field].push(issue.message);
  }

  return errors;
}
