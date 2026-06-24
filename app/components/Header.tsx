'use client';

import { useState } from 'react';
import {
  Search, Bell, Zap, Menu, Crown,
  Home, Newspaper, Radio, ArrowLeftRight, Trophy,
  Shield, BarChart3, Play, ChevronDown, Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { toast } from 'sonner';

const navItems = [
  { label: 'Início', icon: Home },
  { label: 'Notícias', icon: Newspaper },
  { label: 'Jogos ao Vivo', icon: Radio, badge: 'AO VIVO', isLive: true },
  { label: 'Mercado da Bola', icon: ArrowLeftRight },
  { label: 'Copa 2026', icon: Trophy },
  { label: 'Times', icon: Shield },
  { label: 'Classificações', icon: BarChart3 },
  { label: 'Vídeos', icon: Play },
  { label: 'Estatísticas', icon: BarChart3 },
  { label: 'Mais', icon: ChevronDown },
];

interface HeaderProps {
  onAiToggle: () => void;
  onMenuToggle: () => void;
  totalLive?: number;
}

export default function Header({ onAiToggle, onMenuToggle, totalLive }: HeaderProps) {
  const [activeNav, setActiveNav] = useState('Início');
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gp-dark/95 backdrop-blur-xl border-b border-gp-dark-border">
      {/* Top Row */}
      <div className="max-w-[1440px] mx-auto px-4 h-14 flex items-center gap-4">
        {/* Mobile menu button */}
        <button
          onClick={onMenuToggle}
          className="lg:hidden p-2 hover:bg-gp-dark-hover rounded-lg transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="flex items-center gap-1">
            <span className="text-xl font-display font-bold text-white">GP</span>
            <Zap className="w-5 h-5 text-gp-gold fill-gp-gold" />
          </div>
          <span className="hidden sm:block text-lg font-display font-bold text-white">
            GoalPulse
          </span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-auto hidden md:block">
          <div className={`relative flex items-center transition-all ${searchFocused ? 'ring-2 ring-gp-blue' : ''} bg-gp-dark-card rounded-xl`}>
            <Search className="absolute left-3 w-4 h-4 text-gp-gray" />
            <input
              type="text"
              placeholder="Buscar times, jogadores, notícias..."
              className="w-full bg-transparent pl-10 pr-4 py-2 text-sm text-white placeholder-gp-gray focus:outline-none rounded-xl"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3 flex-shrink-0 ml-auto">
          {/* Premium Button */}
          <button onClick={() => toast.success('GoalPulse Premium - Em breve!')} className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-gp-gold/20 to-gp-gold/10 border border-gp-gold/30 rounded-lg text-gp-gold text-xs font-semibold hover:from-gp-gold/30 hover:to-gp-gold/20 transition-all">
            <Crown className="w-3.5 h-3.5" />
            <span>GoalPulse Premium</span>
          </button>

          {/* AI Button */}
          <button
            onClick={onAiToggle}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-gp-purple/20 to-gp-blue/20 border border-gp-purple/30 rounded-lg text-gp-purple text-xs font-semibold hover:from-gp-purple/30 hover:to-gp-blue/30 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden sm:block">Pulse AI</span>
          </button>

          {/* Notifications */}
          <button onClick={() => toast.info('5 notificações não lidas')} className="relative p-2 hover:bg-gp-dark-hover rounded-lg transition-colors">
            <Bell className="w-5 h-5 text-gp-gray-light" />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gp-red rounded-full text-[10px] font-bold flex items-center justify-center text-white">
              5
            </span>
          </button>

          {/* User */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gp-blue to-gp-purple flex items-center justify-center text-white text-sm font-bold">
              V
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-white leading-tight">Valber</p>
              <div className="flex items-center gap-1">
                <Crown className="w-2.5 h-2.5 text-gp-gold" />
                <span className="text-[10px] text-gp-gold font-medium">Premium</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Row */}
      <div className="max-w-[1440px] mx-auto px-4">
        <nav className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-1.5">
          {(navItems ?? []).map((item: any) => {
            const Icon = item?.icon;
            const isActive = activeNav === item?.label;
            return (
              <button
                key={item?.label ?? 'nav'}
                onClick={() => setActiveNav(item?.label ?? '')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-gp-blue/15 text-gp-blue'
                    : 'text-gp-gray hover:bg-gp-dark-hover hover:text-white'
                }`}
              >
                {Icon && <Icon className="w-3.5 h-3.5" />}
                <span>{item?.label}</span>
                {item?.badge && (
                  <span className="px-1.5 py-0.5 bg-gp-red text-white text-[9px] font-bold rounded-sm animate-pulse-live">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
