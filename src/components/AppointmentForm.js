import { useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Icon from "./Icon";
import { services } from "../data/content";
import { doctors } from "../data/content";
import { site, links } from "../config/site";
import { sendAppointment } from "../lib/appointment";

const APPOINTMENT_TYPES = [
  "New Consultation",
  "Follow-up Visit",
  "Routine Check-up & Cleaning",
  "Emergency / Urgent Care",
];

const TIME_SLOTS = [
  "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM",
  "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM",
];

const STEPS = ["Patient Details", "Appointment", "Review", "Done"];

const todayStr = () => {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
};

// --- Validators ------------------------------------------------------------
const isIndianPhone = (v) => /^(\+?91[-\s]?)?[6-9]\d{9}$/.test(v.replace(/[\s-]/g, ""));
const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export default function AppointmentForm() {
  const [params] = useSearchParams();
  const preselect = params.get("service") || "";
  const preselectTitle =
    services.find((s) => s.slug === preselect)?.title || "";

  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null); // { ok, reference } | { error: true }
  const [errors, setErrors] = useState({});
  const submittedRef = useRef(false); // hard guard against double submit

  const [form, setForm] = useState({
    patient_name: "",
    phone: "",
    email: "",
    age: "",
    department: preselectTitle,
    doctor: "",
    appointment_date: "",
    appointment_time: "",
    appointment_type: "New Consultation",
    message: "",
  });

  const min = useMemo(todayStr, []);

  const set = (name) => (e) => {
    setForm((f) => ({ ...f, [name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validateStep = (s) => {
    const e = {};
    if (s === 0) {
      if (!form.patient_name.trim() || form.patient_name.trim().length < 2)
        e.patient_name = "Please enter the patient's full name.";
      if (!form.phone.trim()) e.phone = "A phone number is required.";
      else if (!isIndianPhone(form.phone))
        e.phone = "Enter a valid 10-digit Indian mobile number.";
      if (!form.email.trim()) e.email = "An email address is required.";
      else if (!isEmail(form.email)) e.email = "Enter a valid email address.";
      if (form.age && (Number(form.age) < 0 || Number(form.age) > 120))
        e.age = "Enter a valid age.";
    }
    if (s === 1) {
      if (!form.department) e.department = "Please choose a department.";
      if (!form.appointment_date)
        e.appointment_date = "Please choose a preferred date.";
      else if (form.appointment_date < min)
        e.appointment_date = "Please choose today or a future date.";
      if (!form.appointment_time)
        e.appointment_time = "Please choose a preferred time.";
      if (!form.appointment_type)
        e.appointment_type = "Please choose an appointment type.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (validateStep(step)) setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const submit = async () => {
    if (submittedRef.current || submitting) return; // double-submit guard
    if (!validateStep(0) || !validateStep(1)) {
      setStep(0);
      return;
    }
    submittedRef.current = true;
    setSubmitting(true);
    setResult(null);
    try {
      const res = await sendAppointment(form);
      setResult(res);
      setStep(3);
      setForm((f) => ({
        // clear identifying details after success
        ...f,
        patient_name: "",
        phone: "",
        email: "",
        age: "",
        message: "",
      }));
    } catch (err) {
      if (process.env.NODE_ENV === "development") {
        // eslint-disable-next-line no-console
        console.error("Appointment submission failed:", err);
      }
      setResult({ error: true });
      submittedRef.current = false; // allow retry
    } finally {
      setSubmitting(false);
    }
  };

  // --- Success screen -------------------------------------------------------
  if (step === 3 && result?.ok) {
    return (
      <div className="rounded-3xl bg-white p-8 text-center shadow-card ring-1 ring-ink-100 sm:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-teal-600">
          <Icon name="check" className="h-8 w-8" />
        </div>
        <h3 className="mt-6 text-2xl font-bold text-ink-900">
          Appointment Request Received
        </h3>
        <p className="mx-auto mt-3 max-w-md text-ink-600">
          Your appointment request has been submitted successfully. Our hospital
          team will contact you shortly to confirm the appointment.
        </p>
        <div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full bg-brand-50 px-5 py-2 text-sm font-semibold text-brand-800">
          Reference: {result.reference}
        </div>
        <p className="mt-6 text-sm text-ink-500">
          Need it sooner? Call{" "}
          <a href={links.call} className="link-underline">
            {site.phone.display}
          </a>{" "}
          or{" "}
          <a href={links.whatsapp} target="_blank" rel="noreferrer" className="link-underline">
            message us on WhatsApp
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-ink-100 sm:p-8">
      {/* Progress indicator */}
      <ol className="mb-8 flex items-center gap-2" aria-label="Booking progress">
        {STEPS.slice(0, 3).map((label, i) => {
          const active = i === step;
          const done = i < step;
          return (
            <li key={label} className="flex flex-1 items-center gap-2">
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                  done
                    ? "bg-teal-500 text-white"
                    : active
                    ? "bg-brand-600 text-white"
                    : "bg-ink-100 text-ink-500"
                }`}
                aria-current={active ? "step" : undefined}
              >
                {done ? <Icon name="check" className="h-4 w-4" /> : i + 1}
              </span>
              <span
                className={`hidden text-sm font-semibold sm:block ${
                  active ? "text-ink-900" : "text-ink-500"
                }`}
              >
                {label}
              </span>
              {i < 2 && <span className="mx-1 hidden h-px flex-1 bg-ink-100 sm:block" />}
            </li>
          );
        })}
      </ol>

      {/* Step 1: Patient details */}
      {step === 0 && (
        <div className="space-y-5">
          <Field label="Patient's full name" required error={errors.patient_name}>
            <input
              type="text"
              className={inputCls(errors.patient_name)}
              value={form.patient_name}
              onChange={set("patient_name")}
              autoComplete="name"
              placeholder="e.g. Aarav Sharma"
            />
          </Field>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Phone number" required error={errors.phone}>
              <input
                type="tel"
                inputMode="numeric"
                className={inputCls(errors.phone)}
                value={form.phone}
                onChange={set("phone")}
                autoComplete="tel"
                placeholder="10-digit mobile"
              />
            </Field>
            <Field label="Age" error={errors.age} hint="Optional">
              <input
                type="number"
                min="0"
                max="120"
                className={inputCls(errors.age)}
                value={form.age}
                onChange={set("age")}
                placeholder="Years"
              />
            </Field>
          </div>
          <Field label="Email address" required error={errors.email}>
            <input
              type="email"
              className={inputCls(errors.email)}
              value={form.email}
              onChange={set("email")}
              autoComplete="email"
              placeholder="you@example.com"
            />
          </Field>
        </div>
      )}

      {/* Step 2: Appointment details */}
      {step === 1 && (
        <div className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Department" required error={errors.department}>
              <select className={inputCls(errors.department)} value={form.department} onChange={set("department")}>
                <option value="">Select a department</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.title}>{s.title}</option>
                ))}
                <option value="General Consultation">Not sure / General Consultation</option>
              </select>
            </Field>
            <Field label="Appointment type" required error={errors.appointment_type}>
              <select className={inputCls(errors.appointment_type)} value={form.appointment_type} onChange={set("appointment_type")}>
                {APPOINTMENT_TYPES.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </Field>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Preferred date" required error={errors.appointment_date}>
              <input
                type="date"
                min={min}
                className={inputCls(errors.appointment_date)}
                value={form.appointment_date}
                onChange={set("appointment_date")}
              />
            </Field>
            <Field label="Preferred time" required error={errors.appointment_time}>
              <select className={inputCls(errors.appointment_time)} value={form.appointment_time} onChange={set("appointment_time")}>
                <option value="">Select a time</option>
                {TIME_SLOTS.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </Field>
          </div>
          <Field label="Preferred doctor" hint="Optional">
            {doctors.length > 0 ? (
              <select className={inputCls()} value={form.doctor} onChange={set("doctor")}>
                <option value="">No preference</option>
                {doctors.map((d) => (
                  <option key={d.name} value={d.name}>{d.name}</option>
                ))}
              </select>
            ) : (
              <input
                type="text"
                className={inputCls()}
                value={form.doctor}
                onChange={set("doctor")}
                placeholder="No preference"
              />
            )}
          </Field>
          <Field label="Message / notes" hint="Optional">
            <textarea
              rows={3}
              className={inputCls()}
              value={form.message}
              onChange={set("message")}
              placeholder="Briefly describe your concern or any special requirements."
            />
          </Field>
        </div>
      )}

      {/* Step 3: Review */}
      {step === 2 && (
        <div>
          <h3 className="text-lg font-bold text-ink-900">Review your request</h3>
          <p className="mt-1 text-sm text-ink-500">
            Please check the details below before submitting.
          </p>
          <dl className="mt-5 grid gap-x-6 gap-y-3 rounded-2xl bg-brand-50/60 p-5 sm:grid-cols-2">
            <Review k="Patient" v={form.patient_name} />
            <Review k="Phone" v={form.phone} />
            <Review k="Email" v={form.email} />
            <Review k="Age" v={form.age || "—"} />
            <Review k="Service" v={form.department} />
            <Review k="Type" v={form.appointment_type} />
            <Review k="Date" v={form.appointment_date} />
            <Review k="Time" v={form.appointment_time} />
            <Review k="Doctor" v={form.doctor || "No preference"} />
            <Review k="Notes" v={form.message || "—"} full />
          </dl>
          {result?.error && (
            <div
              role="alert"
              className="mt-5 rounded-2xl bg-warm-500/10 p-4 text-sm text-warm-600 ring-1 ring-warm-500/30"
            >
              We couldn't submit your request just now. Please try again, or call
              us at{" "}
              <a href={links.call} className="font-semibold underline">
                {site.phone.display}
              </a>
              .
            </div>
          )}
        </div>
      )}

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-between gap-3">
        {step > 0 ? (
          <button type="button" onClick={back} className="btn-ghost btn-md" disabled={submitting}>
            Back
          </button>
        ) : (
          <span />
        )}
        {step < 2 && (
          <button type="button" onClick={next} className="btn-primary btn-md">
            Continue <Icon name="arrow" className="h-3 w-3" />
          </button>
        )}
        {step === 2 && (
          <button
            type="button"
            onClick={submit}
            className="btn-teal btn-md min-w-[9rem]"
            disabled={submitting}
            aria-busy={submitting}
          >
            {submitting ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                Submitting…
              </>
            ) : (
              <>Submit Request</>
            )}
          </button>
        )}
      </div>
    </div>
  );
}

// --- Small presentational helpers -----------------------------------------
function inputCls(error) {
  return `w-full rounded-xl border bg-white px-4 py-3 text-ink-900 placeholder:text-ink-300
    focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition
    ${error ? "border-warm-500 ring-1 ring-warm-500/40" : "border-ink-100"}`;
}

function Field({ label, required, error, hint, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-center justify-between">
        <span className="text-sm font-semibold text-ink-800">
          {label} {required && <span className="text-warm-500">*</span>}
        </span>
        {hint && <span className="text-xs text-ink-400">{hint}</span>}
      </span>
      {children}
      {error && (
        <span role="alert" className="mt-1.5 block text-xs font-medium text-warm-600">
          {error}
        </span>
      )}
    </label>
  );
}

function Review({ k, v, full }) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <dt className="text-xs font-semibold uppercase tracking-wide text-ink-400">{k}</dt>
      <dd className="mt-0.5 break-words text-sm font-medium text-ink-900">{v}</dd>
    </div>
  );
}
