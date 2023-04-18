import React from 'react';
import styles from '../styles/Movie.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react';

function movie(props) {
    const stars = [];
    // il y a une condition pour pouvoir afficher l'average sous forme d'etoiles
    // color: #f1c40f
  for ( let i = 0 ; i < 10 ; i++){
      // const starColor = i <= props.voteAverage ? "#f1c40f" : "black";
      // stars.push(<FontAwesomeIcon icon={faStar} key={i} style={{ color: starColor }}/>);
      let style = {};
      if(i < props.voteAverage - 1 ){
        style = {color : "#f1c40f" }
      }

      stars.push(<FontAwesomeIcon icon={faStar} key={i} style={style} />);
  }

//definir les 3 trois etats suivants avec leur setter :
//personalNote initialisé a 0
//watchCount                0
//like                      false

//créer le systeme d'etoiles bleues #2196f3
//au clic sur une etoile, attribuer la note sous forme d'etoile
// entre parenthese affichez la note apres les etoiles

//au clic sur la camera, l'icone devient rouge #e74c3c et on incremente a chaque clic

//mettre en place le systeme de like : au clic le coeur devient rouge et au re clic il redevient noir

    let [personalNote, setPersonalNote] = useState(0);
    let [watchCount, setWatchCount] = useState(0);
    // let [like, setLike] = useState(false);

    const etoiles = [];
    for ( let i = 0 ; i < 10 ; i++){
      let style = {cursor : 'pointer'};
      if(i < personalNote ){
        style = {color : "#2196f3", cursor:'pointer' };
      }
      etoiles.push(<FontAwesomeIcon icon={faStar} key={i} style={style} onClick={()=>setPersonalNote(i + 1)}/>);
    };

    const cam = [];
    const handleCamClick = () => {
      setWatchCount(watchCount + 1);
    }
      let style = {cursor : 'pointer'};
      if(watchCount > 0){
        style = {color : "#e74c3c",cursor : 'pointer'}
      }
      cam.push(<FontAwesomeIcon icon={faVideo} key={''} style={style} onClick={()=>handleCamClick('')}/>);

    const coeur = [];
    const handleLikeClick = () => {
      // setLike(!like);
      props.updateLikedMovies(props.title);
      
    };
    
    

    let color = {cursor : 'pointer'}
      if(props.isLiked){
        color = {color : "#e74c3c",cursor : 'pointer'}
      }
      
      coeur.push(<FontAwesomeIcon icon={faHeart} key={''} style={color} onClick={()=>handleLikeClick('')}/>);





  return (
    <div className={styles.card}>
        <img className={styles.image} src={props.poster} alt={props.title}/>
        <div className={styles.textContainer}>
            <span className={styles.name}>{props.title}</span>
            <p className={styles.description}>{props.overview}</p>
        </div>
        <span className={styles.vote}>{stars} ({props.voteCount}) </span>
        <div>
          <span className={styles.vote}>{etoiles} ({personalNote}) </span>
        </div>
        <div>
          <span className={styles.vote}>{cam} {watchCount}</span>
        </div>
        <div>
          <span className={styles.vote}> {coeur}</span>
        </div>
        
        
    </div>
  )
}

export default movie