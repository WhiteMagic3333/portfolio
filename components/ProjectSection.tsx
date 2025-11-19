"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

interface Project {
  id: string
  name: string
  color: string
  image: string
  link: string
  description: string
}

const projects: Project[] = [
  { 
    id: '1', 
    name: 'Open Polls', 
    color: '#4A90E2', // Blue color
    image: '/open-polls.png',
    link: 'https://github.com/raghavendrashekhawat2/Open-Polls',
    description: 'Designed and deployed a Flask-based platform supporting 2 poll types (public and private), enabling secure user registration, boosting user participation and engagement. Secured user authentication with SMS verification via Twilio API, using a 4-digit OTP. Enabled poll owners to sort participants by 4 distinct criteria, improving data organization and analysis efficiency. Implemented Google Visualizations to display poll results with 3 different charts, enhancing data clarity and user interaction.'
  },
  { 
    id: '2', 
    name: 'Car Rental Website', 
    color: '#7B68EE', // Medium slate blue color
    image: '/car-rental.png',
    link: 'https://github.com/WhiteMagic3333/Car-Rental-Agency-Online',
    description: 'Built a scalable online platform using PHP and MySQL for renting cars and listing vehicles. Enabled rental agencies to efficiently manage car listings, facilitating easy booking for users.'
  },
]

export function ProjectSection() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  return (
    <div className="relative min-h-screen text-white pt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="relative">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              className="block relative py-16 border-t border-white/20 overflow-hidden"
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              initial={{ backgroundColor: 'transparent' }}
              animate={{ backgroundColor: hoveredProject === project.id ? project.color : 'transparent' }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="flex flex-col space-y-4"
                initial={{ opacity: 1 }}
                animate={{ opacity: hoveredProject === project.id ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-medium">{project.name}</span>
                  <span className="text-xl">0{index + 1}</span>
                </div>
                <p className="text-lg text-white/70 max-w-2xl">{project.description}</p>
              </motion.div>
              <motion.div
                className="absolute inset-0 flex items-center justify-between p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="flex flex-col space-y-4"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: hoveredProject === project.id ? 0 : -20, opacity: hoveredProject === project.id ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <motion.div
                    className="flex items-center space-x-2 text-3xl font-medium"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <ArrowUpRight size={32} />
                    <span className="hover:underline">View Project</span>
                  </motion.div>
                  <p className="text-lg text-white max-w-lg">{project.description}</p>
                </motion.div>
                <motion.div
                  className="relative w-96 h-56"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: hoveredProject === project.id ? 0 : 100, opacity: hoveredProject === project.id ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </motion.div>
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  )
}
