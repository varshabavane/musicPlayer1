import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
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
        songPath: "android/assets/songs/hrudyat vaje smthng.mp3",
        progress: "0"
      },
      {
        title: "love u zindagi",
        artist: "alia",
        playing: "false",
        songPath: "android/assets/songs/lvuZindgi.mp3",
        progress: "0"
      },
      {
        title: "tik-tik vajte",
        artist: "avdutgupte",
        playing: "false",
        songPath: "android/assets/songs/tik-tik.mp3",
        progress: "0"
      },
      {
        title: "Gannayka dj",
        artist: "",
        playing: "false",
        songPath: "android/assets/songs/gannhayka.mp3",
        progress: "0"
      },
      {
        title: "Pahli Najarme",
        artist: "atif aslam",
        playing: "false",
        songPath: "android/assets/songs/pahlinajarme.mp3",
        progress: "0"
      },
      {
        title: "soja jara",
        artist: "papon",
        playing: "false",
        songPath: "android/assets/songs/sojajara.mp3",
        progress: "0"
      }
    ];
  }
}
