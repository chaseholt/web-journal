import React from "react";
import { motion } from "framer-motion";

const Post = ({ selectedImage, setSelectedImage }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImage(null);
    }
  };
  return (
    <motion.div
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='backdrop'
    >
      <motion.img
        src={selectedImage}
        alt=''
        className='enlargedImage'
        initial={{ y: "-100vh" }}
        animate={{ y: "0" }}
      />
    </motion.div>
  );
};

export default Post;
