import Image from 'next/image'

export default function Introduction() {
  return (
    <>
      <div className="mb-8 mt-8 flex space-x-4 rounded-xl bg-white">
        <div>
          <h4 className="mb-4 text-center text-xl font-semibold md:text-left">
            Hi there, My name is Serkan
          </h4>
          <p className="mb-2 text-gray-500">
            Dynamic Frontend Developer Specializing in E-commerce Websites, Always Seeking
            Innovation and Continuously Enhancing Skills in Frontend Development.
          </p>
          <p className="text-gray-500">I'm an algotrader, amator astronomer</p>
        </div>
      </div>
    </>
  )
}
