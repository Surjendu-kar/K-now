import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import menu_data from "./menu-data";

const MobileMenus = () => {
  const [navTitle, setNavTitle] = useState("");
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

  // openMobileMenu
  const openMobileMenu = (menu) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };

  return (
    <>
      <nav className="mean-nav">
        <ul>
          {menu_data.map((menu, i) => {
            const isActive =
              isLinkActive(menu.link) || hasActiveSubmenu(menu.sub_menus);
            const linkStyle = isActive ? { color: "var(--tp-theme-1)" } : {};

            return (
              <React.Fragment key={i}>
                {menu.has_dropdown && (
                  <li className="has-dropdown">
                    <Link href={menu.link} style={linkStyle}>
                      {menu.title}
                    </Link>
                    <ul
                      className="submenu"
                      style={{
                        display: navTitle === menu.title ? "block" : "none",
                      }}
                    >
                      {menu.sub_menus.map((sub, i) => {
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
                    <a
                      className={`mean-expand ${
                        navTitle === menu.title ? "mean-clicked" : ""
                      }`}
                      onClick={() => openMobileMenu(menu.title)}
                      style={{ fontSize: "18px", cursor: "pointer" }}
                    >
                      <i className="fal fa-plus"></i>
                    </a>
                  </li>
                )}
                {!menu.has_dropdown && (
                  <li>
                    <Link
                      href={menu.link}
                      style={
                        isLinkActive(menu.link)
                          ? { color: "var(--tp-theme-1)" }
                          : {}
                      }
                    >
                      {menu.title}
                    </Link>
                  </li>
                )}
              </React.Fragment>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default MobileMenus;
