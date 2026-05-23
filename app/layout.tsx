import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) 
{
  return (
    <html lang="en">
      <body>
        {/* Glassmorphism Header */}
        <header className="header">
          <h1 className="site-title">Nicole's Portfolio</h1>
          <nav className="navbar">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/about" className="nav-link">About Me</Link>
              <Link href="/skills" className="nav-link">Skills</Link>
              <Link href="/projects" className="nav-link">Projects</Link>
              <Link href="/hobbies" className="nav-link">Hobbies</Link>
              <Link href="/achievements" className="nav-link">Achievements</Link>
              <Link href="/education" className="nav-link">Education</Link>
              <Link href="/resume" className="nav-link">Resume</Link>
              <Link href="/gallery" className="nav-link">Gallery</Link>
              <Link href="/contact" className="nav-link">Contact</Link>
          </nav>
        </header>

        {/* Main Content */}
        <main className="main-content">{children}</main>

        {/* Glassmorphism Footer */}
        <footer className="footer">
          <p>© 2026 Nicole's Portfolio</p>
        </footer>
      </body>
    </html>
  );
}









