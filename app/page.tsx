"use client"
import Slider from "@/components/Slider"
import Button from "@/components/Button"
import Reference from "@/components/Reference"
import TextWithCheck from "@/components/TextWithCheck"
import Toggle from "@/components/Toggle"
import { useEffect, useState } from "react"
import pricingTiers from "./pricing.json"

export default function Home() {
  const [isYearly, setIsYearly] = useState(false)
  const [currentPrice, setCurrentPrice] = useState(
    pricingTiers[2].pricePerMonth,
  )
  const [currentViews, setCurrentViews] = useState(pricingTiers[2].pageviews)
  const [sliderValue, setSliderValue] = useState(50) // Assuming 0-100 scale for simplicity

  useEffect(() => {
    // Determine the index based on slider value (simple linear mapping for demonstration)
    const index = Math.floor((sliderValue / 100) * (pricingTiers.length - 1))
    const selectedTier = pricingTiers[index]
    setCurrentViews(selectedTier.pageviews)
    setCurrentPrice(
      isYearly ? selectedTier.pricePerYear : selectedTier.pricePerMonth,
    )
  }, [sliderValue, isYearly])

  const handleSliderChange = (newValue: number) => {
    setSliderValue(newValue)
  }

  const handleToggle = () => {
    setIsYearly((prev) => !prev)
  }

  return (
    <main className="relative z-10 flex h-full min-h-screen w-full max-w-7xl flex-col items-center px-6 pt-[5.56rem] lg:min-h-0 lg:pt-[6.5rem]">
      <h1 className="text-xl font-extrabold leading-normal text-neutral-dark-desaturated-blue lg:text-[1.75rem] lg:leading-normal">
        Simple, traffic-based pricing
      </h1>
      <p className="mb-16 mt-2 flex flex-col text-center text-[0.8125rem] font-semibold leading-[1.4375rem] sm:flex-row sm:gap-1 lg:mt-3 lg:text-[0.9375rem] lg:leading-normal">
        <span>Sign-up for our 30-day trial.</span>
        <span>No credit card required.</span>
      </p>
      <div className="flex w-full max-w-[33.75rem] flex-col items-center rounded-lg bg-white pb-8 pt-[2.12rem] shadow-[0_20px_30px_-5px_rgba(127,137,185,0.15)]">
        <div className="grid-cols1 grid w-full place-items-center px-6 md:grid-cols-2 md:px-10">
          <h2 className="text-xs font-extrabold uppercase tracking-[0.10713rem] lg:text-sm">
            {currentViews} Pageviews
          </h2>
          <div className="mb-[2.5rem] mt-[2.56rem] w-full md:col-span-2">
            <Slider
              className="w-full"
              value={sliderValue}
              onChange={handleSliderChange}
            />
          </div>
          <div className="mb-[2.13rem] flex items-center gap-[0.62rem] md:col-start-2 md:row-start-1 md:mb-0">
            <span className="text-[2rem] font-extrabold -tracking-[0.05rem] text-neutral-dark-desaturated-blue lg:text-[2.5rem]">
              ${currentPrice.toFixed(2)}
            </span>
            <span className="text-sm font-semibold leading-normal lg:text-base">
              {isYearly ? "/ year" : "/ month"}
            </span>
          </div>
        </div>
        <div className="flex w-full items-center justify-center gap-3 border-b border-neutral-light-grayish-blue pb-11 text-xs font-semibold">
          <p>Monthly Billing</p>
          <Toggle isOn={isYearly} onToggle={handleToggle} />
          <p>
            Yearly Billing
            <span className="ml-[0.34rem] rounded-full bg-custom-light-grayish-red px-[0.45rem] py-[0.15rem] text-[0.625rem] text-custom-light-red">
              -25% <span className="hidden md:inline-block">discount</span>
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
