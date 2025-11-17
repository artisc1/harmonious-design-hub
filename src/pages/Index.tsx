import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { User, Session } from "@supabase/supabase-js";
import Header from "@/components/Header";
import AuthButton from "@/components/AuthButton";
import ClientsBlock from "@/components/ClientsBlock";
import YouTubeBlock from "@/components/YouTubeBlock";
import ServicesBlock from "@/components/ServicesBlock";
import logo from "@/assets/logo.png";

const Index = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Soft rainbow gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gradient-pink via-gradient-purple via-gradient-blue via-gradient-cyan via-gradient-green to-gradient-yellow opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-tl from-gradient-orange via-gradient-yellow to-gradient-cyan opacity-40" />
      <div className="absolute inset-0 backdrop-blur-3xl" />
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        
        <main className="flex flex-col items-center justify-center min-h-screen px-6">
          {/* Logo */}
          <div className="mb-12 animate-fade-in">
            <img 
              src={logo} 
              alt="DIZAIN STUDIIASY - Студия Дизайна" 
              className="w-full max-w-2xl h-auto drop-shadow-2xl"
            />
          </div>

          {/* Minimal text */}
          <div className="text-center space-y-6 max-w-lg">
            <h1 className="text-2xl font-light text-foreground/90 tracking-wide">
              Креативные решения для вашего бренда
            </h1>
            
            {/* Auth button */}
            <div className="pt-8">
              <AuthButton user={user} />
            </div>
          </div>
        </main>

        {/* Blocks Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <ClientsBlock />
          <YouTubeBlock />
        </div>
        <ServicesBlock />
      </div>
    </div>
  );
};

export default Index;
