import Button from "./components/Button"
import Reference from "./components/Reference"
import Slider from "./components/Slider"
import TextWithCheck from "./components/TextWithCheck"

export default function Home() {
  return (
    <main className="relative z-10 flex h-full min-h-screen w-full max-w-7xl flex-col items-center px-6 pt-[5.56rem] lg:min-h-0 lg:pt-32">
      <h1 className="text-neutral-dark-desaturated-blue text-xl font-extrabold leading-normal">
        Simple, traffic-based pricing
      </h1>
      <p className="mb-16 mt-2 flex flex-col text-center text-[0.8125rem] font-semibold leading-[1.4375rem] sm:flex-row">
        <span>Sign-up for our 30-day trial.</span>
        <span>No credit card required.</span>
      </p>
      <div className="flex w-full max-w-[33.75rem] flex-col items-center rounded-lg bg-white pb-8 pt-[2.12rem] shadow-[0_20px_30px_-5px_rgba(127,137,185,0.15)]">
        <div className="grid-cols1 grid w-full place-items-center px-6 md:grid-cols-2 md:px-10">
          <h2 className="text-xs font-extrabold uppercase tracking-[0.10713rem]">
            100K Pageviews
          </h2>
          {/* <Slider className="w-full md:col-span-2" /> */}
          <div className="mb-[2.13rem] flex items-center gap-[0.62rem] md:col-start-2 md:row-start-1 md:mb-0">
            <span className="text-neutral-dark-desaturated-blue text-[2rem] font-extrabold -tracking-[0.05rem]">
              $16.00
            </span>
            <span className="text-sm font-semibold leading-normal">
              / month
            </span>
          </div>
        </div>
        <div className="border-neutral-light-grayish-blue flex w-full items-center justify-center gap-3 border-b pb-11 text-xs font-semibold">
          <p>Monthly Billing</p>
          <div>x</div>
          <p>
            Yearly Billing
            <span className="bg-custom-light-grayish-red text-custom-light-red ml-[0.34rem] rounded-full px-[0.45rem] py-[0.15rem] text-[0.625rem]">
              -25%
            </span>
          </p>
        </div>
        <div className="flex w-full flex-col items-center md:flex-row md:justify-between md:pl-12 md:pr-11">
          <div className="flex flex-col gap-[0.69rem] pt-6">
            <TextWithCheck>Unlimited websites</TextWithCheck>
            <TextWithCheck>100% data ownership</TextWithCheck>
            <TextWithCheck>Email reports</TextWithCheck>
          </div>
          <Button className="mt-8">Start my trial</Button>
        </div>
      </div>
      <Reference />
    </main>
  )
}
