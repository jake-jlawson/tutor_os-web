"use client"

import LessonDetailsForm from "../components/lesson-input-form"
import Image from "next/image"

export default function Page() {
  return (<>
    <div className="absolute top-10 left-10"><Image src="/BlackLogo.png" alt="Logo" width={80} height={80} /></div>
    <LessonDetailsForm
      onSubmit={(data) => {
        console.log("Form submitted:", data)
        alert(`Lesson created for ${data.studentName}`)
      }}
    />
    </>
  )
}