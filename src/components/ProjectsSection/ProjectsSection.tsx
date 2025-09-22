"use client";

import { useState } from "react";
import { DragOrderList } from "../lightswind/DragOrderList";
import { motion } from "framer-motion";

export const ProjectsSection = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "Sistem Manajemen Gudang Terintegrasi",
      subtitle:
        "Mengembangkan sistem manajemen gudang yang terintegrasi dengan AI untuk optimisasi penyimpanan dan distribusi barang di PT Aizhilian Indonesia.",
      date: "2024",
      link: "#",
      image:
        "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg",
    },
    {
      id: 2,
      title: "Platform Customer Support Digital",
      subtitle:
        "Membangun platform customer support berbasis web yang meningkatkan efisiensi penanganan keluhan hingga 40% di PT Pendanaan Teknologi Nusa.",
      date: "2022",
      link: "#",
      image:
        "https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg",
    },
    {
      id: 3,
      title: "Kampanye Digital Marketing Terintegrasi",
      subtitle:
        "Merancang dan mengimplementasikan kampanye digital marketing melalui Facebook dan Instagram Ads yang meningkatkan konversi hingga 35%.",
      date: "2023",
      link: "#",
      image:
        "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg",
    },
    {
      id: 4,
      title: "Sistem CRM untuk Financial Services",
      subtitle:
        "Mengembangkan sistem Customer Relationship Management yang membantu meningkatkan kepuasan nasabah hingga 50% di Worn Finance.",
      date: "2020",
      link: "#",
      image:
        "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg",
    },
  ]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ when: "beforeChildren", staggerChildren: 0.1 }}
    >
      <section className="max-w-7xl mx-auto px-6 py-12">
        <motion.h2
          className="text-3xl font-bold text-foreground mb-8 text-center"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Proyek
        </motion.h2>
        <DragOrderList items={projects} />
      </section>
    </motion.div>
  );
};
