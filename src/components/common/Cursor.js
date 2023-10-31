import { motion } from 'framer-motion';

export default function Cursor({ animate, variants }) {
  return (
    <motion.div
      className="cursor"
      variants={variants}
      animate={animate}
      transition={{
        ease: 'linear',
        duration: 0,
        delay: 0,
      }}
    />
  );
}
