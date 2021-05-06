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
      name: "You and I",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",
      artist: "Melodiesinfonie",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10336",
      color: ["#275564", "#D7A1B9"],
      id: uuidv4(),
      active: false,
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
  ];
}

export default chillHop;
