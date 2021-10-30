import React, { useState } from 'react';
import './winners-list.less';

import SearchIcon from '@/_assets/icons/search.svg';
import CalanderIcon from '@/_assets/icons/calander.svg';
import { SubHeader } from '@/_components/SubHeader/SubHeader';
import Accordion from '../../../_components/Accordion';

export const WinnersList = () => {
   const [questions, setQuestions] = useState([
      {
         id: 0,
         title: 'September 6, 2021 (3 Winners)',
         description: '',
         childs: [
            {
               id: 0,
               title: 'Muhammad Zubair | Won A Trip to Maldives',
               description: 'Finally I will be able to relax with my family somewhere nice without worrying about',
            },
            {
               id: 1,
               title: 'Muhammad Zubair | Won A Trip to Maldives',
               description: 'Finally I will be able to relax with my family somewhere nice without worrying about',
            },
            {
               id: 2,
               title: 'Muhammad Zubair | Won A Trip to Maldives',
               description: 'Finally I will be able to relax with my family somewhere nice without worrying about',
            },
         ],
      },
      {
         id: 1,
         title: 'September 7, 2021 (3 Winners)',
         description: '',
         childs: [
            {
               id: 0,
               title: 'Muhammad Zubair | Won A Trip to Maldives',
               description: 'Finally I will be able to relax with my family somewhere nice without worrying about',
            },
            {
               id: 1,
               title: 'Muhammad Zubair | Won A Trip to Maldives',
               description: 'Finally I will be able to relax with my family somewhere nice without worrying about',
            },
            {
               id: 2,
               title: 'Muhammad Zubair | Won A Trip to Maldives',
               description: 'Finally I will be able to relax with my family somewhere nice without worrying about',
            },
         ],
      },
      {
         id: 2,
         title: 'September 9, 2021 (3 Winners)',
         description: '',
         childs: [
            {
               id: 0,
               title: 'Muhammad Zubair | Won A Trip to Maldives',
               description: 'Finally I will be able to relax with my family somewhere nice without worrying about',
            },
            {
               id: 1,
               title: 'Muhammad Zubair | Won A Trip to Maldives',
               description: 'Finally I will be able to relax with my family somewhere nice without worrying about',
            },
            {
               id: 2,
               title: 'Muhammad Zubair | Won A Trip to Maldives',
               description: 'Finally I will be able to relax with my family somewhere nice without worrying about',
            },
         ],
      },
   ]);
   return (
      <div>
         <SubHeader title="Winners" />
         <div className="d-flex align-items-center justify-content-center py-4">
            <div className="winner-input-container">
               <input
                  type="text"
                  placeholder="Search winners"
                  className="winner-input"
               />
               <img src={SearchIcon} alt="search-icon" className="img-fluid" />
            </div>
            <span className="d-inline-block ml-3">
               <img src={CalanderIcon} alt="winner-icon" />
            </span>
         </div>
         <div className="question-container">
            <Accordion isWinners={true} items={questions} />
         </div>
      </div>
   );
};
