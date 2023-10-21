import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionHeadText}>Don't read this.</p>
      </motion.div>
      <br/>
        <motion.p
        variants={fadeIn("", "", 0.1, 1.1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Never gonna give you up
        </motion.p>

        <motion.p
        variants={fadeIn("", "", 0.15, 1.6)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >  
        Never gonna let you down
        </motion.p>

        <motion.p
        variants={fadeIn("", "", 0.2, 2.1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Never gonna run around and desert you
      </motion.p>

        <motion.p
        variants={fadeIn("", "", 0.25, 2.6)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Never gonna make you cry
      </motion.p>

        <motion.p
        variants={fadeIn("", "", 0.3, 3.1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Never gonna say goodbye
      </motion.p>

        <motion.p
        variants={fadeIn("", "", 0.35, 3.6)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Never gonna tell a lie and hurt you
      </motion.p>

        <motion.p
        variants={fadeIn("", "", 0.4, 4.1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Never gonna give you up
      </motion.p>

        <motion.p
        variants={fadeIn("", "", 0.45, 4.6)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Never gonna let you down
      </motion.p>

        <motion.p
        variants={fadeIn("", "", 0.5, 5.1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Never gonna run around and desert you
      </motion.p>

        <motion.p
        variants={fadeIn("", "", 0.55, 5.6)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Never gonna make you cry
      </motion.p>

        <motion.p
        variants={fadeIn("", "", 0.6, 6.1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Never gonna say goodbye
      </motion.p>

        <motion.p
        variants={fadeIn("", "", 0.65, 6.6)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Never gonna tell a lie and hurt you
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
