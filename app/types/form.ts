export interface FormData {
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

export interface FormErrors {
  [key: string]: string[];
}

export type SubmitStatus = "idle" | "success" | "error";
