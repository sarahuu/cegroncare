import { LuCheck } from "react-icons/lu";

const baseField =
  "w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-ink shadow-sm transition-colors placeholder:text-ink-muted/70 focus:outline-none focus:ring-2";

function fieldState(error) {
  return error
    ? "border-red-400 focus:border-red-500 focus:ring-red-100"
    : "border-line focus:border-secondary-500 focus:ring-secondary-100";
}

export function TextField({
  id,
  label,
  error,
  hint,
  required = false,
  as = "input",
  options = [],
  className = "",
  ...rest
}) {
  const describedBy = [hint ? `${id}-hint` : null, error ? `${id}-error` : null]
    .filter(Boolean)
    .join(" ");

  const shared = {
    id,
    name: rest.name ?? id,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": describedBy || undefined,
    className: `${baseField} ${fieldState(error)} ${className}`,
    ...rest,
  };

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-ink">
        {label}
        {required && (
          <span className="ml-1 text-red-600" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {hint && (
        <p id={`${id}-hint`} className="mt-1 text-xs text-ink-muted">
          {hint}
        </p>
      )}
      <div className="mt-1.5">
        {as === "textarea" ? (
          <textarea {...shared} rows={rest.rows ?? 5} />
        ) : as === "select" ? (
          <select {...shared}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input {...shared} />
        )}
      </div>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs font-medium text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

export function CheckboxField({ id, label, error, required = false, ...rest }) {
  return (
    <div>
      <div className="flex items-start gap-3">
        <input
          id={id}
          type="checkbox"
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className="mt-0.5 size-4 shrink-0 rounded border-line text-primary accent-primary"
          {...rest}
        />
        <label htmlFor={id} className="text-sm leading-relaxed text-ink-muted">
          {label}
          {required && (
            <span className="ml-1 text-red-600" aria-hidden="true">
              *
            </span>
          )}
        </label>
      </div>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs font-medium text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

export function SubmitButton({ submitting, children, ...rest }) {
  return (
    <button
      type="submit"
      disabled={submitting}
      className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-70"
      {...rest}
    >
      {submitting ? "Sending…" : children}
    </button>
  );
}

export function SuccessPanel({ title, children, onReset, resetLabel }) {
  return (
    <div
      role="status"
      className="rounded-2xl border border-accent-200 bg-accent-50 p-6"
    >
      <span className="inline-flex size-10 items-center justify-center rounded-full bg-white text-accent-800">
        <LuCheck aria-hidden="true" className="size-5" />
      </span>
      <h3 className="mt-4 text-lg font-semibold text-ink">{title}</h3>
      <div className="mt-2 space-y-2 text-sm leading-relaxed text-ink-muted">
        {children}
      </div>
      {onReset && (
        <button
          type="button"
          onClick={onReset}
          className="mt-5 inline-flex items-center gap-2 rounded-lg border border-primary-200 bg-white px-4 py-2 text-sm font-semibold text-primary transition-colors hover:border-primary-400"
        >
          {resetLabel}
        </button>
      )}
    </div>
  );
}

export function DemoNotice() {
  return (
    <p className="rounded-lg border border-secondary-200 bg-surface-tint px-3.5 py-2.5 text-xs leading-relaxed text-primary-700">
      Demo form: submissions are validated in the browser but are not sent
      anywhere. A form service or inbox will be connected before launch.
    </p>
  );
}
