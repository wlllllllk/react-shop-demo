import BigItems from '../../components/Big_Items/Big_Items.js'
import Category from '../../components/Category/Category.js'
import MainRecommendation from '../../components/Main_Recommendation/Main_Recommendation.js'
import SmallItems from '../../components/Small_Items/Small_Items.js';
import Promotions from '../../components/Promotions/Promotions.js'

import "./style.scss";

const Main = () => {
    return (
        <div className="main">
            <div className="contents">
                <Category></Category>
                <div className="center">
                    <div id="section-1">
                        <MainRecommendation></MainRecommendation>
                    </div>

                    <div id="section-2">
                        <h2>Top Selling</h2>
                        <div className="item-list">
                            <div className="prev"></div>
                            <BigItems></BigItems>
                            <div className="next"></div>
                        </div>
                    </div>

                    <div id="section-3">
                        <h2>Choice of Health</h2>
                        <div className="item-list">
                            <div className="prev"></div>
                            <SmallItems></SmallItems>
                            <div className="next"></div>
                        </div>
                    </div>

                    <div id="section-4">
                        <h2>Ut dolor vivamus malesuada condimentum</h2>
                        <div className="item-list">
                            <div className="prev"></div>
                            <SmallItems></SmallItems>
                            <div className="next"></div>
                        </div>
                    </div>
                </div>

                <Promotions></Promotions>
            </div>
        </div>
    )
}

export default Main
