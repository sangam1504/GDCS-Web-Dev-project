import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Tic Tac Toe",
    img: "https://play-lh.googleusercontent.com/EUgRlCOH_jwtW39SaG7XeKq8pJsQfKkZB4MYED18npdsKeRZDmN9xVsSV3nbpoJGgIU=w526-h296-rw",
    desc: "Discover my latest creation – a playful Tic Tac Toe game that adds a touch of fun to your digital world. I've infused simplicity and enjoyment into every move, creating a user-friendly game with a clean design. Dive into my portfolio to witness how I've reimagined the classic Tic Tac Toe, bringing timeless entertainment to your fingertips!",
  },
  {
    id: 2,
    title: "Music App",
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/744e7d81-74c7-4f29-83b3-bfe263f222c8/dg4dj1v-5eb317d6-10aa-44f6-87b8-6a21d756c503.png/v1/fill/w_1200,h_666,q_70,strp/music_lover_by_radicalegacy_dg4dj1v-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzEwIiwicGF0aCI6IlwvZlwvNzQ0ZTdkODEtNzRjNy00ZjI5LTgzYjMtYmZlMjYzZjIyMmM4XC9kZzRkajF2LTVlYjMxN2Q2LTEwYWEtNDRmNi04N2I4LTZhMjFkNzU2YzUwMy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.jiwQm6sW-grm4dnPb4VftNpW8MwtxLj0ntMgZFE2FPU",
    desc: "Explore my latest project – a Spotify clone that's all about bringing music lovers a fantastic experience. I've poured my passion for music into creating a user-friendly platform with the sleek design and functionality you love. Take a tour through my portfolio to see how I've reimagined the magic of Spotify for a seamless and enjoyable musical journey!",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href="#"><button>See Demo</button></a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;