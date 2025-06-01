import { useEffect, useRef, useState } from "react";

const Counter = ({
  icon,
  start,
  end,
  duration,
  label,
  prefix = "",
  suffix = "",
}: {
  icon: string;
  start: number;
  end: number;
  duration: number;
  label: string;
  prefix?: string;
  suffix?: string;
}) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const increment = Math.min(end, Math.floor((progress / duration) * end));
      setCount(increment);
      if (increment < end) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center bg-black p-6 rounded-lg"
    >
      {/* Icon */}
      <i className={`text-4xl text-white ${icon}`} />

      {/* Number with Exponent */}
      <div className="relative mt-2">
        {/* Number */}
        <div className="text-3xl font-bold text-white">
          {prefix}
          {count}
          {suffix}
        </div>

        {/* Plus Symbol as Exponent */}
        <span
          className="absolute top-0 right-[-10px] transform translate-y-[-50%] text-sm text-white font-bold"
        >
          +
        </span>
      </div>

      {/* Label */}
      <p className="text-[#FFD700]">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-10 bg-white text-white">
      <Counter
        icon="ion-ios-heart"
        start={0}
        end={5}
        duration={1000}
        label="Years of Service"
      />
      <Counter
        icon="ion-ios-people"
        start={0}
        end={1000}
        duration={1000}
        label="Happy Clients"
      />
      <Counter
        icon="ion-ios-medkit"
        start={0}
        end={500}
        duration={1000}
        label="Projects"
      />
      <Counter
        icon="ion-ios-star"
        start={0}
        end={4.8}
        duration={1000}
        label="Average Rating"
        suffix="/5"
      />
    </div>
  );
};

export default StatsSection;