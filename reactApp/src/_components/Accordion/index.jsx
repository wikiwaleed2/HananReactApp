import React, { useState } from 'react';
import { Paragraph } from '../../_shared/HeadingsOrParagraphs/HeadingsOrParagraphs';
import { AccordionItem } from './AccordionItem/AccordionItem';

const Accordion = ({ items }) => {
   const [activeItem, setActiveItem] = useState(0);
   const [activeChildItem, setActiveChildItem] = useState(0);

   const activeItemHandler = (id) => {
      setActiveItem(id);
      setActiveChildItem(null);
   };

   const activeChildItemHandler = (id) => {
      setActiveChildItem(id);
   };

   return (
      <div>
         {items &&
            items.map((item) => (
               <div key={item.id}>
                  <AccordionItem
                     title={item.title}
                     iconHandler={() => {
                        activeItemHandler(item.id);
                     }}
                     showMinusIcon={item.id === activeItem}
                  />
                  {item.id === activeItem && (
                     <div className="ml-5">
                        {item.childs.map((item) => (
                           <div key={item.id}>
                              <AccordionItem
                                 smallFont
                                 title={item.title}
                                 iconHandler={() => {
                                    activeChildItemHandler(item.id);
                                 }}
                                 showMinusIcon={item.id === activeChildItem}
                              />
                              {activeChildItem === item.id && (
                                 <Paragraph color="#3d70ab">
                                    {item.description}
                                 </Paragraph>
                              )}
                           </div>
                        ))}
                     </div>
                  )}
               </div>
            ))}
      </div>
   );
};

export default Accordion;
