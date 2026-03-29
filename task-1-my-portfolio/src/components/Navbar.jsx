const Navbar = () => {
  return (
    <>
      <section className="h-16 p-2">
        <nav className="flex items-center justify-between">
          <h1 className="text-4xl uppercase font-light">
            My Port<span className="font-bold text-cyan-400">folio</span>
          </h1>
          <ul className="flex gap-9 text-lg font-light">
            <li className="hover:text-cyan-500 hover:underline hover:transition-all cursor-pointer">
              Home
            </li>
            <li className="hover:text-cyan-500 hover:underline hover:transition-all cursor-pointer">
              About
            </li>
            <li className="hover:text-cyan-500 hover:underline hover:transition-all cursor-pointer">
              Skills
            </li>
            <li className="hover:text-cyan-500 hover:underline hover:transition-all cursor-pointer">
              Projects
            </li>
            <li className="hover:text-cyan-500 hover:underline hover:transition-all cursor-pointer">
              Contact
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
