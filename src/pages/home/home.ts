import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { Media, MediaObject } from "@ionic-native/media"

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  music:MediaObject;
  
  
 // nativePath: string;
 // file: MediaObject;
  tracks: any;
  playing: boolean;
  currentTrack: any;
  progressInterval: any;
  constructor(public navCtrl: NavController) {
    this.tracks = [
      {
        title: "hrudyat vaje smthng",
        artist: "rohit raut",
        playing: "false",
        songPath: "android/assets/imgs/2.jpg",
        progress: "0",
        img: "android/assets/imgs/4.jpg"
      },
      {
        title: "love u zindagi",
        artist: "alia",
        playing: "false",
        songPath: "android/assets/songs/lvuZindgi.mp3",
        progress: "0",
        img: "android/assets/imgs/3.jpg"
      },
      {
        title: "tik-tik vajte",
        artist: "avdutgupte",
        playing: "false",
        songPath: "android/assets/songs/tik-tik.mp3",
        progress: "0",
        img: "android/assets/imgs/4.jpg"
      },
      {
        title: "Gannayka dj",
        artist: "",
        playing: "false",
        songPath: "android/assets/imgs/1.jpg",
        progress: "0",
        img: "android/assets/imgs/4.jpg"
      },
      {
        title: "Pahli Najarme",
        artist: "atif aslam",
        playing: "false",
        songPath: "android/assets/songs/pahlinajarme.mp3",
        progress: "0",
        img: "android/assets/imgs/5.jpg"
      },
      {
        title: "soja jara",
        artist: "papon",
        playing: "false",
        songPath: "android/assets/songs/sojajara.mp3",
        progress: "0",
        img: "android/assets/imgs/1.mp3"
      }
    ];
    this.currentTrack = this.tracks[0];
  }

  // filechooser() {
  //   this.fileChooser
  //     .open()
  //     .then(uri => {
  //       (<any>window).FilePath.resolveNativePath(
  //         uri,
  //         result => {
  //           alert("result" + result);
  //           alert("uri" + uri);
  //           this.audioPlay(result);
  //         },
  //         err => {
  //           alert(err);
  //         }
  //       );
  //     })
  //     .catch(e => console.log(e));
  // }
  // audioPlay(res) {
  //   this.nativePath = res;
  //   alert(this.nativePath);
  //   let pathalone = this.nativePath.substring(8);
  //   alert("pathalone" + pathalone);
  //   this.file = this.media.create(pathalone);
  //   this.file.play();
  // }

  // playTrack() {
  //   for (let checkTrack of this.tracks) {
  //     if (checkTrack.playing) {
  //       this.pauseTrack(checkTrack);
  //     }
  //   }
  //   track.playing = true;
  //   this.currentTrack = track;
  //   this.music=this.media.create(this.currentTrack.songPath);
  //   this.music.play();
  //   this.progressInterval = setInterval(()=>{
  //     track.progress < 100 ? track.progress++ :(track.progress = 0);
  //   },1000)
  // }

  // pauseTrack(){
  //   track.playing=false;
  //   this.music.pause;
  //   clearInterval(this.progressInterval);
  // }

  // nextTrack(){
  //   let index =this.tracks.indexOf(this.currentTrack);
  //   index >=this.tracks.length-1 ?(index = 0): index++;
  //   this.playTrack(this.tracks[index]);
  // }

  // prevTrack(){
  //   let index=this.tracks.indexOf(this.currentTrack);
  //   index > 0 ? index-- :(index=this.tracks.length - 1);
  //   this.playTrack(this.tracks[index])
  // }
}
