import * as dom from "./lib/document.ready.js";

let radios = document.getElementsByName('hockeyteamsurvey');
let surveyReaction = document.getElementById('surveyReaction');

const retrieveAnswer = radios => 
    Array.from(radios)
         .filter(r => r.checked == true)
         .map(r => r.id)[0];

const onTeamSurveySubmit = (evt) => {
    let msg = "";
    
    switch (retrieveAnswer(radios)) {
        case 'rangers-radio-choice':
            msg = 'Go Home Rangers!';
            break;
        case 'ducks-radio-choice': 
            msg = "You MUST be kidding!";
            break;
        case 'kings-radio-choice':
            msg = "Go Kings Go!";
            break;
    }

    surveyReaction.textContent = msg;
}

dom.ready(() => {
    document.getElementById('teamSurveySubmit').addEventListener('click', onTeamSurveySubmit);
});
