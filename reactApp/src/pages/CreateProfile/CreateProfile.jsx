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
import { CountryCodeField } from '../../_shared/CountryCodeField/CountryCodeField';

export const CreateProfile = () => {
   return (
      <div className="container-fluid">
         <div className="create-profile-page">
            <div className="row">
               <div className="col-md-4 d-md-block d-none">
                  <ProfileCard />
               </div>
               <div className="col-md-8 col-12">
                  <Card className="d-md-block d-none">
                     <div className="doughnut-container">
                        <Doughnut
                           title="AED"
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
                  <div className="heading__create mt-3">
                     <H1Heading>Personal Details</H1Heading>
                     <PButton label="Update" />
                  </div>
                  <div className="mt-3">
                     <div className="row">
                        <div className="col-md-7 col-12">
                           <TextField label="First Name" />
                           <TextField label="Last Name" />
                           <TextField label="Email" />
                           <CountryCodeField label="Country Code" />
                        </div>
                        <div className="col-md-5 col-12">
                           <SelectField label="Nationality" />
                           <SelectField label="Country of Residence" />
                           <SelectField label="City" />
                        </div>
                     </div>
                     <div className="text-center d-md-none d-block">
                        <PButton label="update" />
                     </div>
                  </div>
               </div>
            </div>
            <NewsLetter />
         </div>
      </div>
   );
};
