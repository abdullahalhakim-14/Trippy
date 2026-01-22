import Form from "../components/Form/Form"
import Hero from "../components/Hero/Hero"

const LogIn = () => {
    const inputs = [
        {
            name: "Your Email",
            type: "email"
        },
        {
            name: "Password",
            type: "password"
        },
        {
            name: "Repeat Your Password",
            type: "password"
        }
    ]

    return (
        <div>
            <Hero
                bgImage="/assets/img/logIn.jpg"
                title="Log In"
            />
            <Form
                title="Log in my account"
                inputs={inputs}
                btn="Log In"
            />
        </div>
    )
}

export default LogIn
