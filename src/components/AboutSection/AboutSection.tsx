import { Separator } from "../lightswind/separator";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <motion.div
      id="about"
      className="text-foreground max-w-7xl mx-auto w-full px-6 py-12 space-y-4"
      initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-3xl font-bold">Ringkasan</h2>
      <p className="text-muted-foreground text-sm max-w-3xl">
        Dengan latar belakang sebagai AI Specialist dan kemampuan negosiasi yang kuat, saya berorientasi pada
        pengembangan bisnis. Saya memiliki ambisi untuk berkontribusi secara signifikan dalam membangkitkan dan
        mengembangkan startup yang inovatif.
      </p>
      <Separator />
    </motion.div>
  );
};
