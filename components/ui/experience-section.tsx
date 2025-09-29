"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Building2, Briefcase, Award, ExternalLink } from 'lucide-react'

interface Experience {
  id: string
  title: string
  company: string
  location: string
  type: 'full-time' | 'internship' | 'freelance' | 'project'
  startDate: string
  endDate: string
  description: string
  achievements: string[]
  technologies: string[]
  link?: string
  current?: boolean
}

const experiences: Experience[] = [
  {
    id: '1',
    title: 'Software Engineer',
    company: 'Internshala',
    location: 'Gurugram',
    type: 'full-time',
    startDate: 'Feb 2023',
    endDate: 'Nov 2024',
    current: false,
    description: 'Engineered scalable web applications and administrative tools to enhance operational efficiency and user experience across high-traffic platforms.',
    achievements: [
      'Engineered a suite of administrative tools that eliminated 95% of routine requests to the engineering team, boosting operational efficiency and freeing up 48+ hours monthly for high-impact projects',
      'Optimized high-traffic pages by caching with Redis, serving 150K+ users monthly and cutting database costs by 70%',
      'Reduced Cumulative Layout Shift (CLS) by 88.73% on multiple pages, enhancing user experience and page stability',
      'Developed responsive and high-speed landing pages for campaigns to promote offers and attract approximately 5,000 new users per campaign',
      'Led code reviews for 400+ pull requests on GitHub, offering constructive feedback and helping to maintain high code quality standards'
    ],
    technologies: ['React', 'Node.js', 'Redis', 'PostgreSQL', 'JavaScript', 'HTML/CSS', 'GitHub'],
    link: 'https://internshala.com'
  },
  {
    id: '2',
    title: 'Teaching Assistant',
    company: 'CodeChef',
    location: 'Bangalore',
    type: 'full-time',
    startDate: 'Dec 2020',
    endDate: 'Oct 2021',
    description: 'Mentored students in Data Structures and Algorithms while creating educational content for programming contests.',
    achievements: [
      'Mentored 10,000+ students in Data Structures and Algorithms (DSA), enhancing students\' algorithmic thinking skills',
      'Produced solution videos for programming contests, achieving over 500,000+ views on CodeChef\'s official YouTube channel'
    ],
    technologies: ['C++', 'Python', 'Data Structures', 'Algorithms', 'Video Production', 'Teaching'],
    link: 'https://codechef.com'
  }
]

export function ExperienceSection() {
  const [hoveredExperience, setHoveredExperience] = useState<string | null>(null)

  const getTypeColor = (type: Experience['type']) => {
    switch (type) {
      case 'full-time':
        return 'bg-blue-600/20 text-blue-400 border-blue-500/30'
      case 'internship':
        return 'bg-green-600/20 text-green-400 border-green-500/30'
      case 'freelance':
        return 'bg-purple-600/20 text-purple-400 border-purple-500/30'
      case 'project':
        return 'bg-orange-600/20 text-orange-400 border-orange-500/30'
      default:
        return 'bg-gray-600/20 text-gray-400 border-gray-500/30'
    }
  }

  const getTypeIcon = (type: Experience['type']) => {
    switch (type) {
      case 'full-time':
        return <Briefcase className="w-4 h-4" />
      case 'internship':
        return <Award className="w-4 h-4" />
      case 'freelance':
        return <Building2 className="w-4 h-4" />
      case 'project':
        return <Briefcase className="w-4 h-4" />
      default:
        return <Briefcase className="w-4 h-4" />
    }
  }

  return (
    <div className="relative min-h-screen text-white pt-20" id="experience">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey in software development and IoT innovation
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-500 via-purple-500 to-blue-500"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex items-start"
                onHoverStart={() => setHoveredExperience(experience.id)}
                onHoverEnd={() => setHoveredExperience(null)}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-rose-500 to-purple-600 rounded-full border-4 border-gray-950 z-10"></div>

                {/* Content card */}
                <motion.div
                  className="ml-16 bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 flex-1 hover:bg-gray-900/70 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-white">
                          {experience.title}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-sm border flex items-center gap-1 ${getTypeColor(experience.type)}`}>
                          {getTypeIcon(experience.type)}
                          {experience.type.charAt(0).toUpperCase() + experience.type.slice(1).replace('-', ' ')}
                        </span>
                        {experience.current && (
                          <span className="px-2 py-1 bg-green-600/20 text-green-400 text-xs rounded-full border border-green-500/30">
                            Current
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-4 text-gray-300 mb-4">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4" />
                          <span className="font-medium">{experience.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{experience.startDate} - {experience.endDate}</span>
                        </div>
                      </div>

                      {experience.link && (
                        <a
                          href={experience.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-rose-500 hover:text-rose-400 transition-colors mb-4"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Visit Company
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <span className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: idx * 0.05 }}
                          className="px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-full border border-gray-700 hover:border-rose-500/50 hover:text-rose-400 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-16"
          >
            <p className="text-gray-400 text-lg mb-6">
              Interested in working together?
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-rose-500 to-purple-600 text-white font-semibold rounded-full hover:from-rose-600 hover:to-purple-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
