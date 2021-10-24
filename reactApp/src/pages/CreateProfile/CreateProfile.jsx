import React from 'react';
import './CreateProfile.less';

import { Card } from '@/_shared/card/card';
import { TextField } from '@/_shared/TextField/TextField';
import { ProfileCard } from '@/_shared/profile-card/profile-card';
import { Doughnut } from '../../_shared/doughnut/doughnut';
import { H1Heading } from '../../_shared/HeadingsOrParagraphs/HeadingsOrParagraphs';
import { NewsLetter } from '../../_shared/newsletter/newsletter';
import { PButton } from '../../_shared/PButton/PButton';
import { SelectField } from '../../_shared/SelectField/SelectField';

export const CreateProfile = () => {
   return (
      <div className="container-fluid">
         <div className="create-profile-page">
            <div className="row">
               <div className="col-md-4">
                  <ProfileCard />
               </div>
               <div className="col-md-8">
                  <Card>
                     <div className="doughnut-container">
                        <Doughnut
                           value="7.20"
                           footerTitle="Your available balance"
                        />
                        <Doughnut
                           color="#03DAC5"
                           value="7.20"
                           footerTitle="Your available dream coins"
                        />
                     </div>
                  </Card>
                  <div className="d-flex align-items-start mt-3">
                     <H1Heading>Personal Details</H1Heading>
                     <PButton label="Update" />
                  </div>
                  <div className="mt-3">
                     <div className="row">
                        <div className="col-md-7">
                           <TextField label="First Name" />
                           <TextField label="Last Name" />
                           <TextField label="Email" />
                           <TextField label="Phone Number" />
                        </div>
                        <div className="col-md-5">
                           <SelectField label="Nationality" />
                           <SelectField label="Country of Residence" />
                           <SelectField label="City" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <NewsLetter />
         </div>
      </div>
   );
};
