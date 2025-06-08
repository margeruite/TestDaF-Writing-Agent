
'use client';

import { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  BookOpen, 
  MessageSquare, 
  Target, 
  Globe, 
  Zap, 
  TrendingUp, 
  Users, 
  Award,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Brain,
  Clock,
  BarChart3
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import LeadCaptureForm from '@/components/lead-capture-form';
import AnimatedCounter from '@/components/animated-counter';

const features = [
  {
    icon: Globe,
    title: 'Native Language Feedback',
    description: 'Get detailed feedback and explanations in your native language for better understanding.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    icon: MessageSquare,
    title: 'Sentence-by-Sentence Corrections',
    description: 'Receive granular feedback on every sentence with specific improvement suggestions.',
    color: 'text-petrol',
    bgColor: 'bg-petrol-50',
  },
  {
    icon: Brain,
    title: 'Adaptive Learning',
    description: 'AI adapts to your learning style and provides personalized improvement recommendations.',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Zap,
    title: 'Instant Feedback',
    description: 'Get immediate AI-powered analysis and scoring of your TestDaF writing tasks.',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-50',
  },
  {
    icon: Target,
    title: 'TDN Score Prediction',
    description: 'Accurate prediction of your TestDaF writing score with detailed performance metrics.',
    color: 'text-green-500',
    bgColor: 'bg-green-50',
  },
  {
    icon: TrendingUp,
    title: 'Progress Tracking',
    description: 'Monitor your improvement over time with detailed analytics and insights.',
    color: 'text-coral',
    bgColor: 'bg-coral-50',
  },
];

const stats = [
  { number: 5000, label: 'Students Helped', suffix: '+' },
  { number: 95, label: 'Success Rate', suffix: '%' },
  { number: 12000, label: 'Essays Reviewed', suffix: '+' },
  { number: 4.9, label: 'Average Rating', suffix: '/5' },
];

const testimonials = [
  {
    name: 'Maria Rodriguez',
    country: 'Spain',
    score: 'TDN 4',
    text: 'The AI feedback in Spanish helped me understand my mistakes clearly. I improved from under TDN3 to TDN 4 in just 6 weeks!',
    avatar: 'https://i.pinimg.com/originals/d9/fe/f4/d9fef46aa327af2a2a1d1d6c17e26eab.jpg',
  },
  {
    name: 'Ahmed Hassan',
    country: 'Egypt',
    score: 'TDN 5',
    text: 'Getting feedback in Arabic made all the difference. The sentence-by-sentence corrections were incredibly detailed.',
    avatar: 'https://i.pinimg.com/originals/e3/7e/0e/e37e0e25686c2139b281a57a5b4906f2.jpg',
  },
  {
    name: 'Li Wei',
    country: 'China',
    score: 'TDN 4',
    text: 'The adaptive learning system understood my weaknesses and helped me focus on the right areas. Highly recommended!',
    avatar: 'https://i.pinimg.com/originals/5f/4a/56/5f4a5607b02c0d3e0cc89c27e64a02ee.jpg',
  },
];

const howItWorks = [
  {
    step: 1,
    title: 'Upload or Write',
    description: 'Upload your existing text or start writing a new TestDaF task with our guided prompts.',
    icon: BookOpen,
  },
  {
    step: 2,
    title: 'AI Analysis',
    description: 'Our advanced AI analyzes your writing for grammar, structure, vocabulary, and TestDaF criteria.',
    icon: Brain,
  },
  {
    step: 3,
    title: 'Get Feedback',
    description: 'Receive detailed feedback in your native language with specific improvement suggestions.',
    icon: MessageSquare,
  },
  {
    step: 4,
    title: 'Improve & Practice',
    description: 'Apply the feedback and practice with new tasks to continuously improve your writing skills.',
    icon: TrendingUp,
  },
];

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const statsRef = useRef(null);
  const howItWorksRef = useRef(null);
  const testimonialsRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const featuresInView = useInView(featuresRef, { once: true });
  const statsInView = useInView(statsRef, { once: true });
  const howItWorksInView = useInView(howItWorksRef, { once: true });
  const testimonialsInView = useInView(testimonialsRef, { once: true });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-petrol/5 via-transparent to-petrol-light/5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-petrol-light/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-coral/10 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Badge variant="secondary" className="bg-petrol-gradient text-white px-4 py-2">
                    <Zap className="w-4 h-4 mr-2" />
                    AI-Powered Writing Coach
                  </Badge>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                >
                  Your TestDaF Writing Coach –{' '}
                  <span className="text-gradient">Powered by AI</span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-xl text-gray-600 leading-relaxed"
                >
                  Master TestDaF writing with AI-powered feedback in your native language. 
                  Get instant corrections, personalized learning plans, and achieve your target TDN score.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Link href="/setup">
                  <Button size="lg" className="btn-primary group">
                    Get Your Free Evaluation
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center space-x-6 text-sm text-gray-600"
              >
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Free writing evaluation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>No credit card required</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-lg mx-auto">
                <motion.div 
                  className="absolute inset-0 bg-petrol-gradient rounded-3xl opacity-10"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 2, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>
                <div className="relative z-10 p-8">
                  <Image
                    src="https://i.pinimg.com/originals/ec/54/80/ec5480485317cd0dbb1d4b42f201e91b.png"
                    alt="GermanAIAgent Writing Interface"
                    fill
                    className="object-contain rounded-2xl"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  <AnimatedCounter
                    end={stat.number}
                    suffix={stat.suffix}
                    duration={2}
                    trigger={statsInView}
                  />
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">
              <Star className="w-4 h-4 mr-2" />
              Key Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-gradient">GermanAIAgent</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform combines advanced language processing with personalized learning 
              to help you achieve your TestDaF writing goals faster than ever before.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover-lift group">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-6 h-6 ${feature.color}`} />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section ref={howItWorksRef} className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={howItWorksInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">
              <Clock className="w-4 h-4 mr-2" />
              How It Works
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Started in <span className="text-gradient">4 Simple Steps</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process makes it easy to start improving your TestDaF writing skills immediately.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  animate={howItWorksInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center relative"
                >
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-petrol to-petrol-light opacity-30 z-0"></div>
                  )}
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-petrol-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-petrol">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-coral text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">
              <Users className="w-4 h-4 mr-2" />
              Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="text-gradient">Students Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of successful TestDaF candidates who achieved their target scores with our AI-powered coaching.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="relative w-12 h-12 mr-4">
                        <Image
                          src={testimonial.avatar}
                          alt={`${testimonial.name} avatar`}
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.country}</p>
                      </div>
                      <Badge variant="secondary" className="ml-auto bg-green-100 text-green-800">
                        {testimonial.score}
                      </Badge>
                    </div>
                    <p className="text-gray-600 leading-relaxed italic">"{testimonial.text}"</p>
                    <div className="flex items-center mt-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-petrol-gradient text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Achieve Your TestDaF Writing Goals?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of successful students who improved their TestDaF writing scores with our AI-powered coaching. 
              Start with one free writing evaluation and feedback today.
            </p>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto">
              <LeadCaptureForm />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
