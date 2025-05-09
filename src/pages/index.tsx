
import { LandingLayout } from "@layout"
import { HomePage } from "@home"
export default function Home() {
   return (
    <LandingLayout
    showFooter={true}
    showNav={false}
    >
      <HomePage/>
    </LandingLayout>
  )
}
