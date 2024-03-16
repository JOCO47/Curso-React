import style from './movieCard.module.css'

function MovieCard({movie, isFav}){
    const {title, poster} = movie

    return(
        <div className={style.card}>
        <img src={poster} alt="poster de la película" />
        <h2>{title}</h2>
        <button className={isFav ? '' : style['fav']} onClick={()=>{}}>
            {isFav ? 'Quitar de Favoritas' : 'Añadir a favoritas'}</button>
        </div>
    )
}

export default MovieCard