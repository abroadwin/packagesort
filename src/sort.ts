type PackageType = "STANDARD" | "SPECIAL" | "REJECTED"

/**
 * Returns a package's type (standard, special or rejected) given its dimensions in centimeters and its mass in kilograms.
 *
 * @param width the package's width in centimeters
 * @param height the package's height in centemeters
 * @param length the package's length in centemeters
 * @param mass the package's mass in kilograms
 */
export default function sort(
  width: number,
  height: number,
  length: number,
  mass: number,
): PackageType {
  const minBulkyDimension = 150
  const minBulkVolume = 1_000_000
  const minBulkyMass = 20

  const isBulky =
    Math.max(width, height, length) >= minBulkyDimension ||
    width * height * length >= minBulkVolume

  const isHeavy = mass >= minBulkyMass

  if (isBulky && isHeavy) return "REJECTED"

  if (isBulky || isHeavy) return "SPECIAL"

  return "STANDARD"
}
