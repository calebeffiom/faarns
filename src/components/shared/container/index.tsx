import { JSX } from "react"
interface PropTypes{
    children: JSX.Element | React.ReactNode;
}
const Container = ({children}:PropTypes) =>{
    return(
        <div className='absolute w-[100%] z-20'>
            {children}
        </div>
    )
}
export default Container