import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, BrowserRouter, useLocation, Router } from 'react-router-dom';

import { Role } from '@/_helpers';
import { accountService } from '@/_services';
import { Nav, PrivateRoute, Alert } from '@/_components';
import { Home } from '@/home';
import { Price } from '../pages/price/price';
import { Signup } from '../pages/Signup/Signup';
import { Profile } from '../pages/profile/profile';
// import { Profile } from '@/profile'
import { Admin } from '@/admin';
import { Account } from '@/account';
import { Header } from '../_shared/header';
import { getCookie } from '../_services/cookies.service';
import { Footer } from '../_components/Footer/Footer';
import { Earncoins } from '../pages/EarnCoins/EarnCoins';
import { ChangePassword } from '../pages/ChangePassword/ChangePassword';
import { ActiveCoupons } from '../pages/ActiveCoupons/ActiveCoupons';
import Checkout from '../pages/checkout/checkout';
import { CreateProfile } from '../pages/CreateProfile/CreateProfile';
import DreamCart from '../pages/DreamCart/DreamCart';
import DreamCartInformation from '../pages/DreamCartInformation/DreamCartInformation';
import AllWinners from '../pages/AllWinners/AllWinners';
import Confirmation from '../pages/Confirmation/Confirmation';
import { FrequentlyAskedQuestions } from '../pages/FrequentlyAskedQuestions/FrequentlyAskedQuestions';
import { WinnersList } from '../pages/winners/winners-list/winners-list';
import { GetInTouch } from '../pages/GetInTouch/GetInTouch';
import Winners from '../pages/winners/winners';
import Testimonials from '../pages/testimonials/testimonials';
import AboutUs from '../pages/about-us/about-us';

function App() {
   const { pathname } = useLocation();
   const [user, setUser] = useState({});
   const [token, setToken] = useState('');

   useEffect(() => {
      let token = getCookie('token');
      setToken(token);
      const subscription = accountService.user.subscribe((x) => setUser(x));
      return subscription.unsubscribe;
   }, []);

   return (
      <BrowserRouter>

         <Switch>
            <Route exact path="/account/login">
               <Account match="/account" />
            </Route>

            <Route exact path="/">
               <Header />
               <Home />
               <Footer />
            </Route>

            <Route exact path="/price">
               <Header />
               <Price />
               <Footer />
            </Route>

            <Route exact path="/signup">
               <Signup />
            </Route>

            <Route exact path="/home">
               <Header />
               <Home />
               <Footer />
            </Route>

            <Route exact path="/profile">
               <Header />
               <Profile />
               <Footer />
            </Route>

            <Route exact path="/earncoins">
               <Header />
               <Earncoins />
               <Footer />
            </Route>

            <Route exact path="/change-password">
               <Header />
               <ChangePassword />
               <Footer />
            </Route>

            <Route exact path="/active-coupons">
               <Header />
               <ActiveCoupons />
               <Footer />
            </Route>

            <Route exact path="/checkout">
               <Header />
               <Checkout />
               <Footer />
            </Route>

            <Route exact path="/create-profile">
               <Header />
               <CreateProfile />
               <Footer />
            </Route>
            <Route exact path="/dream-cart">
               <DreamCart />
            </Route>
            <Route exact path="/all-winners">
               <AllWinners />
            </Route>
            <Route exact path="/dream-cart-information">
               <DreamCartInformation />
            </Route>
            <Route exact path="/confirmation">
               <Confirmation />
            </Route>

            <Route exact path="/faqs">
               <Header />
               <FrequentlyAskedQuestions />
            </Route>

            <Route exact path="/winners">
               <Header />
               <Winners />
            </Route>

            <Route exact path="/winners-list">
               <Header />
               <WinnersList />
            </Route>

            <Route exact path="/get-in-touch">
               <Header />
               <GetInTouch />
            </Route>

            <Route exact path="/testimonials">
               <Header />
               <Testimonials />
            </Route>

            <Route exact path="/about-us">
               <Header />
               <AboutUs />
            </Route>

         </Switch>
      </BrowserRouter>
      // <div className={'app-container bg-grey ' + (user && ' bg-light')}>
      //     <Nav />
      //     <Alert />
      //     <Switch>
      //         <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
      //         {/* <PrivateRoute exact path="/" component={Home} /> */}
      //         <PrivateRoute path="/profile" component={Profile} />
      //         <PrivateRoute path="/admin" roles={[Role.Admin]} component={Admin} />
      //         <Route path="/home" component={Home} />
      //         <Route path="/" component={Home} />
      //         {/* <Route path="/account" component={Account} /> */}
      //         <Redirect from="*" to="/"  />
      //     </Switch>
      // </div>
   );
}

export { App };
