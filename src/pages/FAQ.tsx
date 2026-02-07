import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, GraduationCap, Plane, DollarSign, Clock } from 'lucide-react';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: "General Questions",
      icon: <HelpCircle className="h-6 w-6" />,
      questions: [
        {
          q: "What services does 360 Education provide?",
          a: "We provide comprehensive study abroad services including university selection, application assistance, visa processing, accommodation support, pre-departure briefing, and scholarship guidance."
        },
        {
          q: "How do I get started with 360 Education?",
          a: "Simply contact us through our website, call our office, or visit one of our branches. We offer a free initial consultation to understand your needs and guide you through the process."
        },
        {
          q: "What countries do you help students study in?",
          a: "We assist students for study destinations worldwide including USA, UK, Canada, Australia, New Zealand, Germany, and many other countries."
        }
      ]
    },
    {
      category: "University Applications",
      icon: <GraduationCap className="h-6 w-6" />,
      questions: [
        {
          q: "What are the admission requirements for universities abroad?",
          a: "Requirements vary by country and university but typically include academic transcripts, standardized test scores (IELTS/TOEFL, GRE/GMAT), letters of recommendation, statement of purpose, and sometimes work experience."
        },
        {
          q: "How much does it cost to apply to universities?",
          a: "Application fees range from $50-$200 per university. We help you identify universities with reasonable application fees and guide you through the process."
        },
        {
          q: "Can you guarantee admission to universities?",
          a: "No one can guarantee admission as it depends on your profile and university requirements. However, we significantly increase your chances by matching you with suitable universities and preparing strong applications."
        }
      ]
    },
    {
      category: "Visa & Immigration",
      icon: <Plane className="h-6 w-6" />,
      questions: [
        {
          q: "What are the visa requirements for studying abroad?",
          a: "Visa requirements typically include admission letter, financial proof, medical insurance, language proficiency proof, and sometimes police clearance. We provide complete guidance based on your destination country."
        },
        {
          q: "How long does the visa process take?",
          a: "Visa processing times vary by country: USA (2-4 weeks), UK (2-3 weeks), Canada (4-6 weeks), Australia (4-8 weeks). We help you prepare documents to avoid delays."
        },
        {
          q: "What happens if my visa is rejected?",
          a: "We analyze the rejection reason and help you reapply with stronger documentation. Our success rate is over 95% due to thorough preparation."
        }
      ]
    },
    {
      category: "Financial Matters",
      icon: <DollarSign className="h-6 w-6" />,
      questions: [
        {
          q: "How much does studying abroad cost?",
          a: "Costs vary by country and university. USA: $20,000-$60,000/year, UK: £15,000-£38,000/year, Canada: CAD 16,000-CAD 35,000/year. We help you find affordable options."
        },
        {
          q: "Are scholarships available for international students?",
          a: "Yes! Many universities offer scholarships, and there are external scholarships too. We help you identify and apply for scholarships you're eligible for."
        },
        {
          q: "Can I work while studying abroad?",
          a: "Most countries allow part-time work (20 hours/week during semesters, full-time during breaks). We guide you on work permit regulations and job opportunities."
        }
      ]
    },
    {
      category: "Process & Timeline",
      icon: <Clock className="h-6 w-6" />,
      questions: [
        {
          q: "When should I start the application process?",
          a: "Start 12-18 months before your intended start date. This gives you time for research, test preparation, applications, and visa processing."
        },
        {
          q: "How long does the entire process take?",
          a: "From start to departure: 6-12 months depending on country and preparation level. We provide a timeline and keep you on track."
        },
        {
          q: "What documents do I need to prepare?",
          a: "Typical documents include academic transcripts, passport, standardized test scores, financial documents, letters of recommendation, statement of purpose, and work experience certificates (if applicable)."
        }
      ]
    }
  ];

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const index = `${categoryIndex}-${questionIndex}`;
    setActiveIndex(activeIndex === parseInt(index) ? null : parseInt(index));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about studying abroad with 360 Education.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Category Header */}
                <div className="bg-secondary text-white p-6">
                  <div className="flex items-center">
                    <div className="bg-white/20 p-3 rounded-lg mr-4">
                      {category.icon}
                    </div>
                    <h2 className="text-2xl font-bold">{category.category}</h2>
                  </div>
                </div>

                {/* Questions */}
                <div className="p-6 space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const currentIndex = parseInt(`${categoryIndex}-${questionIndex}`);
                    const isActive = activeIndex === currentIndex;

                    return (
                      <div key={questionIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-medium text-dark pr-4">{faq.q}</span>
                          <div className="flex-shrink-0">
                            {isActive ? (
                              <ChevronUp className="h-5 w-5 text-secondary" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-gray-400" />
                            )}
                          </div>
                        </button>
                        {isActive && (
                          <div className="px-6 pb-4">
                            <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-dark mb-6">Still Have Questions?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Can't find the answer you're looking for? Our expert counselors are here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-secondary text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
              Contact Us
            </button>
            <button className="border-2 border-secondary text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-secondary hover:text-white transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
