import { useState } from "react";
import "./App.css";
import games from "./games.json";
import { motion, scale, stagger } from "motion/react";
import { delay } from "motion";

let containerAnimation = {
  hide: {
    opacity: 0,
    y: 8,
    transition: {
      ease: "linear",
      duration: 1,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "spring",
      duration: 1,
      delayChildren: stagger(0.25),
    },
  },
};

let itemAnimation = {
  hide: {
    opacity: 0,
    y: -32,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

let secondaryAnimation = {
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 2,
    },
  },
  hide: {
    opacity: 0,
    y: 32,
    scale: 0,
  },
};

let popIn = {
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 2,
    },
  },
  hide: {
    opacity: 0,
    scale: 0,
  },
};

function BigHero() {
  return (
    <motion.div
      id="bigHero"
      initial="hide"
      animate="show"
      variants={containerAnimation}
    >
      <motion.span
        initial={{ scaleY: 3, letterSpacing: "2ch"}}
        animate={{ scaleY: 1, letterSpacing: "0ch", transition: { type: "tween", duration: 3 } }}
        id="heroText1"
        variants={itemAnimation}
      >
        Welcome
      </motion.span>
      <motion.span
        initial={{ x: -16, scale: 0}}
        animate={{
          x: 0,
          scale: 1,
          transition: { type: "spring", duration: 3},
        }}
        id="heroText2"
      >
        to
      </motion.span>
      <motion.span
        initial={{ y: -16, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { ease: "spring", duration: 1, delay: 1.5},
        }}
        id="heroText3">
        Netra's Games
      </motion.span>

    </motion.div>
  );
}

function App() {
  let gameList = games.FinishedGames.map((game, index) => (
    <motion.section
      key={index}
      className="games"
      whileInView="show"
      initial="hide"
      variants={containerAnimation}
      viewport={{ once: true }}
    >
      <motion.div variants={containerAnimation}>
        <motion.video variants={popIn} controls>
          <motion.source
            src={"/videos/" + game.videosrc}
            type="video/mp4"
          ></motion.source>
        </motion.video>
      </motion.div>

      <motion.div className="details" variants={containerAnimation}>
        <motion.div className="details_justify" variants={itemAnimation}>
          <motion.span variants={secondaryAnimation}>
            {game.gamename}
          </motion.span>
          <motion.span variants={secondaryAnimation}>{game.genre}</motion.span>
        </motion.div>

        <motion.p variants={secondaryAnimation}>{game.description}</motion.p>
      </motion.div>
    </motion.section>
  ));

  return (
    <>

      <BigHero />

      <motion.div id="scrollIndicator" initial={{ y: -16, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { duration: 1, delay: 1} }}>scroll</motion.div>

      {gameList}

      <motion.footer
        whileInView="show"
        initial="hide"
        viewport={{ once: true }}
        variants={containerAnimation}
      >
        <motion.h3 variants={itemAnimation}>
          Thats all, my email is{" "}
          <motion.a
            whileHover={{ letterSpacing: "1ch" }}
            transition={{ type: "spring" }}
            href="mailto:business.netrahun@gmail.com"
          >
            business.netrahun@gmail.com
          </motion.a>
        </motion.h3>
      </motion.footer>
    </>
  );
}

export default App;
