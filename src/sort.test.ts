import { describe, it, expect } from "vitest";
import { sort } from "./sort";

describe("sort", () => {
  // --- STANDARD ---
  it("returns STANDARD for a small, light package", () => {
    expect(sort(10, 10, 10, 5)).toBe("STANDARD");
  });

  it("returns STANDARD just under bulky volume and heavy mass", () => {
    // 99 * 100 * 100 = 990_000 (< 1_000_000) and 19 kg (< 20)
    expect(sort(99, 100, 100, 19)).toBe("STANDARD");
  });

  // --- SPECIAL (bulky only) ---
  it("returns SPECIAL when volume equals 1,000,000", () => {
    expect(sort(100, 100, 100, 5)).toBe("SPECIAL");
  });

  it("returns SPECIAL when volume exceeds 1,000,000", () => {
    expect(sort(200, 200, 200, 5)).toBe("SPECIAL");
  });

  it("returns SPECIAL when width >= 150", () => {
    expect(sort(150, 1, 1, 1)).toBe("SPECIAL");
  });

  it("returns SPECIAL when height >= 150", () => {
    expect(sort(1, 150, 1, 1)).toBe("SPECIAL");
  });

  it("returns SPECIAL when length >= 150", () => {
    expect(sort(1, 1, 150, 1)).toBe("SPECIAL");
  });

  // --- SPECIAL (heavy only) ---
  it("returns SPECIAL when mass equals 20", () => {
    expect(sort(10, 10, 10, 20)).toBe("SPECIAL");
  });

  it("returns SPECIAL when mass exceeds 20", () => {
    expect(sort(10, 10, 10, 50)).toBe("SPECIAL");
  });

  // --- REJECTED (bulky AND heavy) ---
  it("returns REJECTED when both bulky (volume) and heavy", () => {
    expect(sort(100, 100, 100, 25)).toBe("REJECTED");
  });

  it("returns REJECTED when both bulky (dimension) and heavy", () => {
    expect(sort(150, 1, 1, 20)).toBe("REJECTED");
  });

  it("returns REJECTED for a very large and very heavy package", () => {
    expect(sort(200, 200, 200, 100)).toBe("REJECTED");
  });

  // --- Edge cases ---
  it("handles zero dimensions", () => {
    expect(sort(0, 0, 0, 0)).toBe("STANDARD");
  });

  it("handles dimension exactly at 150 with mass exactly at 20", () => {
    expect(sort(150, 10, 10, 20)).toBe("REJECTED");
  });
});
