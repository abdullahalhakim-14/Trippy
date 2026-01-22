import { FaSquareBehance, FaSquareFacebook, FaSquareInstagram, FaSquareTwitter } from "react-icons/fa6"
import { IoHomeOutline } from "react-icons/io5"
import { BsInfoSquare } from "react-icons/bs"
import { MdOutlineHomeRepairService } from "react-icons/md"
import { RiContactsBook3Line } from "react-icons/ri"
import { Outlet } from "react-router"
import Footer from "../components/Footer/Footer"
import NavBar from "../components/NavBar/NavBar"

const Root = () => {
    const items = [
        {
            content: "Home",
            icon: <IoHomeOutline />,
            url: "/"
        },
        {
            content: "About",
            icon: <BsInfoSquare />,
            url: "/about"
        },
        {
            content: "Services",
            icon: <MdOutlineHomeRepairService />,
            url: "/services"
        },
        {
            content: "Contact",
            icon: <RiContactsBook3Line />,
            url: "/contact"
        }
    ]

    const icons = [
        {
            icon: <FaSquareFacebook />
        },
        {
            icon: <FaSquareInstagram />
        },
        {
            icon: <FaSquareBehance />
        },
        {
            icon: <FaSquareTwitter />
        }
    ]

    const details = [
        {
            subtitle: "Project",
            detail: [
                { linkItem: "Changelog", url: "./changelog" },
                { linkItem: "Issuse", url: "./issuse" },
                { linkItem: "Project", url: "./project" },
                { linkItem: "Twitter", url: "./https://twitter.com" }
            ]
        },
        {
            subtitle: "Community",
            detail: [
                { linkItem: "GitHub", url: "./https://github.com" },
                { linkItem: "Status", url: "./status" },
                { linkItem: "License", url: "./license" },
                { linkItem: "All Versions", url: "./versions" }
            ]
        },
        {
            subtitle: "Help",
            detail: [
                { linkItem: "Support", url: "./support" },
                { linkItem: "Troubleshooting", url: "./troubleshooting" },
                { linkItem: "Contact Us", url: "./contact" }
            ]
        },
        {
            subtitle: "Others",
            detail: [
                { linkItem: "Terms Of Services", url: "./Terms" },
                { linkItem: "Privacy Policy", url: "./privacy" },
                { linkItem: "License", url: "./license" }
            ]
        },
    ]

    return (
        <div>
            <NavBar
                logo="Trippy"
                items={items}
                btn="sign up"
            />
            <Outlet />
            <Footer
                title="Trippy"
                describtion="Choose your favourite destination."
                icons={icons}
                details={details}
            />
        </div>
    )
}

export default Root
