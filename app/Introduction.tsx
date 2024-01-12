export default function Introduction() {
  return (
    <>
      <div className="mb-8 mt-8 flex space-x-4 rounded-xl">
        <div className="prose max-w-none dark:prose-invert">
          <h4 className="text-center text-xl font-semibold md:text-left">
            Hi there, My name is Serkan
          </h4>
          <div className="relative h-48 w-full overflow-hidden rounded-2xl border-2">
            <img
              className="absolute inset-0 m-0 h-48 w-full object-cover"
              src="/serkan-uslu.png"
              alt="Serkan USLU | Frontend Developer"
            />
          </div>

          <p className="text-md mb-2">
            Dynamic Frontend Developer Specializing in E-commerce Websites, Always Seeking
            Innovation and Continuously Enhancing Skills in Frontend Development.
          </p>
          <p className="text-md mb-2">
            A frontend developer from{' '}
            <span className="font-semibold underline">Turkey/Istanbul.</span>
          </p>
          <p className="text-md mb-2">
            I’m currently working on Inveon -{' '}
            <span className="font-semibold underline">Digital Commerce Solutions.</span>
          </p>
          <p className="text-md mb-2">
            I’m currently learning <span className="font-semibold underline">React-Native.</span>
          </p>
          <p className="text-md mb-2">
            Fun fact:{' '}
            <span className="font-semibold underline">
              Listen Rap Music. Drawing is textured art.
            </span>
          </p>
          <p className="text-md mb-2">
            Also I'm an <span className="font-semibold underline">algorithmic trader</span> on{' '}
            <span className="font-semibold underline">
              Crypto Currency Market, BIST100, S&P500.
            </span>
          </p>
        </div>
      </div>
    </>
  )
}
