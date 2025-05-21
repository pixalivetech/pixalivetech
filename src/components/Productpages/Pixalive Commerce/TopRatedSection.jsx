import { Star } from 'lucide-react';

const reviews = [
  { site: 'Software Suggest', rating: 4.9, filledStars: 5, halfStar: false },
  { site: 'Goodfirms', rating: 4.8, filledStars: 5, halfStar: false },
  { site: 'Capterra', rating: 4.3, filledStars: 4, halfStar: true },
  { site: 'G2', rating: 4.6, filledStars: 4, halfStar: true },
];

const StarFull = () => (
  <Star size={16} fill="yellow" stroke="yellow" />
);

const StarEmpty = () => (
  <Star size={16} fill="none" stroke="white" />
);

const StarHalf = () => (
  <div className="relative w-4 h-4">
    {/* Empty star as base */}
    <Star size={16} fill="white" stroke="white" className="absolute top-0 left-0" />
    {/* Half-filled yellow star using clipping */}
    <Star
      size={16}
      fill="yellow"
      stroke="yellow"
      className="absolute top-0 left-0 overflow-hidden"
      style={{ clipPath: 'inset(0 50% 0 0)' }}
    />
  </div>
);

const TopRatedSection = () => {
  return (
    <div className=" p-4 w-full max-w-[1280px] mx-auto text-black sm:px-6 md:px-10 py-12 sm:py-16 bg-[#000000]  md:mt-35 mt-0">
      <div className="max-w-[1280px] font-lufga mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 text-[#FFFFFF]">
          {/* Title */}
          <div className="text-center md:text-left text-[14px] md:text-[18px] font-lufga leading-tight">
            Top Rated Choice on Trusted Review Websites
          </div>

          {/* Reviews */}
          <div className="flex flex-col sm:flex-row flex-wrap md:gap-18 gap:6 justify-center items-center text-center">
            {reviews.map((review, idx) => (
              <div key={idx} className="min-w-[120px]">
                <div className="font-lufga text-[14px] md:text-[18px]">{review.site}</div>
                <div className="flex items-center justify-center mt-2 space-x-1 text-sm">
                  <span className="text-[#FFFFFF] text-[10px] md:text-[13px]">{review.rating}</span>

                  {/* Full yellow stars */}
                  {Array.from({ length: review.filledStars }).map((_, i) => (
                    <StarFull key={`full-${i}`} />
                  ))}

                  {/* Half yellow star */}
                  {review.halfStar && <StarHalf />}

                  {/* Empty stars (if any remaining) */}
                  {Array.from({ length: 5 - review.filledStars - (review.halfStar ? 1 : 0) }).map((_, i) => (
                    <StarEmpty key={`empty-${i}`} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRatedSection;
