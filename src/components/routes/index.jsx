import { Route, Routes } from "react-router-dom"
import { NotFound404Page } from "../../pages/404"
import { AboutPage } from "../../pages/aboutMe"
import { ContactPage } from "../../pages/contact"
import { ProjectPage } from "../../pages/Project"

export const RoutesComponent = () => {
return (
    <Routes>
    <Route path="/" element ={<AboutPage/>}/>
    <Route path="/project" element ={<ProjectPage/>}/>
    <Route path="/contact" element ={<ContactPage/>}/>
    <Route path="*" element ={<NotFound404Page/>}/>
    </Routes>
)
}