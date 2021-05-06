import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Dreamlover",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg",
      artist: "C Y G N",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=14993",
      color: ["de8cd5", "#7AACE3"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Seascape",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",
      artist: "Makzo",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11772",
      color: ["#08356E", "#FED971"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Fuzz",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/edaf1202cf33c7a2a122b7494a7e4d3e643af45f-1024x1024.jpg",
      artist: "Miscel",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=6005",
      color: ["#AD476C", "#C8795B"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Persist",
      cover: "https://i.scdn.co/image/ab67616d0000b273043dfeac847e1525b3b39ed3",
      artist: "invention_",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=5142",
      color: ["#F8E4DC", "#364B80"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Night Walk",
      cover: "https://i.scdn.co/image/7d4b27a6c7946f3d2bfc9b4138d0c0877e5345b8",
      artist: "xander.",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=3172",
      color: ["#543B21", "#49532F"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Purple",
      cover: "https://i.scdn.co/image/ab67616d0000b2730e7526acfa023ac451723b36",
      artist: "Dontcry, Nokiaa",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=2928",
      color: ["#6A39AE", "#35468F"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "You and I",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",
      artist: "Melodiesinfonie",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10336",
      color: ["#275564", "#D7A1B9"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
