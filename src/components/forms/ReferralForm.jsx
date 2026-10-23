import { useState } from "react";
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
  referrerName: "",
  organisation: "",
  role: "",
  phone: "",
  email: "",
  referralType: "adult-homecare",
  urgency: "routine",
  clientInitials: "",
  ageBand: "18-64",
  postcode: "",
  needs: "",
  consent: false,
};

const rules = {
  referrerName: [requiredRule("Please add the referrer's name.")],
  organisation: [requiredRule("Please add your organisation.")],
  phone: [
    requiredRule("A contact number helps us respond quickly."),
    phoneRule("Please use a valid phone number."),
  ],
  email: [
    requiredRule("Please add a contact email."),
    emailRule("That email address does not look right."),
  ],
  clientInitials: [requiredRule("Use initials or a reference for the client.")],
  needs: [requiredRule("Please summarise the support needed.")],
  consent: [
    (value) =>
      value
        ? null
        : "Please confirm you have consent to share these details.",
  ],
};

export default function ReferralForm() {
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
      focusFirstError(nextErrors, "referral");
      return;
    }
    setStatus("submitting");
    window.setTimeout(() => setStatus("success"), 700);
  };

  if (status === "success") {
    return (
      <SuccessPanel
        title="Referral received (demo)."
        onReset={() => {
          setValues(initialValues);
          setStatus("idle");
        }}
        resetLabel="Start another referral"
      >
        <p>
          In a live site, the referral would be sent to the coordination team
          with the urgency you selected.
        </p>
        <p>
          For urgent referrals, call{" "}
          <a
            href={site.phoneHref}
            className="font-semibold text-primary underline decoration-accent underline-offset-4"
          >
            {site.phone}
          </a>
          .
        </p>
        <p className="text-xs">Demo only — no referral has been sent.</p>
      </SuccessPanel>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <fieldset className="space-y-5">
        <legend className="text-eyebrow uppercase text-secondary-700">
          About you
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <TextField
            id="referral-referrerName"
            name="referrerName"
            label="Referrer name"
            autoComplete="name"
            required
            value={values.referrerName}
            onChange={update}
            error={errors.referrerName}
          />
          <TextField
            id="referral-organisation"
            name="organisation"
            label="Organisation"
            autoComplete="organization"
            required
            value={values.organisation}
            onChange={update}
            error={errors.organisation}
          />
          <TextField
            id="referral-role"
            name="role"
            label="Role or job title"
            value={values.role}
            onChange={update}
          />
          <TextField
            id="referral-phone"
            name="phone"
            label="Phone"
            type="tel"
            autoComplete="tel"
            required
            value={values.phone}
            onChange={update}
            error={errors.phone}
          />
          <TextField
            id="referral-email"
            name="email"
            label="Email"
            type="email"
            autoComplete="email"
            required
            className="sm:col-span-2"
            value={values.email}
            onChange={update}
            error={errors.email}
          />
        </div>
      </fieldset>

      <fieldset className="space-y-5 border-t border-line pt-5">
        <legend className="text-eyebrow uppercase text-secondary-700">
          About the referral
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <TextField
            id="referral-referralType"
            name="referralType"
            label="Service"
            as="select"
            value={values.referralType}
            onChange={update}
            options={[
              { value: "adult-homecare", label: "Adult Homecare" },
              {
                value: "children-and-young-people",
                label: "Children & Young People",
              },
              { value: "not-sure", label: "Not sure / advice needed" },
            ]}
          />
          <TextField
            id="referral-urgency"
            name="urgency"
            label="Urgency"
            as="select"
            value={values.urgency}
            onChange={update}
            options={[
              { value: "routine", label: "Routine" },
              { value: "soon", label: "Within five working days" },
              { value: "urgent", label: "Urgent" },
            ]}
          />
          <TextField
            id="referral-clientInitials"
            name="clientInitials"
            label="Client initials or reference"
            hint="Please do not include the person's full name."
            required
            value={values.clientInitials}
            onChange={update}
            error={errors.clientInitials}
          />
          <TextField
            id="referral-ageBand"
            name="ageBand"
            label="Age band"
            as="select"
            value={values.ageBand}
            onChange={update}
            options={[
              { value: "0-17", label: "0–17" },
              { value: "18-64", label: "18–64" },
              { value: "65+", label: "65+" },
            ]}
          />
          <TextField
            id="referral-postcode"
            name="postcode"
            label="Postcode"
            autoComplete="postal-code"
            className="sm:col-span-2"
            value={values.postcode}
            onChange={update}
          />
        </div>

        <TextField
          id="referral-needs"
          name="needs"
          label="Summary of care needs"
          as="textarea"
          rows={5}
          required
          hint="Include what support is needed, when it should start and any known risks."
          value={values.needs}
          onChange={update}
          error={errors.needs}
        />
      </fieldset>

      <CheckboxField
        id="referral-consent"
        name="consent"
        required
        checked={values.consent}
        onChange={update}
        error={errors.consent}
        label="I confirm the person (or their representative) has given consent for these details to be shared with Cegron Care."
      />

      <DemoNotice />

      <SubmitButton submitting={status === "submitting"}>
        Send referral
      </SubmitButton>
    </form>
  );
}
