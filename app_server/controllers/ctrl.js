'use strict';

var YouTube = require('youtube-node-ftd');
var youTubeKey = 'AIzaSyAxkQM0Ync5fQXZWbcbbsTIoqUVjeBIA9Y';

module.exports.main = function(req, res) {

  var yt = new YouTube();

  yt.setKey(youTubeKey);

  var uiucVideo = 'lXbFu91a0t4';
  var liveNews = 'bGqU_Zne6Pc';

  // yt.addParam('part', 'snippet,recordingDetails');

  var videoData;

  yt.getById(liveNews, function(error, result) {
    if (error) console.log(error);
    videoData = result.items;
    console.log(videoData);
    renderHome(videoData);
  });

  function renderHome(videoData) {
    res.render('index', {
      appTitle: 'FeedTheDrones',
      videos: videoData
    });
  }

};
