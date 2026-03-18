const Header = () => {
  return (
    <section>
      <div className="h-[40px] bg-black w-full" ></div>
      <div className="relative w-full">
        <img src="/ES_pattern_black.svg" className="w-full h-[120px] object-cover" alt="Header pattern" />
        <a href="/">
          <img src="/ES_Signature.jpg" className="absolute top-2 left-6 h-[100px] w-10px h-10px" alt="Eesti statiskita logo" />
        </a>
      </div>
    </section>
  )
}

export default Header