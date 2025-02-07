import { motion } from "framer-motion";
import logosinfondo from "../assets/logoHD.jpeg";

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <img
            src={logosinfondo}
            alt="Suramérica Cargo y envios"
            width={300}
            height={300}
            className="mx-auto bg-white rounded-2xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="flex justify-center space-x-2">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <motion.div
                key={index}
                className="w-4 h-4 bg-yellow-500/40 rounded-full"
                animate={{
                  y: ["0%", "-60%", "0%"],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: index * 1,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
