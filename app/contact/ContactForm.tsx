"use client";

import { useEffect, useRef, useState } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      contact: String(formData.get("contact") ?? ""),
      projectType: String(formData.get("projectType") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        if (isMounted.current) {
          setErrorMessage(data?.error ?? "Something went wrong.");
          setStatus("error");
        }
        return;
      }

      form.reset();
      if (isMounted.current) {
        setStatus("success");
      }
    } catch {
      if (isMounted.current) {
        setErrorMessage("Network error. Please try again.");
        setStatus("error");
      }
    }
  };

  return (
    <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
      <label className="text-slate text-xs uppercase tracking-[0.2em]">
        Name <span className="text-rose-600">*</span>
        <input
          className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-stone"
          name="name"
          placeholder="Your name"
          required
          type="text"
        />
      </label>
      <label className="text-slate text-xs uppercase tracking-[0.2em]">
        Phone or Email <span className="text-rose-600">*</span>
        <input
          className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-stone"
          name="contact"
          placeholder="Your phone number or email"
          required
          type="text"
        />
      </label>
      <label className="text-slate text-xs uppercase tracking-[0.2em]">
        Project Type
        <select
          className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-stone"
          name="projectType"
        >
          <option value="">Select one</option>
          <option>Remodel</option>
          <option>Addition</option>
          <option>New build</option>
          <option>Repair</option>
          <option>Other</option>
        </select>
      </label>
      <label className="text-slate text-xs uppercase tracking-[0.2em]">
        Message
        <textarea
          className="mt-2 min-h-[140px] w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-stone"
          name="message"
          placeholder="Tell us what you want to build or renovate."
        />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <button
          className="bg-clay rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white disabled:cursor-not-allowed disabled:opacity-70"
          disabled={status === "sending"}
          type="submit"
        >
          {status === "sending" ? "Sending..." : "Send Request"}
        </button>
        {status === "success" && (
          <span className="text-sm text-emerald-600">
            Request sent. We will reply within one business day.
          </span>
        )}
        {status === "error" && (
          <span className="text-sm text-rose-600">
            {errorMessage || "Something went wrong."}
          </span>
        )}
      </div>
      <p className="text-slate text-xs">
        We never share your information.
      </p>
    </form>
  );
}
