
'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  Upload, 
  FileText, 
  Bot, 
  User, 
  Paperclip,
  Download,
  Star,
  Clock,
  Target,
  CheckCircle,
  AlertCircle,
  Lightbulb
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  metadata?: {
    score?: number;
    feedback?: string[];
    suggestions?: string[];
  };
}

const sampleTasks = [
  {
    title: 'Studying Abroad',
    prompt: 'Write about the advantages and disadvantages of studying abroad. Consider academic, personal, and cultural aspects.',
    difficulty: 'B2-C1',
  },
  {
    title: 'Digital Learning',
    prompt: 'Discuss the impact of digital technology on education. How has online learning changed the way students study?',
    difficulty: 'B2-C1',
  },
  {
    title: 'Environmental Protection',
    prompt: 'Explain what individuals can do to protect the environment. Provide specific examples and solutions.',
    difficulty: 'B1-B2',
  },
];

export default function AgentPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: 'Hello! I\'m your TestDaF writing coach. I can help you practice writing tasks, provide feedback on your texts, and give you personalized suggestions to improve your TDN score. How would you like to start?',
      timestamp: new Date(),
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [activeTask, setActiveTask] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputText.trim() && !selectedFile) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: selectedFile ? `[File uploaded: ${selectedFile.name}]` : inputText,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setSelectedFile(null);
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: generateAIResponse(userMessage.content),
        timestamp: new Date(),
        metadata: {
          score: Math.floor(Math.random() * 2) + 3, // Random score between 3-4
          feedback: [
            'Good use of complex sentence structures',
            'Consider varying your vocabulary more',
            'Excellent argumentation flow'
          ],
          suggestions: [
            'Try using more connective words',
            'Add specific examples to support your points',
            'Check verb tense consistency'
          ]
        }
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const generateAIResponse = (userInput: string): string => {
    if (userInput.includes('[File uploaded:')) {
      return 'Thank you for uploading your text! I\'ve analyzed your writing and here\'s my detailed feedback:\n\n**Overall Assessment:** Your writing demonstrates good command of German academic writing conventions. The structure is clear and your arguments are well-developed.\n\n**Strengths:**\n• Clear thesis statement\n• Good use of linking words\n• Appropriate academic vocabulary\n\n**Areas for Improvement:**\n• Some minor grammatical errors\n• Could benefit from more varied sentence structures\n• Consider adding more specific examples\n\n**TDN Score Prediction:** 3.5-4\n\nWould you like me to provide more specific feedback on any particular aspect?';
    }
    
    return 'Great work on your writing! I can see you\'re making good progress. Your text shows:\n\n✅ Clear structure and organization\n✅ Good vocabulary usage\n✅ Appropriate register for academic writing\n\n🎯 **Areas to focus on:**\n• Grammar accuracy (especially article usage)\n• Sentence variety\n• More specific examples\n\n📈 **TDN Score Prediction:** 3-4\n\nKeep practicing! Would you like to try another writing task or work on a specific area?';
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const startTask = (task: typeof sampleTasks[0]) => {
    setActiveTask(task.title);
    const taskMessage: Message = {
      id: Date.now().toString(),
      type: 'ai',
      content: `Great choice! Here's your writing task:\n\n**${task.title}** (${task.difficulty})\n\n${task.prompt}\n\nTake your time to write a well-structured response. Aim for 200-250 words. When you're ready, paste your text here and I'll provide detailed feedback!`,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, taskMessage]);
  };

  return (
    <div className="min-h-screen pt-20 pb-4 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="container-custom h-[calc(100vh-6rem)]">
        <div className="grid lg:grid-cols-4 gap-6 h-full">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bot className="w-5 h-5 mr-2 text-petrol" />
                    AI Writing Coach
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm text-gray-600">
                    Get instant feedback on your TestDaF writing in your native language.
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Real-time analysis</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>TDN score prediction</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>Personalized feedback</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="w-5 h-5 mr-2 text-petrol" />
                    Practice Tasks
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {sampleTasks.map((task, index) => (
                    <button
                      key={index}
                      onClick={() => startTask(task)}
                      className={`w-full text-left p-3 rounded-lg border transition-all hover:border-petrol hover:bg-petrol/5 ${
                        activeTask === task.title ? 'border-petrol bg-petrol/5' : 'border-gray-200'
                      }`}
                    >
                      <div className="font-medium text-sm">{task.title}</div>
                      <Badge variant="secondary" className="mt-1 text-xs">
                        {task.difficulty}
                      </Badge>
                    </button>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Upload className="w-5 h-5 mr-2 text-petrol" />
                    Quick Upload
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".txt,.doc,.docx,.pdf"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Paperclip className="w-4 h-4 mr-2" />
                    Upload Text File
                  </Button>
                  {selectedFile && (
                    <div className="mt-2 text-sm text-gray-600">
                      Selected: {selectedFile.name}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="h-full flex flex-col"
            >
              <Card className="flex-1 flex flex-col">
                <CardHeader className="border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-petrol-gradient rounded-full flex items-center justify-center mr-3">
                        <Bot className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">TestDaF AI Coach</h3>
                        <p className="text-sm text-gray-600">Online • Ready to help</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      Active
                    </Badge>
                  </div>
                </CardHeader>

                {/* Messages */}
                <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                  <AnimatePresence>
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`max-w-[80%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                          <div className={`flex items-start space-x-2 ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                              message.type === 'user' 
                                ? 'bg-gray-200' 
                                : 'bg-petrol-gradient'
                            }`}>
                              {message.type === 'user' ? (
                                <User className="w-4 h-4 text-gray-600" />
                              ) : (
                                <Bot className="w-4 h-4 text-white" />
                              )}
                            </div>
                            
                            <div className={`rounded-2xl px-4 py-3 ${
                              message.type === 'user'
                                ? 'bg-petrol text-white'
                                : 'bg-gray-100 text-gray-900'
                            }`}>
                              <div className="whitespace-pre-wrap">{message.content}</div>
                              
                              {message.metadata && (
                                <div className="mt-3 pt-3 border-t border-gray-200 space-y-2">
                                  {message.metadata.score && (
                                    <div className="flex items-center">
                                      <Star className="w-4 h-4 text-yellow-500 mr-2" />
                                      <span className="text-sm font-medium">
                                        Predicted TDN Score: {message.metadata.score}
                                      </span>
                                    </div>
                                  )}
                                  
                                  {message.metadata.feedback && (
                                    <div className="space-y-1">
                                      <div className="flex items-center text-sm font-medium">
                                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                        Strengths:
                                      </div>
                                      {message.metadata.feedback.map((item, index) => (
                                        <div key={index} className="text-sm text-gray-600 ml-6">
                                          • {item}
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                  
                                  {message.metadata.suggestions && (
                                    <div className="space-y-1">
                                      <div className="flex items-center text-sm font-medium">
                                        <Lightbulb className="w-4 h-4 text-yellow-500 mr-2" />
                                        Suggestions:
                                      </div>
                                      {message.metadata.suggestions.map((item, index) => (
                                        <div key={index} className="text-sm text-gray-600 ml-6">
                                          • {item}
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                          
                          <div className={`text-xs text-gray-500 mt-1 ${
                            message.type === 'user' ? 'text-right' : 'text-left'
                          }`}>
                            {message.timestamp.toLocaleTimeString()}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="flex items-start space-x-2">
                        <div className="w-8 h-8 bg-petrol-gradient rounded-full flex items-center justify-center">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-gray-100 rounded-2xl px-4 py-3">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </CardContent>

                {/* Input Area */}
                <div className="border-t p-4">
                  <div className="flex space-x-2">
                    <div className="flex-1 relative">
                      <textarea
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="Type your text here or upload a file..."
                        className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-petrol focus:border-transparent resize-none"
                        rows={3}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleSendMessage();
                          }
                        }}
                      />
                      {selectedFile && (
                        <div className="absolute bottom-2 left-2 bg-petrol text-white text-xs px-2 py-1 rounded">
                          {selectedFile.name}
                        </div>
                      )}
                    </div>
                    <Button
                      onClick={handleSendMessage}
                      disabled={!inputText.trim() && !selectedFile}
                      className="btn-primary px-6"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                    <span>Press Enter to send, Shift+Enter for new line</span>
                    <span>{inputText.length}/1000</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
