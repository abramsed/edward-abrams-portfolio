import { describe, it, expect, vi, beforeEach } from "vitest";

// ---- Mock the query layer (before importing routes) ----
const mockGetPersonalInfo = vi.fn();
const mockGetExperiences = vi.fn();
const mockGetSkillCategories = vi.fn();
const mockGetEducation = vi.fn();

vi.mock("@/lib/queries", () => ({
  getPersonalInfo: (...args: unknown[]) => mockGetPersonalInfo(...args),
  getExperiences: (...args: unknown[]) => mockGetExperiences(...args),
  getSkillCategories: (...args: unknown[]) => mockGetSkillCategories(...args),
  getEducation: (...args: unknown[]) => mockGetEducation(...args),
}));

// ---- Import route handlers ----
import { GET as getPersonalInfoRoute } from "../personal-info/route";
import { GET as getExperiencesRoute } from "../experiences/route";
import { GET as getSkillsRoute } from "../skills/route";
import { GET as getEducationRoute } from "../education/route";

beforeEach(() => {
  vi.clearAllMocks();
});

// ---- Tests ----
describe("GET /api/personal-info", () => {
  it("returns personal info as JSON", async () => {
    const data = { name: "Edward", title: "SDE III" };
    mockGetPersonalInfo.mockResolvedValueOnce(data);

    const res = await getPersonalInfoRoute();
    const body = await res.json();

    expect(mockGetPersonalInfo).toHaveBeenCalledOnce();
    expect(res.status).toBe(200);
    expect(body).toEqual(data);
  });
});

describe("GET /api/experiences", () => {
  it("returns experiences array as JSON", async () => {
    const data = [
      { title: "SDE III", product: "CRM", period: "2022–Present", bullets: ["Built APIs"] },
    ];
    mockGetExperiences.mockResolvedValueOnce(data);

    const res = await getExperiencesRoute();
    const body = await res.json();

    expect(mockGetExperiences).toHaveBeenCalledOnce();
    expect(res.status).toBe(200);
    expect(body).toEqual(data);
  });
});

describe("GET /api/skills", () => {
  it("returns skill categories as JSON", async () => {
    const data = [{ label: "Frontend", icon: "⚛️", items: ["React", "Next.js"] }];
    mockGetSkillCategories.mockResolvedValueOnce(data);

    const res = await getSkillsRoute();
    const body = await res.json();

    expect(mockGetSkillCategories).toHaveBeenCalledOnce();
    expect(res.status).toBe(200);
    expect(body).toEqual(data);
  });
});

describe("GET /api/education", () => {
  it("returns education info as JSON", async () => {
    const data = { school: "CMU", degree: "IS", level: "B.S.", date: "2018" };
    mockGetEducation.mockResolvedValueOnce(data);

    const res = await getEducationRoute();
    const body = await res.json();

    expect(mockGetEducation).toHaveBeenCalledOnce();
    expect(res.status).toBe(200);
    expect(body).toEqual(data);
  });
});
