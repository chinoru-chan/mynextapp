'use client'
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Switch } from "@/components/ui/switch"
import * as React from "react"
import Link from 'next/Link'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

let value = 0
export function ButtonDemo() {

  const [date, setDate] = React.useState<Date | undefined>(new Date())
  return <div>
    <p>page2</p>
    <Link href="/">return to top page</Link>
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableCell>name</TableCell>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>unPaid</TableCell>
          <TableCell>a</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV002</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>b</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$334.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV003</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>c</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$810.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <Link href="https://x.com/chinoru6">contact me</Link>
  </div>
}
export default ButtonDemo