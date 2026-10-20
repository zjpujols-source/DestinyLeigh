import { ArtistConfig } from '../types/artist';

export const defaultArtistConfig: ArtistConfig = {
  // ============================================================
  // ARTIST INFORMATION
  // ============================================================
  artistName: "Destiny Leigh",
  tagline: "Official Artist Website",
  genre: "R&B / Soul / Pop",
  bio: "Destiny Leigh is an independent singer and songwriter bringing sultry vocals, heartfelt lyricism, and captivating soulful melodies.",

  // ============================================================
  // HERO ASSETS
  // ============================================================
  heroVideoUrl: "/hero-video.mp4",
  heroImage: "/hero-poster.jpg",
  profileImage: "/profile.jpg",

  // ============================================================
  // DESIGN
  // ============================================================
  accentColor: "#ffffff",
  theme: "dark",

  // ============================================================
  // SOCIALS
  // ============================================================
  socials: [
    {
      id: "spotify",
      platform: "spotify",
      url: "https://open.spotify.com/artist/7mkuc6u1ZfMZhhsgYGXKNs?si=ooe7HRXwSt2iywnFKZoQVw",
      label: "Spotify",
      isStreaming: true
    },
    {
      id: "apple-music",
      platform: "apple-music",
      url: "https://music.apple.com/us/artist/destiny-leigh/1586047511",
      label: "Apple Music",
      isStreaming: true
    },
    {
      id: "youtube",
      platform: "youtube",
      url: "https://youtube.com/@destinymusicc?si=4AzE37ZK3VFyo1xs",
      label: "YouTube"
    },
    {
      id: "instagram",
      platform: "instagram",
      url: "https://www.instagram.com/destinymusicc",
      label: "Instagram"
    },
    {
      id: "tiktok",
      platform: "tiktok",
      url: "https://www.tiktok.com/@destinymusicc1?_r=1&_t=ZP-9AhinbisZzT",
      label: "TikTok"
    }
  ],

  // ============================================================
  // SITE TABS
  // ============================================================
  tabs: {
    music: {
      enabled: true,
      title: "MUSIC",
      releases: [
        {
          id: "spinning",
          title: "Spinning",
          type: "single",
          releaseDate: "June 19, 2026",
          coverArt: "/covers/spinning.jpg",
          spotifyUrl: "https://open.spotify.com/track/1RfNoY5OoyS13s8tTX76sE",
          appleMusicUrl: "https://music.apple.com/us/album/spinning-single/6778880230",
          youtubeMusicUrl: "https://music.youtube.com/search?q=Destiny+Leigh+Spinning",
          deezerUrl: "https://www.deezer.com/album/999134331",
          amazonMusicUrl: "https://music.amazon.com/search/Destiny+Leigh+Spinning",
          tidalUrl: "https://listen.tidal.com/search?q=Destiny+Leigh+Spinning"
        },
        {
          id: "stranded",
          title: "Stranded",
          type: "single",
          releaseDate: "May 15, 2026",
          coverArt: "/covers/stranded.jpg",
          spotifyUrl: "https://open.spotify.com/track/39qvjw4x6fm219dALr8m5V",
          appleMusicUrl: "https://music.apple.com/us/album/stranded-single/1896250466",
          youtubeMusicUrl: "https://music.youtube.com/search?q=Destiny+Leigh+Stranded",
          deezerUrl: "https://www.deezer.com/album/974140301",
          amazonMusicUrl: "https://music.amazon.com/search/Destiny+Leigh+Stranded",
          tidalUrl: "https://listen.tidal.com/search?q=Destiny+Leigh+Stranded"
        },
        {
          id: "youre-in-love",
          title: "You're in Love",
          type: "single",
          releaseDate: "April 3, 2026",
          coverArt: "/covers/youre-in-love.jpg",
          spotifyUrl: "https://open.spotify.com/track/5Jow5zInTHFssBb6lVMXrv",
          appleMusicUrl: "https://music.apple.com/us/album/youre-in-love-single/1888560431",
          youtubeMusicUrl: "https://music.youtube.com/search?q=Destiny+Leigh+You%27re+in+Love",
          deezerUrl: "https://www.deezer.com/album/948584281",
          amazonMusicUrl: "https://music.amazon.com/search/Destiny+Leigh+You%27re+in+Love",
          tidalUrl: "https://listen.tidal.com/search?q=Destiny+Leigh+You%27re+in+Love"
        },
        {
          id: "no-more-talking",
          title: "No More Talking",
          type: "single",
          releaseDate: "February 27, 2026",
          coverArt: "/covers/no-more-talking.jpg",
          spotifyUrl: "https://open.spotify.com/track/3Epjtq52eDuTeBITQbLAax",
          appleMusicUrl: "https://music.apple.com/us/album/no-more-talking-single/1878801741",
          youtubeMusicUrl: "https://music.youtube.com/search?q=Destiny+Leigh+No+More+Talking",
          deezerUrl: "https://www.deezer.com/album/921378721",
          amazonMusicUrl: "https://music.amazon.com/search/Destiny+Leigh+No+More+Talking",
          tidalUrl: "https://listen.tidal.com/search?q=Destiny+Leigh+No+More+Talking"
        },
        {
          id: "driveway",
          title: "Driveway",
          type: "single",
          releaseDate: "February 13, 2026",
          coverArt: "/covers/driveway.jpg",
          spotifyUrl: "https://open.spotify.com/track/2BUvGmZUBh7L7G8DvEQz56",
          appleMusicUrl: "https://music.apple.com/us/album/driveway-single/1873869274",
          youtubeMusicUrl: "https://music.youtube.com/search?q=Destiny+Leigh+Driveway",
          deezerUrl: "https://www.deezer.com/album/909285462",
          amazonMusicUrl: "https://music.amazon.com/search/Destiny+Leigh+Driveway",
          tidalUrl: "https://listen.tidal.com/search?q=Destiny+Leigh+Driveway"
        },
        {
          id: "christmas-after-hours",
          title: "Christmas After Hours",
          type: "ep",
          releaseDate: "December 7, 2024",
          coverArt: "/covers/christmas-after-hours.jpg",
          spotifyUrl: "https://open.spotify.com/artist/7mkuc6u1ZfMZhhsgYGXKNs",
          appleMusicUrl: "https://music.apple.com/us/album/christmas-after-hours-ep/1783996981",
          youtubeMusicUrl: "https://music.youtube.com/search?q=Destiny+Leigh+Christmas+After+Hours",
          deezerUrl: "https://www.deezer.com/album/679389091",
          amazonMusicUrl: "https://music.amazon.com/search/Destiny+Leigh+Christmas+After+Hours",
          tidalUrl: "https://listen.tidal.com/search?q=Destiny+Leigh+Christmas+After+Hours",
          youtubeUrl: "https://youtu.be/F0PxxdCm2Eo",
          tracks: [
            { id: "c1", title: "Let it Snow! (feat. Nico Cardoso)" },
            { id: "c2", title: "Sleigh Ride" },
            { id: "c3", title: "O Holy Night" },
            { id: "c4", title: "I'll Be Home For Christmas" }
          ]
        },
        {
          id: "soul-ties",
          title: "Soul Ties",
          type: "single",
          releaseDate: "June 11, 2024",
          coverArt: "/covers/soul-ties.jpg",
          spotifyUrl: "https://open.spotify.com/track/3OLx0zjsWPuC7YPUdWE5Hh",
          appleMusicUrl: "https://music.apple.com/us/album/soul-ties-single/1751139723",
          youtubeMusicUrl: "https://music.youtube.com/search?q=Destiny+Leigh+Soul+Ties",
          deezerUrl: "https://www.deezer.com/album/600185872",
          amazonMusicUrl: "https://music.amazon.com/search/Destiny+Leigh+Soul+Ties",
          tidalUrl: "https://listen.tidal.com/search?q=Destiny+Leigh+Soul+Ties",
          youtubeUrl: "https://youtu.be/H5JrorCIqck"
        },
        {
          id: "make-some-time",
          title: "Make Some Time",
          type: "single",
          releaseDate: "March 23, 2024",
          coverArt: "/covers/make-some-time.jpg",
          spotifyUrl: "https://open.spotify.com/artist/7mkuc6u1ZfMZhhsgYGXKNs",
          appleMusicUrl: "https://music.apple.com/us/album/make-some-time-single/1699130043",
          youtubeMusicUrl: "https://music.youtube.com/search?q=Destiny+Leigh+Make+Some+Time",
          deezerUrl: "https://www.deezer.com/album/468324565",
          amazonMusicUrl: "https://music.amazon.com/search/Destiny+Leigh+Make+Some+Time",
          tidalUrl: "https://listen.tidal.com/search?q=Destiny+Leigh+Make+Some+Time",
          youtubeUrl: "https://youtu.be/FPH2SiHDIAI"
        }
      ]
    },

    videos: {
      enabled: true,
      title: "VIDEOS",
      items: [
        {
          id: "ill-be-home-for-christmas",
          title: "Destiny Leigh, Julian Genova - I'll Be Home For Christmas",
          youtubeId: "F0PxxdCm2Eo",
          thumbnail: "https://i.ytimg.com/vi/F0PxxdCm2Eo/hqdefault.jpg"
        },
        {
          id: "soul-ties",
          title: "Destiny Leigh - Soul Ties (NPR Tiny Desk submission 2024)",
          youtubeId: "H5JrorCIqck",
          thumbnail: "https://i.ytimg.com/vi/H5JrorCIqck/hqdefault.jpg"
        },
        {
          id: "o-holy-night",
          title: "Destiny Leigh - O Holy Night",
          youtubeId: "igyzbtMsA6c",
          thumbnail: "https://i.ytimg.com/vi/igyzbtMsA6c/hqdefault.jpg"
        },
        {
          id: "make-some-time",
          title: "Destiny Leigh - Make Some Time (Official Music Video)",
          youtubeId: "FPH2SiHDIAI",
          thumbnail: "https://i.ytimg.com/vi/FPH2SiHDIAI/hqdefault.jpg"
        }
      ]
    },

    live: {
      enabled: true,
      title: "LIVE",
      status: "coming_soon"
    },

    shop: {
      enabled: true,
      title: "STORE",
      status: "coming_soon"
    },

    contact: {
      enabled: true,
      title: "CONTACT",
      managementEmail: ""
    }
  }
};
