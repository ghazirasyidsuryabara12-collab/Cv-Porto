import { Badge } from "../lightswind/badge";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { profileConfig } from "../../config/profile";

export const HeroSection = () => {
  return (
    <motion.div
      id="hero"
      className="text-foreground bg-transparent flex flex-col md:flex-row 
      items-center justify-center max-w-7xl mx-auto w-full"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          // acts like staggerChildren / delayChildren
          delayChildren: 0.3,
          staggerChildren: 0.2,
        },
      }}
    >
      {/* Left Section */}
      <motion.div
        className="flex-1 space-y-4 p-6 text-left md:text-left"
        initial={false} // so it inherits parent animation
      >
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut" },
          }}
        >
          Ghazi Rasyid Surya Bara
          <motion.span
            className="text-sm text-pink-500 font-semibold block"
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.8, ease: "easeOut" },
            }}
          >
            Tangerang, Indonesia
          </motion.span>
        </motion.h1>

        <motion.h2
          className="text-xl text-muted-foreground mt-1"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut" },
          }}
        >
          AI Specialist & Business Development
        </motion.h2>

        <motion.p
          className="mt-4 text-xs text-muted-foreground"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut" },
          }}
        >
          Dengan latar belakang sebagai AI Specialist dan kemampuan negosiasi yang kuat, saya berorientasi pada
          pengembangan bisnis. Saya memiliki ambisi untuk berkontribusi secara signifikan dalam membangkitkan dan
          mengembangkan startup yang inovatif.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center md:justify-start gap-2"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut" },
          }}
        >
          <Badge className="text-xs bg-pink-500">Microsoft Office</Badge>
          <Badge className="text-xs bg-pink-500">Facebook & Instagram Ads</Badge>
          <Badge className="text-xs bg-pink-500">Negosiasi</Badge>
          <Badge className="text-xs bg-pink-500">Public Speaking</Badge>
          <Badge className="text-xs bg-pink-500">AI Specialist</Badge>
        </motion.div>

        <motion.div
          className="flex flex-col gap-2 mt-4 text-xs text-muted-foreground"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
          }}
        >
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <a href="mailto:ghazirasyidsurbara12@gmail.com" className="hover:text-primary transition-colors">
              ghazirasyidsurbara12@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>088224632037</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Tangerang, Jl. kh Dewantara Gondrong Sebrang</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="flex-1 flex justify-center p-6"
        initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
      >
        <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
          <img
            src={profileConfig.profileImage}
            alt={profileConfig.name}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
