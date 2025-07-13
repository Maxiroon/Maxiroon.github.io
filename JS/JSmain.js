var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("topnav").style.top = "0";
  } else {
    document.getElementById("topnav").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

require('dotenv').config();
const API_KEY = AIzaSyCsLpH88nbyWcE-jTZbaOeHrdCf8jeUUkM
    const CHANNEL_ID = 'UC1P_65y49uX0wB7CRcr1XNQ';

    async function getLatestVideo() {
      const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=1`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.items && data.items.length > 0) {
          const videoId = data.items[0].id.videoId;
          const embedHtml = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
          document.getElementById('video-container').innerHTML = embedHtml;
        } else {
          document.getElementById('video-container').textContent = 'No videos found.';
        }
      } catch (error) {
        console.error('Error fetching video:', error);
        document.getElementById('video-container').textContent = 'Failed to load video.';
      }
    }

    getLatestVideo();