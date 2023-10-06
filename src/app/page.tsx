import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Topbar from '@/components/Topbar'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <Topbar />
      </MaxWidthWrapper>
      <main className="flex h-full flex-grow items-center justify-center bg-blue-900 ">
        <div className=" text-center ">
          <Button asChild variant="default">
            <Link href="/">Home Page</Link>
          </Button>
        </div>
      </main>
    </>
  )
}
