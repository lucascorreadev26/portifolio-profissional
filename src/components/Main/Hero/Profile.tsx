import perfilPortifolio from '../../../assets/perfilPortifolio.png'

const Profile = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80">

      <div>
        {/* Fumaça */}
        <div className="absolute w-52 h-52 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full bg-blue-500/20 blur-3xl animate-smoke" />

        {/* Foto */}
        <img
          src={perfilPortifolio}
          alt="Imagem de Perfil do Desenvolvedor Lucas Correa"
          className="relative z-10 w-56 sm:w-64 lg:w-80 rounded-full animate-profile-flip"
        />
      </div>

    </div>
  )
}

export default Profile