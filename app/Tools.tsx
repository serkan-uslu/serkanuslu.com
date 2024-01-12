import Image from 'next/image'

export default function Tools({ tools }) {
  return (
    <>
      <h4 className="mb-4 text-center text-xl font-semibold md:text-left">Languages and Tools</h4>
      <div className="flex flex-wrap gap-4">
        {tools.map((item, index) => (
          <a
            href={item.link}
            key={index}
            className="fl20 h-20 w-20 items-center justify-center border-2 bg-white p-4"
          >
            <Image
              width={18}
              height={18}
              src={item.logo}
              alt={item.altText}
              className="h-full w-full object-cover"
            />
          </a>
        ))}
      </div>
    </>
  )
}
