import React from "react";
import { storiesOf } from "@storybook/react";
import MusicPlayer from "../components/musicPlayer";

storiesOf("视听娱乐", module)
.add("MusicPlayer 音乐播放器", () => (
  <MusicPlayer audioLists={[{
    name:"星球坠落",
    singer:"中国新说唱",
    musicSrc:"http://mp3.flash127.com/public/t/id/45169.html",
    cover:"http://p1.music.126.net/4k-pMEO-en8IE6PdJoAYfg==/109951163429466895.jpg?param=130y130"
  }]}/>
));
