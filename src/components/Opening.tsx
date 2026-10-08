import React from 'react';
import {Box, INK, Label} from './Drawing';
import {lerp, progress} from '../timeline';

/** The reference opens on a tiny code window before the editor is drawn. */
export const Opening = ({t}: {t:number}) => {
 const leave=progress(t,.57,.88);
 const x=lerp(310,130,leave),y=lerp(247,-90,leave);
 const scale=lerp(1,.48,leave);
 const lines=['const 剪辑软件 = 小克.写代码()', '剪辑软件.添加(夜景, 拉面, 柴犬)', '小克.开工()'];
 const characters=Math.floor(progress(t,.04,.55)*lines.join('').length);
 let preceding=0;
 return <g opacity={1-progress(t,.72,.9)} transform={`translate(${x} ${y}) scale(${scale})`}>
  <Box x={0} y={0} w={660} h={202} r={9} fill="#fffef6" sw={3}/>
  <path d="M2 32 H658" stroke={INK} strokeWidth="1.4"/>
  {['#d87d74','#e6c777','#a5b994'].map((c,i)=><circle key={c} cx={18+i*17} cy={17} r={5} fill={c} stroke={INK}/>)}
  <Label x={330} y={24} size={17} anchor="middle" fill="#969183">小克 · 编辑</Label>
  {lines.map((line,i)=>{
   const visible=line.slice(0,Math.max(0,characters-preceding));preceding+=line.length;
   return <g key={line}>
    <Label x={18} y={83+i*43} size={20} fill="#c5c1b5">{i+1}</Label>
    <Label x={58} y={83+i*43} size={25} fill={['#78a7a2','#aaa167','#c87763'][i]}>{visible}</Label>
    {characters>=preceding-line.length&&characters<preceding&&<rect x={58+visible.length*24} y={59+i*43} width={5} height={29} fill="#c87763"/>}
   </g>;
  })}
 </g>;
};
