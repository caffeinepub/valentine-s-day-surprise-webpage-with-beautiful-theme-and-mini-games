import { ReactNode } from 'react';

interface ValentineLayoutProps {
  children: ReactNode;
  id?: string;
  className?: string;
  withPattern?: boolean;
}

export default function ValentineLayout({ children, id, className = '', withPattern = false }: ValentineLayoutProps) {
  return (
    <section
      id={id}
      className={`relative min-h-screen flex items-center justify-center py-20 px-4 ${className}`}
    >
      {withPattern && (
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'url(/assets/generated/valentine-pattern.dim_1024x1024.png)',
            backgroundSize: '400px 400px',
            backgroundRepeat: 'repeat',
          }}
        />
      )}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
}
