import { getPersonalInfo } from "@/lib/queries";
import EmailLink from "./EmailLink";

export default async function Footer() {
  const info = await getPersonalInfo();
  return (
    <footer className="border-t border-gray-300 py-4 text-center text-sm text-gray-700 sm:py-6" style={{ backgroundColor: 'rgba(252,251,248,0.92)' }}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-2 flex flex-wrap justify-center gap-4 sm:mb-4">
          <EmailLink email={info.email} />
        </div>
        <p>
          &copy; {new Date().getFullYear()} Edward D. Abrams
        </p>
      </div>
    </footer>
  );
}
