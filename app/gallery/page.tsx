"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    alt: "Spa treatment room",
    category: "Treatment Rooms",
    description: "Our serene treatment rooms designed for ultimate relaxation",
  },
  {
    src: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=600&q=80",
    alt: "Massage therapy",
    category: "Therapies",
    description: "Professional massage therapy in a calming environment",
  },
  {
    src: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80",
    alt: "Pregnancy massage",
    category: "Specialized Care",
    description: "Gentle pregnancy massage for expectant mothers",
  },
  {
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    alt: "Wellness products",
    category: "Products",
    description: "Premium wellness products and essential oils",
  },
  {
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
    alt: "Spa entrance",
    category: "Facility",
    description: "Welcoming entrance to our wellness sanctuary",
  },
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80",
    alt: "Aromatherapy",
    category: "Therapies",
    description: "Aromatherapy treatments for mind and body",
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80",
    alt: "Relaxation area",
    category: "Facility",
    description: "Peaceful relaxation area for pre and post-treatment",
  },
  {
    src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80",
    alt: "Hot stone therapy",
    category: "Therapies",
    description: "Therapeutic hot stone massage for deep relaxation",
  },
];

const categories = [
  "All",
  "Treatment Rooms",
  "Therapies",
  "Specialized Care",
  "Products",
  "Facility",
];

export default function GalleryPage() {
  return (
    <main className="flex flex-col gap-16 pb-16">
      {/* Banner */}
      <section className="relative h-64 md:h-80 flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80"
          alt="Gallery Banner"
          fill
          className="absolute inset-0 object-cover object-center z-0"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 to-white/95 z-10" />
        <div className="relative z-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Our Gallery
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a virtual tour of our tranquil wellness space and discover the
            serene environment where your healing journey begins.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <Badge
              key={category}
              variant="outline"
              className="px-4 py-2 text-sm cursor-pointer hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, i) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.7 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="overflow-hidden border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <Badge variant="secondary" className="mb-2 text-xs">
                    {image.category}
                  </Badge>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {image.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <Separator className="my-8" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-200"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Experience Our Space in Person
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our gallery showcases just a glimpse of the tranquility that awaits
            you. Book your appointment today and experience the full serenity of
            our wellness sanctuary.
          </p>
          <motion.a
            href="https://bunbury-wellness-remedial-massage.au4.cliniko.com/bookings?fbclid=IwY2xjawLQHwhleHRuA2FlbQIxMABicmlkETFGWm5COXpTZnBWTDRRWXd1AR6D56Gac76XjpZheWQiNuBZpE_oNC8mLe7YkRnPgbLjaQBGnio1rQsrAOouag_aem_wheIqeqYpLSoqQOOP_uNvg#service"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            Book Your Visit
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
}
