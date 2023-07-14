"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
interface ListItemProps {
    image: string;
    name: string;
    herf: string;
}
const ListItem: React.FC<ListItemProps> = ({
    image,
    name,
    herf
}) => {
  const router = useRouter();
  const onCLick = () => {
    // Add authentication before push
    router.push(herf);
  };
  return (
    <button
    className="
      relative
      group
      flex
      items-center
      rounded-md
      overflow-hidden
      gap-x-4
      bg-neutral-100/10
      hover:bg-neutral-100/20
      transition
      pr-4
    "
    >
        <div className="
        relative
        min-h-[64px]
        min-w-[64px]
        ">
        <Image
        className="object-cover"
        fill 
        src={image}
        alt = "image"
        />
        </div>
        <p>
            {name}
        </p>

    </button>
  )
}

export default ListItem
