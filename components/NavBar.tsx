'use client';
import Link from 'next/link';import {usePathname} from 'next/navigation';
const links=[{href:'/',label:'Catálogo'},{href:'/about',label:'Sobre'},{href:'/contact',label:'Contato'}];
export default function NavBar(){const p=usePathname();return(<div className="border-b border-white/10"><div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between"><Link href="/" className="text-xl font-extrabold flex items-center gap-2"><img src="/logo.svg" className="w-7 h-7" alt="logo"/><span className="text-gold">Alcindolemos</span></Link><nav className="flex items-center gap-2 text-sm">{links.map(l=>(<Link key={l.href} href={l.href} className={"px-3 py-1.5 rounded-lg hover:bg-white/5 transition "+(p===l.href?"bg-white/10":"")}>{l.label}</Link>))}</nav></div></div>);}
