import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

// ---- Mock DB queries (Footer is an async server component) ----
vi.mock("@/lib/queries", () => ({
  getPersonalInfo: vi.fn().mockResolvedValue({
    name: "Jane Doe",
    title: "Software Engineer",
    location: "Detroit, MI",
    email: "jane@example.com",
    linkedin: "https://linkedin.com/in/janedoe",
    summary: "Full-stack engineer specializing in React and Node.",
  }),
}));

// ---- Mock next/image as a plain img ----
vi.mock("next/image", () => ({
  default: ({ src, alt, width, height, fill, sizes, className, onLoad }: {
    src: string; alt: string; width?: number; height?: number;
    fill?: boolean; sizes?: string; className?: string; onLoad?: () => void;
  }) => (
    <img
      src={src}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      data-fill={fill ? "true" : undefined}
      data-sizes={sizes}
      className={className}
      onLoad={onLoad}
    />
  ),
}));

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
import ProfileImage from "../ProfileImage";
import HexagonIcon from "../HexagonIcon";
import YellowButton from "../YellowButton";
import GreenButton from "../GreenButton";
import EmailLink from "../EmailLink";
import BackgroundLines from "../BackgroundLines";

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

  it("applies green hover border on mouseenter and resets on mouseleave", () => {
    const { container } = render(<SkillCard {...skillCategory} index={0} />);
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveStyle({ borderColor: '#e5e7eb' });
    fireEvent.mouseEnter(card);
    expect(card).toHaveStyle({ borderColor: '#22c55e' });
    fireEvent.mouseLeave(card);
    expect(card).toHaveStyle({ borderColor: '#e5e7eb' });
  });
});

// ---- TimelineItem ----
describe("TimelineItem", () => {
  it("renders title and period", () => {
    render(<TimelineItem {...experience} />);
    expect(screen.getByText("Senior Developer")).toBeInTheDocument();
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
  it("renders the current year and copyright", async () => {
    render(await Footer());
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });

  it("renders contact info from DB", async () => {
    render(await Footer());
    const emailLink = screen.getByRole("link", { name: /jane@example\.com/i });
    expect(emailLink).toHaveAttribute("href", "mailto:jane@example.com");
  });
});

// ---- ProfileImage ----
describe("ProfileImage", () => {
  it("shows skeleton and hides image before load", () => {
    render(<ProfileImage />);
    const img = screen.getByRole("img", { name: /edward d. abrams/i });
    expect(img.className).toContain("opacity-0");
    const bg = document.querySelector(".bg-gray-300");
    expect(bg).toBeInTheDocument();
    expect(bg?.className).toContain("animate-pulse");
  });

  it("shows image and fades out background after load", () => {
    render(<ProfileImage />);
    const img = screen.getByRole("img", { name: /edward d. abrams/i });
    fireEvent.load(img);
    expect(img.className).toContain("opacity-100");
    const bg = document.querySelector(".bg-gray-300");
    expect(bg).toBeInTheDocument();
    expect(bg?.className).toContain("opacity-0");
    expect(bg?.className).not.toContain("animate-pulse");
  });
});

// ---- HexagonIcon ----
describe("HexagonIcon", () => {
  it("renders an SVG element", () => {
    const { container } = render(<HexagonIcon />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(<HexagonIcon className="w-8 h-8" />);
    const svg = container.querySelector("svg");
    const classes = svg?.getAttribute("class") ?? "";
    expect(classes).toContain("w-8");
    expect(classes).toContain("h-8");
  });

  it("renders two ring paths and a center dot", () => {
    const { container } = render(<HexagonIcon />);
    const paths = container.querySelectorAll("path");
    expect(paths.length).toBe(2); // outer ring (yellow) + inner ring (pink)
    const circles = container.querySelectorAll("circle");
    expect(circles.length).toBe(1); // center dot (green)
  });
});

// ---- YellowButton ----
describe("YellowButton", () => {
  it("renders a link with the correct href", () => {
    render(<YellowButton href="/experience">View Experience</YellowButton>);
    const link = screen.getByRole("link", { name: /view experience/i });
    expect(link).toHaveAttribute("href", "/experience");
  });

  it("shows yellow background at rest and fills on hover", () => {
    render(<YellowButton href="/experience">View Experience</YellowButton>);
    const link = screen.getByRole("link", { name: /view experience/i });
    expect(link).toHaveStyle({ backgroundColor: '#fefce8' });
    fireEvent.mouseEnter(link);
    expect(link).toHaveStyle({ backgroundColor: '#facc15' });
    fireEvent.mouseLeave(link);
    expect(link).toHaveStyle({ backgroundColor: '#fefce8' });
  });
});

// ---- GreenButton ----
describe("GreenButton", () => {
  it("renders a link with the correct href", () => {
    render(<GreenButton href="/skills">View Skills</GreenButton>);
    const link = screen.getByRole("link", { name: /view skills/i });
    expect(link).toHaveAttribute("href", "/skills");
  });

  it("shows light green at rest and fills on hover", () => {
    render(<GreenButton href="/skills">View Skills</GreenButton>);
    const link = screen.getByRole("link", { name: /view skills/i });
    expect(link).toHaveStyle({ backgroundColor: '#f0fdf4' });
    fireEvent.mouseEnter(link);
    expect(link).toHaveStyle({ backgroundColor: '#16a34a' });
    fireEvent.mouseLeave(link);
    expect(link).toHaveStyle({ backgroundColor: '#f0fdf4' });
  });
});

// ---- EmailLink ----
describe("EmailLink", () => {
  it("renders a mailto link", () => {
    render(<EmailLink email="test@example.com" />);
    const link = screen.getByRole("link", { name: /test@example\.com/i });
    expect(link).toHaveAttribute("href", "mailto:test@example.com");
  });

  it("turns pink on hover and resets on mouseleave", () => {
    render(<EmailLink email="test@example.com" />);
    const link = screen.getByRole("link", { name: /test@example\.com/i });
    fireEvent.mouseEnter(link);
    expect(link).toHaveStyle({ color: '#ec4899' });
    fireEvent.mouseLeave(link);
    expect(link).not.toHaveStyle({ color: '#ec4899' });
  });
});

// ---- BackgroundLines ----
describe("BackgroundLines", () => {
  it("renders a fixed container with an SVG", () => {
    const { container } = render(<BackgroundLines />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  it("renders exactly three polylines", () => {
    const { container } = render(<BackgroundLines />);
    const polylines = container.querySelectorAll("polyline");
    expect(polylines.length).toBe(3);
  });

  it("uses green, pink, and yellow strokes", () => {
    const { container } = render(<BackgroundLines />);
    const polylines = container.querySelectorAll("polyline");
    const strokes = Array.from(polylines).map(p => p.getAttribute("stroke"));
    expect(strokes).toContain("rgba(74,222,128,0.65)");
    expect(strokes).toContain("rgba(244,114,182,0.60)");
    expect(strokes).toContain("rgba(250,204,21,0.60)");
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
      screen.getByRole("link", { name: /about/i })
    ).toHaveAttribute("href", "/about");
  });

  it("highlights the active link", () => {
    render(<Navbar />);
    // pathname is mocked to "/" so Home should be active (pink #ec4899)
    const homeLink = screen.getByRole("link", { name: /home/i });
    expect(homeLink).toHaveStyle({ color: '#ec4899' });

    const expLink = screen.getByRole("link", { name: /experience/i });
    expect(expLink).toHaveStyle({ color: '#374151' });
  });
});
