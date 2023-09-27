import imageVote from '../../Graphic/Images/vote-table.png';
import imageBreeds from '../../Graphic/Images/pet-breeds.png';
import imageSearch from '../../Graphic/Images/images-search.png';
import { BREEDS_ROUTE, GALLERY_ROUTE, VOTING_ROUTE } from '../../../Router/path';

interface Cards {src: string; bgColor: string; buttonName: string; link: string}

export const CardData: Cards[] = [
    {src: imageVote, bgColor: "#B4B7FF", buttonName: 'VOTING', link: VOTING_ROUTE},
    {src: imageBreeds, bgColor: "#97EAB9", buttonName: 'BREEDS', link: BREEDS_ROUTE},
    {src: imageSearch, bgColor: "#FFD280", buttonName: 'GALLERY', link: GALLERY_ROUTE}
] 