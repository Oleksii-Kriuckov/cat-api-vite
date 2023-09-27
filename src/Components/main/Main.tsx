import {PropsWithChildren} from 'react'
import './mainStyle.css'

type MainProps = PropsWithChildren<{}>;

const Main = (p: MainProps) => {
  return (
    <main>{p.children}</main>
  )
}

export default Main