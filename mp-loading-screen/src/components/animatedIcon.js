import mpicon from './mpicon.svg'
import { motion } from "framer-motion"

 const AnimatedIcon = () => {

    const theVariants = {

        start : {
            scale: 0.8,
            opacity: 0.6
        },
        end : {
            scale: 1,
            opacity: 1,
            transition: {duration: 1, yoyo: Infinity}
        }

    }
  
     return (
            <motion.img 
            src={mpicon}
            height={100}
            variants={theVariants} 
            initial="start"
            animate="end"
            />
      )
 }

 export default AnimatedIcon
