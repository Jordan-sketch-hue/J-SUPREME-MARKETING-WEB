'use client';

import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const ServiceProcess = () => {
  const phases = [
    {
      phase: 'Discovery',
      duration: 'Week 1',
      steps: [
        'Business & market analysis',
        'Competitor research',
        'Audience profiling',
        'Goals & KPI setting',
      ],
    },
    {
      phase: 'Strategy',
      duration: 'Week 2',
      steps: [
        'Custom marketing plan',
        'Channel selection',
        'Budget allocation',
        'Timeline & milestones',
      ],
    },
    {
      phase: 'Execution',
      duration: 'Week 3-4',
      steps: [
        'Campaign setup',
        'Creative production',
        'Technical implementation',
        'Testing & QA',
      ],
    },
    {
      phase: 'Optimization',
      duration: 'Ongoing',
      steps: [
        'Performance monitoring',
        'A/B testing',
        'Data analysis',
        'Continuous improvement',
      ],
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-supreme-black to-supreme-black/80">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
            Our <span className="text-supreme-gold">Proven Process</span>
          </h2>
          <p className="text-xl text-steel-gray max-w-3xl mx-auto">
            From strategy to execution, we follow a systematic approach that delivers results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect p-8 rounded-2xl"
            >
              <div className="text-supreme-gold text-sm font-semibold mb-2">{phase.duration}</div>
              <h3 className="text-2xl font-orbitron font-bold mb-6 text-platinum-white">
                {phase.phase}
              </h3>
              <ul className="space-y-3">
                {phase.steps.map((step, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <FiCheckCircle className="text-supreme-gold mt-1 flex-shrink-0" />
                    <span className="text-steel-gray text-sm">{step}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
