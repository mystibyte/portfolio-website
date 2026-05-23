"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() 
{
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>
      <Link href="/about" className={pathname === "/about" ? "active" : ""}>About Me</Link>
      <Link href="/skills" className={pathname === "/skills" ? "active" : ""}>Skills</Link>
      <Link href="/projects" className={pathname === "/projects" ? "active" : ""}>Projects</Link>
      <Link href="/hobbies" className={pathname === "/hobbies" ? "active" : ""}>Hobbies</Link>
      <Link href="/achievements" className={pathname === "/achievements" ? "active" : ""}>Achievements</Link>
      <Link href="/education" className={pathname === "/education" ? "active" : ""}>Education</Link>
      <Link href="/resume" className={pathname === "/resume" ? "active" : ""}>Resume</Link>
      <Link href="/gallery" className={pathname === "/gallery" ? "active" : ""}>Gallery</Link>
      <Link href="/contact" className={pathname === "/contact" ? "active" : ""}>Contact</Link>
    </nav>
  );
}






