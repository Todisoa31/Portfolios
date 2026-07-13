'use client';

import { FaStar } from 'react-icons/fa';

interface Props {
  stars: number;
}

export default function SkillStars({ stars }: Props) {
  return (
    <div className="flex justify-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <FaStar key={index} className={index < stars ? 'text-yellow-400' : 'text-gray-600'} />
      ))}
    </div>
  );
}
