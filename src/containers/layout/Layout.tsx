import { Header } from './Header'
import { Footer } from './Footer'

type Props = {
    children: JSX.Element | JSX.Element[]
    // footerVariant: string
}

export function Layout(props: Props) {
    return (
        <>
            <Header/>
            <main>{props.children}</main>
            <Footer/>
        </>
    )
}