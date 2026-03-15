import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

// ---- Mock next/link ----
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>{children}</a>
  ),
}));

// ---- Mock next/navigation ----
vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

// ---- Mock ProfileImage (client component, tested separately) ----
vi.mock("@/app/components/ProfileImage", () => ({
  default: () => <div data-testid="profile-image" />,
}));

// ---- Mock DB queries ----
vi.mock("@/lib/queries", () => ({
  getPersonalInfo: vi.fn().mockResolvedValue({
    name: "Jane Doe",
    title: "Software Engineer",
    location: "Detroit, MI",
    email: "jane@example.com",
    linkedin: "https://linkedin.com/in/janedoe",
    summary: "Full-stack engineer specializing in React and Node.",
  }),
  getExperiences: vi.fn().mockResolvedValue([
    {
      title: "Senior Developer",
      product: "Acme Platform",
      period: "2023 – Present",
      bullets: ["Built microservices", "Reduced latency by 40%"],
    },
  ]),
  getEducation: vi.fn().mockResolvedValue({
    school: "Test University",
    degree: "Computer Science",
    level: "Bachelor of Science",
    date: "May 2019",
  }),
  getSkillCategories: vi.fn().mockResolvedValue([
    { label: "Languages", icon: "💻", items: ["TypeScript", "C#"] },
  ]),
  getSkillHighlights: vi.fn().mockResolvedValue([
    { label: "Cloud", description: "Migrated data to Azure Cosmos DB." },
  ]),
}));

import HomePage from "../page";
import ExperiencePage from "../experience/page";
import SkillsPage from "../skills/page";
import AboutPage from "../about/page";

// ---- Home page ----
describe("Home page", () => {
  it("renders the hero with name and summary", async () => {
    render(await HomePage());
    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
    expect(
      screen.getByText("Full-stack engineer specializing in React and Node.")
    ).toBeInTheDocument();
  });

  it("renders CTA links to experience and skills", async () => {
    render(await HomePage());
    expect(screen.getByRole("link", { name: /view experience/i })).toHaveAttribute(
      "href",
      "/experience"
    );
    expect(screen.getByRole("link", { name: /view skills/i })).toHaveAttribute(
      "href",
      "/skills"
    );
  });
});

// ---- Experience page ----
describe("Experience page", () => {
  it("renders the work experience heading and timeline", async () => {
    render(await ExperiencePage());
    expect(screen.getByText("Work Experience")).toBeInTheDocument();
    expect(screen.getByText("Senior Developer")).toBeInTheDocument();
    expect(screen.getByText("Acme Platform")).toBeInTheDocument();
    expect(screen.getByText("2023 – Present")).toBeInTheDocument();
  });

  it("renders the education section", async () => {
    render(await ExperiencePage());
    expect(screen.getByText("Education")).toBeInTheDocument();
    expect(screen.getByText("Test University")).toBeInTheDocument();
    expect(
      screen.getByText(/Bachelor of Science, Computer Science/)
    ).toBeInTheDocument();
  });
});

// ---- Skills page ----
describe("Skills page", () => {
  it("renders skill cards from DB", async () => {
    render(await SkillsPage());
    expect(screen.getByText("Skills")).toBeInTheDocument();
    expect(screen.getByText("Languages")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("C#")).toBeInTheDocument();
  });

  it("renders highlights from DB", async () => {
    render(await SkillsPage());
    expect(screen.getByText("Highlights")).toBeInTheDocument();
    expect(screen.getByText("Cloud:")).toBeInTheDocument();
    expect(
      screen.getByText("Migrated data to Azure Cosmos DB.")
    ).toBeInTheDocument();
  });
});

// ---- About page ----
describe("About page", () => {
  it("renders the bio and profile image", () => {
    render(<AboutPage />);
    expect(screen.getByText("Behind the Code")).toBeInTheDocument();
    expect(screen.getByTestId("profile-image")).toBeInTheDocument();
  });

  it("renders the architecture sections", () => {
    render(<AboutPage />);
    expect(screen.getByText("How This Site Is Built")).toBeInTheDocument();
    expect(screen.getByText("App Router (Next.js 14)")).toBeInTheDocument();
    expect(screen.getByText("PostgreSQL Data Layer")).toBeInTheDocument();
    expect(screen.getByText("Docker")).toBeInTheDocument();
    expect(screen.getByText("Tailwind CSS")).toBeInTheDocument();
  });

  it("renders the project structure section", () => {
    render(<AboutPage />);
    expect(screen.getByText("Project Structure")).toBeInTheDocument();
  });
});
