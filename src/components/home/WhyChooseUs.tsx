import Image from "next/image";
import { theme } from "@/lib/theme";
import { 
  ShieldCheck, 
  Rocket, 
  Globe, 
  BarChart3 
} from "lucide-react"; // Assuming you're using lucide-react
import home2 from '../../../public/home2.svg'

const features = [
  {
    title: "HGB Compliance",
    description: "Expert adherence to German Commercial Code standards.",
    icon: ShieldCheck,
  },
  {
    title: "Modern Tech Stack",
    description: "Future-proof digital workflows designed for rapid growth and agility.",
    icon: Rocket,
  },
  {
    title: "India-Based Talent",
    description: "Access to elite technical and creative skillsets at scale.",
    icon: Globe,
  },
  {
    title: "Scalable Infrastructure",
    description: "Systems designed to grow from 10 to 500+ employees.",
    icon: BarChart3,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-32 bg-white">
        <div className="w-full mx-auto px-28">

            <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div className="space-y-8">
                <div className="space-y-4">
                <h2 className={`text-4xl md:text-5xl font-bold ${theme.text.brand}`}>
                    Why Choose us for Your Business Growth?
                </h2>

                <p className={`text-lg leading-relaxed ${theme.text.muted}`}>
                    We specialize in building the high-performance foundations that
                    propel newly established SMBs. Our methodology combines modern
                    regulatory agility with global talent advantages to scale your
                    vision from day one.
                </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                {features.map((feature, index) => (
                    <div key={index} className="flex gap-4">
                    <feature.icon className="w-6 h-6 text-primary mt-1" strokeWidth={2.5} />
                    <div>
                        <h3 className={`font-bold text-lg ${theme.text.main}`}>
                        {feature.title}
                        </h3>
                        <p className={`text-sm mt-1 leading-snug ${theme.text.muted}`}>
                        {feature.description}
                        </p>
                    </div>
                    </div>
                ))}
                </div>
            </div>

            {/* Right Image */}
            <div className="w-full">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                    src={home2}
                    alt="Strategic planning"
                    width={800}
                    height={600}
                    className="w-full h-125 object-cover"
                />
                </div>
            </div>

            </div>
        </div>
        </section>
  );
}