import React from 'react';
import './MatchResults.css';
import LawyerCard from './LawyerCard.js';
import {Flex} from 'rebass';

function MatchResults(props) {
    return (
        <div style={{ textAlign: "center" }}>
            <button id="myButton" type="submit" style={{ fontSize: "18px", borderStyle: "solid", borderColor: "#3d5a80", borderWidth: "4px", borderRadius: "10px" }}>Get your lawyer match!</button>
            <div id="myModal" class="modal">

                {window.onload = function () {

                    document.getElementById("myButton").onclick = function () { document.getElementById("myModal").style.display = "block"; }
                    document.getElementsByClassName("close")[0].onclick = function () { document.getElementById("myModal").style.display = "none" }

                }}
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <Flex>
                    {props.lawyers.map( lawyer =>
                    <LawyerCard name={lawyer.Name} phone={lawyer.Phone} email={lawyer.Email} location={lawyer.Location} expertise1={lawyer.Expertise1}
                        expertise2={lawyer.Expertise2} expertise3={lawyer.Expertise3} language={lawyer.Language} race={lawyer.Race}></LawyerCard>)} 
                    </Flex>
                </div>
            </div>

        </div>
    )
}

export default MatchResults

