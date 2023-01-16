import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import App from 'components/App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Homepage } from './pages/Home'
import { Contact } from './pages/Contact'

// const container = document.getElementById('root') as HTMLDivElement
// const root = createRoot(container)

import { render } from 'react-dom'
const container = document.getElementById('root')

render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element = {<Homepage/>}></Route>
            <Route path="/contact" element = {<Contact/>}></Route>
        </Routes>
    </BrowserRouter>,
    container
)
