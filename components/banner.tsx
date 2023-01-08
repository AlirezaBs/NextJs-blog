function Banner() {
   return (
      <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-10">
         <div>
            <h1 className="md:text-6xl text-3xl">Alireza's Blog Site</h1>
         </div>

         <div className="mt-5 md:mt-2 text-gray-400 max-w-sm">
            New products features | The latest in technology | The wekly
            debugging | nightmares & more!
         </div>
      </div>
   )
}

export default Banner
