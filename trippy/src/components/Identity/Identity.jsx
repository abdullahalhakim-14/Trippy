import "./Identity.css"
const Identity = ({items}) => {
    return (
        <div className="identity">
            {items.map((item , index) => {
                return (
                    <div key={index}>
                        <h3> {item.title} </h3>
                        <p> {item.describtion} </p>
                    </div>
                )
            })}
        </div>
    )
}

export default Identity
