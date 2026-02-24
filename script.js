document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    const updateVisibility = (element, condition) => {
    if (condition) {
        element.classList.add('is-visible');
        
        // Activeer 'required' voor velden met data-required
        const inputs = element.querySelectorAll('[data-required]');
        inputs.forEach(input => {
            input.required = true;
        });
    } else {
        element.classList.remove('is-visible');
        
        const inputs = element.querySelectorAll('input');
        inputs.forEach(input => {
            // Deactiveer 'required' altijd als het veld verborgen wordt
            input.required = false;
            
            // Wis waarden (zoals in de vorige stap)
            if (input.type === 'radio' || input.type === 'checkbox') {
                input.checked = false;
            } else {
                input.value = '';
            }
        });
    }
};

    const toggleFields = () => {
        // 1. Partner logica
        const heeftPartner = form.querySelector('input[name="heeftPartner"]:checked')?.value === 'Ja';
        const partnerExtraVragen = document.querySelectorAll('fieldset[name="Partner-overledende"] .conditional-fields');
        partnerExtraVragen.forEach(field => updateVisibility(field, heeftPartner));

        // 2. Kinderen logica
        const heeftKinderen = form.querySelector('input[name="heeftKinderen"]:checked')?.value === 'Ja';
        const kindOverledenVraag = form.querySelector('input[name="isKindEerderOverleden"]').closest('fieldset');
        updateVisibility(kindOverledenVraag, heeftKinderen);

        // 3. Kleinkinderen logica
        const kindEerderOverleden = form.querySelector('input[name="isKindEerderOverleden"]:checked')?.value === 'Ja';
        const kleinkindVraag = form.querySelector('input[name="heeftKindZelfKind"]').closest('fieldset');
        updateVisibility(kleinkindVraag, heeftKinderen && kindEerderOverleden);

        // 4. Testament logica
        const heeftTestament = form.querySelector('input[name="heeftTestament"]:checked')?.value === 'Ja';
        const testamentDetails = form.querySelector('fieldset[name="PersoongegevensNotaris"]');
        updateVisibility(testamentDetails, heeftTestament);
    };

    form.addEventListener('change', toggleFields);
    toggleFields();
});