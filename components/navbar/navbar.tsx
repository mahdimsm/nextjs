import Container from "../ui/container";

import Image from "next/image";
import logoNav from "@/public/logo.png";
import NavbarRoutes from "./navbar-routes";
import NavbarMobileMenu from "./navbar-mobile-menu";
import UserLogin from "./user-login";

const Navbar = () => {
  return (
    <nav className="border-b py-3">
      <Container isFullHeight className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-x-6">
          <div className="hidden md:block">
            <Image src={logoNav} alt="site-logo"  width={40} height={40}/>
          </div>
          <div className='hidden md:block'>
            <NavbarRoutes />
          </div>
          <div className='block md:hidden'>
            <NavbarMobileMenu/>
          </div>
        </div>
        <div className='flex items-center justify-normal gap-x-6'>
          <UserLogin/>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
