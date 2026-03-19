document.addEventListener('DOMContentLoaded', () => {

    document.body.classList.add('js-enabled');
    const form = document.querySelector('form');

    // --- VISUELE VALIDATIE LOGICA ---
    const validateFieldset = (fieldset) => {

        if (fieldset.getAttribute('name') === 'erfenisVerkrijgers') {
            const radioNee = fieldset.querySelector('input[name="heeftVerkrijger"][value="Nee"]');

            if (radioNee && radioNee.checked) {
                fieldset.classList.add('is-complete');
                return;
            }
        }

        const requiredInputs = fieldset.querySelectorAll('input[required]:not(:disabled)');
        
        const allValid = requiredInputs.length > 0 && Array.from(requiredInputs).every(input => input.checkValidity());
        //Bron: Gemini^^

        if (allValid) {
            fieldset.classList.add('is-complete');
        } else {
            fieldset.classList.remove('is-complete');
        }
    };

    // Update fieldsets 
    const updateAllFieldsetStatus = () => {
        const mainFieldsets = form.querySelectorAll('fieldset[name]');
        mainFieldsets.forEach(fieldset => validateFieldset(fieldset));
    };
    
    // Bron: https://dev.to/tingchun0113/how-to-perform-form-validation-1a54
    // Bron: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:invalid






    //BSN user feedback

    const bsnInput = document.getElementById('bsnOverledende');
    const bsnMelding = document.getElementById('bsn-melding');

    bsnInput.addEventListener('input', () => {
        const lengte = bsnInput.value.length;

        if (lengte > 0 && lengte < 9) {
            bsnMelding.textContent = `BSN is ongeldig`;
            bsnMelding.style.color = "orange";
        } else if (lengte > 9) {
            bsnMelding.textContent = `BSN is ongeldig`;
            bsnMelding.style.color = "orange";
        } else {
            bsnMelding.textContent = "";
        }
    });

    bsnInput.addEventListener('blur', () => {
        if (bsnInput.value.length < 9) {
            bsnMelding.style.color = "#da574d";
        } else {
            bsnInput.style.border = "";
        }
    });














    // ---  ZICHTBAARHEID LOGICA ---
    const lijst = document.getElementById('verkrijgersLijst');
    const addBtn = document.getElementById('addVerkrijgerBtn');
    if (lijst) {
        const items = lijst.querySelectorAll('.verkrijger-item');

        items.forEach((item, index) => {
            if (index > 0) {
                item.remove();
            }
        });

        addBtn.style.display = 'inline-block';
    }

    const updateVisibility = (element, condition) => {
        const inputs = element.querySelectorAll('input, select, textarea');

        if (condition) {
            element.classList.add('is-visible');

            inputs.forEach(input => {
                input.disabled = false;

                if (input.dataset.required !== undefined) {
                    input.required = true;
                }
            });

        } else {
            element.classList.remove('is-visible');

            inputs.forEach(input => {
                input.required = false;
                input.checked = false;
                input.value = '';
                input.disabled = true;
            });
        }
    };

    // Bron: https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/disabled
    // Bron: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
    // Bron: https://css-tricks.com/exposing-form-fields-radio-button-css/


    const toggleFields = () => {
        // Partner logica
        const heeftPartner = form.querySelector('input[name="heeftPartner"]:checked')?.value === 'Ja';
        const partnerExtraVragen = document.querySelectorAll('fieldset[name="Partner-overledene"] .conditional-fields');

        partnerExtraVragen.forEach(field => updateVisibility(field, heeftPartner));

        // Kinderen logica
        const heeftKinderen = form.querySelector('input[name="heeftKinderen"]:checked')?.value === 'Ja';
        const kindOverledenVraag = form.querySelector('input[name="isKindEerderOverleden"]')?.closest('fieldset');

        if (kindOverledenVraag) updateVisibility(kindOverledenVraag, heeftKinderen);

        // Kleinkinderen logica
        const kleinkindVraag = form.querySelector('input[name="heeftKindZelfKind"]')?.closest('fieldset');

        if (kleinkindVraag) {
            updateVisibility(kleinkindVraag, heeftKinderen);
        }

        // Testament logica
        const heeftTestament = form.querySelector('input[name="heeftTestament"]:checked')?.value === 'Ja';
        const testamentDetails = form.querySelector('fieldset[name="PersoongegevensNotaris"]');

        updateVisibility(testamentDetails, heeftTestament);

        // Locatie logica
        const locatie = form.querySelector('input[name="locatieGemachtigde"]:checked')?.value;
        const sectieNL = document.getElementById('sectie-adres-nl');
        const sectieBuitenland = document.getElementById('sectie-adres-buitenland');

        updateVisibility(sectieNL, locatie === 'NL');
        updateVisibility(sectieBuitenland, locatie === 'Buitenland');


        // Verkrijgers logica
        const heeftVerkrijger = form.querySelector('input[name="heeftVerkrijger"]:checked')?.value === 'Ja';
        const verkrijgersSectie = document.getElementById('verkrijgersSectie');

        updateVisibility(verkrijgersSectie, heeftVerkrijger);


        updateAllFieldsetStatus();
    };

    form.addEventListener('change', toggleFields);
    form.addEventListener('input', updateAllFieldsetStatus);

    toggleFields();












    // ---  1 van 3 INPUT LOGICA ---
    const oneOfXinputs = document.querySelectorAll('.exclusive-input');

    function updateRequirements() {
        // BRON: GEMINI
        const oneOfXinputsFilled = Array.from(oneOfXinputs).some(input => input.value.length > 0);

        oneOfXinputs.forEach(input => {
            if (oneOfXinputsFilled) {
                if (input.value.length > 0) {
                    input.required = true;
                    input.disabled = false;
                } else {
                    input.required = false;
                    input.disabled = true;
                }
            } else {
                input.required = true;
                input.disabled = false;
            }
        });
        updateAllFieldsetStatus();
    }

    oneOfXinputs.forEach(input => {
        input.addEventListener('input', updateRequirements);
    });
    updateRequirements();



    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            const group = e.target.closest('.radio-group');
            if (group) group.classList.remove('invalid-radio');
        });
    });








    // --- INPUT FORMATTERING ---
    const voorletterInputs = [
        document.getElementById('voorlettersOverledene'),
        document.getElementById('voorlettersNotaris'),
        document.getElementById('voorlettersGemachtigde'),
        document.getElementById('voorlettersVerkrijger1'),
    ];

    voorletterInputs.forEach(input => {
        if (input) {
            input.addEventListener('input', function () {
                // Bron: Gemini
                let cleaned = this.value.replace(/[^a-zA-Z]/g, '').toUpperCase();
                let formatted = cleaned.split('').join(' ');
                this.value = formatted;
            });
            input.addEventListener('keydown', function (e) {
                if (e.key === '.') e.preventDefault();
            });
        }
    });

    // Bron: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
    // Bron: https://chatgpt.com/c/69aaa768-a444-8329-9bdb-2d5638beec37


    const hoofdletterInputs = [
        document.getElementById("achternaamOverledene"),
        document.getElementById("achternaamNotaris"),
        document.getElementById("achternaamGemachtigde"),
        document.getElementById("woonplaatsGemachtigdeNL"),
        document.getElementById("woonplaatsGemachtigdeBuitenland"),
        document.getElementById("achternaamVerkrijger1"),
    ]

    hoofdletterInputs.forEach(input => {
        if (input) {
            input.addEventListener('input', function () {
                let value = this.value.trim();
                if (value.length > 0) {
                    this.value = value.charAt(0).toUpperCase() + value.slice(1);
                }
            });
        }
    });

    const postcodeInputs = document.querySelectorAll('input[name*="postcode"]');
    postcodeInputs.forEach(input => {
        input.addEventListener('input', function () {
            this.value = this.value.toUpperCase();
        });
    });


});






// --- DYNAMISCHE VERKRIJGERS LOGICA ---
const lijst = document.getElementById('verkrijgersLijst');
const addBtn = document.getElementById('addVerkrijgerBtn');

const createVerkrijgerHTML = (index) => {
    const fieldset = document.createElement('fieldset');
    fieldset.className = 'verkrijger-item';
    fieldset.innerHTML = `
        <button type="button" class="remove-verkrijger" >&#10005;</button>

        <legend>Verkrijger ${index}</legend>
        <div class="name-fields">
                            <label for="voorlettersVerkrijger${index}">Voorletter(s)</label>
                            <input type="text" id="voorlettersVerkrijger${index}" name="voorlettersVerkrijger[]" required>

                            <label for="tussenvoegselVerkrijger${index}">Tussenvoegsel(s)</label>
                            <input type="text" id="tussenvoegselVerkrijger${index}" name="tussenvoegselVerkrijger[]">

                            <label for="achternaamVerkrijger${index}">Achternaam</label>
                            <input type="text" id="achternaamVerkrijger${index}" name="achternaamVerkrijger[]" required>
                        </div>
                        <div class="form-group">
                            <label for="bsnVerkrijger${index}">BSN verkrijger (optioneel)</label>
                            <input type="text" id="bsnVerkrijger${index}" name="bsnVerkrijger[]" pattern="[0-9]{9}">
                        </div>

                        <fieldset class="radio-group">
                            <legend name="heeftHeleVermogen" class="question">Krijgt deze verkrijger waarvoor u geen
                                aangifte
                                doet het hele
                                vermogen?</legend>

                            <label>
                                <input type="radio" name="heeftHeleVermogen" value="Nee" required>
                                Nee
                            </label>

                            <label>
                                <input type="radio" name="heeftHeleVermogen" value="Ja">
                                Ja
                            </label>
                        </fieldset>

                        <fieldset class="radio-group">
                            <legend name="heeftWettelijkErfdeel" class="question">
                                Doet deze verkrijger een beroep op diens legitieme portie
                                (wettelijke erfdeel)?
                            </legend>

                            <label>
                                <input type="radio" name="heeftWettelijkErfdeel" value="Nee" data-required>
                                Nee
                            </label>

                            <label>
                                <input type="radio" name="heeftWettelijkErfdeel" value="Ja">
                                Ja
                            </label>
                        </fieldset>

                    </fieldset>

                </div>
    `;
    return fieldset;
};

addBtn.addEventListener('click', () => {
    const huidigeAantal = lijst.querySelectorAll('.verkrijger-item').length;
    const nieuweVerkrijger = createVerkrijgerHTML(huidigeAantal + 1);
    lijst.appendChild(nieuweVerkrijger);
    updateAllFieldsetStatus();
});
//Bron: Gemini
lijst.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-verkrijger')) {
        e.target.closest('.verkrijger-item').remove();

        // Update de nummers 
        lijst.querySelectorAll('.verkrijger-item').forEach((item, i) => {
            item.querySelector('legend').textContent = `Verkrijger ${i + 1}`;
        });
        updateAllFieldsetStatus();
    }
});

document.querySelectorAll('.remove-verkrijger').forEach((btn, index) => {
    if (index > 0) btn.style.display = 'block';
});








// Print screen 

const printBtn = document.getElementById('printBtn');
if (printBtn) {
    printBtn.addEventListener('click', () => {
        window.print();
    });
}
