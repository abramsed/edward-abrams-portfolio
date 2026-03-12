import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  usePersonalInfo,
  useExperiences,
  useSkillCategories,
  useEducation,
} from "../useResumeData";

// ---- Test wrapper ----
function createWrapper() {
  const client = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={client}>{children}</QueryClientProvider>
  );
}

// ---- Mock fetch ----
const mockFetch = vi.fn();

beforeEach(() => {
  vi.stubGlobal("fetch", mockFetch);
});

afterEach(() => {
  vi.restoreAllMocks();
});

function jsonResponse(data: unknown) {
  return Promise.resolve({
    ok: true,
    json: () => Promise.resolve(data),
  });
}

// ---- Tests ----
describe("usePersonalInfo", () => {
  it("fetches from /api/personal-info and returns data", async () => {
    const data = { name: "Jane", title: "Engineer" };
    mockFetch.mockReturnValueOnce(jsonResponse(data));

    const { result } = renderHook(() => usePersonalInfo(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(mockFetch).toHaveBeenCalledWith("/api/personal-info");
    expect(result.current.data).toEqual(data);
  });

  it("sets error state on fetch failure", async () => {
    mockFetch.mockReturnValueOnce(
      Promise.resolve({ ok: false, status: 500 })
    );

    const { result } = renderHook(() => usePersonalInfo(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isError).toBe(true));
  });
});

describe("useExperiences", () => {
  it("fetches from /api/experiences and returns data", async () => {
    const data = [{ title: "SDE III", product: "CRM", period: "2022–Present", bullets: [] }];
    mockFetch.mockReturnValueOnce(jsonResponse(data));

    const { result } = renderHook(() => useExperiences(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(mockFetch).toHaveBeenCalledWith("/api/experiences");
    expect(result.current.data).toEqual(data);
  });
});

describe("useSkillCategories", () => {
  it("fetches from /api/skills and returns data", async () => {
    const data = [{ label: "Frontend", icon: "⚛️", items: ["React"] }];
    mockFetch.mockReturnValueOnce(jsonResponse(data));

    const { result } = renderHook(() => useSkillCategories(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(mockFetch).toHaveBeenCalledWith("/api/skills");
    expect(result.current.data).toEqual(data);
  });
});

describe("useEducation", () => {
  it("fetches from /api/education and returns data", async () => {
    const data = { school: "CMU", degree: "IS", level: "B.S.", date: "2018" };
    mockFetch.mockReturnValueOnce(jsonResponse(data));

    const { result } = renderHook(() => useEducation(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(mockFetch).toHaveBeenCalledWith("/api/education");
    expect(result.current.data).toEqual(data);
  });
});
