import React from 'react';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';  

function Header() {
    return (
        <header className="bg-opacity-0 sticky top-0 flex flex-row items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5">
          <motion.div
            initial={{
              
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="flex flex-row items-center"
          >
          {/* {Social icons} */}
          {
          /* {
              socials.map((social) => (
                <SocialIcon
                  key={social._id}
                  url={social.url}
                  fgColor="gray"
                  bgColor="transparent"
                  target="_blank"
                />
              ))
          } */
          }
          <SocialIcon
              url="https://www.facebook.com/profile.php?id=100012492014729"
              className="cursor-pointer"
              network="facebook"
              fgColor="white"
              bgColor="transparent"
          />
          <SocialIcon
              url="https://www.instagram.com/calu.sfx/"
              className="cursor-pointer"
              network="instagram"
              fgColor="white"
              bgColor="transparent"
          />
        </motion.div>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center"
          suppressHydrationWarning
        >
          <div className="flex flex-row items-center"> 
            <SocialIcon
              url="#contact"
              className="cursor-pointer"
              network="email"
              fgColor="white"
              bgColor="transparent"
            />
          </div>
          <a href="#contact">
            <p className="uppercase hidden md:inline-flex text-xs cursor-pointer">
              Get in Touch
            </p>
          </a>
        </motion.div>
      </header>
    );
}

export default Header;