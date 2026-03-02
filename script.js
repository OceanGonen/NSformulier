document.addEventListener('DOMContentLoaded', () => {

    document.body.classList.add('js-enabled');
    const form = document.querySelector('form');

    // --- 1. VISUELE VALIDATIE LOGICA (NIEUW) ---
    const validateFieldset = (fieldset) => {
        // Selecteer alleen de zichtbare required velden
        const requiredInputs = fieldset.querySelectorAll('input[required]');
        
        // Een fieldset is valide als er tenminste één required veld is 
        // en ze allemaal voldoen aan de browser-validatie (.checkValidity)
        const allValid = requiredInputs.length > 0 && Array.from(requiredInputs).every(input => input.checkValidity());

        if (allValid) {
            fieldset.classList.add('is-complete');
        } else {
            fieldset.classList.remove('is-complete');
        }
    };

    // Update alle fieldsets (wordt aangeroepen bij elke wijziging)
    const updateAllFieldsetStatus = () => {
        const mainFieldsets = form.querySelectorAll('fieldset[name]');
        mainFieldsets.forEach(fieldset => validateFieldset(fieldset));
    };















    // ---  ZICHTBAARHEID LOGICA ---
    const updateVisibility = (element, condition) => {
        if (condition) {
            element.classList.add('is-visible');
            const inputs = element.querySelectorAll('[data-required]');
            inputs.forEach(input => { input.required = true; });
        } else {
            element.classList.remove('is-visible');
            const inputs = element.querySelectorAll('input');
            inputs.forEach(input => {
                input.required = false;
                if (input.type === 'radio' || input.type === 'checkbox') {
                    input.checked = false;
                } else {
                    input.value = '';
                }
            });
        }
    };

    const toggleFields = () => {
        // Partner logica
        const heeftPartner = form.querySelector('input[name="heeftPartner"]:checked')?.value === 'Ja';
        const partnerExtraVragen = document.querySelectorAll('fieldset[name="Partner-overledende"] .conditional-fields');
        partnerExtraVragen.forEach(field => updateVisibility(field, heeftPartner));

        // Kinderen logica
        const heeftKinderen = form.querySelector('input[name="heeftKinderen"]:checked')?.value === 'Ja';
        const kindOverledenVraag = form.querySelector('input[name="isKindEerderOverleden"]')?.closest('fieldset');
        if(kindOverledenVraag) updateVisibility(kindOverledenVraag, heeftKinderen);

        // Kleinkinderen logica
        const kindEerderOverleden = form.querySelector('input[name="isKindEerderOverleden"]:checked')?.value === 'Ja';
        const kleinkindVraag = form.querySelector('input[name="heeftKindZelfKind"]')?.closest('fieldset');
        if(kleinkindVraag) updateVisibility(kleinkindVraag, heeftKinderen && kindEerderOverleden);

        // Testament logica
        const heeftTestament = form.querySelector('input[name="heeftTestament"]:checked')?.value === 'Ja';
        const testamentDetails = form.querySelector('fieldset[name="PersoongegevensNotaris"]');
        updateVisibility(testamentDetails, heeftTestament);

        // Locatie logica
        const locatie = form.querySelector('input[name="locatieGemachtigde"]:checked')?.value;
        const sectieNL = document.getElementById('section-adress-nl');
        const sectieBuitenland = document.getElementById('section-adress-abroad');
        updateVisibility(sectieNL, locatie === 'NL');
        updateVisibility(sectieBuitenland, locatie === 'Buitenland');

        // Nadat de zichtbaarheid is aangepast, checken we de fieldset status
        updateAllFieldsetStatus();
    };

    form.addEventListener('change', toggleFields);
    // Luister ook naar input (voor tekstvelden) voor de groene vinkjes
    form.addEventListener('input', updateAllFieldsetStatus);
    
    toggleFields();












    // ---  1 van 3 INPUT LOGICA ---
    const oneOfXinputs = document.querySelectorAll('.exclusive-input');

    function updateRequirements() {
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
        document.getElementById('voorlettersGemachtigde')
    ];

    voorletterInputs.forEach(input => {
        if (input) {
            input.addEventListener('input', function() {
                let cleaned = this.value.replace(/[^a-zA-Z]/g, '').toUpperCase();
                let formatted = cleaned.split('').join(' ');
                if (formatted.length > 0) formatted;
                this.value = formatted;
            });
            input.addEventListener('keydown', function(e) {
                if (e.key === '.') e.preventDefault();
            });
        }
    });

    const postcodeInputs = document.querySelectorAll('input[name*="postcode"]');
    postcodeInputs.forEach(input => {
        input.addEventListener('input', function() {
            this.value = this.value.toUpperCase();
        });
    });
});



