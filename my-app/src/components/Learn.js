import React from "react";
import './Learn.scss';

export class Learn extends React.Component {
    render() {
        return (
            <div className="learn">
                <div className="learn-section last-section">
                    <div className="learn-section-flex">
                        <div className="learn-card1">
                            <p className="learn-card-text"> More info on loops</p>
                            <div className="learn-card-bottom">
                                <h2 className="learn-card-bottom-h2">For Loops</h2>
                            </div>
                        </div>
                        <div className="learn-card1">
                            <p className="learn-card-text"> More info on loops</p>
                            <div className="learn-card-bottom">
                                <h2 className="learn-card-bottom-h2">For Loops</h2>
                            </div>
                        </div>
                        <div className="learn-card1">
                            <p className="learn-card-text"> More info on loops</p>
                            <div className="learn-card-bottom">
                                <h2 className="learn-card-bottom-h2">For Loops</h2>
                            </div>
                        </div>
                    </div>
                    <div className="learn-section-flex">
                        <div className="learn-card">
                            <div className="learn-card-top">
                            </div>
                            <p className="learn-card-text"> More info on loops</p>
                        </div>
                        <div className="learn-card">
                            <div className="learn-card-top">
                            </div>
                            <p className="learn-card-text"> More info on loops</p>
                        </div>
                        <div className="learn-card">
                            <div className="learn-card-top">
                            </div>
                            <p className="learn-card-text"> More info on loops</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}