import React from 'react';
import './index.less';
import Wave from 'react-wavify';

export function Counter({ soldCount, keyValue }) {

    return (

        <div className="sold-counter" id="counter-1" key={keyValue}>
            <Wave fill='#eabe00'
                id=""
                // paused={animateCounter}
                options={{
                    height: soldCount === 0 ? 140 : 140 - (140 * (soldCount / 60)),
                    speed: 0.5,
                    points: 1
                }}
            />
            <Wave fill='#ffcf00'
                id=""
                // paused={animateCounter}
                options={{
                    height: soldCount === 0 ? 140 : 140 - (140 * (soldCount / 60)),
                    speed: 0.5,
                    points: 2
                }}
            />

            <span className="sold-cnt">{soldCount}</span>


            <span className="text">Sold <br /> out of</span>

            <span className="total-cnt">60</span>
        </div>

    );
}
export const MemoizedCounter = React.memo(Counter);
// export { Counter };