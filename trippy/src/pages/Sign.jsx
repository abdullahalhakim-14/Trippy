import Form from "../components/Form/Form"
import Hero from "../components/Hero/Hero"

const Sign = () => {
  const inputs = [
    {
      name: "Your Name",
      type: "text"
    },
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
        bgImage="/assets/img/contact.jpg"
        title="Sign Up"
      />
      <Form
        title="Create an account"
        inputs={inputs}
        btn="Register"
        sentens="Have already an account?"
        logBtn=" Login here"
      />
    </div>
  )
}

export default Sign
