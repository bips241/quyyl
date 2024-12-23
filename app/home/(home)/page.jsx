import { ComboboxDemo } from "@/components/ComboBox"
import { columns } from "./columns"
import { DataTable } from "./data-table"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

const Years = [
  ["AY 24-25"],[
    {
      value: "2024",
      label: "Batch 2024",
    },
    {
      value: "2023",
      label: "Batch 2023",
    },
    {
      value: "2022",
      label: "Batch 2022",
    },
    {
      value: "2021",
      label: "Batch 2021",
    },
    {
      value: "2020",
      label: "Batch 2020",
    },
  ]
]

const Standard = [
  ["CBSE 12"],[
    {
      value: "CBSE 12",
      label: "CBSE 12",
    },
    {
      value: "CBSE 11",
      label: "CBSE 11",
    },
    {
      value: "CBSE 10",
      label: "CBSE 10",
    },
    {
      value: "CBSE 9",
      label: "CBSE 9",
    },
    {
      value: "CBSE 8",
      label: "CBSE 8",
    },
    {
      value: "CBSE 7",
      label: "CBSE 7",
    },
    {
      value: "CBSE 6",
      label: "CBSE 6",
    },
    {
      value: "CBSE 5",
      label: "CBSE 5",
    }
  ]
]

async function getData() {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      name: "John Doe",
      cohort: "Web Development",
      status: "pending",
      courses: "React, Node.js, Express",
      Jdate: "2021-01-01",
      lastActive: "2021-01-01",
    },
    {
      id: "728ed52f",
      name: "John Doe",
      cohort: "Web Development",
      status: "pending",
      courses: "React, Node.js, Express",
      Jdate: "2021-01-01",
      lastActive: "2021-01-01",
    },
    {
      id: "728ed52f",
      name: "John Doe",
      cohort: "Web Development",
      status: "pending",
      courses: "React, Node.js, Express",
      Jdate: "2021-01-01",
      lastActive: "2021-01-01",
    },
    {
      id: "728ed52f",
      name: "John Doe",
      cohort: "Web Development",
      status: "pending",
      courses: "React, Node.js, Express",
      Jdate: "2021-01-01",
      lastActive: "2021-01-01",
    },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="m-0">
      <div className="flex justify-between m-3 ml-0">
        <div className="flex space-x-4">
          <ComboboxDemo datas={Years}/>
          <ComboboxDemo datas={Standard}/>
        </div>
        <div>
          <Button className="bg-[#e9edf1] hover:bg-[#cfdeec] text-black">
            <Plus />
            Add New Student
          </Button>
        </div>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  )
}

