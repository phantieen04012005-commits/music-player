const songs = [

{
    title:"Lofi Chill",
    artist:"Music Demo",
    music:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    image:"https://picsum.photos/400?1"
},

{
    title:"Night Vibes",
    artist:"Music Demo",
    music:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    image:"https://picsum.photos/400?2"
},

{
    title:"Relax Beat",
    artist:"Music Demo",
    music:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    image:"https://picsum.photos/400?3"
},

{
    title:"Deep Focus",
    artist:"Study Playlist",
    music:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    image:"https://picsum.photos/400?4"
},

{
    title:"Summer Chill",
    artist:"Chill Playlist",
    music:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    image:"https://picsum.photos/400?5"
}

];

let currentSong = 0;

const player =
document.getElementById(
    "audio-player"
);

function loadSong(index){

    document.getElementById(
        "song-title"
    ).innerText =
    songs[index].title;

    document.getElementById(
        "artist-name"
    ).innerText =
    songs[index].artist;

    document.getElementById(
        "cover"
    ).src =
    songs[index].image;

    player.src =
    songs[index].music;

    document
    .querySelectorAll(".card")
    .forEach(function(card){
        card.classList.remove(
            "active"
        );
    });

    document
    .querySelectorAll(".card")
    [index]
    .classList.add(
        "active"
    );
}

function nextSong(){

    currentSong++;

    if(
        currentSong >=
        songs.length
    ){
        currentSong = 0;
    }

    loadSong(currentSong);

    player.play();
}

function previousSong(){

    currentSong--;

    if(currentSong < 0){
        currentSong =
        songs.length - 1;
    }

    loadSong(currentSong);

    player.play();
}

document
.querySelectorAll(".card")
.forEach(function(card,index){

    card.addEventListener(
        "click",
        function(){

            currentSong =
            index;

            loadSong(
                currentSong
            );

            player.play();

        }
    );
});

/* Search */

const search =
document.getElementById(
    "search"
);

search.addEventListener(
    "keyup",
    function(){

        const keyword =
        search.value
        .toLowerCase();

        const cards =
        document.querySelectorAll(
            ".card"
        );

        cards.forEach(
            function(card){

                const text =
                card.innerText
                .toLowerCase();

                if(
                    text.includes(
                        keyword
                    )
                ){
                    card.style.display =
                    "block";
                }
                else{
                    card.style.display =
                    "none";
                }

            }
        );
    }
);

loadSong(currentSong);
.controls{
    margin-top:20px;
    display:flex;
    gap:15px;
    justify-content:center;
}

.controls button{
    border:none;
    padding:12px 20px;
    border-radius:30px;
    cursor:pointer;
    font-size:15px;
}

.controls button:hover{
    transform:scale(1.05);
}