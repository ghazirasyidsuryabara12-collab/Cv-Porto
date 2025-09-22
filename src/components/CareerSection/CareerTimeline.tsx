import { ScrollTimeline } from "../lightswind/scroll-timeline";
import { Briefcase, Award, Users } from "lucide-react";

export const CareerTimeline = () => {
  const careerEvents = [
    {
      year: "Jan 2023 – Aug 2025",
      title: "Business Development",
      subtitle: "PT Aizhihulu Indonesia",
      description:
        "Menyusun dan mempresentasikan proposal bisnis yang menarik, menjelaskan secara detail layanan gudang, pengangkasan, dan manfaatnya bagi efisiensi operasional klien. Menjadi titik kontak utama bagi klien, memastikan layanan yang diberikan berjalan lancar dan sesuai ekspektasi. Melakukan riset pasar untuk memahami tren industri, kompetitor, dan kebutuhan pasar terkait jasa gudang dan logistik.",
      icon: <Briefcase className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "Jan 2021 – Mar 2022",
      title: "Customer Service Support",
      subtitle: "PT pendanaan teknologi nusa, Tangerang Selatan",
      description:
        "Menangani Permintaan dan Pertanyaan Pelanggan, Menyelesaikan Masalah Pelanggan, Administrasi dan Dokumentasi.",
      icon: <Users className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "Jan 2019 – Jan 2020",
      title: "CRO",
      subtitle: "Worn Finance",
      description:
        "Menjaga kualitas Meningkatkan Hubungan dengan Nasabah, Mengatasi Masalah dan Keluhan, Administrasi dan Pelaporan.",
      icon: <Award className="h-4 w-4 mr-2 text-primary" />,
    },
  ];

  return (
    <div id="career">
      <ScrollTimeline
        events={careerEvents}
        title="Pengalaman Kerja"
        subtitle="Perjalanan profesional dalam bisnis dan pengembangan"
        animationOrder="staggered"
        cardAlignment="alternating"
        cardVariant="elevated"
        parallaxIntensity={0.15}
        revealAnimation="fade"
        progressIndicator={true}
        lineColor="bg-primary/20"
        activeColor="bg-primary"
        progressLineWidth={3}
        progressLineCap="round"
      />
    </div>
  );
};
