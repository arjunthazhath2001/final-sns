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
      <section className="pt-20 pb-44 flex items-center justify-center px-4 sm:px-6">
        <div className="w-full text-center">       
          <SparklesPreview/>
        </div>
      </section>

      {/* Section 2 */}
      <section className="sm:max-2xl:max-h-[600px] sm:max-lg:my-32 xl:mt-32 xl:mb-0 mb-8 flex items-center justify-center px-4 sm:px-6">
        <div className="w-full text-center">
          <FeaturedPrograms/>
        </div>
      </section>

      {/* Section 3 */}
      <section className="sm:max-2xl:max-h-[600px] sm:max-lg:my-32 xl:mb-0 mb-8 flex items-center justify-center px-4 sm:px-6">
        <div className="w-full text-center">
          <Institutions/>
        </div>
      </section>

      {/* Section 4 */}
      <section className="sm:max-2xl:max-h-[600px] sm:max-lg:my-32 xl:mb-0 mb-8 flex items-center justify-center px-4 sm:px-6">
        <div className="w-full text-center">
          <Spine/>
        </div>
      </section>

      {/* Section 5 */}
      <section className="sm:max-2xl:max-h-[600px] sm:max-lg:my-32 xl:mb-0 mb-8 flex items-center justify-center px-4 sm:px-6">
        <div className="w-full text-center">
          <OurFacilities/>
        </div>
      </section>

      {/* Section 6 */}
      <section className="sm:max-2xl:max-h-[600px] sm:max-lg:my-32 xl:mb-0 mb-8 flex items-center justify-center px-4 sm:px-6">
        <div className="w-full text-center">
          <OurTech/>
        </div>
      </section>

      {/* Section 7 */}
      <section className="sm:max-2xl:max-h-[600px] sm:max-lg:my-32 xl:mb-0 mb-8 flex items-center justify-center px-4 sm:px-6">
        <div className="w-full text-center">
          <OurFaculty/>
        </div>
      </section>
    </div>
  )
}
