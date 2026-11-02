import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CheckboxField,
  DemoNotice,
  SuccessPanel,
  SubmitButton,
  TextField,
} from "./fields";
import {
  emailRule,
  focusFirstError,
  phoneRule,
  requiredRule,
  validateFields,
} from "../../lib/validation";
import { site } from "../../data/site";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  relationship: "myself",
  service: "not-sure",
  message: "",
  consent: false,
};

const rules = {
  name: [requiredRule("Please tell us your name.")],
  email: [
    requiredRule("Please add an email address so we can reply."),
    emailRule("That email address does not look right."),
  ],
  phone: [phoneRule("Please use a valid phone number, or leave this blank.")],
  message: [
    requiredRule("Please tell us a little about the support you need."),
  ],
  consent: [
    (value) =>
      value ? null : "Please confirm we may contact you about this enquiry.",
  ],
};

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const update = (event) => {
    const { name, value, type, checked } = event.target;
    setValues((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validateFields(values, rules);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      focusFirstError(nextErrors, "contact");
      return;
    }
    setStatus("submitting");
    window.setTimeout(() => setStatus("success"), 700);
  };

  if (status === "success") {
    return (
      <SuccessPanel
        title="Thank you for getting in touch."
        onReset={() => {
          setValues(initialValues);
          setStatus("idle");
        }}
        resetLabel="Send another enquiry"
      >
        <p>
          In a live site this would now be with our team, who would reply during
          office hours.
        </p>
        <p>
          If something is urgent, please call{" "}
          <a
            href={site.phoneHref}
            className="font-semibold text-primary underline decoration-accent underline-offset-4"
          >
            {site.phone}
          </a>
          .
        </p>
        <p className="text-xs">Demo only — no message has been sent.</p>
      </SuccessPanel>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          id="contact-name"
          name="name"
          label="Your name"
          autoComplete="name"
          required
          value={values.name}
          onChange={update}
          error={errors.name}
        />
        <TextField
          id="contact-phone"
          name="phone"
          label="Phone number"
          type="tel"
          autoComplete="tel"
          value={values.phone}
          onChange={update}
          error={errors.phone}
        />
      </div>

      <TextField
        id="contact-email"
        name="email"
        label="Email address"
        type="email"
        autoComplete="email"
        required
        value={values.email}
        onChange={update}
        error={errors.email}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          id="contact-relationship"
          name="relationship"
          label="Who is the enquiry for?"
          as="select"
          value={values.relationship}
          onChange={update}
          options={[
            { value: "myself", label: "Myself" },
            { value: "family", label: "A family member or friend" },
            { value: "professional", label: "I am a professional" },
            { value: "other", label: "Something else" },
          ]}
        />
        <TextField
          id="contact-service"
          name="service"
          label="Service of interest"
          as="select"
          value={values.service}
          onChange={update}
          options={[
            { value: "not-sure", label: "Not sure yet" },
            { value: "adult-homecare", label: "Adult Homecare" },
            {
              value: "children-and-young-people",
              label: "Children & Young People",
            },
          ]}
        />
      </div>

      <TextField
        id="contact-message"
        name="message"
        label="How can we help?"
        as="textarea"
        rows={5}
        required
        value={values.message}
        onChange={update}
        error={errors.message}
        hint="Please avoid sharing sensitive medical details in this form."
      />

      <CheckboxField
        id="contact-consent"
        name="consent"
        required
        checked={values.consent}
        onChange={update}
        error={errors.consent}
        label={
          <>
            I agree that Cegron Care may contact me about this enquiry. See our{" "}
            <Link
              to="/privacy"
              className="font-medium text-primary underline decoration-accent underline-offset-4"
            >
              privacy policy
            </Link>
            .
          </>
        }
      />

      <DemoNotice />

      <SubmitButton submitting={status === "submitting"}>
        Send enquiry
      </SubmitButton>
    </form>
  );
}
