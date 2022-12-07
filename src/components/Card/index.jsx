import { LazyLoadImage } from "react-lazy-load-image-component";
import "./styles.css"



export const Card = ({props, album}) => {
    return (
        <div className="card" key={props.id}>
            <div  className="img-cantainer" >
                 <LazyLoadImage
                    className="img-cantainer"
                    effect="blur"
                    src={props.url} 
                />
            </div>
            <p><b>title:</b></p>
            <p>{props.title}</p>
            <p><b>Album:</b></p>
            <p>{album?.title}</p>
        </div>
    );
};

