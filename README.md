Maandag 17/2
Ik ben begonnen met het opzetten van de basisstructuur van het erfbelastingformulier. Ik heb de HTML-structuur uitgewerkt met een duidelijke hiërarchie van <form>, <fieldset> en <legend> elementen, zodat het formulier logisch en semantisch correct is opgebouwd. Hierbij heb ik de verschillende onderdelen gescheiden in secties zoals gegevens van de overledene, partner, nabestaanden, testament en gemachtigde. Ook heb ik alvast validatie-attributen toegevoegd zoals required, pattern en type="email" om basisvalidatie via HTML mogelijk te maken.

Doel: Een duidelijke en semantisch correcte formulierstructuur opzetten die overzichtelijk en toegankelijk is.

Behaald: Volledige HTML-structuur opgezet met logische groepering via fieldsets en legends. Basisvalidatie toegevoegd via HTML-attributen (required, pattern, input types).

Dinsdag 18/2
Deze dag heb ik me gericht op styling en interactieve logica met CSS. Ik heb een visuele stijl opgezet in NS-huisstijl met CSS-variabelen (:root) voor kleuren, zodat het ontwerp consistent en makkelijk aanpasbaar blijft. Daarnaast heb ik custom radio buttons gemaakt waarbij de standaard radio-input verborgen is en de bijbehorende labels visueel veranderen met :has() wanneer een optie is geselecteerd. Ook heb ik conditionele velden visueel uitgeschakeld met behulp van de :has() selector en pointer-events: none, zodat vervolgvragen automatisch vervagen wanneer een gebruiker “Nee” selecteert. Verder heb ik formulierfeedback toegevoegd via input:user-invalid om foutieve invoer direct visueel te markeren.

Doel: Het formulier visueel aantrekkelijk maken en interactieve afhankelijkheden tussen vragen creëren zonder JavaScript.

Behaald: NS-styling geïmplementeerd met CSS-variabelen. Interactieve radio-buttons gemaakt met :has(). Conditionele velden dynamisch uitgeschakeld via pure CSS. Visuele validatiefeedback toegevoegd met :user-invalid.

Bronnen:

MDN – CSS :has()

MDN – HTML form validation

MDN – :user-invalid pseudo-class
