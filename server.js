
/*
what is going to be the dimension of the video
lets just say 100x100
for each pixel we need to store 3 integers for RGB, ths is how canvas works, there is also a fourth integer for alpha, but we'll forget this
we need to store the grid as an array in which there is a 3 offset per pixel
this means that each frame needs 300 integers
there will be an array to store each frame array

if we stream at 60 fps and we want a test video for 10 seconds, that is 600 frames

*/
var frames = [];
var frame = null;
for(var i = 0; i < 300; i ++){
    frame = [];
    frames.push(frame);
    for(var a =0; a < 100 * 100 * 40; a+=4){
        //we don't actually have a video so we just use random values, hardware would be responsible for making this data
        //but technically you could make your own video manually by specifying each pixel RGB, this would take longer than you will be alive
        frame[a] = (Math.floor(Math.random() * 254) + 1  ) ;
        frame[a + 1] = (Math.floor(Math.random() * 254) + 1  ) ;
        frame[a + 2] = (Math.floor(Math.random() * 254) + 1  ) ;
        frame[a + 3] = 1;
    }
    console.log('frame done' + i);
}
 console.log('frames done');
var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/data', function(req, res) {
  res.json(frames.pop());
});

app.listen(8080);