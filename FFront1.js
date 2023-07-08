function getMostRepeatedHashtags(data, category) {
  const hashtagsMap = new Map();

  data.contentCreators.forEach(creator => {
    creator.videos.forEach(video => {
      if (video.hashtags && video.hashtags.length > 0 && video.category === category) {
        video.hashtags.forEach(hashtag => {
          if (hashtagsMap.has(hashtag)) {
            hashtagsMap.set(hashtag, hashtagsMap.get(hashtag) + 1);
          } else {
            hashtagsMap.set(hashtag, 1);
          }
        });
      }
    });
  });

  const sortedHashtags = Array.from(hashtagsMap.entries()).sort((a, b) => b[1] - a[1]);

  return sortedHashtags;
}

function getMostRepeatedMusic(data, category) {
  const musicMap = new Map();

  data.contentCreators.forEach(creator => {
    creator.videos.forEach(video => {
      if (video.music && video.music.length > 0 && video.category === category) {
        video.music.forEach(music => {
          if (musicMap.has(music)) {
            musicMap.set(music, musicMap.get(music) + 1);
          } else {
            musicMap.set(music, 1);
          }
        });
      }
    });
  });

  const sortedMusic = Array.from(musicMap.entries()).sort((a, b) => b[1] - a[1]);

  return sortedMusic;
}

function getTopCreatorsByViews(data, category, limit) {
  const topCreators = [];

  data.contentCreators.forEach(creator => {
    const totalViews = creator.videos
      .filter(video => video.category === category)
      .reduce((sum, video) => sum + video.views, 0);

    if (totalViews > 0) {
      topCreators.push({
        username: creator.username,
        views: totalViews
      });
    }
  });

  topCreators.sort((a, b) => b.views - a.views);

  return topCreators.slice(0, limit);
}

const category = "videojuegos";
const topHashtags = getMostRepeatedHashtags(dataUsers, category);
const topMusic = getMostRepeatedMusic(dataUsers, category);
const topCreators = getTopCreatorsByViews(dataUsers, category, 3);

const result = {
  category: category,
  hashtags: topHashtags,
  music: topMusic,
  topCreators: topCreators
};

const resultJSON = JSON.stringify(result, null, 2);
console.log(resultJSON);