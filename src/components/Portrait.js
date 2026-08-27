import Image from "next/image";

/**
 * Square portrait for a person. Most people have no photo, so the fallback
 * is part of the design rather than an error state: initials set in the mono
 * face on a tinted square, keeping every row the same rhythm.
 */
export default function Portrait({ person, size = 72 }) {
  const initials = person.name
    .replace(/[“”"']/g, "")
    .split(/\s+/)
    .filter((w) => /^[A-Za-zÀ-ÿ]/.test(w))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

  if (person.photo) {
    return (
      <Image
        src={person.photo}
        alt=""
        aria-hidden="true"
        width={400}
        height={400}
        style={{ width: size, height: size }}
        className="shrink-0 object-cover"
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      style={{ width: size, height: size }}
      className="flex shrink-0 items-center justify-center bg-cyan-wash font-mono text-sm tracking-wider text-cyan-deep"
    >
      {initials}
    </span>
  );
}
