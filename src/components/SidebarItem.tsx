import Link from "next/link";
import { twMerge } from "tailwind-merge";

import { IconType } from "react-icons";
interface SidebarItemProps{
    icon: IconType;
    label:string;
    active?: boolean;
    herf:string;
  }
const SidebarItem:React.FC<SidebarItemProps> = ({
    icon:Icon,label,active,herf
}) => {
  return (
    <div>
        <Link href={herf} className={twMerge(`flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1 `,active && "text-white")}>
        <Icon size={26}/>
        <p className="truncate w-full">{label}</p>
        </Link>
      
    </div>
  )
}

export default SidebarItem
