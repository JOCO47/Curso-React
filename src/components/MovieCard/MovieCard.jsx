import style from './movieCard.module.css'

const POSTER_PATH = 'https://www.themoviedb.org/t/p/w220_and_h330_face'

function MovieCard({movie, isFav, toggleFav}){
    const {title, poster_path, id} = movie

    return(
        <div className={style.card}>
        <img src={POSTER_PATH + poster_path} alt="poster de la película" />
        <h2>{title}</h2>
        <button className={isFav(id) ? '' : style['fav']} onClick={()=>{toggleFav(movie)}}>
            {isFav(id) ? 'Quitar de Favoritas' : 'Añadir a favoritas'}</button>
        </div>
    )
}

export default MovieCard