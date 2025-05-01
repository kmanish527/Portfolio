
import React, { useState } from 'react';
import { Mail, Send, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import emailjs from '@emailjs/browser';


const socialLinks = {
  github: "https://github.com/kmanish527",
  linkedin: "https://www.linkedin.com/in/k-manish527/",
  // twitter: "https://twitter.com/your-username",
  // instagram: "https://www.instagram.com/your-username",
};

const icons = {
  github: <Github className="w-5 h-5" />,
  linkedin: <Linkedin className="w-5 h-5" />,
  // twitter: <Twitter className="w-5 h-5" />,
  // instagram: <Instagram className="w-5 h-5" />,
};

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    emailjs.send(
      'service_ocr8kbl',
      'template_8x9wq76',
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      'k9MB5mMdiT8C0e6tY'
    ).then(() => {
      toast({
        title: "Message sent!",
        description: "I'll get back to you as soon as possible.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }).catch((error) => {
      toast({
        title: "Something went wrong.",
        description: error.text || "Please try again later.",
        variant: "destructive",
      });
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-tech-blue" />,
      title: "Email",
      value: "kgpmanish527@gmail.com",
      link: "mailto:kgpmanish527@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5 text-tech-teal" />,
      title: "Phone",
      value: "+91 8670676098",
      link: "tel:+918670676098"
    },
    {
      icon: <MapPin className="h-5 w-5 text-tech-purple" />,
      title: "Location",
      value: "Kharagpur, West Bengal, India",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="section bg-white dark:bg-gray-800 dark:text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In <span className="tech-gradient-text">Touch</span></h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {/* Have a project in mind or want to discuss an opportunity? I'd love to hear from you. */}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="dark:bg-gray-800 dark:border-gray-600"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="dark:bg-gray-800 dark:border-gray-600"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Enter subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="dark:bg-gray-800 dark:border-gray-600"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Type your message here"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="resize-none dark:bg-gray-800 dark:border-gray-600"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-tech-gradient hover:opacity-90"
                >
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex">
                  <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400">{info.title}</h4>
                    <a 
                      href={info.link} 
                      className="text-lg font-medium hover:text-tech-blue transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Follow me on social media to stay updated with my latest projects and tech insights.
              </p>
              
              <div className="flex space-x-4">
  {Object.keys(socialLinks).map((platform) => (
    <a 
      key={platform}
      href={socialLinks[platform]}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-tech-gradient hover:text-white transition-colors"
    >
      <span className="sr-only">{platform}</span>
      {icons[platform]}
    </a>
  ))}
</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
