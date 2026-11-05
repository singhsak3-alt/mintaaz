import { ButtonLink } from "@/components/Button";
import { Accent } from "@/components/SectionHeader";

export default function NotFound() {
  return (
    <main className="container-site pb-8 pt-18">
      <p className="eyebrow m-0 mb-[18px] text-[13px]">(404)</p>
      <h1 className="m-0 text-[clamp(52px,7.4vw,112px)] font-extrabold leading-[0.92] tracking-[-0.06em]">
        This page <Accent>wandered off.</Accent>
      </h1>
      <div className="mt-9 flex flex-wrap gap-3">
        <ButtonLink href="/" size="lg">
          Back to home
        </ButtonLink>
        <ButtonLink href="/work" size="lg" variant="secondary">
          See the work
        </ButtonLink>
      </div>
    </main>
  );
}
