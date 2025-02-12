const video = document.querySelector("video");

const artistName = document.getElementById("artist");
const titleText = document.getElementById("title");
const progressBar = document.querySelector(".progress-bar");
const progress = document.querySelector(".progress");
const prevBtn = document.querySelector("#prev");
const playBtn =document.querySelector("#play");
const nextBtn = document.querySelector("#next");
const volumeVedio = document.querySelector("#volume");
const speedControll = document.querySelector("#speed");
let current_time = document.querySelector("#current-time");
let durationTime = document.querySelector("#duration")
const videos = [
    { title: "Nature", artist: "Pexels", src: "https://media.istockphoto.com/id/1198474553/video/landscape-at-snowdonia-national-park-in-wales-uk-crane-shot.mp4?s=mp4-640x640-is&k=20&c=cMhMPgAPc9vU52PWxWxNxgnR0zAXOMabqk1Df4qyj7s=", type: "direct" },
    { title: "City View", artist: "Pexels", src: "https://media.istockphoto.com/id/1682072807/video/beautiful-landscape-in-the-mountains-of-wales.mp4?s=mp4-640x640-is&k=20&c=SgiiLDYGKK2hsFhHQvgNHCRu0zCwQ1bkt_z7QFSy3BA=", type: "direct" },
    { title: "Ocean Waves", artist: "Pexels", src: "https://media.istockphoto.com/id/1479135181/video/firework-with-audio.mp4?s=mp4-640x640-is&k=20&c=m_PN_5lsIh1oVrWz_siAQyMGOcbwRr9Kuv_JsHRw5x0=", type: "direct" },
    { title: "Lion Sound", artist: "Pexels", src: "https://media.istockphoto.com/id/1874742292/video/lion-roaring.mp4?s=mp4-640x640-is&k=20&c=nxx0_OKPxt6vajpfwCDwXRXtq5_7dihgN5C6EOtwSZo=", type: "direct" }
];



let speed = 4 ;
let isPlay =false;
let videoIndex =0;


function loadVideo(videoObj) {
    titleText.textContent = videoObj.title;
    artistName.textContent = videoObj.artist;
    video.src = videoObj.src; 
}


loadVideo(videos[videoIndex]);

// play video function

function playVedio(){
    playBtn.querySelector("i").classList.remove("fa-play");
    playBtn.querySelector("i").classList.add("fa-pause");
    video.play();
    isPlay = true;
    
}

// paose Functiuon

function pause(){
    playBtn.querySelector("i").classList.remove("fa-pause");
    playBtn.querySelector("i").classList.add("fa-play");
    video.pause();
    isPlay = false;

}

// Time update / width 

function timeUpdate(e){
  
    const {currentTime,duration} = e.srcElement;

    const widthUpdate = (currentTime/duration)*100;
    progress.style.width = `${widthUpdate}%`;
    const durationMin = Math.floor(duration / 60);
    const durationSec = Math.floor(duration %60);
    current_time.textContent = `${durationMin}:${durationSec}`;

    const currentMin = Math.floor(currentTime /60);
    let currentSec = Math.floor(currentTime % 60);
    if(currentSec < 10 ){
        currentSec = `0${currentSec}`
    }
    durationTime.textContent = `${currentMin}:${currentSec}`;
    video.playbackRate = speed;
  
};

// progress bar
function setProgress(e){
    const width = this.clientWidth;
    const offsetX = e.offsetX;
    
    const duration = video.duration;
    const newtime = (offsetX / width)*duration;
    if(isNaN(duration)) return
    video.currentTime = newtime;
   
    

}

// VolumeChange Method

function VolumeChange(e){
    video.volume = e.target.value;
}

// speedChange method 

function speedChange(e){
    const speed = e.target.value;
    video.playbackRate = speed;
}
// all events

playBtn.addEventListener("click",()=>{
    if(isPlay){
        pause();

    }else{
        playVedio();
    }
})


// next 

nextBtn.addEventListener("click",()=>{
    pause()
    videoIndex ++;
    if(videoIndex ++ >= videos.length - 1){
        videoIndex = 0;

    }  
    loadVideo(videos[videoIndex]);
    playVedio();

})

// prev
prevBtn.addEventListener("click", ()=>{
    pause();
    videoIndex--;
      if(videoIndex<0){
        videoIndex = videos.length -1;
    }
    loadVideo(videos[videoIndex]);
    playVedio();
})


 progressBar.addEventListener("click",setProgress)

video.addEventListener("timeupdate", timeUpdate);

volumeVedio.addEventListener("input",VolumeChange);


speedControll.addEventListener("change", speedChange)

