
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { 
  TrendingUp, 
  Target, 
  Clock, 
  FileText,
  Calendar,
  CheckCircle,
  ArrowRight,
  Play,
  Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AnimatedCounter from '@/components/animated-counter';

// Dynamic import for charts to avoid SSR issues
const Chart = dynamic(() => import('react-chartjs-2').then(mod => mod.Line), {
  ssr: false,
  loading: () => <div className="h-64 bg-gray-100 rounded-lg animate-pulse"></div>
});

// Chart.js registration
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const stats = [
  { label: 'Current TDN Score', value: 3.5, change: '+0.5', icon: Target, color: 'text-petrol' },
  { label: 'Texts Analyzed', value: 24, change: '+3', icon: FileText, color: 'text-blue-600' },
  { label: 'Study Streak', value: 12, change: '+1', icon: Calendar, color: 'text-green-600' },
  { label: 'Hours Practiced', value: 18, change: '+2.5', icon: Clock, color: 'text-purple-600' },
];

const recentActivity = [
  {
    id: 1,
    type: 'writing',
    title: 'Essay: Digital Learning',
    score: 4,
    date: '2 hours ago',
    status: 'completed',
  },
  {
    id: 2,
    type: 'feedback',
    title: 'Grammar Review Session',
    score: 3.5,
    date: '1 day ago',
    status: 'completed',
  },
  {
    id: 3,
    type: 'writing',
    title: 'Essay: Environmental Protection',
    score: 3,
    date: '3 days ago',
    status: 'needs_review',
  },
];

const upcomingTasks = [
  {
    title: 'Complete Writing Task 3',
    description: 'Practice argumentative essay structure',
    dueDate: 'Today',
    priority: 'high',
  },
  {
    title: 'Review Grammar Feedback',
    description: 'Focus on article usage corrections',
    dueDate: 'Tomorrow',
    priority: 'medium',
  },
];

export default function DashboardPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Progress chart data
  const progressData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
    datasets: [
      {
        label: 'TDN Score',
        data: [2.5, 2.8, 3.0, 3.2, 3.3, 3.5],
        borderColor: '#006D77',
        backgroundColor: 'rgba(0, 109, 119, 0.1)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#006D77',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 6,
      },
    ],
  };

  const progressOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#006D77',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: '#1DE9B6',
        borderWidth: 1,
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 2,
        max: 5,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          color: '#6B7280',
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#6B7280',
        },
      },
    },
  };

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Welcome back, <span className="text-gradient">Alex</span>!
              </h1>
              <p className="text-xl text-gray-600">
                You're making great progress toward your TestDaF goals.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button className="btn-primary flex items-center">
                <Play className="w-4 h-4 mr-2" />
                Continue Practice
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center`}>
                        <Icon className={`w-5 h-5 ${stat.color}`} />
                      </div>
                      <Badge variant="secondary" className="text-green-700 bg-green-100">
                        {stat.change}
                      </Badge>
                    </div>
                    <div className="text-2xl font-bold mb-1">
                      <AnimatedCounter
                        end={stat.value}
                        duration={2}
                        trigger={isVisible}
                      />
                    </div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Progress Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-petrol" />
                  TDN Score Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <Chart data={progressData} options={progressOptions} />
                </div>
                <div className="mt-4 p-4 bg-petrol/5 rounded-lg">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-sm text-gray-600">Current Score</p>
                      <p className="text-2xl font-bold text-petrol">3.5</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Target Score</p>
                      <p className="text-2xl font-bold text-petrol">4.0</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Progress</p>
                      <p className="text-2xl font-bold text-petrol">87.5%</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Upcoming Tasks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-petrol" />
                  Next Steps
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingTasks.map((task, index) => (
                  <div
                    key={index}
                    className="p-4 border border-gray-200 rounded-lg hover:border-petrol transition-colors cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-sm">{task.title}</h4>
                      <Badge
                        variant="secondary"
                        className={`text-xs ${
                          task.priority === 'high'
                            ? 'bg-red-100 text-red-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {task.priority}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">{task.description}</p>
                    <p className="text-xs text-petrol font-medium">{task.dueDate}</p>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  View All Tasks
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-petrol" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-sm">{activity.title}</h4>
                      {activity.status === 'completed' ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : (
                        <Badge variant="secondary" className="text-xs bg-yellow-100 text-yellow-700">
                          Review
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{activity.date}</span>
                      <div className="flex items-center">
                        <Award className="w-3 h-3 text-yellow-500 mr-1" />
                        <span className="text-xs font-medium">TDN {activity.score}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
