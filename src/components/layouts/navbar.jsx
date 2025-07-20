import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle
} from "flowbite-react";
import { NavLink } from "react-router";

export function NavbarComponent() {
  const menu = [
    {
      path: "/",
      title: "Home"
    },
    {
      path: "/products",
      title: "Products"
    },
    {
      path: "/about",
      title: "About"
    }
  ];

  return (
    <Navbar fluid rounded className="py-4 mb-5 sticky top-0">
      <NavbarBrand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        {menu.map((route, index) => (
          <NavLink className="hover:text-red-600" key={index} to={route.path}>
            {route.title}
          </NavLink>
        ))}
      </NavbarCollapse>
    </Navbar>
  );
}
