import React from 'react';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import { gridItems } from '@/data';

function Grid() {
  // Array of items to be displayed in the grid


  return (
    <section id='about'>
      <BentoGrid>
        {
    gridItems.map(({id, title, description, className, img, imgClassName, titleClassName, spareImg}) => (
          <BentoGridItem 
            id={id}
            key={id}
            title={title}
            description={description}
            className={className}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareimg={spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

export default Grid;
