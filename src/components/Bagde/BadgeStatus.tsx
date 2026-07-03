const BadgeStatus = () => {
  return (
    <div className="hidden lg:inline-flex items-center gap-4 rounded-full  ml-0 lg:ml-3 px-4 py-2 border border-blue-500/40 bg-[#0B1220]/90 shadow-[0_0_25px_rgba(59,130,246,0.12)] backdrop-blur-sm">

      <div className="relative flex h-2.5 w-2.5">
        {/* Bolinha que pulsa */}
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>

        {/* Bolinha fixa */}
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400"></span>
      </div>

      <span className="text-[11px] sm:text-xs text-blue-200 font-medium whitespace-nowrap">
        Disponível para projetos
      </span>
    </div>
  )
}

export default BadgeStatus