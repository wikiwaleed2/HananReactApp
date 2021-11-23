import React, { useState, useEffect } from 'react';
import './index.less';
import shareIcon from '@/_assets/images/social-share.png';
import bottle from '@/_assets/images/bottle.png';
import moment from 'moment';
import _ from 'lodash';
import { sharedService } from '@/_services/shared.service';
import { constantSrv } from '@/_services/constant.service';

function SoldCampaign({ videoSrc, item }) {

    const [isVideo, setIsVideo] = useState(false);

    useEffect(() => {
        if (!!item?.pictures) {

            _.forEach(item?.pictures, (p) => {
                if (p.type == constantSrv.EMediaCategory.prizeDesktop) {
                    let extension = sharedService.getExtension(p.url);
                    if (extension == "video") {
                        setIsVideo(true);
                    }
                }
            });
        }
    }, [])

    let renderMedia = (media, type) => {
        if (!!item?.pictures) {
            let mediaUrl;
            _.forEach(item.pictures, (p) => {
                if (media == p.type) {
                    mediaUrl = p.url;
                }
            });
            return mediaUrl;
        }
    }


    return (
        <div className="card">

            <div className="card-img" style={isVideo ? { backgroundImage: 'none' } : { backgroundImage: `${renderMedia(constantSrv.EMediaCategory.prizeDesktop, 'img')} !important` }}>

                <div className="overlay"></div>

                <div className="overlay-text">
                    <h3 >Sold Out</h3>
                </div>

                <div className="card-cnt">

                    <h1>{item?.title}</h1>

                    <p>{item?.description}</p>

                </div>

                <div className="btl-img">

                    <img src={item ? renderMedia(constantSrv.EMediaCategory.productDesktop, 'img') : bottle} alt="" />
                    {/* <img src={bottle} alt="" /> */}

                </div>

                <div className="card-icon">
                    <img src={shareIcon} alt="" />
                </div>

            </div>

            <div className="card-footer">

                <div>
                    <div>
                        <h6>Draw date</h6>
                        <h5>{moment(item?.drawDate).format("MMMM DD, YYYY")}</h5>
                    </div>

                </div>

            </div>

        </div>
    );
}

export { SoldCampaign };