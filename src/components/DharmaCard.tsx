import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface DharmaCardProps {
  id: string;
  title: string;
  titleSanskrit: string;
  description: string;
  coverImage: string;
}

export const DharmaCard = ({
  id,
  title,
  titleSanskrit,
  description,
  coverImage,
}: DharmaCardProps) => {
  const navigate = useNavigate();
  return (
    <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35, ease: "easeOut" }}>
    <Card className="group relative overflow-hidden border-2 border-accent/20 bg-card/80 backdrop-blur-sm hover:border-accent/60 hover:shadow-2xl transition-all duration-500 cursor-pointer">
      {/* Cover Image */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />
        
        {/* Glow Effect on Hover */}
        <div className="absolute inset-0 bg-gradient-sacred opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative p-6">
        {/* Title */}
        <div className="mb-3">
          <h3 className="font-vedic text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="font-sanskrit text-base text-primary/80">
            {titleSanskrit}
          </p>
        </div>

        {/* Description - Hidden, shown on hover */}
        <div className="mb-4 max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
          <p className="font-ancient text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Decorative Line */}
        <div className="flex items-center justify-between mb-4">
          <div className="h-px w-full bg-gradient-to-r from-accent to-transparent" />
        </div>

        {/* Read Button - Appears on hover */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            className="w-full bg-gradient-divine hover:opacity-90 transition-opacity"
            onClick={() => navigate(`/dharma/${id}`)}
          >
            <BookOpen className="w-4 h-4 mr-2" />
            Explore
          </Button>
        </div>
      </div>

      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </Card>
    </motion.div>
  );
};
