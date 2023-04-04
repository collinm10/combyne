import React from "react";
import '../CSS/JoinSection.css';

import {Circle} from 'react-awesome-shapes';

function JoinSection() {

    return(
        <div className="JoinSection-wrapper d-flex flex-column align-items-center">
            <div className="join-header d-flex justify-content-center">
                <div>
                    Join.
                </div>
            </div>
            <div className="basic-info d-flex justify-content-around align-items-center">
                <div className="circle">
                    
                </div>
                <div>
                    Anyone can  join any team.
                </div>
                <div className="circle">
                    <Circle color="#FC5959" size={['1rem', '1rem', '1rem', '1rem']} zIndex={2}/>
                </div>
                <div>
                    Teams can have unlimited players.
                </div>
                <div className="circle">
                    <Circle color="#FC5959" size={['1rem', '1rem', '1rem', '1rem']} zIndex={2}/>
                </div>
                <div>
                    You can only join one.
                </div>
                <div className="circle">
                    
                </div>
            </div>
            <div className="teams-info d-flex flex-row justify-content-around">
                <div className="region-info d-flex flex-column justify-content-around align-items-center">
                    <div className="region-name">
                        AMERICAS
                    </div>
                    <div className="team-info d-flex justify-content-between align-items-center">
                        <div>
                            SENTINELS
                        </div>
                        <img src="images/Team Logos/Sentinels.svg" />
                    </div>
                    <div className="team-info d-flex justify-content-between align-items-center">
                        CLOUD9
                        <img src="images/Team Logos/cloud9.svg" />
                    </div>
                    <div className="team-info d-flex justify-content-between align-items-center">
                        EVIL GENIUSES
                        <img src="images/Team Logos/eg.svg" />
                    </div>
                    <div className="team-info d-flex justify-content-between align-items-center">
                        LOUD
                        <img src="images/Team Logos/loud.svg" />
                    </div>
                    <div className="team-info d-flex justify-content-between align-items-center">
                        KRU ESPORTS
                        <img src="images/Team Logos/kru.svg" />
                    </div>
                    <div className="team-info d-flex justify-content-between align-items-center">
                        100 THIEVES
                        <img src="images/Team Logos/100thieves.svg" />
                    </div>
                    <div className="team-info d-flex justify-content-between align-items-center">
                        NRG
                        <img src="images/Team Logos/nrg.svg" />
                    </div>
                    <div className="team-info d-flex justify-content-between align-items-center">
                        FURIA
                        <img src="images/Team Logos/furia.svg" />
                    </div>
                    <div className="team-info d-flex justify-content-between align-items-center">
                        MIBR
                        <img src="images/Team Logos/mibr.svg" />
                    </div>
                    <div className="team-info d-flex justify-content-between align-items-center">
                        LEVIATAN
                        <img src="images/Team Logos/leviatan.svg" />
                    </div>
                </div>
                <div className="region-info d-flex flex-column justify-content-around align-items-center">
                    <div className="region-name">
                        EMEA
                    </div>
                    <div className="team-info d-flex justify-content-between align-items-center">
                        FNATIC
                        <img src="images/Team Logos/fnatic.svg" />
                    </div>
                    <div className="team-info d-flex justify-content-between align-items-center">
                        TEAM VITALITY
                        <img src="images/Team Logos/teamvitality.svg" />
                    </div>
                    <div className="team-info d-flex justify-content-between align-items-center">
                        TEAM HERETICS
                        <img className="team-logo" src="images/Team Logos/teamheretics.svg"/>
                    </div>
                    <div className="team-info d-flex justify-content-between align-items-center">
                        NAVI
                        <img src="images/Team Logos/navi.svg" />
                    </div>
                    <div className="team-info d-flex justify-content-between align-items-center">
                        BBL ESPORTS
                        <img src="images/Team Logos/bbl.svg" />
                    </div>
                    <div className="team-info d-flex justify-content-between align-items-center">
                        TEAM LIQUID
                        <img src="images/Team Logos/teamliquid.svg" />
                    </div>
                    <div className="team-info d-flex justify-content-between align-items-center">
                        KARMINE CORP
                        <img src="images/Team Logos/karmine corp.svg" />
                    </div>
                    <div className="team-info d-flex justify-content-between align-items-center">
                        GIANTS
                        <img src="images/Team Logos/giants.svg" />
                    </div>
                    <div className="team-info d-flex justify-content-between align-items-center">
                        FUT ESPORTS
                        <img src="images/Team Logos/fut.svg" />
                    </div>
                    <div className="team-info d-flex justify-content-between align-items-center">
                        KOI
                        <img src="images/Team Logos/koi.svg" />
                    </div>
                </div>
                <div className="region-info d-flex flex-column justify-content-around align-items-center">
                    <div className="region-name">
                        PACIFIC
                    </div>
                    <div className="team-info d-flex justify-content-between align-items-center">
                        ZETA DIVISION
                        <img src="images/Team Logos/zeta.svg" />
                    </div>
                    <div className="team-info d-flex justify-content-between align-items-center">
                        GEN.G
                        <img src="images/Team Logos/geng.svg" />
                    </div>
                    <div className="team-info d-flex justify-content-between align-items-center">
                        DRX
                        <img src="images/Team Logos/drx.svg" />
                    </div>
                    <div className="team-info d-flex justify-content-between align-items-center">
                        PAPER REX
                        <img src="images/Team Logos/paperrex.svg" />
                    </div>
                    <div className="team-info d-flex justify-content-between align-items-center">
                        TALON ESPORTS
                        <img src="images/Team Logos/talon.svg" />
                    </div>
                    <div className="team-info d-flex justify-content-between align-items-center">
                        DETONATION GAMING
                        <img src="images/Team Logos/detonation.svg" />
                    </div>
                    <div className="team-info d-flex justify-content-between align-items-center">
                        T1
                        <img src="images/Team Logos/t1.svg" />
                    </div>
                    <div className="team-info d-flex justify-content-between align-items-center">
                        TEAM SECRET
                        <img src="images/Team Logos/teamsecret.svg" />
                    </div>
                    <div className="team-info d-flex justify-content-between align-items-center">
                        REX REGUM QEON
                        <img src="images/Team Logos/rex regum.svg" />
                    </div>
                    <div className="team-info d-flex justify-content-between align-items-center">
                        GLOBAL ESPORTS
                        <img src="images/Team Logos/global.svg" />
                    </div>
                </div>
            </div>
            <div className="bottom-quip mt-5">
                Who's got the best fanbase?
            </div>
        </div>
    );
}

export default JoinSection;