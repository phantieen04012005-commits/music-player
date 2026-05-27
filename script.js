// 1. Khởi tạo danh sách bài hát (Bạn có thể đổi link nhạc .mp3 bằng bài hát bạn thích nhé)
const songs = [
    {
        title: "Lofi Chill",
        artist: "Relax & Chill Music",
        cover: "https://picsum.photos/400?1",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },
    {
        title: "Night Vibes",
        artist: "Night Driving Playlist",
        cover: "https://picsum.photos/400?2",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    },
    {
        title: "Relax Beat",
        artist: "Peaceful Background Music",
        cover: "https://picsum.photos/400?3",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
    },
    {
        title: "Deep Focus",
        artist: "Study & Coding Music",
        cover: "https://picsum.photos/400?4",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
    },
    {
        title: "Summer Chill",
        artist: "Weekend Relax Music",
        cover: "https://picsum.photos/400?5",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
    }
];

let currentSongIndex = 0; // Bài hát bắt đầu (Bài đầu tiên)

// 2. Lấy các phần tử HTML ra để xử lý
const audioPlayer = document.getElementById('audio-player');
const songTitle = document.getElementById('song-title');
const artistName = document.getElementById('artist-name');
const coverImg = document.getElementById('cover');

// 3. Hàm tải thông tin bài hát lên trình phát
function loadSong(song) {
    songTitle.innerText = song.title;
    artistName.innerText = song.artist;
    coverImg.src = song.cover;
    audioPlayer.src = song.url;
}

// 4. Hàm xử lý nút bấm Next (Bài tiếp theo)
function nextSong() {
    currentSongIndex++;
    if (currentSongIndex > songs.length - 1) {
        currentSongIndex = 0; // Nếu hết danh sách thì quay lại bài đầu
    }
    loadSong(songs[currentSongIndex]);
    audioPlayer.play();
}

// 5. Hàm xử lý nút bấm Previous (Bài trước đó)
function previousSong() {
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1; // Nếu lùi quá bài đầu thì xuống bài cuối
    }
    loadSong(songs[currentSongIndex]);
    audioPlayer.play();
}

// 6. Xử lý hiệu ứng xoay đĩa nhạc khi bấm Play / Pause
audioPlayer.addEventListener('play', () => {
    coverImg.classList.add('play-animation');
});

audioPlayer.addEventListener('pause', () => {
    coverImg.classList.remove('play-animation');
});

// Chạy bài hát đầu tiên ngay khi tải trang xong
loadSong(songs[currentSongIndex]);