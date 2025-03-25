"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, buttonVariants } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import eintrachtLogo from "@/public/icon.svg";
import Aron from "@/public/aron.png";
import Helen from "@/public/helen.png";
import Max from "@/public/max.png";
import Link from "next/link";
import {
  ArrowBigRight,
  FileQuestionIcon,
  PaperclipIcon,
  TorusIcon,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export default function WelcomeScreen() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const exampleQuestions = [
    "Wann wurde Eintracht Frankfurt gegründet?",
    "Wer war der Torschütze im UEFA-Pokal-Finale 1980?",
    "Wie viele Deutsche Meisterschaften hat Eintracht Frankfurt gewonnen?",
    "Wer war der Trainer beim DFB-Pokalsieg 2018?",
    "Welche Bedeutung hat der Adler im Vereinswappen?",
    "Erzähle mir etwas über die Geschichte des Waldstadions.",
  ];

  const contributors = [
    {
      name: "Max Wigger",
      role: "Data",
      image: Max,
      linkedin: "https://www.linkedin.com/in/max-wigger-a468052b5/",
    },
    {
      name: "Helen Haveloh",
      role: "Cloud",
      image: Helen,
      linkedin: "https://www.linkedin.com/in/helen-haveloh-5559b718a/",
    },
    {
      name: "Aron Scheffczyk",
      role: "Web",
      image: Aron,
      linkedin: "https://www.linkedin.com/in/aronscheffczyk/",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuestionIndex(
        (prevIndex) => (prevIndex + 1) % exampleQuestions.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleStartChat = () => {
    router.push("/chat");
  };

  return (
    <div className="grid grid-cols-2 grid-rows-[10%_1fr_20%] min-h-screen w-[90%] mx-auto">
      <div className="row-span-1 col-span-2 flex flex-row items-center justify-end">
        <Link
          className={cn(
            "text-muted-foreground",
            navigationMenuTriggerStyle,
            buttonVariants({
              variant: "ghost",
            })
          )}
          href={"/product-tour"}
        >
          <TorusIcon className="w-4 h-4 mr-2" />
          Product Tour
        </Link>
        <Link
          className={cn(
            "text-muted-foreground",
            navigationMenuTriggerStyle,
            buttonVariants({
              variant: "ghost",
            })
          )}
          href={"/press-release"}
        >
          <PaperclipIcon className="w-4 h-4 mr-2" />
          Press Release
        </Link>
        <Link
          className={cn(
            "text-muted-foreground",
            navigationMenuTriggerStyle,
            buttonVariants({
              variant: "ghost",
            })
          )}
          href={"/faq"}
        >
          <FileQuestionIcon className="w-4 h-4 mr-2" />
          Frequently Asked Questions
        </Link>
      </div>
      <div className="col-span-2 row-span-2 flex flex-col items-center justify-center">
        {/* Logo */}
        <div className="mb-8 w-32 h-32">
          <Image
            src={eintrachtLogo}
            alt="Eintracht Frankfurt Logo"
            width={128}
            height={128}
            className="object-contain"
          />
        </div>

        {/* Animierte Fragen */}
        <div className="h-16 mb-12 w-full max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentQuestionIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-center italic"
            >
              "{exampleQuestions[currentQuestionIndex]}"
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Button */}
        <Button
          onClick={handleStartChat}
          className=" font-display tracking-wide py-3 px-6"
        >
          <ArrowBigRight className="w-4 h-4 mr-2" />
          Chat starten
        </Button>
      </div>

      <footer className="col-span-2 py-4 self-end text-muted-foreground">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8">
            {contributors.map((contributor, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="flex items-center mb-3">
                  <div className="w-14 h-14 rounded-full overflow-hidden mr-3 border border-accent">
                    <Link href={contributor.linkedin} target="_blank">
                      <Image
                        src={contributor.image || "/placeholder.svg"}
                        alt={`Foto von ${contributor.name}`}
                        width={56}
                        height={56}
                        className="object-cover"
                      />
                    </Link>
                  </div>
                  <div>
                    <h3 className="font-medium">{contributor.name}</h3>
                    <p className="text-sm">{contributor.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground text-center text-xs mt-4">
            © {new Date().getFullYear()} Eintracht Frankfurt Museum
          </p>
        </div>
      </footer>
    </div>
  );
}
