import { PropsWithChildren } from "react";
import './styles.css'

type GreyTextRegularProps = PropsWithChildren<{children: string | number, marBot: number}>

export const GreyTextRegular = (p: GreyTextRegularProps) => {
  return (
    <p className='grey-text' style={{marginBottom: p.marBot}}>{p.children}</p>
  )
}
