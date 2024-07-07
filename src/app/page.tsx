'use client'
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Switch } from "@/components/ui/switch"
import * as React from "react"
import Link from 'next/Link'
let value=0
export function ButtonDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  return <div>
    <script>
      now.innerHTML="test"
    </script>
    <span id="now"></span>
    <Button>Button</Button>
  <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-md border"
  />
  <p>agree<Switch/></p>
<Link href="/sample">jump to page2</Link>

  </div>
}
export default ButtonDemo