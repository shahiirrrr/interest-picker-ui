import Image from "next/image"

export default function Header() {
  return (
    <header className="relative z-10 flex items-center justify-between px-4 md:px-6 py-4 md:py-6">
      <div className="text-white font-bold text-2xl md:text-3xl">
        <div className="w-[37.41px] h-[51.69px] relative">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <div className="w-[18px] h-[20px] relative cursor-pointer">
          <Image 
            src="/notification_icon.svg" 
            alt="Notifications" 
            fill
            className="object-contain hover:opacity-80 transition-opacity"
          />
        </div>
        <div className="w-[51px] h-[51px] relative cursor-pointer">
          <Image 
            src="/user_avatar.svg" 
            alt="User" 
            fill
            className="object-contain"
          />
        </div>
      </div>
    </header>
  )
}
