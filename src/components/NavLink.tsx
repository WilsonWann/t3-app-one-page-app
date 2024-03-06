"use client";
import React, { useCallback } from "react";
import type { ComponentPropsWithoutRef, ElementType } from "react";
import Link from "next/link";
// import { usePathname } from "next/navigation";
import { navbarOpenAtom } from "~/atoms";
import { useAtom } from "jotai";

const DEFAULT_TYPE = Link;

type Props<T extends ElementType> = {
  As?: T;
  href?: string;
  children?: React.ReactNode;
  externalLink?: boolean;
  onClick?: () => void;
} & ComponentPropsWithoutRef<T>;

function NavLink<T extends ElementType = typeof DEFAULT_TYPE>({
  As,
  href = "/",
  // exact = true,
  children,
  externalLink = false,
  onClick,
  ...props
}: Props<T>) {
  const Component = As ?? DEFAULT_TYPE;

  const [, toggleNavbar] = useAtom(navbarOpenAtom);

  const onClickHandler = useCallback(() => {
    if (onClick) {
      onClick();
    }
    toggleNavbar(false);
  }, [onClick, toggleNavbar]);

  // const pathname = usePathname();
  // const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (externalLink) {
    return (
      <Component href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </Component>
    );
  }

  return (
    <Component href={href} onClick={onClickHandler} {...props}>
      {children}
    </Component>
  );
}
// const NavLink = (props: Props) => {
//   const [, toggleNavbar] = useAtom(navbarOpenAtom)
//   const {
//     href,
//     children = '',
//     exact = true,
//     externalLink = false,
//     onClick = () => toggleNavbar(false),
//     ...rest
//   } = props
//   //! className props need props check
//   let className = rest.className
//   const pathname = usePathname()
//   const isActive = exact ? pathname === href : pathname.startsWith(href)

//   if (externalLink) {
//     return (
//       <a href={href} target='_blank' rel='noopener noreferrer'>
//         {children}
//       </a>
//     )
//   }

//   if (isActive) {
//     className += ' active'
//   }

//   return (
//     <Link href={href} {...rest} className={className} onClick={onClick}>
//       {children}
//     </Link>
//   )
// }

export default NavLink;
