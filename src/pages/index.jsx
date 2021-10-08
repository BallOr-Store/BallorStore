import CardComidas from 'components/Comidas';
import entrada from 'media/patosalagua1.jpg';
import platoFuerte1 from 'media/patosalagua2.jpg';
import platoFuerte2 from 'media/patosalagua3.jpg';


function Index (){
    return(
            <section>
            <h1>AL AGUA PATOS</h1>
            <ul className="breedCardContainer">
                <CardComidas plato='Restaurantes' imagen={entrada} like='120' comment='1.5k' views='150'/>
                <CardComidas plato='Viajes' imagen={platoFuerte1} like='150' comment='1.0k' views='180'/>
                <CardComidas plato='Planes Pareja'imagen={platoFuerte2} like='160' comment='1.8k' views='150'/>
            </ul>
        </section>
        
    )
}

export default Index;