type Stack = "STANDARD" | "SPECIAL" | "REJECTED";

/**
 * Dispatches a package to the correct stack based on its dimensions and mass.
 *
 * - REJECTED: both bulky and heavy
 * - SPECIAL:  either bulky or heavy
 * - STANDARD: neither bulky nor heavy
 */
export function sort(
  width: number,
  height: number,
  length: number,
  mass: number,
): Stack {
  const bulky =
    width * height * length >= 1_000_000 ||
    width >= 150 ||
    height >= 150 ||
    length >= 150;

  const heavy = mass >= 20;

  if (bulky && heavy) return "REJECTED";
  if (bulky || heavy) return "SPECIAL";
  return "STANDARD";
}
