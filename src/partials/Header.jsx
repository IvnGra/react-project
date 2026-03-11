const Header = () => {
  return (
    <section>
      <div className="h-[40px] bg-black w-full" ></div>
      <div className="relative w-full">
        <img src="/ES_pattern_black.svg" className="w-full h-[125px] object-cover" alt="Header pattern" />
        <img src="/ES_Signature.jpg" className="absolute top-2 left-6 h-[100px] w-auto" alt="Eesti statiskita logo" />
      </div>
    </section>
  )
}

export default Header