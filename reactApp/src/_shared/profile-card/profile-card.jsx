import React from 'react';
import './profile-card.less';

import UploadIcon from '@/_assets/icons/image-upload.svg';
import { ProfileCardButton } from '../ProfileCardButton/ProfileCardButton';

import DetailsIcon from '@/_assets/icons/details.svg';
import DonationIcon from '@/_assets/icons/donations.svg';
import CouponIcon from '@/_assets/icons/coupons.svg';
import ChangePasswordIcon from '@/_assets/icons/change-password.svg';
import DreamIcon from '@/_assets/images/dream-icon.png';
import LogoutIcon from '@/_assets/icons/logout.svg';

const BUTTONS = [
   { id: 1, image: DetailsIcon, label: 'Personal Details' },
   { id: 2, image: CouponIcon, label: 'Active Coupons' },
   { id: 3, image: ChangePasswordIcon, label: 'Change Password' },
   { id: 4, image: DonationIcon, label: 'Your Donations' },
   { id: 5, image: DreamIcon, label: 'Dream Coins' },
   { id: 6, image: LogoutIcon, label: 'Log out' },
];

export const ProfileCard = () => {
   return (
      <div className="profile-card">
         <div className="text-center profile-container">
            <img
               src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
               alt="profile-img"
               className="img-fluid profile-image"
            />
            <h2 className="profile-name">Hi Maria</h2>
            <button className="btn btn-primary upload-btn">
               <span className="mx-2">
                  <img src={UploadIcon} alt="icon" />
               </span>
               <span>Upload Picture</span>
            </button>
         </div>

         <div className="btn-container">
            {BUTTONS.map((item) => (
               <ProfileCardButton
                  key={item.id}
                  leftIcon={item.image}
                  label={item.label}
               />
            ))}
         </div>
      </div>
   );
};
