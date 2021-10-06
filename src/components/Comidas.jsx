import {Link} from 'react-router-dom'


function CardComidas (props) {
    return(
        <li className="Card">
            <Link to='/Entrada'>
                <div className="contenedorImagen">
                    <img src={props.imagen} alt={props.plato}/>
                </div>
            </Link>
                <span className="Titulo">{props.plato}</span>
                <div className="Interacciones"> 
                    <div><i className="fas fa-heart like"></i>{props.like}</div> 
                    <div><i className="fas fa-comment"></i> {props.comment}</div>
                    <div><i className="fas fa-eye"></i> {props.views}</div>
            </div>
        </li>
    )
}

export default CardComidas;