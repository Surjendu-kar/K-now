import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import menu_data from "./menu-data";

const NavMenu = () => {
  const pathname = usePathname();

  // Function to check if a link is active
  const isLinkActive = (path) => {
    if (path === "#") return false;
    if (path === "/") return pathname === "/";
    return pathname === path;
  };

  // Function to check if any submenu item is active
  const hasActiveSubmenu = (subMenus) => {
    return subMenus?.some((sub) => isLinkActive(sub.link));
  };

  return (
    <>
      <ul>
        {menu_data.map((item) => {
          const isActive =
            isLinkActive(item.link) || hasActiveSubmenu(item.sub_menus);
          const linkStyle = isActive ? { color: "var(--tp-theme-1)" } : {};

          return (
            <li
              key={item.id}
              className={item.has_dropdown ? "has-dropdown" : ""}
            >
              <Link href={item.link} style={linkStyle}>
                {item.title}
              </Link>
              {item.has_dropdown && (
                <ul className="submenu">
                  {item.sub_menus.map((sub, i) => {
                    const isSubActive = isLinkActive(sub.link);
                    const subLinkStyle = isSubActive
                      ? { color: "var(--tp-heading-secondary)" }
                      : {};

                    return (
                      <li key={i}>
                        <Link href={sub.link} style={subLinkStyle}>
                          {sub.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default NavMenu;
