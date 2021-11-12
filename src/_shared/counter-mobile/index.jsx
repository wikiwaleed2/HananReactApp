
import React from 'react';
import './index.less';
import Wave from 'react-wavify';

export function CounterMobile({ soldCount, keyvalue }) {

    return (

        <div className="sold-counter-mobile" id="counter-4" key={keyvalue}>
            <Wave fill='#eabe00'
                id=""
                // paused={animateCounter}
                options={{
                    height: soldCount === 0 ? 70 : 70 - (70 * (soldCount / 60)),
                    speed: 0.5,
                    points: 1
                }}
            />
            <Wave fill='#ffcf00'
                id=""
                // paused={animateCounter}
                options={{
                    height: soldCount === 0 ? 70 : 70 - (70 * (soldCount / 60)),
                    speed: 0.5,
                    points: 2
                }}
            />

            <h5 className="sold-cnt" key={keyvalue}>{soldCount}</h5>

            <p>SOLD <br />
                OUT OF
            </p>

            <h5 className="total-cnt">60</h5>
        </div>

    );
}
export const MemoizedCounterMobile = React.memo(CounterMobile);
// export { CounterMobile };