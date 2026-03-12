import { useQuery } from "@tanstack/react-query";
import type { PersonalInfo, Experience, SkillCategory, Education } from "@/lib/queries";

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}`);
  return res.json();
}

export function usePersonalInfo() {
  return useQuery<PersonalInfo>({
    queryKey: ["personalInfo"],
    queryFn: () => fetchJson("/api/personal-info"),
  });
}

export function useExperiences() {
  return useQuery<Experience[]>({
    queryKey: ["experiences"],
    queryFn: () => fetchJson("/api/experiences"),
  });
}

export function useSkillCategories() {
  return useQuery<SkillCategory[]>({
    queryKey: ["skillCategories"],
    queryFn: () => fetchJson("/api/skills"),
  });
}

export function useEducation() {
  return useQuery<Education>({
    queryKey: ["education"],
    queryFn: () => fetchJson("/api/education"),
  });
}
