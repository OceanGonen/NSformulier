>[!NOTE] Dit is een schoolproject!


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

Woensdag 24/02
Doel: Het formulier responsive maken met grid en dynamisch maken met progressive disclosure en validatiefouten door middel van Javascript.

Eerst bleven onzichtbare velden het verzenden blokkeren omdat ze nog op required stonden. Ook bleven velden rood kleuren als de gebruiker zich bedacht en een vraag weer verborg.
Met js heb ik er voor gezorgd dat zodra een gebruiker "Ja" klikt, worden de vervolgvragen niet alleen zichtbaar, maar worden ze via data-required ook echt verplicht gemaakt.

<img width="473" height="78" alt="image" src="https://github.com/user-attachments/assets/ea530144-fb72-4e5f-8a09-9a6e400721b3" />

Met flex grid en media queries heb ik de lay-out nu mooi responsive voor grote schermen. 






Maandag 02/03
Doel: De gebruikerservaring verbeteren met responsive formattering en het oplossen van complexe validatie-issues bij dynamische velden.

Behaald:

Input Formatting (UX): Een script toegevoegd dat voorletters tijdens het typen opschoont (alleen letters), omzet naar hoofdletters en automatisch spaties toevoegt. Dit voorkomt dat gebruikers zelf punten of spaties moeten invoeren en zorgt voor een uniforme dataset. Ook postcodes worden nu automatisch naar hoofdletters omgezet.
<img width="775" height="299" alt="image" src="https://github.com/user-attachments/assets/e5f2ce8a-427e-4d0e-9a8a-e9bc67245fd9" />


Exclusieve Velden: Logica gebouwd voor de identificatie van de gemachtigde. Zodra er in één van de drie opties (BSN, Beconnummer of Protocolnummer) wordt getypt, worden de andere velden direct disabled en visueel minder zichtbaar gemaakt. 

Sectie-validatie: Een systeem ontwikkeld dat per fieldset controleert of alle verplichte velden zijn ingevuld. Bij een volledige sectie verschijnt er een groen vinkje met een popIn animatie.

Technische uitdagingen & Leerpunten:

Dynamische Validatie & Radio Buttons: Ik ben tegen een specifiek probleem aangelopen bij de required status van radio buttons in verborgen secties. Hoewel tekstvelden zich goed laten sturen via JS, bleek de browser-validatie bij radio buttons soms 'hangen'.  

Het "Not Focusable" probleem: Wanneer een fielset wordt verborgen, moet de required status er direct vanaf, anders blokkeert de browser het verzenden met de foutmelding "An invalid form control is not focusable".

Conclusie: Het dynamisch verplicht maken van radio buttons via JavaScript is complexer dan bij tekstvelden, omdat de browser de hele groep (alle radio's met dezelfde naam) als één geheel ziet. Ik heb dit deels opgelost door de verplichting programmatisch te verwijderen zodra een fieldset onzichtbaar wordt, maar de native browser-feedback blijft bij radio buttons minder stabiel dan gewenst.

Bronnen:

MDN - Constraint validation API

StackOverflow - HTML5 validation 'An invalid form control is not focusable'

JavaScript.info - Forms: event and method submit

Dinsdag 03/03

Doel: Toegankelijkheid verbeteren en de conditionele logica bij nabestaanden correct implementeren.

Behaald:

Conditionele Erfrecht-logica:
De laatste vraag bij nabestaanden wordt nu alleen zichtbaar én verplicht wanneer de vorige vraag “Ja” is. Bij “Nee” wordt deze verborgen, disabled en niet meer required.

Optimalisatie updateVisibility():
Beter begrip gekregen van data-required en dataset.required, waardoor verplichte velden alleen actief zijn wanneer een sectie zichtbaar is.

Technische uitdagingen & Leerpunten:

Validatie-volgorde:
required moet eerst verwijderd worden vóór een veld wordt verborgen of disabled om browserfouten te voorkomen.
