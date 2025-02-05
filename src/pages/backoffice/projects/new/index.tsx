import { DatePicker } from '@/components/DatePicker'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { CheckCircle, Upload } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function NewProject() {
  const bannerUrl = false
  return (
    <>
      <div className="p-1">
        <h2 className="text-3xl font-bold tracking-tighter font-mono">
          Create a new project
        </h2>
        <p className="font-mono mt-2 w-full max-w-3xl">
          Use this section to add project details, highlight your skills, and
          present your work in a professional way.
        </p>
      </div>
      <form>
        <div className="grid gap-8 py-4 w-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 items-start gap-4">
            <div className="col-span-1 flex flex-col justify-start gap-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Project Name</Label>
                <span className="text-xs text-muted-foreground">
                  Write the name of your project
                </span>
              </div>
            </div>
            <div className="col-span-2">
              <Input
                id="name"
                className="col-span-3"
                placeholder="You project name.."
              />
            </div>
          </div>
          <Separator orientation="horizontal" />

          <div className="grid grid-cols-1 md:grid-cols-4 items-start gap-4">
            <div className="col-span-1 flex flex-col justify-start gap-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="dates">Dates</Label>
                <span className="text-xs text-muted-foreground">
                  Define the start and end dates where you work in this project.
                </span>
              </div>
            </div>
            <div className="col-span-2 grid grid-cols-2 gap-2">
              <DatePicker />
              <DatePicker />
            </div>
          </div>
          <Separator orientation="horizontal" />
          <div className="grid grid-cols-4 items-start gap-4">
            <div className="col-span-1 flex flex-col justify-start gap-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="category_id">Tags (Stacks)</Label>
                <span className="text-xs text-muted-foreground">
                  Choose the tags that best describe your project
                </span>
              </div>
            </div>
            <div className="col-span-2">teste</div>
          </div>
          <Separator orientation="horizontal" />
          <div className="grid grid-cols-4 items-start gap-4">
            <div className="col-span-1 flex flex-col justify-start gap-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="description">Description</Label>
              </div>
            </div>
            <div className="col-span-2">
              <Textarea
                id="description"
                placeholder="You project description..."
              />
            </div>
          </div>
          <Separator orientation="horizontal" />
          <div className="grid grid-cols-1 md:grid-cols-4  gap-4">
            <div className="col-span-1 flex flex-col justify-start gap-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Choose a banner</Label>
                <span className="text-xs text-muted-foreground">
                  Choose a banner for your project
                </span>
              </div>
            </div>
            <div className="col-span-2">
              <div className="flex justify-end items-start gap-2 flex-col md:flex-row">
                <label className="w-full h-80 rounded-lg overflow-hidden border relative flex flex-col justify-center items-center cursor-pointer hover:bg-muted/30 transition-all hover:border-muted gap-2 border-dashed">
                  <input
                    type="file"
                    className="hidden"
                    accept="image/png, image/jpeg, image/svg, image/webp, image/gif"
                  />
                  {bannerUrl ? (
                    <Image
                      src={bannerUrl}
                      className="object-cover w-full h-full"
                      alt="Foto do produto"
                      width={64}
                      height={64}
                    />
                  ) : (
                    <>
                      <span className="p-3 rounded-full bg-muted">
                        <Upload
                          size={16}
                          className="text-zinc-800 dark:text-zinc-50"
                        />
                      </span>
                      <span className="dark:text-zinc-100 text-zinc-800">
                        <span className="text-violet-800 font-medium">
                          Click here to select a project image
                        </span>
                      </span>
                      <span className="text-xs text-neutral-400/80">
                        SVG, PNG, JPG, WEBP
                      </span>
                    </>
                  )}
                </label>
              </div>
            </div>
          </div>
          <Separator orientation="horizontal" />
        </div>
        <div className="flex justify-start gap-4">
          <Button type="button" size="sm" variant="secondary">
            <Link href="/backoffice/projects">Cancel</Link>
          </Button>
          <Button type="submit" size="sm">
            Save <CheckCircle className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </form>
    </>
  )
}
