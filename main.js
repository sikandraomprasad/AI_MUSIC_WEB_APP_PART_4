peter_pan_song="";
harry_potter_theme_song="";

leftwrist_x=0;
leftwrist_y=0;

rightwrist_x=0;
rightwrist_y=0;

scoreleftWrist = 0;
song_name = "";


function setup()
{
    canvas=createCanvas(600,530);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modalLoaded);
    poseNet.on('pose',gotposes);
}

function draw()
{
    image(video,0,0,600,530);

    
    fill("#00ff00");
    stroke("#ff0000");

    song_name = peter_pan_song.isPlaying()
    console.log('song_name');

    if(scoreleftWrist > 0.2){
        circle(leftWrist_x,leftWrist_y,20);
        Harry_potter_theme_song.stop();
        if(song_name == false){
            Peter_pan_song.play();
        }
        else{
            console.log("Song Name: Peter Pan Song");
            document.getElementById("song_id").innerHTML = "Song Name: Peter Pan Song";
        }
    }
}

function preload()
{
   peter_pan_song=loadSound("music.mp3");
   Harry_Potter_Theme_song=loadSound("music2.mp3")
}

function modalLoaded()
{
    console.log('PoseNet Is Initialized');
}

function gotposes(resuts)
{
    if(resuts.lenth>0)
    {
        console.log(resuts);

        leftwrist_x=resuts[0].pose.leftwrist.x;
        leftwrist_y=resuts[0].pose.leftwrist.y;
        console.log("leftwrist_x="+leftwrist_x+"leftwrist_y="+leftwrist_y);

        rightwrist_x=resuts[0].pose.rightwrist.x;
        rightwrist_y=resuts[0].pose.rightwrist.y;
        console.log("rightwrist_x="+rightwrist_x+"rightwrist_y="+rightwrist_y);
    }
}