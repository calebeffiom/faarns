
import { LandingLayout } from "@layout"
import { HomePage } from "@home"
export default function Home() {
   return (
    <LandingLayout
    showFooter={false}
    showNav={false}
    >
      <HomePage/>
    </LandingLayout>
  )
}
