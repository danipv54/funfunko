import 'animate.css';
import { useParams } from "react-router-dom";
import { Item } from "../../components";

export const ProductPage = () => {
  const slug = useParams();
  
  return (
    <div className='animate__animated animate__fadeIn'>
      <Item slug={slug.item} />
    </div>
  )
}

