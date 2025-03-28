import { useParams } from 'react-router-dom';
import VideoBackground from './VideoBackground';
import Header from './Header';
import VideoTitle from './VideoTitle';
import { useSelector } from 'react-redux';
import Raghib from './Raghib.js'
import Similar from './Similar';

const MovieDetail = () => {
  const { id } = useParams();
  console.log(id);
  const movies=useSelector(store=>store.movies?.addNowPlayingMovies)

  if(!movies)return;
  
  const mainMovies=movies[0];
  console.log(mainMovies);
  const {original_title,overview}=mainMovies
console.log('sdlfkjslkfjlsdjflsjflsjldfkjssdlfkjslkfjlsdjflsjflsjldfkjssdlfkjslkfjlsdjflsjflsjldfkjssdlfkjslkfjlsdjflsjflsjldfkjssdlfkjslkfjlsdjflsjflsjldfkjssdlfkjslkfjlsdjflsjflsjldfkjssdlfkjslkfjlsdjflsjflsjldfkjssdlfkjslkfjlsdjflsjflsjldfkjssdlfkjslkfjlsdjflsjflsjldfkjssdlfkjslkfjlsdjflsjflsjldfkjssdlfkjslkfjlsdjflsjflsjldfkjssdlfkjslkfjlsdjflsjflsjldfkjssdlfkjslkfjlsdjflsjflsjldfkjssdlfkjslkfjlsdjflsjflsjldfkjssdlfkjslkfjlsdjflsjflsjldfkjssdlfkjslkfjlsdjflsjflsjldfkjssdlfkjslkfjlsdjflsjflsjldfkjssdlfkjslkfjlsdjflsjflsjldfkjssdlfkjslkfjlsdjflsjflsjldfkjssdlfkjslkfjlsdjflsjflsjldfkjssdlfkjslkfjlsdjflsjflsjldfkjssdlfkjslkfjlsdjflsjflsjldfkjssdlfkjslkfjlsdjflsjflsjldfkjssdlfkjslkfjlsdjflsjflsjldfkjssdlfkjslkfjlsdjflsjflsjldfkjssdlfkjslkfjlsdjflsjflsjldfkjssdlfkjslkfjlsdjflsjflsjldfkjssdlfkjslkfjlsdjflsjflsjldfkjssdlfkjslkfjlsdjflsjflsjldfkjssdlfkjslkfjlsdjflsjflsjldfkjssdlfkjslkfjlsdjflsjflsjldfkjs');

   
  
  return (
    <div className='bg-black'>
        <Raghib/>
      <div >
        <VideoTitle  title={original_title} overview={overview}/>
      </div>
         <Similar movieId={id}/>
      
    </div>
  );
};

export default MovieDetail;
