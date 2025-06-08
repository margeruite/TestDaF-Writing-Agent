
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  BookOpen, 
  Clock, 
  User, 
  ArrowRight, 
  Star, 
  TrendingUp,
  Target,
  Globe,
  Brain,
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const featuredPost = {
  title: 'Complete TestDaF Writing Guide: From Beginner to TDN 5',
  excerpt: 'Master all four TestDaF writing tasks with our comprehensive guide. Learn proven strategies, common mistakes to avoid, and get sample essays with detailed analysis.',
  author: 'Dr. Sarah Mueller',
  date: '2024-05-15',
  readTime: '4 min read',
  category: 'TestDaF Strategy',
  image: 'https://i.ytimg.com/vi/lfmrNqfvpZQ/maxresdefault.jpg',
  featured: true,
  slug: 'complete-testdaf-writing-guide',
};

const blogPosts = [
  {
    title: 'How AI-Powered Feedback Revolutionizes German Learning',
    excerpt: 'Discover how artificial intelligence is transforming language learning and why AI feedback is more effective than traditional methods for TestDaF preparation.',
    author: 'Prof. Michael Schmidt',
    date: '2024-05-12',
    readTime: '3 min read',
    category: 'AI Learning',
    image: 'https://i.pinimg.com/originals/b9/cf/3a/b9cf3a2a0b52c02a19c2e265a785a160.jpg',
    tags: ['AI', 'Technology', 'Learning'],
    slug: 'ai-powered-feedback-german-learning',
  },
  {
    title: 'TestDaF Writing Task 1: Mastering Chart and Graph Descriptions',
    excerpt: 'Master the art of describing statistical data in German. Learn essential vocabulary, sentence structures, and common phrases for TestDaF Task 1.',
    author: 'Anna Weber',
    date: '2024-05-10',
    readTime: '10 min read',
    category: 'Writing Skills',
    image: 'https://i.ytimg.com/vi/pxiTBRjCegQ/maxresdefault.jpg',
    tags: ['TestDaF', 'Writing', 'Charts'],
    slug: 'testdaf-writing-task-1-charts-graphs',
  },
  {
    title: 'Study in Germany: Complete University Application Guide 2024',
    excerpt: 'Everything you need to know about applying to German universities, from choosing the right program to visa requirements and cultural preparation.',
    author: 'Dr. Thomas Richter',
    date: '2024-05-08',
    readTime: '5 min read',
    category: 'Study Abroad',
    image: 'https://i.ytimg.com/vi/WTJ4T3C6aAU/maxresdefault.jpg',
    tags: ['Germany', 'University', 'Application'],
    slug: 'study-germany-university-application-guide',
  },
  {
    title: 'Common Grammar Mistakes in TestDaF Writing (and How to Fix Them)',
    excerpt: 'Avoid the most frequent grammar errors that cost students valuable points. Learn the rules and practice with real examples from TestDaF essays.',
    author: 'Lisa Hoffmann',
    date: '2024-05-05',
    readTime: '7 min read',
    category: 'Grammar',
    image: 'https://i.pinimg.com/736x/a1/c9/6c/a1c96cb744b65948fbf2a5a7406b7e0f.jpg',
    tags: ['Grammar', 'TestDaF', 'Writing'],
    slug: 'common-grammar-mistakes-testdaf-writing',
  },
  {
    title: 'Building Academic Vocabulary for TestDaF Success',
    excerpt: 'Expand your German academic vocabulary with our curated word lists, memory techniques, and context-based learning strategies.',
    author: 'Dr. Elena Kowalski',
    date: '2024-05-03',
    readTime: '9 min read',
    category: 'Vocabulary',
    image: 'https://i.pinimg.com/originals/fd/bc/79/fdbc792acc043db76225d9d064eba2cc.jpg',
    tags: ['Vocabulary', 'Academic', 'TestDaF'],
    slug: 'building-academic-vocabulary-testdaf',
  },
  {
    title: 'Time Management Strategies for TestDaF Writing Section',
    excerpt: 'Learn how to effectively manage your time during the TestDaF writing section. Get proven techniques to complete all tasks within the time limit.',
    author: 'Marcus Jung',
    date: '2024-05-01',
    readTime: '6 min read',
    category: 'Test Strategy',
    image: 'https://play-lh.googleusercontent.com/ieQBnpbVEitrL9Kfu4d00U5RItUev1t91u6-9BnkLNJtuPe5RLbtr8G9Zqo-k3PaWrjL',
    tags: ['Time Management', 'TestDaF', 'Strategy'],
    slug: 'time-management-testdaf-writing',
  },
  {
    title: 'TestDaF Writing Task 2: Argumentative Essays That Score TDN 5',
    excerpt: 'Learn how to structure compelling argumentative essays for TestDaF Task 2. Discover advanced techniques and phrases that examiners love.',
    author: 'Dr. Petra Müller',
    date: '2024-04-28',
    readTime: '11 min read',
    category: 'Writing Skills',
    image: 'https://i.pinimg.com/736x/50/cc/12/50cc123dd5a88abc576c81a1d880f248.jpg',
    tags: ['TestDaF', 'Argumentative Writing', 'TDN 5'],
    slug: 'testdaf-task-2-argumentative-essays',
  },
  {
    title: 'Cultural Integration: Succeeding as an International Student in Germany',
    excerpt: 'Navigate German academic culture, build meaningful relationships, and thrive in your studies with practical tips from successful international students.',
    author: 'International Student Team',
    date: '2024-04-25',
    readTime: '13 min read',
    category: 'Study Abroad',
    image: 'https://kadamboverseas.com/wp-content/uploads/2024/01/Studying-in-Germany-37.jpg',
    tags: ['Culture', 'International Students', 'Germany'],
    slug: 'cultural-integration-international-students-germany',
  },
];

const categories = [
  { name: 'TestDaF Strategy', count: 12, color: 'bg-petrol text-white' },
  { name: 'Writing Skills', count: 8, color: 'bg-blue-100 text-blue-800' },
  { name: 'Grammar', count: 6, color: 'bg-green-100 text-green-800' },
  { name: 'Study Abroad', count: 5, color: 'bg-purple-100 text-purple-800' },
  { name: 'AI Learning', count: 4, color: 'bg-coral text-white' },
  { name: 'Vocabulary', count: 7, color: 'bg-yellow-100 text-yellow-800' },
];

const popularTags = [
  'TestDaF', 'German Writing', 'Study in Germany', 'Grammar', 'Vocabulary', 
  'AI Learning', 'University Application', 'TDN Score', 'Academic Writing', 'Language Learning'
];

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-petrol/5 via-transparent to-petrol-light/5">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge variant="secondary" className="mb-4">
              <BookOpen className="w-4 h-4 mr-2" />
              GermanAIAgent Blog
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Master TestDaF with Expert <span className="text-gradient">Insights</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Get the latest strategies, tips, and guides for TestDaF success. 
              From writing techniques to study abroad advice, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Featured Post */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="overflow-hidden hover-lift">
                <div className="relative aspect-video">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-petrol-gradient text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge variant="secondary">{featuredPost.category}</Badge>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 hover:text-petrol transition-colors">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{featuredPost.author}</span>
                      <span className="text-sm text-gray-400">•</span>
                      <span className="text-sm text-gray-600">{featuredPost.date}</span>
                    </div>
                    <Link href={`/blog/${featuredPost.slug}`}>
                      <Button variant="outline" size="sm">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                  <Card className="h-full hover-lift group">
                    <div className="relative aspect-video">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {post.category}
                        </Badge>
                        <div className="flex items-center text-xs text-gray-600">
                          <Clock className="w-3 h-3 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-petrol transition-colors">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center space-x-1">
                          <User className="w-3 h-3" />
                          <span>{post.author}</span>
                        </div>
                        <span>{post.date}</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-3">
                        {post.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Load More Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center"
            >
              <Button variant="outline" size="lg">
                Load More Articles
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="w-5 h-5 mr-2 text-petrol" />
                    Categories
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.map((category, index) => (
                    <Link
                      key={index}
                      href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-sm font-medium">{category.name}</span>
                      <Badge className={`text-xs ${category.color}`}>
                        {category.count}
                      </Badge>
                    </Link>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Popular Tags */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-petrol" />
                    Popular Tags
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag, index) => (
                      <Link
                        key={index}
                        href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        <Badge 
                          variant="outline" 
                          className="text-xs hover:bg-petrol hover:text-white transition-colors cursor-pointer"
                        >
                          {tag}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="bg-petrol-gradient text-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Globe className="w-5 h-5 mr-2" />
                    Stay Updated
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm opacity-90">
                    Get the latest TestDaF tips and study guides delivered to your inbox.
                  </p>
                  <div className="space-y-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                    <Button className="w-full bg-white text-petrol hover:bg-gray-100">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Brain className="w-5 h-5 mr-2 text-petrol" />
                    Quick Links
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link href="/writing-agent" className="flex items-center text-sm hover:text-petrol transition-colors">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Try AI Writing Coach
                  </Link>
                  <Link href="/pricing" className="flex items-center text-sm hover:text-petrol transition-colors">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    View Pricing Plans
                  </Link>
                  <Link href="/setup" className="flex items-center text-sm hover:text-petrol transition-colors">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Get Free Evaluation
                  </Link>
                  <Link href="/dashboard" className="flex items-center text-sm hover:text-petrol transition-colors">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    View Dashboard
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
