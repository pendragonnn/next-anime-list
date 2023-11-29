import Image from "next/image"
import Link from "next/link"

const AnimeList = ({ title, images, id}) => {
  return (
    <Link href={`/${id}`} className="cursor-pointer">
      <Image src={images} width={350} height={350} alt="..." className="w-full max-h-64 object-cover" />
      <h3 className="font-bold text-md md:text-xl p-4">{title}</h3>
    </Link>
  )
}

export default AnimeList