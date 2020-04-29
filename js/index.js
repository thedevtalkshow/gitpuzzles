import * as dom from "./lib/document.ready.js";

let radios = document.getElementsByName('hockeyteamsurvey');
let surveyReaction = document.getElementById('surveyReaction');
let kingsPlayerImage = document.getElementById('kingsPlayerImage');

const retrieveAnswer = radios => 
    Array.from(radios)
         .filter(r => r.checked == true)
         .map(r => r.id)[0];

const onTeamSurveySubmit = (evt) => {
    let msg = "";
    
    switch (retrieveAnswer(radios)) {
        case 'rangers-radio-choice':
            msg = 'Go Home Rangers!';
            kingsPlayerImage.hidden = true;
            break;
        case 'ducks-radio-choice': 
            msg = "You MUST be kidding!";
            kingsPlayerImage.hidden = true;
            break;
        case 'kings-radio-choice':
            msg = "Go Kings Go!";
            kingsPlayerImage.hidden = false;
            break;
    }

    surveyReaction.textContent = msg;
}

dom.ready(() => {
    document.getElementById('teamSurveySubmit').addEventListener('click', onTeamSurveySubmit);
});
