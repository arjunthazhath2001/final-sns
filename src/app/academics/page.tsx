import FeaturedPrograms from '@/components/FeaturedPrograms'
import Institutions from '@/components/Institutions'
import OurFacilities from '@/components/OurFacilities'
import OurFaculty from '@/components/OurFaculty'
import OurTech from '@/components/OurTech'
import { SparklesPreview } from '@/components/SparklesPreview'
import Spine from '@/components/Spine'
import React from 'react'

export default function AcademicsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Section 1 */}
      <section className="pb-44 pt-24 sm:max-lg:py-28 xl:pt-44 xl:pb-44 flex items-center justify-start px-4 sm:px-6">
        <div className="w-full text-center">       
          <SparklesPreview/>
        </div>
      </section>

      {/* Section 2 */}
      <section className="md:max-xl:max-h-[500px] md:max-xl:my-20 sm:max-md:my-32 my-12 flex items-center justify-center px-4 sm:px-6">
        <div className="w-full text-center">
          <FeaturedPrograms/>
        </div>
      </section>

      {/* Section 3 */}
      <section className="md:max-xl:max-h-[500px] md:max-xl:mb-20 sm:max-md:mb-32 mb-12 flex items-center justify-center px-4 sm:px-6">
        <div className="w-full text-center">
          <Institutions/>
        </div>
      </section>

      {/* Section 4 */}
      <section className="md:max-xl:max-h-[500px] md:max-xl:mb-20 sm:max-md:mb-32 mb-12 flex items-center justify-center px-4 sm:px-6">
        <div className="w-full text-center">
          <Spine/>
        </div>
      </section>

      {/* Section 5 */}
      <section className="md:max-xl:max-h-[500px] md:max-xl:mb-20 sm:max-md:mb-32 mb-12 flex items-center justify-center px-4 sm:px-6">
        <div className="w-full text-center">
          <OurFacilities/>
        </div>
      </section>

      {/* Section 6 */}
      <section className="md:max-xl:max-h-[500px] md:max-xl:mb-20 sm:max-md:mb-32 mb-12 flex items-center justify-center px-4 sm:px-6">
        <div className="w-full text-center">
          <OurTech/>
        </div>
      </section>

      {/* Section 7 */}
      <section className="md:max-xl:max-h-[500px] md:max-xl:mb-20 sm:mb-12 mb-12 flex items-center justify-center px-4 sm:px-6">
        <div className="w-full text-center">
          <OurFaculty/>
        </div>
      </section>
    </div>
  )
}
