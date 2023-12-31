import {ToastContainer} from "react-toastify";
import {Container} from "react-bootstrap";
import TopNavigation from "./TopNavigation";
import {createGlobalStyle} from "styled-components";
import Footer from "./Footer";


const BackgroundColor = createGlobalStyle`
    body{
        background-color: ${props => (props.whiteColor ? '#f2f2f2' : 'black')}
    }
`

const Layout = ({children}) => {
    return (
        <div>
            <BackgroundColor whiteColor/>
            <ToastContainer/>
            <TopNavigation/>
            <Container className={"mt-5 mb-5"}>
                {children}
            </Container>
            <Footer/>
        </div>
    )
}

export default Layout