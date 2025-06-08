
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Check, 
  Star, 
  Zap, 
  Crown, 
  Target, 
  Clock,
  ChevronDown,
  ChevronUp,
  HelpCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const pricingTiers = [
  {
    name: 'Discover',
    price: 'Free',
    period: '',
    description: 'Perfect for trying out our AI feedback system',
    features: [
      '1 writing evaluation and feedback',
      'Basic TDN score prediction',
      'Instant AI feedback in native language',
      'Basic writing analysis',
      'Email support'
    ],
    notIncluded: [
      'Learning plan',
      'Progress tracking',
      'Advanced analytics',
      'Priority support'
    ],
    buttonText: 'Get Free Evaluation',
    buttonVariant: 'outline' as const,
    popular: false,
    icon: Target,
    color: 'text-gray-600',
    bgColor: 'bg-gray-50',
  },
  {
    name: 'Single Upload',
    price: '€9',
    period: 'one-time',
    description: 'Ideal for evaluating a specific text',
    features: [
      'Upload personal text for evaluation',
      'Detailed TDN score prediction',
      'Examiner-style feedback',
      'Task-specific evaluation',
      'Corrections in native language',
      'Downloadable report'
    ],
    notIncluded: [
      'Multiple uploads',
      'Progress tracking',
      'Learning plan',
      'Practice tasks'
    ],
    buttonText: 'Get Single Review',
    buttonVariant: 'default' as const,
    popular: false,
    icon: Zap,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    name: 'Train',
    price: '€49',
    period: '14 days',
    description: 'Most popular choice for comprehensive preparation',
    features: [
      '3 full exam simulations with TDN scoring',
      'Unlimited training tasks and strategies',
      'Personalized examiner-style feedback',
      'Task-specific improvement plans',
      'Progress tracking and analytics',
      'Time management tips',
      'Native language support',
      'Priority email support'
    ],
    notIncluded: [
      'Extended access period'
    ],
    buttonText: 'Start Training',
    buttonVariant: 'default' as const,
    popular: true,
    icon: Star,
    color: 'text-petrol',
    bgColor: 'bg-petrol-50',
    scale: true,
  },
  {
    name: 'Simulate',
    price: '€79',
    period: '7 days',
    description: 'Intensive exam preparation for serious candidates',
    features: [
      '7 full TestDaF writing simulations',
      'Accurate TDN score prediction',
      'Detailed examiner-style feedback',
      'Time management strategies',
      'Exam-day preparation guide',
      'Performance analytics',
      'Native language explanations',
      'Priority support with 24h response',
      'Personalized study plan'
    ],
    notIncluded: [],
    buttonText: 'Start Simulation',
    buttonVariant: 'default' as const,
    popular: false,
    icon: Crown,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
];

const faqs = [
  {
    question: 'How does the AI feedback work?',
    answer: 'Our AI analyzes your writing using advanced natural language processing, evaluating grammar, vocabulary, structure, and TestDaF-specific criteria. You receive detailed feedback in your native language with specific improvement suggestions.'
  },
  {
    question: 'What languages are supported for feedback?',
    answer: 'We support feedback in over 15 languages including English, Spanish, French, Italian, Portuguese, Russian, Chinese, Japanese, Korean, Arabic, and more. The AI provides explanations and corrections in your chosen native language.'
  },
  {
    question: 'How accurate is the TDN score prediction?',
    answer: 'Our TDN score prediction is based on official TestDaF criteria and has been validated against thousands of actual exam results. While we cannot guarantee exact scores, our predictions are typically within ±0.5 TDN levels.'
  },
  {
    question: 'What is the difference between the free evaluation and free trial?',
    answer: 'The free evaluation gives you one writing analysis and feedback to try our service. The free trial is a 1-week access to the full Train package features, available only for Train package subscribers.'
  },
  {
    question: 'Can I upgrade or downgrade my plan?',
    answer: 'Yes, you can upgrade to a higher tier at any time. The price difference will be prorated. Downgrades take effect at the end of your current billing period.'
  },
  {
    question: 'What happens after my plan expires?',
    answer: 'After your plan expires, you can still access your previous feedback and reports, but you won\'t be able to submit new texts for analysis. You can renew or upgrade at any time to continue using the service.'
  },
  {
    question: 'Is there a money-back guarantee?',
    answer: 'Yes, we offer a 7-day money-back guarantee for all paid plans. If you\'re not satisfied with the service, contact us within 7 days for a full refund.'
  }
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-petrol/5 via-transparent to-petrol-light/5">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <Badge variant="secondary" className="mb-4">
              <Star className="w-4 h-4 mr-2" />
              Flexible Pricing
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Choose the Plan That Fits Your{' '}
              <span className="text-gradient">TestDaF Goals</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              From free evaluations to intensive exam preparation, we have the perfect plan 
              to help you achieve your target TDN score with AI-powered feedback.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {pricingTiers.map((tier, index) => {
              const Icon = tier.icon;
              return (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative h-full ${tier.scale ? 'lg:scale-105' : ''}`}
                >
                  <Card className={`h-full flex flex-col hover-lift ${tier.popular ? 'ring-2 ring-petrol shadow-petrol-lg' : ''}`}>
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-petrol-gradient text-white px-4 py-1">
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    
                    <CardHeader className="text-center pb-4">
                      <div className={`w-12 h-12 ${tier.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                        <Icon className={`w-6 h-6 ${tier.color}`} />
                      </div>
                      <CardTitle className="text-xl font-bold">{tier.name}</CardTitle>
                      <div className="space-y-1">
                        <div className="text-3xl font-bold">
                          {tier.price}
                          {tier.period && (
                            <span className="text-lg font-normal text-gray-600">
                              /{tier.period}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">{tier.description}</p>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="flex-1 flex flex-col">
                      <div className="space-y-3 flex-1">
                        {tier.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-3">
                            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                        {tier.notIncluded.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-3 opacity-50">
                            <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                              <div className="w-3 h-3 border border-gray-300 rounded-full mx-auto mt-1"></div>
                            </div>
                            <span className="text-sm text-gray-500">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6">
                        <Link href="/setup" className="block">
                          <Button 
                            variant={tier.buttonVariant}
                            className={`w-full h-12 ${tier.popular ? 'btn-primary' : ''}`}
                          >
                            {tier.buttonText}
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-gradient">GermanAIAgent</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform offers unique advantages that traditional tutoring cannot match.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-petrol-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Instant Feedback</h3>
                  <p className="text-gray-600">
                    Get immediate AI analysis and feedback, no waiting for human tutors. 
                    Available 24/7 whenever you want to practice.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-coral-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Personalized Learning</h3>
                  <p className="text-gray-600">
                    AI adapts to your specific weaknesses and learning style, 
                    providing targeted feedback in your native language.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
                  <p className="text-gray-600">
                    95% of our students improve their TDN scores. 
                    Join thousands who achieved their TestDaF goals with our AI coach.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge variant="secondary" className="mb-4">
              <HelpCircle className="w-4 h-4 mr-2" />
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about our TestDaF AI writing coach and pricing plans.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      )}
                    </div>
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === index ? 'auto' : 0,
                      opacity: openFaq === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
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
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Improve Your TestDaF Writing?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Start with our free writing evaluation and experience the power of AI-driven feedback. 
              No credit card required, cancel anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/setup">
                <Button size="lg" className="bg-white text-petrol hover:bg-gray-100">
                  Get Free Evaluation
                </Button>
              </Link>
              <Link href="/writing-agent">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Try Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
