import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const CategoryCard = ({ category }) => {
  return (
    <Link
      to={`/shop?category=${encodeURIComponent(category.name)}`}
      className="group relative rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-hover transition-all duration-300 transform hover:-translate-y-1 bg-sand-200 block aspect-[4/5]"
    >
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-forest-900/30 to-transparent group-hover:from-forest-900/90 transition-colors duration-300" />
      
      <div className="absolute inset-0 p-6 flex flex-col justify-between text-cream">
        <div className="flex justify-end">
          <div className="w-10 h-10 rounded-full bg-cream/20 backdrop-blur-md flex items-center justify-center group-hover:bg-terracotta-500 group-hover:text-cream transition-colors duration-300">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>

        <div className="space-y-1.5">
          <h3 className="font-serif text-2xl font-bold tracking-tight text-cream">
            {category.name}
          </h3>
          <p className="text-xs text-sand-300 line-clamp-2 opacity-90 font-light">
            {category.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
