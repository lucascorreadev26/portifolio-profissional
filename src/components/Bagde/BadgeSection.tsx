import React, { Children } from 'react'

type BadgeSectionProps = {
    children: React.ReactNode,
    variant?: "primary", 
}

const BadgeSection = ({children, variant = "primary"}: BadgeSectionProps) => {
  return (
    <>
        <div className={`BadgeStatus inline-flex rounded-full items-center ml-3 px-4 py-2 gap-4 border border-blue-500/40 bg-[#0B1220]/90shadow-[0_0_25px_rgba(59,130,246,0.12)] backdrop-blur-sm 
            ${variant === "primary"}`}>
            <span className="text-xs text-blue-200 font-medium" >
                {children}
            </span>
        </div>
    
    </>
  )
}

export default BadgeSection