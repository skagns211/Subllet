import Netflix from "../IMG/Logo/Netflix.png";
import Watcha from "../IMG/Logo/Watcha.png";
import AppleMusic from "../IMG/Logo/AppleMusic.png";
import netflix_scrap from "../IMG/Logo/netflix_scrap.png";
import watcha_scrap from "../IMG/Logo/watcha_scrap.png";
import applemusic_scrap from "../IMG/Logo/applemusic_scrap.png";
import wavve_scrap from "../IMG/Logo/wavve_scrap.png";

const dummy = [
  {
    id: 1,
    paydate: 5,
    planname: "2인 요금제",
    planprice: "5000원",
    service: {
      id: 1,
      title: "Netflix",
      outer_image: netflix_scrap,
      category: "video",
    },
  },
  {
    id: 2,
    paydate: 5,
    planname: "3인 요금제",
    planprice: "7000원",
    service: {
      id: 2,
      title: "왓챠",
      outer_image: watcha_scrap,
      category: "video",
    },
  },
  {
    id: 3,
    paydate: 17,
    planname: "개인요금제",
    planprice: "8900원",
    service: {
      id: 2,
      title: "애플뮤직",
      outer_image: applemusic_scrap,
      category: "Music",
    },
  },
];

export default dummy;
