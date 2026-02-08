"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Avatar } from "@nextui-org/avatar";

const NavberDropdown = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const handleNavigation = (pathname: string) => {
    router.push(pathname);
  };


  // for hybration error handle
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar className="cursor-pointer" name="ana" />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        {/* {userRole == "vendor" ? (
          <DropdownItem onClick={() => handleNavigation(`/shop/${shopId}`)}>
            Profile
          </DropdownItem>
        ) : null} */}
        <DropdownItem
          key="dashboard"
          onClick={() => handleNavigation("/dashboard?key=dashboard")}
        >
          Dashboard
        </DropdownItem>

      </DropdownMenu>
    </Dropdown>
  );
};

export default NavberDropdown;
