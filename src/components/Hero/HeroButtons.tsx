import Button from "../Button/Button"   
import { FaGithub, FaLinkedin } from "react-icons/fa";


const HeroButtons = () => {
  return (
    <>
      <div className="flex flex-row justify-between w-7xl">
        <div className="flex flex-row gap-5 justify-center w-80 mt-12">
          <Button variant="primary">
            Ver Projetos
          </Button> 

          <Button variant="secundary">
            Meus Serviços
          </Button>
        </div>

        <div className="flex flex-row gap-5 justify-center mt-12 mr-24">
          <Button variant="socialMidia" >
            <FaLinkedin className="w-5 h-5"/>
            LinkedIn
          </Button>

          <Button variant='socialMidia'>
            <FaGithub className="w-5 h-5"/>
            GitHub
          </Button>
        </div>
      </div>
    </>
  )
}

export default HeroButtons