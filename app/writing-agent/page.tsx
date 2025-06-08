
'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  Upload, 
  Mic, 
  MicOff,
  Bot, 
  User, 
  Paperclip,
  X,
  FileText,
  Image as ImageIcon,
  Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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

export default function WritingAgentPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: 'Hello! I\'m your TestDaF writing coach. Upload a text file, paste your writing, or start a new task. I\'ll provide detailed feedback in your native language to help you improve your TDN score.',
      timestamp: new Date(),
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
    }
  }, [inputText]);

  const handleSendMessage = async () => {
    if (!inputText.trim() && !selectedFile) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: selectedFile ? `[File uploaded: ${selectedFile.name}]\n\n${inputText}` : inputText,
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
      return 'Thank you for uploading your text! I\'ve analyzed your writing and here\'s my detailed feedback:\n\n**Overall Assessment:** Your writing demonstrates good command of German academic writing conventions. The structure is clear and your arguments are well-developed.\n\n**Strengths:**\n• Clear thesis statement\n• Good use of linking words\n• Appropriate academic vocabulary\n\n**Areas for Improvement:**\n• Some minor grammatical errors\n• Could benefit from more varied sentence structures\n• Consider adding more specific examples\n\n**TDN Score Prediction:** TDN 4\n\nWould you like me to provide more specific feedback on any particular aspect?';
    }
    
    return 'Great work on your writing! I can see you\'re making good progress. Your text shows:\n\n✅ Clear structure and organization\n✅ Good vocabulary usage\n✅ Appropriate register for academic writing\n\n🎯 **Areas to focus on:**\n• Grammar accuracy (especially article usage)\n• Sentence variety\n• More specific examples\n\n📈 **TDN Score Prediction:** TDN 4\n\nKeep practicing! Would you like to try another writing task or work on a specific area?';
  };

  const handleFileUpload = (file: File) => {
    if (file.size > 10 * 1024 * 1024) { // 10MB limit
      alert('File size must be less than 10MB');
      return;
    }
    setSelectedFile(file);
  };

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // Here you would implement actual voice recording functionality
    if (!isRecording) {
      // Start recording
      console.log('Starting voice recording...');
    } else {
      // Stop recording
      console.log('Stopping voice recording...');
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
  };

  return (
    <div className="min-h-screen pt-20 pb-4 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="container-custom h-[calc(100vh-6rem)] max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="h-full flex flex-col"
        >
          {/* Header */}
          <div className="mb-6 text-center px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gradient mb-2">TestDaF Writing Assistant</h1>
            <p className="text-gray-600 text-lg">Get instant AI-powered feedback on your German writing</p>
          </div>

          {/* Chat Interface */}
          <Card className="flex-1 flex flex-col shadow-xl border-0">
            {/* Chat Header */}
            <div className="border-b bg-gradient-to-r from-petrol/5 to-petrol-light/5 p-4 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-petrol-gradient rounded-full flex items-center justify-center mr-3 shadow-lg">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">GermanAIAgent</h3>
                    <p className="text-sm text-gray-600">TestDaF Writing Coach</p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-800 px-3 py-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  Online
                </Badge>
              </div>
            </div>

            {/* Messages */}
            <CardContent className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-white to-gray-50/50">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[85%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                      <div className={`flex items-start space-x-3 ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-md ${
                          message.type === 'user' 
                            ? 'bg-gradient-to-br from-gray-200 to-gray-300' 
                            : 'bg-petrol-gradient'
                        }`}>
                          {message.type === 'user' ? (
                            <User className="w-5 h-5 text-gray-600" />
                          ) : (
                            <Bot className="w-5 h-5 text-white" />
                          )}
                        </div>
                        
                        <div className={`rounded-2xl px-6 py-4 shadow-lg ${
                          message.type === 'user'
                            ? 'bg-petrol text-white'
                            : 'bg-white text-gray-900 border border-gray-100'
                        }`}>
                          <div className="whitespace-pre-wrap leading-relaxed">{message.content}</div>
                          
                          {message.metadata && (
                            <div className="mt-4 pt-4 border-t border-gray-200 space-y-3">
                              {message.metadata.score && (
                                <div className="flex items-center">
                                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mr-3 shadow-md">
                                    <span className="text-sm font-bold text-white">{message.metadata.score}</span>
                                  </div>
                                  <span className="text-sm font-medium">
                                    Predicted TDN Score: {message.metadata.score}
                                  </span>
                                </div>
                              )}
                              
                              {message.metadata.feedback && (
                                <div className="space-y-2">
                                  <div className="text-sm font-medium text-green-700 flex items-center">
                                    ✅ <span className="ml-1">Strengths:</span>
                                  </div>
                                  {message.metadata.feedback.map((item, index) => (
                                    <div key={index} className="text-sm text-gray-600 ml-6">
                                      • {item}
                                    </div>
                                  ))}
                                </div>
                              )}
                              
                              {message.metadata.suggestions && (
                                <div className="space-y-2">
                                  <div className="text-sm font-medium text-blue-700 flex items-center">
                                    💡 <span className="ml-1">Suggestions:</span>
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
                      
                      <div className={`text-xs text-gray-500 mt-2 ${
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
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-petrol-gradient rounded-full flex items-center justify-center shadow-md">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div className="bg-white rounded-2xl px-6 py-4 shadow-lg border border-gray-100">
                      <div className="flex items-center space-x-2">
                        <Loader2 className="w-4 h-4 animate-spin text-petrol" />
                        <span className="text-sm text-gray-600">Analyzing your writing...</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </CardContent>

            {/* Input Area */}
            <div 
              className={`border-t bg-white p-6 rounded-b-lg transition-all duration-200 ${
                isDragOver ? 'bg-petrol/5 border-petrol' : ''
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {/* File Upload Area */}
              {selectedFile && (
                <div className="mb-4 p-4 bg-gray-50 rounded-xl flex items-center justify-between border border-gray-200">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-5 h-5 text-gray-500" />
                    <div>
                      <span className="text-sm font-medium text-gray-700">{selectedFile.name}</span>
                      <span className="text-xs text-gray-500 ml-2">
                        ({(selectedFile.size / 1024).toFixed(1)} KB)
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={removeFile}
                    className="h-8 w-8 p-0 hover:bg-red-100"
                  >
                    <X className="w-4 h-4 text-red-500" />
                  </Button>
                </div>
              )}

              {/* Input Controls */}
              <div className="flex space-x-3">
                {/* File Upload Button */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".txt,.doc,.docx,.pdf"
                  onChange={handleFileInputChange}
                  className="hidden"
                />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex-shrink-0 h-12 px-4 hover:bg-petrol/5 hover:border-petrol"
                >
                  <Paperclip className="w-4 h-4" />
                </Button>

                {/* Voice Recording Button */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleRecording}
                  className={`flex-shrink-0 h-12 px-4 ${
                    isRecording 
                      ? 'bg-red-50 border-red-200 text-red-600 hover:bg-red-100' 
                      : 'hover:bg-petrol/5 hover:border-petrol'
                  }`}
                >
                  {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                </Button>

                {/* Text Input */}
                <div className="flex-1 relative">
                  <textarea
                    ref={textareaRef}
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Paste your German text here for feedback, or describe what you'd like help with..."
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-petrol focus:border-transparent resize-none min-h-[48px] max-h-[200px] transition-all duration-200"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                  />
                </div>

                {/* Send Button */}
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim() && !selectedFile}
                  className="btn-primary flex-shrink-0 h-12 px-6"
                  size="sm"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
                <span>Press Enter to send, Shift+Enter for new line • Drag & drop files to upload</span>
                <span className={inputText.length > 1800 ? 'text-red-500' : ''}>{inputText.length}/2000</span>
              </div>

              {isDragOver && (
                <div className="absolute inset-0 bg-petrol/10 border-2 border-dashed border-petrol rounded-lg flex items-center justify-center z-10">
                  <div className="text-center">
                    <Upload className="w-8 h-8 text-petrol mx-auto mb-2" />
                    <p className="text-petrol font-medium">Drop your file here</p>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
