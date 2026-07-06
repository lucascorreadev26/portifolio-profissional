import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <>
        <Link to="/" className="Logo">
            <span className="text-blue-600 text-xl font-bold">&lt;</span>
            <span className="text-xl font-bold">Lucas Corrêa Dev</span>
            <span className="text-blue-600 text-xl font-bold pl-3">/&gt;</span>
        </Link>
    </>
  )
}

export default Logo