>[!NOTE] Dit is een schoolproject!


## Maandag 17/2
Ik ben begonnen met het opzetten van de basisstructuur van het erfbelastingformulier. Ik heb de HTML-structuur uitgewerkt met een duidelijke hiërarchie van <form>, <fieldset> en <legend> elementen, zodat het formulier logisch en semantisch correct is opgebouwd. Hierbij heb ik de verschillende onderdelen gescheiden in secties zoals gegevens van de overledene, partner, nabestaanden, testament en gemachtigde. Ook heb ik alvast validatie-attributen toegevoegd zoals required, pattern en type="email" om basisvalidatie via HTML mogelijk te maken.

Doel: Een duidelijke en semantisch correcte formulierstructuur opzetten die overzichtelijk en toegankelijk is.

Behaald: Volledige HTML-structuur opgezet met logische groepering via fieldsets en legends. Basisvalidatie toegevoegd via HTML-attributen (required, pattern, input types).

## Dinsdag 18/2
Deze dag heb ik me gericht op styling en interactieve logica met CSS. Ik heb een visuele stijl opgezet in NS-huisstijl met CSS-variabelen (:root) voor kleuren, zodat het ontwerp consistent en makkelijk aanpasbaar blijft. Daarnaast heb ik custom radio buttons gemaakt waarbij de standaard radio-input verborgen is en de bijbehorende labels visueel veranderen met :has() wanneer een optie is geselecteerd. Ook heb ik conditionele velden visueel uitgeschakeld met behulp van de :has() selector en pointer-events: none, zodat vervolgvragen automatisch vervagen wanneer een gebruiker “Nee” selecteert. Verder heb ik formulierfeedback toegevoegd via input:user-invalid om foutieve invoer direct visueel te markeren.

Doel: Het formulier visueel aantrekkelijk maken en interactieve afhankelijkheden tussen vragen creëren zonder JavaScript.

Behaald: NS-styling geïmplementeerd met CSS-variabelen. Interactieve radio-buttons gemaakt met :has(). Conditionele velden dynamisch uitgeschakeld via pure CSS. Visuele validatiefeedback toegevoegd met :user-invalid.

Bronnen:

MDN – CSS :has()

MDN – HTML form validation

MDN – :user-invalid pseudo-class

## Woensdag 24/02
Doel: Het formulier responsive maken met grid en dynamisch maken met progressive disclosure en validatiefouten door middel van Javascript.

Eerst bleven onzichtbare velden het verzenden blokkeren omdat ze nog op required stonden. Ook bleven velden rood kleuren als de gebruiker zich bedacht en een vraag weer verborg.
Met js heb ik er voor gezorgd dat zodra een gebruiker "Ja" klikt, worden de vervolgvragen niet alleen zichtbaar, maar worden ze via data-required ook echt verplicht gemaakt.

<img width="473" height="78" alt="image" src="https://github.com/user-attachments/assets/ea530144-fb72-4e5f-8a09-9a6e400721b3" />

Met flex grid en media queries heb ik de lay-out nu mooi responsive voor grote schermen. 


## Week Reflectie:

**De Fundering, Semantiek en Logica:** Ik begon bij het begin: de HTML-structuur. In plaats van gewoon wat inputveldjes te dumpen, heb ik het formulier semantisch opgebouwd met <fieldsets> <labels> en <legends>. Het is namelijk cruciaal om alle informatie over de overledene, de nabestaanden en het testament netjes te groeperen. Zo blijft het formulier niet alleen voor de gebruiker overzichtelijk, maar snappen hulpsoftware (zoals screenreaders) ook precies wat bij wat hoort. Direct bij de start heb ik ook de basisvalidatie ingebouwd met required en patterns, zodat de eerste laag van foutcontrole al in de HTML zelf zit.

**De CSS:** De volgende uitdaging was de styling en de validatie. Ik wilde kijken hoe ver ik kon gaan met pure CSS. Voor de look-and-feel heb ik de NS-huisstijl aangehouden, waarbij ik alles heb vastgelegd in CSS-variabelen (:root). Dit maakt het aanpassen van kleuren later simpel. Echt leuk werd het bij de interactieve elementen. Ik heb custom radio-buttons gebouwd waarbij ik de :has() selector gebruikte om labels visueel te laten veranderen als ze geselecteerd zijn. Ook zijn er conditionele vragen aangepakt met pure CSS. Door :has() te combineren met pointer-events: none, kon ik velden laten vervagen en uitschakelen zonder een regel JavaScript aan te raken. Voor directe feedback bij foutjes gebruikte ik :user-invalid, zodat velden pas rood kleuren nadat de gebruiker er daadwerkelijk iets mee heeft gedaan.

De JS-Validatie en Responsiveness
Toen ik het formulier dynamischer wilde maken met JavaScript, liep ik tegen een klassiek probleem aan: Onzichtbare velden die op required stonden, blokkeerden het verzenden van het formulier, ook al kon de gebruiker ze niet zien. Ook bleven verborgen velden soms rood kleuren. Ik heb dit opgelost met een custom attribute data-required. Met een klein beetje JavaScript zorg ik er nu voor dat velden pas écht verplicht worden zodra ze zichtbaar worden gemaakt. Klikt iemand op "Nee"? Dan verdwijnt de verplichting ook direct van de vervolgvragen. Om het af te maken heb ik met Flexbox, Grid en media queries gezorgd dat het hele formulier er op grote schermen net zo strak uitziet als op mobiel.

Terugblik
Deze dagen waren een goede les in "Progressive Disclosure": alleen laten zien wat nodig is, wanneer het nodig is. De grootste winst zat in de combinatie tussen de kracht van moderne CSS (:has) en de mogelijkheid  van JavaScript om de laatste foutjes in de validatie op te lossen. 

## Maandag 02/03
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

### Bronnen:

MDN - Constraint validation API

StackOverflow - HTML5 validation 'An invalid form control is not focusable'

JavaScript.info - Forms: event and method submit

## Dinsdag 03/03

Doel: Toegankelijkheid verbeteren en de conditionele logica bij nabestaanden correct implementeren.

Behaald:

Conditionele Erfrecht-logica:
De laatste vraag bij nabestaanden wordt nu alleen zichtbaar én verplicht wanneer de vorige vraag “Ja” is. Bij “Nee” wordt deze verborgen, disabled en niet meer required.

Optimalisatie updateVisibility():
Beter begrip gekregen van data-required en dataset.required, waardoor verplichte velden alleen actief zijn wanneer een sectie zichtbaar is.

Technische uitdagingen & Leerpunten:

Validatie-volgorde:
required moet eerst verwijderd worden vóór een veld wordt verborgen of disabled om browserfouten te voorkomen.

## Week Reflectie:
In deze week ging ik dieper in op de details: het formulier moest niet alleen werken, maar ook slim aanvoelen. De focus lag op het voorkomen van fouten van de gebruiker en gebruik maken van de  ingebouwde validatie van de browser.

**UX en Automatische Opmaak**:
Ik ben begonnen met het toevoegen van een stukje auto correctie tijdens het typen. Gebruikers maken vaak foutjes bij voorletters, door voornaam door elkaar te halen, of postcodes (vergeten spaties, kleine letters, rare tekens). Ik heb een script gebouwd dat voorletters direct opschoont: het pakt alleen letters, maakt er hoofdletters van en zet er automatisch spaties tussen. Hetzelfde geldt voor postcodes. Dit is niet alleen fijn voor de gebruiker, maar zorgt er ook voor dat de data die uit het formulier komt altijd uniform en strak is.

**Slimme Logica voor Gemachtigden:** Een interessant onderdeel was de identificatie van de gemachtigde. Hier moesten we kiezen tussen drie opties: BSN, Beconnummer of Protocolnummer. Ik heb logica gebouwd die ervoor zorgt dat zodra je in één van de drie velden begint te typen, de andere twee direct worden uitgeschakeld (disabled) en vervagen. Dit voorkomt dat iemand per ongeluk meerdere nummers invult en maakt de keuze voor de gebruiker visueel heel duidelijk.

**De Strijd tegen "Not Focusable":** Het grootste technische leermoment van deze dagen was het "Not Focusable" probleem. Als een veld in een verborgen sectie nog op required staat, weigert de browser het formulier te verzenden. Je krijgt dan een vage foutmelding in de console: "An invalid form control is not focusable". De gebruiker ziet niks, maar de verzendknop doet het gewoon niet. Dit was vooral lastig bij radio-buttons, omdat de browser die als één groep ziet. Ik heb mijn updateVisibility() functie moeten optimaliseren om dit op te lossen. De les was simpel maar hard: je moet de required status er áltijd afhalen voordat je een veld verbergt of op disabled zet. Pas dan is de browser tevreden.

**Beloning en Overzicht:**
Om het invullen wat leuker te maken, heb ik sectie-validatie toegevoegd. Zodra je een hele fieldset correct hebt ingevuld, verschijnt er een groen vinkje met een subtiele popIn animatie. Dit geeft de gebruiker direct de bevestiging dat alles in die sectie in orde is.

**Terugblik:**
Deze laatste dagen stonden in het teken van de Validation API. Ik heb geleerd dat je de browser niet zomaar zijn gang kunt laten gaan met validatie als je met dynamische velden werkt. Je moet de status van je velden (zichtbaar, verplicht, actief) constant in sync houden met JavaScript om te voorkomen dat je formulier "vastloopt".




## Maandag 09/03
Doel: BSN-invoer maken met direct userfeedback.

Ik heb me vandaag gericht op een BSN-checksysteem gebouwd dat direct visuele feedback geeft (via oranje en rode meldingen) als een nummer te kort of te lang is. Ook heb ik de "1 van de 3" logica voor de gemachtigde geïmplementeerd: zodra de gebruiker in één identificatieveld typt, worden de andere twee opties direct disabled en visueel vervaagd om invoerfouten te voorkomen.
Behaald:

Real-time BSN check: Een script gefixt dat tijdens het typen checkt of de BSN te kort of te lang is. Geen verrassingen meer bij het verzenden.

Slimme meldingen: De foutmelding verschijnt nu automatisch via JS onder het juiste veld. Rood als je het veld verlaat (blur), oranje terwijl je typt (focus).


## Dinsdag 10/03

Vandaag was ik bezig met het maken van de verkrijgers-sectie en het verfijnen van de sectie-validatie. Ik heb een "Add/Remove" systeem gebruikt waarmee gebruikers naar behoefte extra verkrijgers kunnen toevoegen, waarbij de verwijderknop via CSS absolute positioning strak in de bovenhoek is geplaatst. Daarna heb ik de sectie-validatie uitgebreid: als een gebruiker bij de radio-button kiest voor "Nee" (geen extra verkrijgers), krijgt de hele fieldset direct een groen vinkje als voltooid, terwijl bij "Ja" de validatie pas groen wordt als alle dynamische velden correct zijn ingevuld.


## Week Reflectie:
In de laatste week heb ik me gericht op het voorkomen van frustratie bij de gebruiker.

**BSN-Check:** 
De BSN-nummer is een foutgevoelig veld. Ik heb een real-time validatie gebouwd dat direct reageert op wat de gebruiker doet. Terwijl je typt, verschijnt er een oranje melding als het nummer nog te kort is. Verlaat je het veld en is het nummer nog steeds niet correct? Dan wordt de melding rood. Door deze visuele hiërarchie (oranje voor "bijna daar", rood voor "fout") weet de gebruiker precies waar hij aan toe is zonder dat het formulier direct "boos" wordt. Ook de "1 van de 3" logica voor de gemachtigde heb ik hierin meegenomen. Het is nu technisch onmogelijk om zowel een BSN als een Beconnummer in te vullen; zodra de eerste letter in het ene veld staat, gaan de andere twee direct op "slot". Dit houdt de data schoon en de interface rustig.

**De "Verkrijgers":**
Het formulier moest flexibel zijn voor gezinnen van verschillende groottes. Ik heb een "Add/Remove" systeem ontwikkeld voor de sectie 'Verkrijgers'. Gebruikers kunnen nu naar behoefte extra blokken toevoegen. Visueel heb ik dit strak opgelost door de verwijderknop met absolute positioning rechtsboven in de hoek van de sectie te plaatsen, zodat het formulier overzichtelijk blijft, hoe lang het ook wordt.

**Slimme Validatie-vinkjes:**
De sectie-validatie heb ik hierna nog een stapje verder gebracht. De logica kijkt nu naar de context: Kiest de gebruiker voor "Nee" bij de vraag of er extra verkrijgers zijn? Dan is de sectie direct "klaar" en verschijnt het vinkje. Kiest de gebruiker voor "Ja"? Dan is het vinkje slim genoeg om te wachten tot álle dynamisch toegevoegde velden correct zijn ingevuld.

**Terugblik:**
Deze dagen stonden in het teken van "Real-time UX". Het grootste leermoment was het combineren van JavaScript-events (input en blur) met CSS-animaties. Door de validatie direct te koppelen aan de keuzes van de gebruiker (zoals de Ja/Nee-opties), voelt het formulier niet aan als een statisch document, maar als een interactieve assistent.

