const reelsData = [
  {
    userprofile: "https://i.pravatar.cc/150?img=11",
    username: "travelwithaman",
    likecount: 12450,
    isliked: true,
    commentcount: 342,
    caption: "Lost in the mountains, found myself 🏔️",
    video: "video1.mp4",
    sharecount: 210,
    isfollowed: true
  },
  {
    userprofile: "https://i.pravatar.cc/150?img=22",
    username: "cityvibes",
    likecount: 8930,
    isliked: false,
    commentcount: 189,
    caption: "Late nights & city lights ✨",
    video: "video2.mp4",
    sharecount: 95,
    isfollowed: false
  },
  {
    userprofile: "https://i.pravatar.cc/150?img=33",
    username: "foodie.diaries",
    likecount: 15780,
    isliked: true,
    commentcount: 512,
    caption: "Street food hits different 😋",
    video: "video3.mp4",
    sharecount: 430,
    isfollowed: true
  },
  {
    userprofile: "https://i.pravatar.cc/150?img=44",
    username: "daily.fit",
    likecount: 6420,
    isliked: false,
    commentcount: 98,
    caption: "Consistency over motivation 💪",
    video: "video4.mp4",
    sharecount: 60,
    isfollowed: false
  },
  {
    userprofile: "https://i.pravatar.cc/150?img=55",
    username: "aesthetic.soul",
    likecount: 10990,
    isliked: true,
    commentcount: 275,
    caption: "Soft tones, calm mind 🌿",
    video: "video5.mp4",
    sharecount: 188,
    isfollowed: true
  },
  {
    userprofile: "https://i.pravatar.cc/150?img=66",
    username: "roadtrip.india",
    likecount: 18430,
    isliked: true,
    commentcount: 634,
    caption: "Every road has a story 🚗",
    video: "video3.mp4",
    sharecount: 520,
    isfollowed: true
  },
  {
    userprofile: "https://i.pravatar.cc/150?img=77",
    username: "tech.explorer",
    likecount: 5210,
    isliked: false,
    commentcount: 74,
    caption: "Building ideas into reality 💻",
    video: "video1.mp4",
    sharecount: 48,
    isfollowed: false
  },
  {
    userprofile: "https://i.pravatar.cc/150?img=88",
    username: "sunset.chaser",
    likecount: 13200,
    isliked: true,
    commentcount: 301,
    caption: "Golden hour never disappoints 🌅",
    video: "video4.mp4",
    sharecount: 260,
    isfollowed: true
  },
  {
    userprofile: "https://i.pravatar.cc/150?img=99",
    username: "minimal.moves",
    likecount: 4580,
    isliked: false,
    commentcount: 56,
    caption: "Less noise, more focus.",
    video: "video5.mp4",
    sharecount: 35,
    isfollowed: false
},
{
    userprofile: "https://i.pravatar.cc/150?img=12",
    username: "nature.frames",
    likecount: 16750,
    isliked: true,
    commentcount: 489,
    caption: "Where peace feels natural 🌲",
    video: "video2.mp4",
    sharecount: 410,
    isfollowed: true
}
];

var allReels = document.querySelector('.all-reels');

const addData = () => {
    let sum = "";
reelsData.forEach((reels,idx)=>{
     sum = sum + `   <div class="reels">
                    <video autoplay loop muted src="${reels.video}"></video>
                    <div class="bottom">
                        <div class="user">
                            <img src="${reels.userprofile}" alt="">
                            <h4>${reels.username}</h4>
                            <button id=${idx} class="follow">${reels.isfollowed ? "Following" : "Follow"}</button>
                        </div>
                        <h3>${reels.caption}</h3>
                    </div>
                    <div class="right">
                        <div id=${idx} class="like">
                            <h4 class="like-icon icons">${reels.isliked ? '<i class="ri-heart-fill red"></i>' : '<i class="ri-heart-fill"></i>'}</h4>
                            <h6>${reels.likecount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon icons"><i class="ri-chat-3-line"></i></h4>
                            <h6>${reels.commentcount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon icons"><i class="ri-share-forward-fill"></i></h4>
                            <h6>${reels.sharecount}</h6>
                        </div>
                         <div class="dots">
                            <h4 class="dots-icon icons"><i class="ri-more-2-line"></i></h4>
                        </div>
                    </div>
                </div>`
})

allReels.innerHTML = sum;

}

addData();

allReels.addEventListener("click" , (e)=>{
 
if(e.target.className == 'like'){
    if(reelsData[e.target.id].isliked === true){
        reelsData[e.target.id].isliked = false;
        reelsData[e.target.id].likecount--;
    } else{
        reelsData[e.target.id].isliked = true;
        reelsData[e.target.id].likecount++;
    }
}
     addData();

    if(e.target.className == 'follow'){
        if(reelsData[e.target.id].isfollowed === true){
            reelsData[e.target.id].isfollowed = false;
        } else {
            reelsData[e.target.id].isfollowed = true;
        }
    }
    addData();
})