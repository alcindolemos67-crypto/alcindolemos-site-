import jwt from 'jsonwebtoken';
const s=process.env.JWT_SECRET as string;
export function signDownload(p:object,e:string='10m'){return jwt.sign(p,s,{expiresIn:e});}
export function verifyDownloadToken(t:string){try{return jwt.verify(t,s) as any;}catch{return null;}}
