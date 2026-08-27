import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-night text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="display text-xl uppercase leading-none">
            Designing Org Culture
          </p>
          <p className="spec mt-3 text-white/55">
            Stanford d.school · Design 276
          </p>
        </div>
        <Image
          src="/brand/forces/shapes-of-culture.png"
          alt=""
          width={600}
          height={376}
          aria-hidden="true"
          className="tilt-mark w-36 opacity-90 invert"
        />
      </div>
    </footer>
  );
}
