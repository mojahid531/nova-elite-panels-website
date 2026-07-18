/**
 * Design reminder: this form should feel like an architectural specification sheet—clear labels,
 * sharp edges, generous spacing, and a confident gold action rather than a generic rounded form.
 */

import { type FormEvent, useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

type RequestFields = {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
};

const initialFields: RequestFields = {
  name: "",
  company: "",
  email: "",
  phone: "",
  projectType: "",
  message: "",
};

export default function ProjectRequestForm() {
  const [fields, setFields] = useState<RequestFields>(initialFields);

  const updateField = (field: keyof RequestFields, value: string) => {
    setFields((current) => ({ ...current, [field]: value }));
  };

  const submitRequest = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`NOVA website request — ${fields.name}`);
    const body = encodeURIComponent(
      [
        `Name: ${fields.name}`,
        `Company / Contractor: ${fields.company || "Not provided"}`,
        `Email: ${fields.email}`,
        `Phone: ${fields.phone}`,
        `Project type: ${fields.projectType || "Not selected"}`,
        "",
        "Project request:",
        fields.message,
      ].join("\n"),
    );

    toast.success("Your request is ready to send", {
      description: "Your email application will open with the project details filled in.",
    });
    window.location.href = `mailto:info@novaelitepanels.com?subject=${subject}&body=${body}`;
  };

  const inputClass =
    "mt-2 h-13 w-full border border-black/18 bg-transparent px-4 text-sm text-[#171717] outline-none transition-colors placeholder:text-black/35 focus:border-[#9d793e]";

  return (
    <div className="container py-20 md:py-28">
      <div className="grid overflow-hidden bg-[#f4efe5] text-[#171717] lg:grid-cols-[.78fr_1.22fr]">
        <div className="relative border-b border-black/10 p-8 md:p-12 lg:border-b-0 lg:border-r lg:p-14">
          <p className="eyebrow text-[#98743a]">Free project quote</p>
          <h3 className="mt-5 max-w-md font-display text-5xl leading-[.92] md:text-6xl">
            Tell us what you’re building.
          </h3>
          <p className="mt-6 max-w-md text-sm leading-7 text-black/58">
            Contractors, designers, businesses, homeowners, and individual customers are welcome. Share your
            project details and NOVA can help with materials, colors, quantities, and professional installation.
          </p>

          <div className="mt-10 grid gap-4 border-t border-black/12 pt-7 text-sm text-black/65">
            {["Product and finish guidance", "High-quality installation available", "Free quote for your project"].map(
              (item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#9d793e]" />
                  <span>{item}</span>
                </div>
              ),
            )}
          </div>
        </div>

        <form onSubmit={submitRequest} className="p-8 md:p-12 lg:p-14">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="text-[0.65rem] font-extrabold uppercase tracking-[0.17em] text-black/55">
              Name <span className="text-[#9d793e]">*</span>
              <input
                required
                type="text"
                autoComplete="name"
                value={fields.name}
                onChange={(event) => updateField("name", event.target.value)}
                placeholder="Your full name"
                className={inputClass}
              />
            </label>

            <label className="text-[0.65rem] font-extrabold uppercase tracking-[0.17em] text-black/55">
              Company / Contractor
              <input
                type="text"
                autoComplete="organization"
                value={fields.company}
                onChange={(event) => updateField("company", event.target.value)}
                placeholder="Optional"
                className={inputClass}
              />
            </label>

            <label className="text-[0.65rem] font-extrabold uppercase tracking-[0.17em] text-black/55">
              Email <span className="text-[#9d793e]">*</span>
              <input
                required
                type="email"
                autoComplete="email"
                value={fields.email}
                onChange={(event) => updateField("email", event.target.value)}
                placeholder="name@example.com"
                className={inputClass}
              />
            </label>

            <label className="text-[0.65rem] font-extrabold uppercase tracking-[0.17em] text-black/55">
              Phone <span className="text-[#9d793e]">*</span>
              <input
                required
                type="tel"
                autoComplete="tel"
                value={fields.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                placeholder="Best number to reach you"
                className={inputClass}
              />
            </label>
          </div>

          <label className="mt-6 block text-[0.65rem] font-extrabold uppercase tracking-[0.17em] text-black/55">
            Project type
            <select
              value={fields.projectType}
              onChange={(event) => updateField("projectType", event.target.value)}
              className={`${inputClass} appearance-none`}
            >
              <option value="">Choose one</option>
              <option>Residential</option>
              <option>Commercial</option>
              <option>Contractor / Trade</option>
              <option>Hospitality</option>
              <option>Interior installation</option>
              <option>Exterior installation</option>
              <option>Other</option>
            </select>
          </label>

          <label className="mt-6 block text-[0.65rem] font-extrabold uppercase tracking-[0.17em] text-black/55">
            Project request <span className="text-[#9d793e]">*</span>
            <textarea
              required
              rows={6}
              value={fields.message}
              onChange={(event) => updateField("message", event.target.value)}
              placeholder="Tell us which product interests you, the area you are covering, location, timeline, and whether you need installation."
              className="mt-2 w-full resize-y border border-black/18 bg-transparent px-4 py-4 text-sm leading-6 text-[#171717] outline-none transition-colors placeholder:text-black/35 focus:border-[#9d793e]"
            />
          </label>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-sm text-xs leading-5 text-black/45">
              Selecting “Send request” opens your email application with the completed request addressed to NOVA.
            </p>
            <button
              type="submit"
              className="inline-flex shrink-0 items-center justify-center gap-3 bg-[#b99653] px-6 py-4 text-xs font-extrabold uppercase tracking-[0.17em] text-black transition-colors hover:bg-[#d3b879] active:scale-[.97]"
            >
              Send request <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

