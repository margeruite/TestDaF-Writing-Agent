
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowLeft, 
  Clock, 
  User, 
  Calendar,
  GraduationCap,
  FileText,
  CheckCircle,
  Globe,
  Euro
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function StudyGermanyGuide() {
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
              <Badge variant="secondary" className="bg-green-600 text-white">
                Study Abroad
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Complete Guide to Studying in Germany: University Applications
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
                  <span>5 min read</span>
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
                src="/images/blog/study-in-germany-guide.png"
                alt="German university campus with international students and application materials"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-8">
              <div>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Germany offers world-class education, affordable tuition, and excellent career opportunities. 
                  Learn everything you need to know about applying to German universities successfully.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <GraduationCap className="w-6 h-6 mr-2 text-petrol" />
                  Why Study in Germany?
                </h2>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <Card className="hover-lift">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                        <Euro className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold mb-2">Low Tuition Fees</h3>
                      <p className="text-gray-600">Most public universities charge no tuition fees, even for international students.</p>
                    </CardContent>
                  </Card>
                  <Card className="hover-lift">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                        <Globe className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="font-semibold mb-2">Global Recognition</h3>
                      <p className="text-gray-600">German degrees are recognized worldwide and highly valued by employers.</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="relative aspect-video bg-gray-200 rounded-xl overflow-hidden mb-6">
                  <Image
                    src="https://img.freepik.com/premium-vector/diverse-group-students-studying-together-library_997502-775.jpg"
                    alt="International students studying in German university"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <FileText className="w-6 h-6 mr-2 text-petrol" />
                  Application Requirements
                </h2>
                <div className="bg-petrol-50 p-6 rounded-xl mb-6">
                  <h3 className="font-semibold mb-4">Essential Documents:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Academic transcripts</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Language certificates (TestDaF/DSH)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Motivation letter</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>CV/Resume</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Letters of recommendation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Passport copy</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Language Requirements</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Most German universities require proof of German language proficiency. The TestDaF is the most 
                  widely accepted test, requiring a minimum of TDN 4 in all sections for most programs.
                </p>
                
                <div className="bg-gray-50 p-6 rounded-xl mb-6">
                  <h3 className="font-semibold mb-3">TestDaF Score Requirements:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-yellow-100 rounded-lg">
                      <div className="font-bold text-yellow-700">TDN 3</div>
                      <div className="text-sm text-yellow-600">Minimum for some programs</div>
                    </div>
                    <div className="text-center p-4 bg-green-100 rounded-lg">
                      <div className="font-bold text-green-700">TDN 4</div>
                      <div className="text-sm text-green-600">Standard requirement</div>
                    </div>
                    <div className="text-center p-4 bg-blue-100 rounded-lg">
                      <div className="font-bold text-blue-700">TDN 5</div>
                      <div className="text-sm text-blue-600">Competitive programs</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Application Timeline</h2>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-4 p-4 bg-white border-l-4 border-petrol rounded-r-lg">
                    <div className="w-8 h-8 bg-petrol text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h3 className="font-semibold">12-18 months before</h3>
                      <p className="text-gray-600">Research universities and programs, start learning German</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-white border-l-4 border-petrol rounded-r-lg">
                    <div className="w-8 h-8 bg-petrol text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h3 className="font-semibold">6-12 months before</h3>
                      <p className="text-gray-600">Take TestDaF, prepare application documents</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-white border-l-4 border-petrol rounded-r-lg">
                    <div className="w-8 h-8 bg-petrol text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h3 className="font-semibold">3-6 months before</h3>
                      <p className="text-gray-600">Submit applications, apply for visa</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-petrol-gradient text-white p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-4">Prepare for TestDaF Success</h2>
                <p className="mb-6 opacity-90">
                  Ready to start your journey to studying in Germany? Master the TestDaF writing section 
                  with our AI-powered coaching and achieve your target score.
                </p>
                <Link href="/writing-agent">
                  <Button className="bg-white text-petrol hover:bg-gray-100">
                    Start TestDaF Preparation
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
