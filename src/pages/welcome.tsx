"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import eintrachtLogo from "@/public/icon.svg";
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="flex flex-col items-center max-w-md w-full">
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
        <div className="h-16 mb-12 w-full">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentQuestionIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-center text-gray-600 italic"
            >
              "{exampleQuestions[currentQuestionIndex]}"
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Button */}
        <Button onClick={handleStartChat}>Chat starten</Button>
      </div>
    </div>
  );
}
