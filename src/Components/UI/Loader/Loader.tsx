import loader from '../../Graphic//Icons/loading-16.png'
import './loaderStyle.css'

const Loader = () => {
  return (
    <div className='loader_wrapper'>
        <img src={loader} alt="" className='loader'/>
    </div>
  )
}

export default Loader