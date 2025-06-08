
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Mail, 
  Globe, 
  BookOpen, 
  Calendar, 
  Upload, 
  PenTool, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const languages = [
  'English', 'Spanish', 'French', 'Italian', 'Portuguese', 'Russian',
  'Chinese', 'Japanese', 'Korean', 'Arabic', 'Turkish', 'Polish',
  'Dutch', 'Swedish', 'Norwegian', 'Danish', 'Finnish', 'Other'
];

const germanLevels = [
  { value: 'A2', label: 'A2 - Elementary', description: 'Basic understanding of German' },
  { value: 'B1', label: 'B1 - Intermediate', description: 'Can handle most situations' },
  { value: 'B2', label: 'B2 - Upper Intermediate', description: 'Good command of German' },
  { value: 'C1', label: 'C1 - Advanced', description: 'Fluent and spontaneous' },
  { value: 'C2', label: 'C2 - Proficient', description: 'Near-native proficiency' },
];

const serviceTypes = [
  {
    id: 'upload',
    title: 'Upload Existing Text',
    description: 'Get feedback on a text you\'ve already written',
    icon: Upload,
    features: ['Instant analysis', 'Detailed feedback', 'TDN score prediction'],
    recommended: false,
  },
  {
    id: 'write',
    title: 'Start Writing Now',
    description: 'Begin with guided TestDaF writing tasks',
    icon: PenTool,
    features: ['Guided prompts', 'Real-time feedback', 'Progressive difficulty'],
    recommended: true,
  },
];

interface FormData {
  name: string;
  email: string;
  nativeLanguage: string;
  germanLevel: string;
  testDate: string;
  serviceType: string;
}

export default function SetupPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    nativeLanguage: '',
    germanLevel: '',
    testDate: '',
    serviceType: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const totalSteps = 4;

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsCompleted(true);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.name && formData.email;
      case 2:
        return formData.nativeLanguage && formData.germanLevel;
      case 3:
        return formData.testDate;
      case 4:
        return formData.serviceType;
      default:
        return false;
    }
  };

  if (isCompleted) {
    return (
      <div className="min-h-screen pt-20 pb-16 bg-gradient-to-br from-petrol/5 via-transparent to-petrol-light/5">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center py-16"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Welcome to <span className="text-gradient">TestDaF AI</span>!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your personalized writing coach is ready. We've created a custom learning plan 
              based on your profile and goals.
            </p>
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="btn-primary"
                onClick={() => window.location.href = formData.serviceType === 'upload' ? '/agent' : '/agent'}
              >
                {formData.serviceType === 'upload' ? 'Upload Your Text' : 'Start Writing'}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <p className="text-sm text-gray-500">
                Check your email for your personalized study plan and next steps.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gradient-to-br from-petrol/5 via-transparent to-petrol-light/5">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge variant="secondary" className="mb-4">
              <Clock className="w-4 h-4 mr-2" />
              Setup Your Account
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Begin Your <span className="text-gradient">TestDaF Writing Practice</span>
            </h1>
            <p className="text-xl text-gray-600">
              Let's personalize your learning experience to help you achieve your target TDN score
            </p>
          </motion.div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">
                Step {currentStep} of {totalSteps}
              </span>
              <span className="text-sm font-medium text-gray-600">
                {Math.round((currentStep / totalSteps) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                className="bg-petrol-gradient h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Form Steps */}
          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              <AnimatePresence mode="wait">
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="text-center mb-8">
                      <div className="w-12 h-12 bg-petrol-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold mb-2">Personal Information</h2>
                      <p className="text-gray-600">Tell us about yourself to get started</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Enter your full name"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-petrol focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your.email@example.com"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-petrol focus:border-transparent"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Language Profile */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="text-center mb-8">
                      <div className="w-12 h-12 bg-petrol-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold mb-2">Language Profile</h2>
                      <p className="text-gray-600">Help us provide feedback in your native language</p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Native Language
                        </label>
                        <select
                          value={formData.nativeLanguage}
                          onChange={(e) => handleInputChange('nativeLanguage', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-petrol focus:border-transparent"
                        >
                          <option value="">Select your native language</option>
                          {languages.map((lang) => (
                            <option key={lang} value={lang}>{lang}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Current German Level
                        </label>
                        <div className="grid gap-3">
                          {germanLevels.map((level) => (
                            <label
                              key={level.value}
                              className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                                formData.germanLevel === level.value
                                  ? 'border-petrol bg-petrol/5'
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}
                            >
                              <input
                                type="radio"
                                name="germanLevel"
                                value={level.value}
                                checked={formData.germanLevel === level.value}
                                onChange={(e) => handleInputChange('germanLevel', e.target.value)}
                                className="sr-only"
                              />
                              <div className="flex-1">
                                <div className="font-medium">{level.label}</div>
                                <div className="text-sm text-gray-600">{level.description}</div>
                              </div>
                              {formData.germanLevel === level.value && (
                                <CheckCircle className="w-5 h-5 text-petrol" />
                              )}
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Test Timeline */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="text-center mb-8">
                      <div className="w-12 h-12 bg-petrol-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold mb-2">Test Timeline</h2>
                      <p className="text-gray-600">When are you planning to take the TestDaF?</p>
                    </div>

                    <div className="max-w-md mx-auto">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        TestDaF Test Date
                      </label>
                      <input
                        type="date"
                        value={formData.testDate}
                        onChange={(e) => handleInputChange('testDate', e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-petrol focus:border-transparent"
                      />
                      <p className="text-sm text-gray-500 mt-2">
                        This helps us create a personalized study plan for your timeline
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Service Selection */}
                {currentStep === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="text-center mb-8">
                      <div className="w-12 h-12 bg-petrol-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold mb-2">Choose Your Starting Point</h2>
                      <p className="text-gray-600">How would you like to begin your practice?</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {serviceTypes.map((service) => {
                        const Icon = service.icon;
                        return (
                          <label
                            key={service.id}
                            className={`relative flex flex-col p-6 rounded-xl border-2 cursor-pointer transition-all ${
                              formData.serviceType === service.id
                                ? 'border-petrol bg-petrol/5'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            {service.recommended && (
                              <Badge className="absolute -top-2 left-4 bg-petrol-gradient text-white">
                                Recommended
                              </Badge>
                            )}
                            
                            <input
                              type="radio"
                              name="serviceType"
                              value={service.id}
                              checked={formData.serviceType === service.id}
                              onChange={(e) => handleInputChange('serviceType', e.target.value)}
                              className="sr-only"
                            />
                            
                            <div className="flex items-center mb-4">
                              <div className="w-10 h-10 bg-petrol-gradient rounded-lg flex items-center justify-center mr-3">
                                <Icon className="w-5 h-5 text-white" />
                              </div>
                              <h3 className="text-lg font-semibold">{service.title}</h3>
                              {formData.serviceType === service.id && (
                                <CheckCircle className="w-5 h-5 text-petrol ml-auto" />
                              )}
                            </div>
                            
                            <p className="text-gray-600 mb-4">{service.description}</p>
                            
                            <ul className="space-y-2">
                              {service.features.map((feature, index) => (
                                <li key={index} className="flex items-center text-sm text-gray-600">
                                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </label>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={currentStep === 1 ? 'invisible' : ''}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>

                {currentStep < totalSteps ? (
                  <Button
                    onClick={nextStep}
                    disabled={!isStepValid()}
                    className="btn-primary"
                  >
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={!isStepValid() || isSubmitting}
                    className="btn-primary"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Setting Up...
                      </div>
                    ) : (
                      <>
                        Complete Setup
                        <CheckCircle className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
