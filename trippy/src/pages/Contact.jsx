import Hero from "../components/Hero/Hero"
import Form from "../components/Form/Form"


const Contact = () => {
    let inputs = [
        {
            name: "Name",
            type: "text"
        },
        {
            name: "Email",
            type: "email"
        },
        {
            name: "Supject",
            type: "text"
        },
    ]
    return (
        <div>
            <Hero
                bgImage="/assets/img/contact.jpg"
                title="Contact"
            />
            <Form
                title="Send a message to us!"
                inputs={inputs}
                textArea="Message"
                btn="Send Message"
            />
        </div>
    )
}

export default Contact
