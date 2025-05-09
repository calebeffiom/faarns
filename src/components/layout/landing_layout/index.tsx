import { JSX } from "react"
import {Container, Navbar, Footer} from "@shared"
interface PropTypes{
    showFooter: boolean,
    showNav: boolean,
    children: JSX.Element | React.ReactNode;

}
const LandingLayout = ({
    showFooter = true,
    showNav = true,
    children
}:PropTypes) => { 
    return(
      <Container>
        {showNav && <Navbar/>}
        {children}
        {showFooter && <Footer/>}
      </Container>
    )
}
export default LandingLayout;