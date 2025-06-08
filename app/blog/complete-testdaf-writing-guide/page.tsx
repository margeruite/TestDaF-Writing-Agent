
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowLeft, 
  Clock, 
  User, 
  Calendar,
  BookOpen,
  Target,
  CheckCircle,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function CompleteTestDaFGuide() {
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
              <Badge variant="secondary" className="bg-petrol text-white">
                TestDaF Strategy
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Complete TestDaF Writing Guide: From Beginner to TDN 5
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
                  <span>4 min read</span>
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
                src="/images/blog/testdaf-writing-guide.png"
                alt="Complete TestDaF writing guide with study materials and strategies"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-8">
              <div>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Master TestDaF writing with our comprehensive guide. Learn the essential strategies, 
                  common mistakes to avoid, and proven techniques to achieve your target TDN score.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Target className="w-6 h-6 mr-2 text-petrol" />
                  Understanding TestDaF Writing Tasks
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  TestDaF writing consists of one 60-minute task where you must write a coherent text of approximately 
                  200 words. The task typically involves describing a graph, presenting arguments, and giving your opinion 
                  on academic topics.
                </p>
                
                <div className="relative aspect-video bg-gray-200 rounded-xl overflow-hidden mb-6">
                  <Image
                    src="https://i.ytimg.com/vi/Dc5S2Y3oHeI/maxresdefault.jpg"
                    alt="TestDaF writing task example"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <BookOpen className="w-6 h-6 mr-2 text-petrol" />
                  Essential Writing Structure
                </h2>
                <div className="bg-petrol-50 p-6 rounded-xl mb-6">
                  <h3 className="font-semibold mb-3">The Perfect TestDaF Structure:</h3>
                  <ol className="space-y-2 text-gray-700">
                    <li><strong>Introduction (20-30 words):</strong> Introduce the topic and graph</li>
                    <li><strong>Description (60-80 words):</strong> Describe key data and trends</li>
                    <li><strong>Analysis (60-80 words):</strong> Explain possible reasons</li>
                    <li><strong>Conclusion (40-50 words):</strong> Summarize and give your opinion</li>
                  </ol>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-2 text-petrol" />
                  Key Success Strategies
                </h2>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-3 text-green-700">Do This:</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Use academic vocabulary</li>
                        <li>• Connect ideas with linking words</li>
                        <li>• Stay within 200 words</li>
                        <li>• Check grammar and spelling</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-3 text-red-700">Avoid This:</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Personal anecdotes</li>
                        <li>• Informal language</li>
                        <li>• Copying the prompt exactly</li>
                        <li>• Going over the word limit</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Star className="w-6 h-6 mr-2 text-petrol" />
                  TDN Score Requirements
                </h2>
                <div className="bg-gray-50 p-6 rounded-xl mb-6">
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                    <div className="p-3 bg-red-100 rounded-lg">
                      <div className="font-bold text-red-700">TDN 1</div>
                      <div className="text-sm text-red-600">Under TDN3</div>
                    </div>
                    <div className="p-3 bg-orange-100 rounded-lg">
                      <div className="font-bold text-orange-700">TDN 2</div>
                      <div className="text-sm text-orange-600">Under TDN3</div>
                    </div>
                    <div className="p-3 bg-yellow-100 rounded-lg">
                      <div className="font-bold text-yellow-700">TDN 3</div>
                      <div className="text-sm text-yellow-600">Minimum</div>
                    </div>
                    <div className="p-3 bg-green-100 rounded-lg">
                      <div className="font-bold text-green-700">TDN 4</div>
                      <div className="text-sm text-green-600">Good</div>
                    </div>
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <div className="font-bold text-blue-700">TDN 5</div>
                      <div className="text-sm text-blue-600">Excellent</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-petrol-gradient text-white p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-4">Ready to Practice?</h2>
                <p className="mb-6 opacity-90">
                  Get AI-powered feedback on your TestDaF writing and improve your score with personalized recommendations.
                </p>
                <Link href="/writing-agent">
                  <Button className="bg-white text-petrol hover:bg-gray-100">
                    Try Our Writing Agent
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
