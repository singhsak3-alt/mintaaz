import { Accent as A } from "@/components/SectionHeader";
import { Band, BandHeader, CaseSection, FeatureRow, Frame, HeroFrame, Img, Pills, Split } from "@/components/case/primitives";
import type { CaseStudy } from "./types";

const I = "/images/billd";
const PLUM = "#3A1A4F";
const APRICOT = "#F2A35E";

const features = [
  { src: "role-based-admin-super-store-billing-and-18a607", alt: "Role-based admin: super, store, billing and kitchen admins around a dashboard", w: 868, h: 520, eyebrow: "01", title: "Role-based admin", text: "Super Admin, Store Admin, Billing Admin and Kitchen Admin — each with its own responsibilities and access. A clear role hierarchy improves workflow, simplifies admin tasks and strengthens security across one central platform." },
  { src: "table-order-app-qr-code-on-a-table-scann-80dea8", alt: "Table order app: QR code on a table scanned by a phone", w: 766, h: 542, title: "Table order app", text: "Guests scan the QR code on their table to open the digital menu, customise dishes and order from their phone — contactless, faster and more accurate, with less waiting and manual effort." },
  { src: "waiter-app-waiter-with-a-tray-stepping-o-4f9b89", alt: "Waiter app: waiter with a tray stepping out of a tablet", w: 770, h: 536, title: "Waiter app", text: "Waiters manage orders, track table status and talk to the kitchen from one mobile interface — fewer errors and delays, and a more organised, personal service." },
  { src: "restaurant-e-commerce-phone-with-food-ti-e64fe5", alt: "Restaurant e-commerce: phone with food tiles in front of a shop awning", w: 590, h: 596, title: "Restaurant e-commerce", text: "An intuitive mobile storefront where customers browse menus, pick meals and drinks, and order online — connecting restaurants and customers with smoother order management." },
  { src: "kitchen-app-chef-cooking-next-to-a-phone-97a4b3", alt: "Kitchen app: chef cooking next to a phone showing a kitchen order ticket", w: 760, h: 485, title: "Kitchen app", text: "Chefs receive digital Kitchen Order Tickets (KOT), track incoming orders, manage prep and update status in real time — faster, error-free kitchens in sync with service." },
];

const plans = [
  { name: "Small kitchen", price: "₹1,500", featured: false },
  { name: "Medium kitchen", price: "₹3,000", featured: true },
  { name: "Enterprise", price: "₹7,000", featured: false },
];
const planFields = ["Full name", "Email", "Phone no.", "FSSAI number", "GST number"];
const demoFields = ["Business name", "Full name", "Email ID", "Phone number", "FSSAI number", "GST number"];

/** Mock UI from the landing-page design (static artwork, not a real form). */
function Plan({ name, price, featured }: (typeof plans)[number]) {
  return (
    <div
      className={`flex flex-col gap-[18px] rounded-card-lg p-8 ${featured ? "text-paper" : "border border-line bg-paper"}`}
      style={featured ? { background: PLUM } : undefined}
      aria-label={`${name} plan, ${price} per month`}
    >
      <span className="eyebrow" style={{ color: featured ? "#C9B5D8" : undefined }}>
        {name}
      </span>
      <p className="m-0 text-5xl font-bold leading-none tracking-[-0.04em]">
        {price}
        <span className="text-base font-medium tracking-normal opacity-70"> / month</span>
      </p>
      <div className="flex flex-col gap-2" aria-hidden="true">
        {planFields.map((f) => (
          <span
            key={f}
            className="block rounded-[10px] px-[14px] py-[11px] text-sm"
            style={featured ? { background: "rgba(255,255,255,.12)", color: "#E8DDF0" } : { background: "#F6F6F6", color: "#737373" }}
          >
            {f}
          </span>
        ))}
      </div>
      <span aria-hidden="true" className="block rounded-pill p-[14px] text-center text-[15px] font-semibold text-[#1A1A1A]" style={{ background: APRICOT }}>
        Buy it
      </span>
    </div>
  );
}

export const billd: CaseStudy = {
  slug: "billd",
  hero: {
    taglineMaxWidth: 440,
    tagline: (
      <>
        End-to-end marketing &amp; technology <A>for restaurants.</A>
      </>
    ),
    media: (
      <HeroFrame
        bg="radial-gradient(120% 90% at 50% 0%, #54286E 0%, #3A1A4F 60%, #261034 100%)"
        padding="clamp(32px, 5vw, 64px) clamp(16px, 4vw, 64px) clamp(40px, 6vw, 88px)"
        className="flex flex-col items-center gap-[clamp(24px,4vw,48px)]"
      >
        <Img src={`${I}/billd-428898`} alt="BILLD" w={210} h={65} maxWidth={180} eager />
        <Img src={`${I}/billing-solution-a-receipt-ribbon-flowin-e70c89`} alt="Billing solution: a receipt ribbon flowing from a card terminal" w={966} h={421} eager />
      </HeroFrame>
    ),
  },
  facts: [
    { label: "Project type", value: "Website landing page" },
    { label: "Scope", value: "Visual design · Illustration" },
    { label: "Industry", value: "Restaurant tech · Billing" },
    { label: "Products", value: "POS, table order, waiter, kitchen, e-commerce" },
  ],
  cta: (
    <>
      Launching a <A>SaaS website?</A>
    </>
  ),
  body: (
    <>
      <Split
        eyebrow="Overview"
        titleColor={PLUM}
        title={
          <>
            End-to-end marketing &amp; technology solutions <A>for restaurants</A>
          </>
        }
      >
        <p className="m-0">
          BILLD is a billing and invoicing solution that simplifies financial operations for modern businesses. It
          streamlines the whole billing cycle — from invoice creation to payment tracking — with accuracy, speed
          and transparency. Automated workflows, real-time insights and seamless integrations cut manual effort,
          improve cash flow and deliver a professional billing experience.
        </p>
      </Split>

      <CaseSection
        title={
          <>
            Product <A>features</A>
          </>
        }
        lead="Five connected apps, each illustrated to explain one part of the restaurant workflow."
      >
        <div className="flex flex-col gap-[72px]">
          {features.map((f, i) => (
            <FeatureRow
              key={f.title}
              reverse={i % 2 === 1}
              eyebrow={f.eyebrow}
              title={f.title}
              text={f.text}
              media={
                <Frame className="flex-row! items-center">
                  <Img src={`${I}/${f.src}`} alt={f.alt} w={f.w} h={f.h} />
                </Frame>
              }
            />
          ))}
        </div>
      </CaseSection>

      <Band bg={PLUM} gap={32}>
        <BandHeader
          title={
            <>
              Business <A>type</A>
            </>
          }
          lead="One platform for every kind of food business — and one flow from scan to bill."
        />
        <Pills dark size="md" items={["Café / Bakery", "Cinema", "QSR", "Fine dine", "Cloud kitchen", "Ice cream parlour", "Bar & brewery"]} />
        <Frame variant="bleed">
          <Img
            src={`${I}/end-to-end-flow-scan-the-code-place-orde-eabb50`}
            alt="End-to-end flow: scan the code, place order, KOT to kitchen, POS on the bill desk, waiter serves, get bill and invoice"
            w={1263}
            h={1722}
            full
          />
        </Frame>
      </Band>

      <section className="container-site pt-32">
        <div className="relative">
          <Img
            src={`${I}/image-b9153e`}
            alt=""
            w={1118}
            h={670}
            className="pointer-events-none absolute right-0 top-[-20px] z-0 w-[46%]! opacity-45"
            maxWidth={560}
          />
          <div className="relative z-[1]">
            <CaseSection
              pt="pt-0"
              title={
                <>
                  BILLD <A>pricing</A>
                </>
              }
              lead="Three plans by kitchen size, each with a quick sign-up form."
            />
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-start gap-4">
              {plans.map((p) => (
                <Plan key={p.name} {...p} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CaseSection
        title={
          <>
            Schedule <A>demo</A>
          </>
        }
        lead="A focused lead form paired with the product on tablet."
      >
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-center gap-8 overflow-hidden rounded-hero bg-[#111111] p-[clamp(28px,4vw,56px)] text-paper">
          <div className="flex flex-col gap-4" aria-hidden="true">
            <p className="m-0 text-[clamp(32px,3.4vw,48px)] font-bold leading-none tracking-[-0.04em]">Schedule demo</p>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3">
              {demoFields.map((f) => (
                <span key={f} className="flex flex-col gap-1.5 text-sm text-[#D9CBE3]">
                  {f}
                  <span className="block rounded-[10px] border border-white/18 bg-white/10 px-[14px] py-3 text-[#A592B3]">{f}</span>
                </span>
              ))}
            </div>
            <span className="mt-2 block rounded-pill p-[15px] text-center font-semibold text-[#1A1A1A]" style={{ background: APRICOT }}>
              Book a demo
            </span>
          </div>
          <Img src={`${I}/billd-on-a-tablet-held-in-two-hands-c21da9`} alt="BILLD on a tablet held in two hands" w={558} h={558} />
        </div>
      </CaseSection>
    </>
  ),
};
