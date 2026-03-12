import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

// ---- Mock next/link as a plain anchor ----
vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    ...rest
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

// ---- Mock next/navigation ----
vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

// ---- Imports (after mocks) ----
import Hero from "../Hero";
import SkillCard from "../SkillCard";
import TimelineItem from "../TimelineItem";
import Footer from "../Footer";
import Navbar from "../Navbar";

// ---- Fixtures ----
const personalInfo = {
  name: "Jane Doe",
  title: "Software Engineer",
  location: "Detroit, MI",
  email: "jane@example.com",
  linkedin: "https://linkedin.com/in/janedoe",
  summary: "Full-stack engineer specializing in React and Node.",
};

const experience = {
  title: "Senior Developer",
  product: "Acme Platform",
  period: "2022 – Present",
  bullets: ["Led migration to microservices", "Reduced latency by 40%"],
};

const skillCategory = {
  label: "Frontend",
  icon: "⚛️",
  items: ["React", "TypeScript", "Tailwind CSS"],
};

// ---- Hero ----
describe("Hero", () => {
  it("renders the person's name and title", () => {
    render(<Hero info={personalInfo} />);
    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
    expect(screen.getByText("Software Engineer")).toBeInTheDocument();
  });

  it("renders the summary text", () => {
    render(<Hero info={personalInfo} />);
    expect(
      screen.getByText("Full-stack engineer specializing in React and Node.")
    ).toBeInTheDocument();
  });

  it("renders navigation links to Experience and Skills", () => {
    render(<Hero info={personalInfo} />);
    const expLink = screen.getByRole("link", { name: /view experience/i });
    const skillsLink = screen.getByRole("link", { name: /view skills/i });
    expect(expLink).toHaveAttribute("href", "/experience");
    expect(skillsLink).toHaveAttribute("href", "/skills");
  });

  it("renders contact info with correct links", () => {
    render(<Hero info={personalInfo} />);
    expect(screen.getByText("Detroit, MI")).toBeInTheDocument();

    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://linkedin.com/in/janedoe"
    );

    const emailLink = screen.getByRole("link", { name: /jane@example\.com/i });
    expect(emailLink).toHaveAttribute("href", "mailto:jane@example.com");
  });
});

// ---- SkillCard ----
describe("SkillCard", () => {
  it("renders the category label and icon", () => {
    render(<SkillCard {...skillCategory} />);
    expect(screen.getByText("Frontend")).toBeInTheDocument();
    expect(screen.getByText("⚛️")).toBeInTheDocument();
  });

  it("renders all skill items", () => {
    render(<SkillCard {...skillCategory} />);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Tailwind CSS")).toBeInTheDocument();
  });
});

// ---- TimelineItem ----
describe("TimelineItem", () => {
  it("renders title, product, and period", () => {
    render(<TimelineItem {...experience} />);
    expect(screen.getByText("Senior Developer")).toBeInTheDocument();
    expect(screen.getByText("Acme Platform")).toBeInTheDocument();
    expect(screen.getByText("2022 – Present")).toBeInTheDocument();
  });

  it("renders all bullet points", () => {
    render(<TimelineItem {...experience} />);
    expect(
      screen.getByText("Led migration to microservices")
    ).toBeInTheDocument();
    expect(screen.getByText("Reduced latency by 40%")).toBeInTheDocument();
  });
});

// ---- Footer ----
describe("Footer", () => {
  it("renders the current year and tech stack", () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
    expect(screen.getByText("Next.js")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("PostgreSQL")).toBeInTheDocument();
  });
});

// ---- Navbar ----
describe("Navbar", () => {
  it("renders all navigation links", () => {
    render(<Navbar />);
    expect(screen.getByRole("link", { name: /home/i })).toHaveAttribute(
      "href",
      "/"
    );
    expect(screen.getByRole("link", { name: /experience/i })).toHaveAttribute(
      "href",
      "/experience"
    );
    expect(screen.getByRole("link", { name: /skills/i })).toHaveAttribute(
      "href",
      "/skills"
    );
    expect(
      screen.getByRole("link", { name: /architecture/i })
    ).toHaveAttribute("href", "/architecture");
  });

  it("highlights the active link", () => {
    render(<Navbar />);
    // pathname is mocked to "/" so Home should be active (emerald-400)
    const homeLink = screen.getByRole("link", { name: /home/i });
    expect(homeLink.className).toContain("text-emerald-400");

    const expLink = screen.getByRole("link", { name: /experience/i });
    expect(expLink.className).toContain("text-neutral-400");
  });
});
