import { personalInfo } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 py-8 text-center text-sm text-neutral-500">
      <div className="mx-auto max-w-5xl px-6">
        <p>
          &copy; {new Date().getFullYear()} {personalInfo.name}. Built with{" "}
          <span className="text-neutral-400">Next.js</span>,{" "}
          <span className="text-neutral-400">TypeScript</span>, and{" "}
          <span className="text-neutral-400">Tailwind CSS</span>.
        </p>
      </div>
    </footer>
  );
}
