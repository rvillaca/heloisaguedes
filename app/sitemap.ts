import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { const base="https://heloisaguedes.vercel.app"; return ["","/sobre","/atendimentos","/teleconsulta","/contato","/politica-de-privacidade"].map((p)=>({url:base+p,lastModified:new Date(),changeFrequency:p===""?"monthly":"yearly",priority:p===""?1:.7})); }
