const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phonePattern = /^[0-9+()\s-]{7,20}$/;

export const isRequired = (value) => String(value ?? "").trim().length > 0;

export const isEmail = (value) => emailPattern.test(String(value ?? "").trim());

export const isPhone = (value) => phonePattern.test(String(value ?? "").trim());

export function validateFields(values, rules) {
  const errors = {};
  for (const [field, checks] of Object.entries(rules)) {
    for (const check of checks) {
      const error = check(values[field], values);
      if (error) {
        errors[field] = error;
        break;
      }
    }
  }
  return errors;
}

export const requiredRule = (message) => (value) =>
  isRequired(value) ? null : message;

export const emailRule = (message) => (value) =>
  !isRequired(value) || isEmail(value) ? null : message;

export const phoneRule = (message) => (value) =>
  !isRequired(value) || isPhone(value) ? null : message;

export function focusFirstError(errors, prefix) {
  const [first] = Object.keys(errors);
  if (!first) return;
  const field = document.getElementById(`${prefix}-${first}`);
  field?.focus();
  field?.scrollIntoView({ block: "center", behavior: "smooth" });
}
