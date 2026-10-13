import React, { useEffect, useRef, useState } from 'react';
import { RoadTimelineSection } from './RoadTimelineSection';

interface ProjectCard {
  id: number;
  type: 'text' | 'photo';
  category: string;
  title: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  linkText: string;
  badge?: string;
}

const PORTFOLIO_CARDS: ProjectCard[] = [
  // Pair 1: Text Panel + Photo Panel (CEO)
  {
    id: 1,
    type: 'text',
    category: 'CLYPTUS LEADERSHIP',
    title: 'Meet Our Chief\nExecutive Officer',
    linkText: 'EXECUTIVE LEADERSHIP',
  },
  {
    id: 2,
    type: 'photo',
    category: 'CHIEF EXECUTIVE OFFICER',
    title: 'Vamsi Krishna Are',
    subtitle: 'Vamsi Krishna Are',
    description: 'Chief Executive Officer leading Clyptus Software Solutions towards enterprise AI & cloud innovation.',
    imageUrl: '/ceo_vamsi_krishna.png',
    linkText: 'EXPLORE PROFILE',
    badge: 'CHIEF EXECUTIVE OFFICER • CLYPTUS',
  },

  // Pair 2: Text Panel + Photo Panel (Manager)
  {
    id: 3,
    type: 'text',
    category: 'CLYPTUS MANAGEMENT',
    title: 'Our\nManager',
    linkText: 'MANAGEMENT TEAM',
  },
  {
    id: 4,
    type: 'photo',
    category: 'OPERATIONS MANAGER',
    title: 'Satya Narayana K',
    subtitle: 'Satya Narayana K',
    description: 'Leading cross-functional engineering teams to ensure seamless delivery and client satisfaction.',
    imageUrl: '/operations_manager.png',
    linkText: 'EXPLORE PROFILE',
    badge: 'OPERATIONS MANAGER • CLYPTUS',
  },

  // Pair 3: Text Panel + Photo Panel (Project Manager)
  {
    id: 5,
    type: 'text',
    category: 'PROJECT MANAGEMENT',
    title: 'Project\nManager',
    linkText: 'PROJECT LEADERSHIP',
  },
  {
    id: 6,
    type: 'photo',
    category: 'PROJECT MANAGER',
    title: 'Nandhini P',
    subtitle: 'Nandhini P',
    description: 'Leading project execution, milestone delivery, and client engagement for enterprise solutions.',
    imageUrl: '/project_manager.png',
    linkText: 'EXPLORE PROFILE',
    badge: 'PROJECT MANAGER • CLYPTUS',
  },

];

// Continuous linear card slide progress as user scrolls down without freeze plateaus
const getFrozenCardsProgress = (rawP: number): number => {
  return rawP;
};

export const RisingSlideCardsSection: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const targetProgressRef = useRef<number>(0);
  const currentProgressRef = useRef<number>(0);
  const lastTimelineProgressRef = useRef<number>(0);
  const lastCurtainOpenRef = useRef<boolean>(false);

  const [isMobile, setIsMobile] = useState<boolean>(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  const [timelineState, setTimelineState] = useState<{ progress: number; isCurtainOpen: boolean }>({
    progress: 0,
    isCurtainOpen: false,
  });

  const totalCards = PORTFOLIO_CARDS.length;

  const updateTransforms = (progress: number, mobile: boolean) => {
    const cardWidthVw = mobile ? 100 : 50;
    const visibleCardsCount = mobile ? 1 : 2;

    const rawCardsP = Math.min(1, progress / 0.38);
    const cardsProgress = getFrozenCardsProgress(rawCardsP);
    const curtainOpenProgress = Math.max(0, Math.min(1, (progress - 0.38) / 0.07));

    // 1. Direct GPU transform for Curtain Layer
    if (curtainRef.current) {
      curtainRef.current.style.transform = `translate3d(${-curtainOpenProgress * 100}%, 0, 0)`;
    }

    // 2. Direct GPU transform for Cards
    const maxShiftVw = (totalCards - visibleCardsCount) * cardWidthVw;
    const currentShiftVw = cardsProgress * maxShiftVw;

    cardRefs.current.forEach((el, idx) => {
      if (!el) return;
      const cardBaseX = idx * cardWidthVw;
      const currentPosX = cardBaseX - currentShiftVw;

      // Entrance: rise up from bottom-right
      let riseY = 0;
      if (currentPosX > cardWidthVw) {
        const distanceToViewportRight = currentPosX - cardWidthVw;
        riseY = Math.min(85, distanceToViewportRight * 1.6);
      }

      // Exit: slide down to bottom-left
      let exitY = 0;
      let exitX = 0;
      if (currentPosX < 0) {
        const distancePastLeftEdge = Math.abs(currentPosX);
        exitY = Math.min(85, distancePastLeftEdge * 1.6);
        exitX = -distancePastLeftEdge * 0.4;
      }

      const totalX = currentPosX + exitX;
      const totalY = riseY + exitY;

      el.style.transform = `translate3d(${totalX.toFixed(2)}vw, ${totalY.toFixed(2)}vh, 0)`;
    });
  };

  useEffect(() => {
    let animId: number;

    const measureScroll = () => {
      if (trackRef.current) {
        const rect = trackRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const totalDist = rect.height - viewportHeight;
        if (totalDist > 0) {
          const scrolled = -rect.top;
          targetProgressRef.current = Math.max(0, Math.min(1, scrolled / totalDist));
        }
      }
    };

    const handleScroll = () => {
      measureScroll();
    };

    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      measureScroll();
      updateTransforms(currentProgressRef.current, mobile);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    
    measureScroll();
    currentProgressRef.current = targetProgressRef.current;
    updateTransforms(currentProgressRef.current, window.innerWidth < 768);

    const tick = () => {
      const diff = targetProgressRef.current - currentProgressRef.current;

      // Smooth damped lerp interpolation
      if (Math.abs(diff) > 0.0001) {
        currentProgressRef.current += diff * 0.14;
        const p = currentProgressRef.current;
        const mobile = window.innerWidth < 768;

        updateTransforms(p, mobile);

        const curtainOpenProgress = Math.max(0, Math.min(1, (p - 0.38) / 0.07));
        const isCurtainFullyOpen = curtainOpenProgress >= 1;

        const timelineDriveProgress = !isCurtainFullyOpen
          ? 0
          : Math.max(0, Math.min(1, (p - 0.45) / 0.55));

        const progressChanged = Math.abs(timelineDriveProgress - lastTimelineProgressRef.current) >= 0.005;
        const curtainChanged = isCurtainFullyOpen !== lastCurtainOpenRef.current;

        if (progressChanged || curtainChanged) {
          lastTimelineProgressRef.current = timelineDriveProgress;
          lastCurtainOpenRef.current = isCurtainFullyOpen;
          setTimelineState({ progress: timelineDriveProgress, isCurtainOpen: isCurtainFullyOpen });
        }
      }

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    /* Outer Pinned Scroll Track */
    <div ref={trackRef} className={`relative w-full ${isMobile ? 'h-[600vh]' : 'h-[1600vh]'} bg-[#e9e8e3] select-none font-sans border-t border-slate-300/60`}>
      {/* Sticky Full-Screen Viewport Stage */}
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        
        {/* UNDERNEATH LAYER (Z-0): 3D Journey Milestone Timeline (Revealed under curtain) */}
        <div className={`absolute inset-0 z-0 w-full h-full ${!timelineState.isCurtainOpen ? 'pointer-events-none' : ''}`}>
          <RoadTimelineSection externalProgress={timelineState.progress} isFrozen={!timelineState.isCurtainOpen} />
        </div>

        {/* CURTAIN LAYER (Z-10): Feature Cards Layer */}
        <div 
          ref={curtainRef}
          className="absolute inset-0 z-10 w-full h-full bg-[#e9e8e3] pt-16 sm:pt-24 pb-4 overflow-hidden shadow-2xl"
          style={{
            willChange: 'transform',
          }}
        >
          {/* Horizontal Card Track container with 0 gap */}
          <div className="flex w-full h-full gap-0 flex-nowrap relative">
            {PORTFOLIO_CARDS.map((card, idx) => {
              return (
                <div
                  key={card.id}
                  ref={(el) => {
                    cardRefs.current[idx] = el;
                  }}
                  style={{
                    willChange: 'transform',
                  }}
                  className="absolute top-0 bottom-0 left-0 w-full md:w-1/2 md:min-w-[50vw] h-full shrink-0 flex flex-col justify-between p-6 sm:p-12 lg:p-16 border-r border-slate-300/40 bg-[#e9e8e3] text-slate-900 overflow-hidden group"
                >
                  {card.type === 'text' ? (
                    /* TEXT PANEL */
                    <div className="w-full h-full flex flex-col justify-center items-start text-left z-10 px-2 sm:px-6">
                      <span className="text-xs sm:text-xs font-mono font-extrabold text-sky-600 tracking-wider uppercase mb-3 sm:mb-4 bg-sky-100/60 px-3.5 py-1.5 rounded-full border border-sky-200/50">
                        {card.category}
                      </span>
                      <h2 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-[#1a1a1a] tracking-tight leading-[1.05] whitespace-pre-line mb-5 sm:mb-4">
                        {card.title}
                      </h2>
                      <span className="text-sm sm:text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                        {card.linkText} →
                      </span>
                    </div>
                  ) : (
                    /* PHOTO PANEL (Proportioned Executive Card on Mobile, Full-Height Split Card on Desktop) */
                    <div className="w-full h-full flex flex-col justify-center items-center z-10 px-2 sm:px-0">
                      {/* Card Graphic Frame */}
                      <div className="relative w-full max-w-[290px] sm:max-w-none h-auto max-h-[50vh] sm:max-h-none sm:h-full aspect-[3/4] sm:aspect-auto rounded-2xl overflow-hidden bg-slate-200 shadow-xl sm:shadow-sm border border-slate-300/40 my-auto">
                        {card.imageUrl ? (
                          <img
                            src={card.imageUrl}
                            alt={card.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-slate-200 via-slate-100 to-slate-300" />
                        )}
                        
                        {/* Gradient Dark Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                        {/* Overlay Title inside Image */}
                        {card.subtitle && (
                          <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 right-5 sm:right-6">
                            <span className="text-xs sm:text-xs font-mono font-extrabold text-sky-400 uppercase tracking-wider mb-1.5 block drop-shadow">
                              {card.category}
                            </span>
                            <h3 className="text-2xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-md">
                              {card.subtitle}
                            </h3>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
