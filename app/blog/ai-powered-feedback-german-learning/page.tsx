
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowLeft, 
  Clock, 
  User, 
  Calendar,
  Brain,
  Zap,
  Target,
  TrendingUp,
  MessageSquare
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function AIFeedbackGuide() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-petrol/5 via-transparent to-petrol-light/5">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/blog" className="inline-flex items-center text-petrol hover:text-petrol-dark mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-purple-600 text-white">
                AI Technology
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                How AI-Powered Feedback Revolutionizes German Learning
              </h1>
              
              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>GermanAIAgent Team</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>June 1, 2025</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>3 min read</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            {/* Hero Image */}
            <div className="relative aspect-video bg-gray-200 rounded-2xl overflow-hidden mb-8">
              <Image
                src="/images/blog/ai-powered-feedback.png"
                alt="AI-powered German learning technology with digital interface and feedback systems"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-8">
              <div>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Discover how artificial intelligence is transforming German language learning, providing 
                  instant, personalized feedback that adapts to your unique learning style and pace.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Brain className="w-6 h-6 mr-2 text-petrol" />
                  The Power of Instant AI Feedback
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Traditional language learning often involves waiting days or weeks for teacher feedback. 
                  AI changes this completely by providing immediate, detailed analysis of your writing, 
                  helping you learn from mistakes in real-time.
                </p>
                
                <div className="relative aspect-video bg-gray-200 rounded-xl overflow-hidden mb-6">
                  <Image
                    src="https://i.pinimg.com/originals/b5/d6/4c/b5d64c29cf731047dec689d275a4aa60.jpg"
                    alt="Traditional vs AI-powered learning comparison"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Zap className="w-6 h-6 mr-2 text-petrol" />
                  Key Advantages of AI Learning
                </h2>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <Card className="hover-lift">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                        <Target className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold mb-2">Personalized Learning</h3>
                      <p className="text-gray-600">AI adapts to your skill level and learning patterns, providing customized exercises and feedback.</p>
                    </CardContent>
                  </Card>
                  <Card className="hover-lift">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                        <TrendingUp className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="font-semibold mb-2">Progress Tracking</h3>
                      <p className="text-gray-600">Monitor your improvement with detailed analytics and performance insights over time.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <MessageSquare className="w-6 h-6 mr-2 text-petrol" />
                  Native Language Support
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  One of the biggest advantages of AI-powered learning is receiving explanations in your native language. 
                  This helps you understand complex German grammar rules and writing conventions more effectively.
                </p>
                
                <div className="bg-gradient-to-r from-petrol-50 to-blue-50 p-6 rounded-xl mb-6">
                  <h3 className="font-semibold mb-3">Supported Languages:</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                    <span className="bg-white px-3 py-1 rounded-full">English</span>
                    <span className="bg-white px-3 py-1 rounded-full">Spanish</span>
                    <span className="bg-white px-3 py-1 rounded-full">French</span>
                    <span className="bg-white px-3 py-1 rounded-full">Italian</span>
                    <span className="bg-white px-3 py-1 rounded-full">Portuguese</span>
                    <span className="bg-white px-3 py-1 rounded-full">Russian</span>
                    <span className="bg-white px-3 py-1 rounded-full">Chinese</span>
                    <span className="bg-white px-3 py-1 rounded-full">Arabic</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Real Results from AI Learning</h2>
                <div className="bg-gray-50 p-6 rounded-xl mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-petrol mb-2">3x</div>
                      <div className="text-gray-600">Faster improvement</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-petrol mb-2">95%</div>
                      <div className="text-gray-600">Student satisfaction</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-petrol mb-2">24/7</div>
                      <div className="text-gray-600">Available support</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-petrol-gradient text-white p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-4">Experience AI-Powered Learning</h2>
                <p className="mb-6 opacity-90">
                  Ready to revolutionize your German learning? Try our AI writing coach and see the difference 
                  personalized feedback can make.
                </p>
                <Link href="/writing-agent">
                  <Button className="bg-white text-petrol hover:bg-gray-100">
                    Start Learning with AI
                  </Button>
                </Link>
              </div>
            </div>
          </motion.article>
        </div>
      </section>
    </div>
  );
}
