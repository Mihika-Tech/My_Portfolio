import { useState, useEffect, useRef } from "react";

const FACTS = [
  { threshold: 0,    side: "right", text: "👋 Hi! I'm Mihika — scroll down to see what I've built!" },
  { threshold: 700,  side: "left",  text: "🎓 Graduating May 2026 and ready for my next adventure!" },
  { threshold: 1500, side: "right", text: "⚡ I've worked with 20+ technologies — TypeScript is my love language." },
  { threshold: 2400, side: "left",  text: "💼 3 internships, real impact — not just tutorial projects!" },
  { threshold: 3400, side: "right", text: "🚀 Lumina was rebuilt 3 times before I got it right. Worth it." },
  { threshold: 4600, side: "left",  text: "📚 Fun fact: I debug better with a fantasy novel nearby." },
  { threshold: 5600, side: "right", text: "✉️ I reply within 24 hours. Usually much faster!" },
];

const ChibiSVG = ({ flipped = false }: { flipped?: boolean }) => (
  <svg
    viewBox="0 0 120 160"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: flipped ? "scaleX(-1)" : undefined }}
    width="100"
    height="133"
  >
    <defs>
      <linearGradient id="hairG" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(291,90%,38%)" />
        <stop offset="100%" stopColor="hsl(317,90%,42%)" />
      </linearGradient>
      <linearGradient id="bodyG" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(266,90%,38%)" />
        <stop offset="100%" stopColor="hsl(291,90%,38%)" />
      </linearGradient>
    </defs>
    {/* Hair back */}
    <ellipse cx="60" cy="52" rx="36" ry="40" fill="url(#hairG)" />
    {/* Left pigtail */}
    <ellipse cx="24" cy="68" rx="13" ry="19" fill="url(#hairG)" transform="rotate(-15 24 68)" />
    {/* Right pigtail */}
    <ellipse cx="96" cy="68" rx="13" ry="19" fill="url(#hairG)" transform="rotate(15 96 68)" />
    {/* Neck */}
    <rect x="53" y="92" width="14" height="11" rx="4" fill="#FFD5C8" />
    {/* Body */}
    <rect x="30" y="101" width="60" height="48" rx="16" fill="url(#bodyG)" />
    {/* Left arm static */}
    <rect x="16" y="103" width="14" height="34" rx="7" fill="url(#bodyG)" transform="rotate(10 16 103)" />
    {/* Right arm waving */}
    <g style={{ transformOrigin: "90px 105px", animation: "mascotWave 0.8s ease-in-out infinite" } as React.CSSProperties}>
      <rect x="90" y="103" width="14" height="34" rx="7" fill="url(#bodyG)" transform="rotate(-35 90 103)" />
      <circle cx="107" cy="88" r="8" fill="#FFD5C8" />
    </g>
    {/* Face */}
    <ellipse cx="60" cy="65" rx="30" ry="31" fill="#FFD5C8" />
    {/* Hair fringe */}
    <ellipse cx="60" cy="36" rx="32" ry="18" fill="url(#hairG)" />
    <ellipse cx="40" cy="46" rx="12" ry="13" fill="url(#hairG)" />
    <ellipse cx="80" cy="46" rx="12" ry="13" fill="url(#hairG)" />
    {/* Eyes white */}
    <ellipse cx="46" cy="65" rx="8" ry="9" fill="white" />
    <ellipse cx="74" cy="65" rx="8" ry="9" fill="white" />
    {/* Irises */}
    <ellipse cx="46" cy="67" rx="5" ry="6" fill="#3d006e" />
    <ellipse cx="74" cy="67" rx="5" ry="6" fill="#3d006e" />
    {/* Highlights */}
    <circle cx="48" cy="64" r="2" fill="white" />
    <circle cx="76" cy="64" r="2" fill="white" />
    {/* Blush */}
    <ellipse cx="36" cy="73" rx="7" ry="4" fill="#FFB5C8" opacity="0.65" />
    <ellipse cx="84" cy="73" rx="7" ry="4" fill="#FFB5C8" opacity="0.65" />
    {/* Smile */}
    <path d="M 52 80 Q 60 88 68 80" stroke="#FF8FA0" strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
);

const MascotCharacter = () => {
  const [visible, setVisible] = useState(false);
  const [currentFact, setCurrentFact] = useState(FACTS[0]);
  const [showBubble, setShowBubble] = useState(false);
  const lastThresholdRef = useRef(-1);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      let matched = FACTS[0];
      for (const f of FACTS) {
        if (y >= f.threshold) matched = f;
      }
      if (matched.threshold !== lastThresholdRef.current) {
        lastThresholdRef.current = matched.threshold;
        setCurrentFact(matched);
        setVisible(true);
        setShowBubble(true);
        if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
        hideTimerRef.current = setTimeout(() => {
          setShowBubble(false);
          setTimeout(() => setVisible(false), 500);
        }, 4000);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, []);

  if (!visible) return null;

  const isLeft = currentFact.side === "left";
  const posStyle = isLeft ? { left: 0 } : { right: 0 };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "80px",
        ...posStyle,
        zIndex: 50,
        display: "flex",
        flexDirection: isLeft ? "row" : "row-reverse",
        alignItems: "flex-end",
        gap: "8px",
        transition: "transform 0.5s cubic-bezier(0.34,1.56,0.64,1)",
        transform: showBubble ? "translateX(0)" : isLeft ? "translateX(-120%)" : "translateX(120%)",
      }}
    >
      <ChibiSVG flipped={isLeft} />
      {showBubble && (
        <div
          style={{
            background: "white",
            borderRadius: "16px",
            padding: "10px 14px",
            maxWidth: "200px",
            fontSize: "13px",
            lineHeight: "1.4",
            boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            border: "2px solid hsl(291,100%,24%)",
            color: "hsl(251,100%,10%)",
            fontWeight: 500,
            marginBottom: "12px",
            animation: "bubblePop 0.3s cubic-bezier(0.34,1.56,0.64,1)",
            position: "relative",
          }}
        >
          {currentFact.text}
          {/* Tail */}
          <div style={{
            position: "absolute",
            bottom: "-10px",
            ...(isLeft ? { left: "18px" } : { right: "18px" }),
            width: 0,
            height: 0,
            borderLeft: "8px solid transparent",
            borderRight: "8px solid transparent",
            borderTop: "10px solid hsl(291,100%,24%)",
          }} />
        </div>
      )}
    </div>
  );
};

export default MascotCharacter;
