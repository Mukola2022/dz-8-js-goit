import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

//var throttle = require('lodash.throttle');



const iframe = document.querySelector('#vimeo-player');
 
 

    const player = new Vimeo.Player(iframe);

    

    const onPlay = function(timeupdate) {
       
       
      localStorage.setItem(STORAGE_KEY, JSON.stringify(timeupdate.seconds))
      localStorage.getItem(STORAGE_KEY)
    }

    player.on('timeupdate', throttle(onPlay, 1000))

    const STORAGE_KEY = "videoplayer-current-time";

    player.setCurrentTime(localStorage.getItem(STORAGE_KEY)).then(function(seconds) {
      // seconds = the actual time that the player seeked to
      //seconds = onPlay()
    }).catch(function(error) {
      switch (error.name) {
          case 'RangeError':
              // the time was less than 0 or greater than the video’s duration
              break;
    
          default:
              // some other error occurred
              break;
      }
    });

    

     

     
       

        

       

        
    