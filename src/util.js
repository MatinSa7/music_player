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
      active: false,
    },
  ];
}
