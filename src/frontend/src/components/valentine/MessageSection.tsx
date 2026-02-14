import { Heart } from 'lucide-react';
import { valentineContent } from '../../config/valentineContent';
import ValentineLayout from './ValentineLayout';

export default function MessageSection() {
  return (
    <ValentineLayout id="message" className="relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/assets/generated/user-photo-bg.dim_1600x2000.png)',
            backgroundPosition: 'center',
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-rose-900/70 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-rose-200">
          <div className="flex justify-center mb-6">
            <Heart className="w-12 h-12 text-rose-500" fill="currentColor" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-rose-600 text-center mb-8 font-serif">
            {valentineContent.messageTitle}
          </h2>

          <div className="prose prose-lg prose-rose max-w-none">
            {valentineContent.messageBody.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-800 leading-relaxed mb-6 text-lg font-medium">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-rose-200">
            <p className="text-xl text-rose-600 text-center font-medium italic">
              {valentineContent.closingLine}
            </p>
          </div>
        </div>
      </div>
    </ValentineLayout>
  );
}
