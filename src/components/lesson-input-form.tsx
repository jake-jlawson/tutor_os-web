"use client"

import * as React from "react"
import {
  TextField as AriaTextField,
  Label as AriaLabel, // kept for type parity (Label component uses AriaLabel under the hood)
} from "react-aria-components"
import { ArrowRight } from "lucide-react"

import { Button } from "./ui/Button"
import { Label } from "./ui/Label"
import { Input } from "./ui/Input"


interface LessonDetailsFormProps {
  onSubmit?: (data: { studentName: string; meetingLink: string }) => void
}


export default function LessonDetailsForm({ onSubmit }: LessonDetailsFormProps = {}) {
  const [studentName, setStudentName] = React.useState("")
  const [meetingLink, setMeetingLink] = React.useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit?.({ studentName, meetingLink })
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        <div className="text-left space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Start a New Lesson
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <AriaTextField className="group flex flex-col gap-2">
            <Label>Student Name</Label>
            <Input
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="Enter student's name"
              required
            />
          </AriaTextField>

          <AriaTextField className="group flex flex-col gap-2">
            <Label>Meeting Link</Label>
            <Input
              value={meetingLink}
              onChange={(e) => setMeetingLink(e.target.value)}
              placeholder="https://meet.google.com/..."
              type="url"
              required
            />
          </AriaTextField>

          <Button
            type="submit"
            size="lg"
            className="w-full gap-2 text-base font-semibold"
          >
            Go
            <ArrowRight className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  )
}