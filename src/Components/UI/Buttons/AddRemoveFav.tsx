// finish (maybe add in GaleryGrid item)
import {useState} from 'react'
import { useRecoilValue } from "recoil";
import {removeFavoritesActions$, lightDark$, favoritesArray$ } from '../../../Recoil/atoms';

type AddRemoveFavProps = {class_name: string}

const AddRemoveFav = (props: AddRemoveFavProps) => {
const [toAdd, setToAdd] = useState(false);
const favouritiesArray = useRecoilValue(favoritesArray$);

const addRemoveFavourites = () => { 
    
 }

  return (
    <div
      className={props.class_name}
    //   onClick={() => addRemoveFavorites(props.id, props.alt, props.message)}
    ></div>
  )
}

export default AddRemoveFav