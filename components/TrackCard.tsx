'use client';
import {useState} from 'react';import clsx from 'clsx';
type Props={title:string;artist?:string;cover?:string;priceBRL:number;previewSrc:string;sku:string};
export default function TrackCard({title,artist,cover,priceBRL,previewSrc,sku}:Props){
 const [loading,setLoading]=useState(false);
 async function buy(){try{setLoading(true);
  const res=await fetch('/api/create-preference',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sku,title,unit_price:priceBRL})});
  const data=await res.json();if(!res.ok) throw new Error(data?.error||'Erro ao criar pagamento');window.location.href=data.init_point;
 }catch(e:any){alert(e.message||'Falha ao iniciar pagamento.');}finally{setLoading(false);}}
 return(<div className="rounded-2xl bg-[var(--card)] p-4 shadow-lg border border-white/5"><div className="flex gap-4"><img src={cover||'/cover-placeholder.jpg'} alt={title} className="w-24 h-24 rounded-xl object-cover"/><div className="flex-1"><h3 className="text-lg font-semibold">{title}</h3>{artist&&<p className="text-sm text-[var(--muted)]">{artist}</p>}<audio controls src={previewSrc} className="mt-2 w-full"/><div className="mt-3 flex items-center justify-between"><span className="text-xl font-bold text-gold">R$ {priceBRL.toFixed(2)}</span><button onClick={buy} disabled={loading} className={clsx('btn-gold',loading&&'opacity-50')}>{loading?'Abrindo...':'Comprar & Baixar'}</button></div></div></div></div>);
}
