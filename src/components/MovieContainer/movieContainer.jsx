import style from './movieContainer.module.css'

const MovieContainer = ({children}) => {
    return(
        <div className={style.container}>
            <h1>Películas</h1>
            <div>
                {children}
            </div>            
        </div>
    )

}

export default MovieContainer;