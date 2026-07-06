import { Pricing } from "../components/Pricing";
import { CTABand } from "../components/CTABand";

export function PricingPage() {
  return (
    <div className="pt-14 md:pt-[60px]">
      <Pricing />
      <CTABand />
    </div>
  );
}
