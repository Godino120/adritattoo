import { BrandX } from "@mynaui/icons-react";
import { BrandInstagram } from "@mynaui/icons-react";
import Link from "next/link";

const socialLinks = [
    {
        name: "Instagram",
        href: "https://www.instagram.com/garru05/",
        icon: BrandInstagram,
    },
    {
        name: "X",
        href: "https://x.com/Garruxoad09",
        icon: BrandX,
    },
];

export function MainNavbar() {
  return (
    <nav className="flex items-center justify-between p-4 text-white px-64 bg-transparent w-screen absolute">
      <div className="text-lg font-bold">Adri Tattoo</div>
      <ul className="flex space-x-4 font-[Tagesschrift] text-lg">
        <li><Link href="/" className="hover:underline font-bold">Home</Link></li>
        <li><Link href="/about" className="hover:underline font-bold">About</Link></li>
        <li><Link href="/contact" className="hover:underline font-bold">Contact</Link></li>
      </ul>
      <ul className="flex space-x-4">
        {socialLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:underline">
              <link.icon className="w-5 h-5" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}