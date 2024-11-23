import Button from "./Button";

const Navbar = () => {
  return( 
  <div className="flex justify-center items-center relative top-9">
    <nav className="fixed flex gap-24 p-1.5 border bg-white border-white rounded-full items-center">
      <a href="#" className="nav-item text-2xl text-neutral-700 bold-16">Home</a>
      <a href="#" className="nav-item text-2xl text-neutral-700 bold-16">Projects</a>
      <a href="#" className="nav-item text-2xl text-neutral-700 bold-16">Services</a>
      <a href="#" className="nav-item text-2xl text-neutral-700 bold-16 hover:text-neutral-900">Contact</a>
      <Button 
            type="button" 
            title="Book Now" 
            icon="/calendar.svg"
            variant="btn_dark_green"
          />
    </nav>
  </div>
  );
};

export default Navbar;