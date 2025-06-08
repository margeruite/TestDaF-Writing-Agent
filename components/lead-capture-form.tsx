
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Calendar, User, Mail, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const germanLevels = [
  { value: 'a1', label: 'A1 - Beginner' },
  { value: 'a2', label: 'A2 - Elementary' },
  { value: 'b1', label: 'B1 - Intermediate' },
  { value: 'b2', label: 'B2 - Upper Intermediate' },
  { value: 'c1', label: 'C1 - Advanced' },
  { value: 'c2', label: 'C2 - Proficient' },
];

export default function LeadCaptureForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    germanLevel: '',
    testDate: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent('TestDaF Writing Evaluation Request');
    const body = encodeURIComponent(`
Hello GermanAIAgent Team,

I would like to request a free writing evaluation. Here are my details:

Name: ${formData.name}
Email: ${formData.email}
German Level: ${formData.germanLevel}
Planned Test Date: ${formData.testDate}

Please send me information about how to get started with my free writing evaluation.

Best regards,
${formData.name}
    `);
    
    const mailtoLink = `mailto:hello@germanaiagent.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    setIsSubmitted(true);
  };

  const isFormValid = formData.name && formData.email && formData.germanLevel && formData.testDate;

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center py-8"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Email Opened!</h3>
        <p className="text-white/90">
          Please send the email to get your free writing evaluation.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-white mb-2">
          Get Your Free Writing Evaluation
        </h3>
        <p className="text-white/90 text-sm">
          Start improving your TestDaF writing today with AI-powered feedback
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative">
          <User className="absolute left-3 top-3 w-5 h-5 text-white/70" />
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Your name"
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
            required
          />
        </div>
        
        <div className="relative">
          <Mail className="absolute left-3 top-3 w-5 h-5 text-white/70" />
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Your email"
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative">
          <GraduationCap className="absolute left-3 top-3 w-5 h-5 text-white/70 z-10" />
          <Select value={formData.germanLevel} onValueChange={(value) => setFormData({ ...formData, germanLevel: value })}>
            <SelectTrigger className="w-full pl-10 pr-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent">
              <SelectValue placeholder="German level" />
            </SelectTrigger>
            <SelectContent>
              {germanLevels.map((level) => (
                <SelectItem key={level.value} value={level.value}>
                  {level.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="relative">
          <Calendar className="absolute left-3 top-3 w-5 h-5 text-white/70" />
          <input
            type="text"
            value={formData.testDate}
            onChange={(e) => setFormData({ ...formData, testDate: e.target.value })}
            placeholder="e.g. in three months"
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
            required
          />
        </div>
      </div>
      
      <Button
        type="submit"
        disabled={!isFormValid}
        className="w-full bg-white text-petrol hover:bg-gray-100 font-medium py-3"
      >
        Get Free Evaluation
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
      
      <p className="text-xs text-white/70 text-center">
        No spam, no credit card required. We'll contact you via email.
      </p>
    </form>
  );
}
