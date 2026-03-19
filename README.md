>[!NOTE] Dit is een schoolproject!


## Maandag 17/2
Ik ben begonnen met het opzetten van de basisstructuur van het erfbelastingformulier. Ik heb de HTML-structuur uitgewerkt met een duidelijke hiërarchie van form, fieldset en legend elementen, zodat het formulier logisch en semantisch correct is opgebouwd. Hierbij heb ik de verschillende onderdelen gescheiden in secties zoals gegevens van de overledene, partner, nabestaanden, testament en gemachtigde. Ook heb ik alvast validatie-attributen toegevoegd zoals required, pattern en type="email" om basisvalidatie via HTML mogelijk te maken.

Doel: Een duidelijke en semantisch correcte formulierstructuur opzetten die overzichtelijk en toegankelijk is.

Behaald: Volledige HTML-structuur opgezet met logische groepering via fieldsets en legends. Basisvalidatie toegevoegd via HTML-attributen (required, pattern, input types).

## Dinsdag 18/2
Deze dag heb ik me gericht op styling en interactieve logica met CSS. Ik heb een visuele stijl opgezet in NS-huisstijl met CSS-variabelen (:root) voor kleuren, zodat het ontwerp consistent en makkelijk aanpasbaar blijft. Daarnaast heb ik custom radio buttons gemaakt waarbij de standaard radio-input verborgen is en de bijbehorende labels visueel veranderen met :has() wanneer een optie is geselecteerd. Ook heb ik conditionele velden visueel uitgeschakeld met behulp van de :has() selector en pointer-events: none, zodat vervolgvragen automatisch vervagen wanneer een gebruiker “Nee” selecteert. 
<img width="927" height="81" alt="image" src="https://github.com/user-attachments/assets/1bd1b400-8eda-4191-a638-3d07cce331ca" />


Verder heb ik formulierfeedback toegevoegd via input:user-invalid om foutieve invoer direct visueel te markeren.
<img width="400" height="81" alt="image" src="https://github.com/user-attachments/assets/79048158-6dbd-4053-81e3-538f7ed75a06" />


Doel: Het formulier visueel aantrekkelijk maken en interactieve afhankelijkheden tussen vragen creëren zonder JavaScript.

Behaald: NS-styling geïmplementeerd met CSS-variabelen. Interactieve radio-buttons gemaakt met :has(). Conditionele velden dynamisch uitgeschakeld via pure CSS. Visuele validatiefeedback toegevoegd met :user-invalid.

Bronnen:

MDN – CSS :has(): https://developer.mozilla.org/en-US/docs/Web/CSS/:has

MDN – HTML form validation: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation

MDN – :user-invalid pseudo-class: https://developer.mozilla.org/en-US/docs/Web/CSS/:user-invalid

## Woensdag 24/02
Doel: Het formulier responsive maken met grid en dynamisch maken met progressive disclosure en validatiefouten door middel van Javascript.

Eerst bleven onzichtbare velden het verzenden blokkeren omdat ze nog op required stonden. Ook bleven velden rood kleuren als de gebruiker zich bedacht en een vraag weer verborg.
Met js heb ik er voor gezorgd dat zodra een gebruiker "Ja" klikt, worden de vervolgvragen niet alleen zichtbaar, maar worden ze via data-required ook echt verplicht gemaakt.

<img width="473" height="78" alt="image" src="https://github.com/user-attachments/assets/ea530144-fb72-4e5f-8a09-9a6e400721b3" />

Met flex grid en media queries heb ik de lay-out nu mooi responsive voor grote schermen. 
<img width="346" height="652" alt="image" src="https://github.com/user-attachments/assets/85f50af6-0849-4415-a43e-138d26ecacb0" />
<img width="1062" height="613" alt="image" src="https://github.com/user-attachments/assets/0d520216-eb53-4185-91fa-a04c0d08b03d" />



<img width="344" height="179" alt="image" src="https://github.com/user-attachments/assets/1e02f3f9-a164-40ce-9959-e51805a3de3a" />

## Week Reflectie:

**De Fundering, Semantiek en Logica:** Ik begon met de HTML-structuur. In plaats van gewoon wat inputveldjes te dumpen, heb ik het formulier semantisch opgebouwd met <fieldsets> <labels> en <legends>. Het is namelijk van belang om alle informatie over de overledene, de nabestaanden en het testament netjes te groeperen. Zo blijft het formulier niet alleen voor de gebruiker overzichtelijk, maar snappen hulpsoftware (zoals screenreaders) ook precies wat bij wat hoort. Direct bij de start heb ik ook de basisvalidatie ingebouwd met required en patterns, zodat de eerste laag van foutcontrole al in de HTML zelf zit.
<img width="382" height="19" alt="image" src="https://github.com/user-attachments/assets/e151229b-6c17-443e-9621-8f513314a490" />

**De CSS:** De volgende stap was de styling en de validatie. Ik wilde kijken hoe ver ik kon gaan met pure CSS. Voor de look-and-feel moesten we de NS-huisstijl aanhouden, waarbij ik alles heb vastgelegd in CSS-variabelen (:root). Dit maakt het aanpassen van kleuren later simpel.

Ik heb custom radio-buttons gebouwd waarbij ik de :has() selector gebruikte om labels visueel te laten veranderen als ze geselecteerd zijn. Ook zijn er conditionele vragen aangepakt met pure CSS. Door :has() te combineren met pointer-events: none, kon ik velden laten vervagen en uitschakelen zonder een regel JavaScript aan te raken. Voor directe feedback bij foutjes gebruikte ik :user-invalid, zodat velden pas rood kleuren nadat de gebruiker er daadwerkelijk iets mee heeft gedaan.

**De JS-Validatie:**
Toen ik het formulier dynamischer wilde maken met JavaScript, liep ik tegen een klassiek probleem aan: Onzichtbare velden die op required stonden, blokkeerden het verzenden van het formulier, ook al kon de gebruiker ze niet zien. Ook bleven verborgen velden soms rood kleuren. Ik heb dit opgelost met een custom attribute data-required. 
<img width="566" height="23" alt="image" src="https://github.com/user-attachments/assets/6ef36f02-d906-407d-884e-5c9847577048" />

<img width="519" height="136" alt="image" src="https://github.com/user-attachments/assets/4a28a1d6-ba61-49f1-8f47-89d8406878aa" />

Met een klein beetje JavaScript zorg ik er nu voor dat velden pas écht verplicht worden zodra ze zichtbaar worden gemaakt. Klikt iemand op "Nee"? Dan verdwijnt de verplichting ook direct van de vervolgvragen. Als laatste deze week heb ik met Grid en media queries gezorgd dat het formulier op grote schermen meer van de vrije ruimte benut

**Terugblik:**
Het eerste feedback moment kwam ik er achter dat ik blijkbaar een van de ergste code zondes in mijn formulier had, namelijk geen label met alleen een placeholder. Victor was er tijdens de feedback meer dan duidelijk over dat dat absoluut nooit mag. Deze dagen waren ook een goede les in "Progressive Disclosure": alleen laten zien wat nodig is, wanneer het nodig is. De combinaties van CSS (:has) en JavaScript om inputs te valideren zijn bijna eindeloos. 

## Maandag 02/03
Doel: De gebruikerservaring verbeteren met formattering en het oplossen van validatie-issues bij dynamische velden.

Behaald:

Input Formatting (UX): Een script toegevoegd dat voorletters tijdens het typen opschoont (alleen letters), omzet naar hoofdletters en automatisch spaties toevoegt. Dit voorkomt dat gebruikers zelf punten of spaties moeten invoeren en zorgt voor een uniforme dataset. Ook postcodes worden nu automatisch naar hoofdletters omgezet. Hier had ik wel AI voor ingeschakeld aangezien ik regEx format niet helemaal van te voren wist. 
<img width="775" height="299" alt="image" src="https://github.com/user-attachments/assets/e5f2ce8a-427e-4d0e-9a8a-e9bc67245fd9" />


Exclusieve Velden: Logica gebouwd voor de identificatie van de gemachtigde. Zodra er in één van de drie opties (BSN, Beconnummer of Protocolnummer) wordt getypt, worden de andere velden direct disabled en visueel minder zichtbaar gemaakt. 
<img width="702" height="284" alt="image" src="https://github.com/user-attachments/assets/f394f448-edb0-413d-a54d-58fbc3f9f0bd" />

Sectie-validatie: Een systeem ontwikkeld dat per fieldset controleert of alle verplichte velden zijn ingevuld. Bij een volledige sectie verschijnt er een groen vinkje met een popIn animatie.
<img width="867" height="156" alt="image" src="https://github.com/user-attachments/assets/26dba8ee-e9c2-4298-93d9-2795e399b0bc" />

**Technische uitdagingen & Leerpunten:**
 Dynamische Validatie & Radio Buttons: Ik ben tegen een specifiek probleem aangelopen bij de required status van radio buttons in verborgen secties. Hoewel tekstvelden zich goed laten sturen via JS, bleek de browser-validatie bij radio buttons soms boos. Wanneer een fielset wordt verborgen, moet de required status er direct vanaf, anders blokkeert de browser het verzenden met de foutmelding "An invalid form control is not focusable".

Conclusie: Het dynamisch verplicht maken van radio buttons via JavaScript is complexer dan bij tekstvelden, omdat de browser de hele groep (alle radio's met dezelfde naam) als één geheel ziet. Ik heb dit deels opgelost door de required te verwijderen zodra een fieldset onzichtbaar wordt.
<img width="569" height="462" alt="image" src="https://github.com/user-attachments/assets/1ffd454c-281d-45d2-8009-5aa834330303" />

### Bronnen:

MDN - Constraint validation API: https://developer.mozilla.org/en-US/docs/Web/API/Constraint_validation

Gemini AI: prompt: hoe maak je input values automisch hoofdletters met js?

StackOverflow - HTML5 validation 'An invalid form control is not focusable': https://stackoverflow.com/questions/22148080/an-invalid-form-control-with-name-is-not-focusable

JavaScript.info - Forms: event and method submit: https://javascript.info/forms-submit


Technische uitdagingen & Leerpunten:

**Validatie-volgorde:**
required moet eerst verwijderd worden vóór een veld wordt verborgen of disabled om browserfouten te voorkomen.

## Week Reflectie:
In deze week ging ik dieper in op de details: het formulier moest niet alleen werken, maar ook slim aanvoelen. De focus lag op het voorkomen van fouten van de gebruiker en gebruik maken van de ingebouwde validatie van de browser.

**UX en Automatische Opmaak**:
Ik ben begonnen met het toevoegen van een stukje auto correctie tijdens het typen. Gebruikers maken vaak foutjes bij voorletters, door voornaam door elkaar te halen, of postcodes (vergeten spaties, kleine letters, rare tekens). Ik heb een script gebouwd dat voorletters direct opschoont: de input pakt alleen letters, maakt er hoofdletters van en zet er automatisch spaties tussen. Hetzelfde geldt voor postcodes. Dit is niet alleen fijn voor de gebruiker, maar zorgt er ook voor dat de data die uit het formulier komt altijd uniform is.

**Slimme Logica voor Gemachtigden:** Een interessant onderdeel was de identificatie van de gemachtigde. Hier moesten we kiezen tussen drie opties: BSN, Beconnummer of Protocolnummer. Ik heb logica gebouwd die ervoor zorgt dat zodra je in één van de drie velden begint te typen, de andere twee direct worden uitgeschakeld (disabled) en vervagen. Dit voorkomt dat iemand per ongeluk meerdere nummers invult en maakt de keuze voor de gebruiker visueel heel duidelijk.

**De Strijd tegen "Not Focusable":** Het grootste technische leermoment van deze dagen was het "Not Focusable" probleem. Als een veld in een verborgen sectie nog op required staat, weigert de browser het formulier te verzenden. Je krijgt dan een vage foutmelding in de console: "An invalid form control is not focusable". De gebruiker ziet niks, maar de verzendknop doet het gewoon niet. Dit was vooral lastig bij radio-buttons, omdat de browser die als één groep ziet. Ik heb mijn updateVisibility() functie moeten aanpassen om dit op te lossen. 

**Beloning en Overzicht:**
Om het invullen wat leuker te maken, heb ik sectie-validatie toegevoegd. Zodra je een hele fieldset correct hebt ingevuld, verschijnt er een groen vinkje met een subtiele popIn animatie. Dit geeft de gebruiker direct de bevestiging dat alles in die sectie in orde is.
<img width="1018" height="296" alt="image" src="https://github.com/user-attachments/assets/89aa7892-0e41-422f-a69c-7e5c90d1dbfd" />

**Terugblik:**
In het begin wilde ik alle validatie-meldingen zelf schrijven in JavaScript. Ik heb dit plan gewijzigd naar "Browser-native waar mogelijk". Door gebruik te maken van input.checkValidity() en de juiste pattern attributen in HTML, hoef ik minder code te onderhouden en blijft het formulier toegankelijker. 
<img width="873" height="27" alt="image" src="https://github.com/user-attachments/assets/de08939e-4b7d-4834-91f3-53cdf3a67db8" />




## Maandag 09/03
**Doel:** BSN-invoer maken met direct userfeedback.

Ik heb me vandaag gericht op een BSN-checksysteem gebouwd dat direct visuele feedback geeft (via oranje en rode meldingen) als een nummer te kort of te lang is. 

Behaald:

**Real-time BSN check:** Een script gefixt dat tijdens het typen checkt of de BSN te kort of te lang is. Geen verrassingen meer bij het verzenden.
<img width="413" height="257" alt="image" src="https://github.com/user-attachments/assets/ac69534b-da45-473e-8510-ce51f4cfffbd" />

Slimme meldingen: De foutmelding verschijnt nu automatisch via JS onder het juiste veld. Rood als je het veld verlaat (blur), oranje terwijl je typt (focus).
<img width="380" height="139" alt="image" src="https://github.com/user-attachments/assets/48bbf6b6-7c7d-4bc2-a852-5cba294b6fce" />


## Dinsdag 10/03

Vandaag was ik bezig met het maken van de verkrijgers-sectie en het verfijnen van de sectie-validatie. Ik heb een "Add/Remove" systeem gebruikt waarmee gebruikers naar behoefte extra verkrijgers kunnen toevoegen, waarbij de verwijderknop via CSS absolute positioning strak in de bovenhoek is geplaatst.
<img width="599" height="117" alt="image" src="https://github.com/user-attachments/assets/3720c70d-38d6-404d-85ec-6e79c837f51a" />

Daarna heb ik de sectie-validatie uitgebreid: als een gebruiker bij de radio-button kiest voor "Nee" (geen extra verkrijgers), krijgt de hele fieldset direct een groen vinkje als voltooid, terwijl bij "Ja" de validatie pas groen wordt als alle dynamische velden correct zijn ingevuld.
<img width="710" height="159" alt="image" src="https://github.com/user-attachments/assets/27c67f2a-fa52-417c-ae60-928572342290" />



## Week Reflectie:
In afgelopen week heb ik me gericht op het voorkomen van frustratie bij de gebruiker en een extra pattern van de extra verkrijgers. 

**BSN-Check:** 
De BSN-nummer is een foutgevoelig veld. Ik heb een real-time validatie gebouwd dat direct reageert op wat de gebruiker doet. Terwijl je typt, verschijnt er een oranje melding als het nummer nog ongeldig is. Verlaat je het veld en is het nummer nog steeds niet correct? Dan wordt de melding rood. Door deze visuele hiërarchie (oranje voor "bijna daar", rood voor "fout") weet de gebruiker precies waar hij aan toe is zonder dat het formulier direct "boos" wordt.
<img width="647" height="128" alt="image" src="https://github.com/user-attachments/assets/79cc615f-173a-4b79-837f-3dcb8ebcee09" />
<img width="640" height="119" alt="image" src="https://github.com/user-attachments/assets/0405d99c-ca2c-453c-845e-19b7ab8d914d" />

**De "Verkrijgers":**
Het formulier moest aanpasbaar kunnen zijn voor mensen met veel extra erfgenamen, maar zonder javascript enabled zit het standaard optionele verkrijgers op 4, aangezien je niet dynamisch kan toevoegen met alleen CSS.

**Slimme Validatie-vinkjes:**
De sectie-validatie heb ik hierna nog een stapje verder gebracht. De logica kijkt nu naar de context: Kiest de gebruiker voor "Nee" bij de vraag of er extra verkrijgers zijn? Dan is de sectie direct "klaar" en verschijnt het vinkje. Kiest de gebruiker voor "Ja"? Dan is het vinkje slim genoeg om te wachten tot álle dynamisch toegevoegde velden correct zijn ingevuld.
<img width="1017" height="210" alt="image" src="https://github.com/user-attachments/assets/1eae8e73-3aac-4316-b907-0e25818ddd58" />
<img width="1037" height="822" alt="image" src="https://github.com/user-attachments/assets/ae4c5605-8a9d-4cc0-afb4-357cd7f3559e" />


**Terugblik:**
Het grootste leermoment was weer uit de wekelijkse feedback, dat ik was vergeten bij het toevoegen van gebruikers om in de script de id's van de labels ook index variabelen te maken. Gelukkig niet een moeilijke fix, maar wel iets dat ik moet vermijden om in de toekomst over het hoofd te zien. 
<img width="973" height="410" alt="image" src="https://github.com/user-attachments/assets/eeb009eb-3b47-43f8-b60f-a3e1efb682ae" />


## **Maandag 17/03**

**Het doel:** kunnen printen of opslaan als PDF.

De browser-native window.print() is makkelijk aan te roepen via een button-click, maar het resultaat zag er in de print-preview niet uit. De navigatiebalk, de felgekleurde knoppen en de achtergrondkleuren verpestten het overzicht. Ik moest hier een @media print voor opzetten.
<img width="1350" height="927" alt="image" src="https://github.com/user-attachments/assets/693257c5-9d5b-43d7-baac-52ad248ee495" />


Teksten allemaal zwart wit gemaakt, input velden meer als schriftelijke invul velden laten lijken, Knoppen zoals de "Verwijder verkrijger"-buttons, de "Toevoeg"-knop en de gehele header heb ik met display: none verborgen. Ook de groene vinkjes (.is-complete::after) heb ik weggehaald.
<img width="1338" height="910" alt="image" src="https://github.com/user-attachments/assets/74df0808-0820-4712-a704-bd2ec06c64f6" />


Een specifiek probleem was de layout van de secties. Grid zorgden ervoor dat elementen midden in een regel afbraken bij een paginaovergang. Ik voegde break-inside: avoid toe aan de containers om te voorkomen dat informatie over twee pagina's werd gesplitst, maar dat zorgde voor heel veel witruimte, dus daar was ik ook niet echt tevreden mee. Ik wilde een lay-out net als bij de officieele belastingdienst waarbij alle vragen aan de linkerkant staan en alle antwoorden aan de rechterkant.
<img width="1070" height="1039" alt="image" src="https://github.com/user-attachments/assets/83fd9dc7-8785-487d-92d4-24e22a5f65bf" />
maar zelf na wat pogingen en veel stoeien wilde het nog steeds niet lukken. 
<img width="608" height="448" alt="image" src="https://github.com/user-attachments/assets/8c7ea214-f5ff-41e7-be65-794c8a94821b" />

Ten slotte wilde ik alle logica voor verborgen velden overschrijven. In de printversie moet alles simpelweg zichtbaar zijn. Met visibility: visible !important en opacity: 1 !important probeerde ik ervoor te zorgen dat ook de voorwaardelijke secties (zoals het adres in het buitenland of de lijst met verkrijgers) op papier verschijnen, maar ze zijn helaas nog steeds greyed out.
<img width="1347" height="918" alt="image" src="https://github.com/user-attachments/assets/df778514-e059-4060-9ca3-e513ca5bc8e4" />


## Week Reflectie:
Afgelopen week heb ik me volledig gericht op het transformeren van mijn interactieve formulier naar een statisch, printbaar document. Het doel was een overzicht dat qua strakheid en indeling lijkt op de officiële formulieren van de Belastingdienst. Het is debateerbaar om te zeggen dat het gelukt is. Mijn eindresultaat voor de printversie is een gestript document waarin alle web-elementen, zoals de navigatiebalk, headers en interactieve knoppen (#addVerkrijgerBtn, .remove-verkrijger), volledig zijn verborgen met display: none !important.

**Wat ging soepel en wat was uitdagend?**
Soepel: Het opschonen van de pagina. Het was relatief eenvoudig om met @media print alle overbodige UI-elementen en de "is-complete" vinkjes te verbergen. 

Uitdagend: De lay-out van de vragen en antwoorden. Ik wilde dat alles op één lijn bleef, maar bij langere vragen of specifieke input-velden versprong de grid. Het vinden van de juiste verhouding (45/55) was een flinke puzzel.

Trots op: De transformatie van de input-velden. Door de randen weg te halen en alleen een border-bottom over te houden, kreeg het formulier direct die "officieele" papieren uitstraling.

Experimenten die 'faalden'
Mijn grootste frustratie zat in het voorkomen van gaten in de tekst. Ik experimenteerde met break-inside: avoid om te voorkomen dat een vraag en antwoord over twee pagina's werden gesplitst. Hoewel dit technisch werkte, ontstonden er enorme witte vlakken onderaan de pagina's omdat de browser hele blokken naar de volgende pagina doorschoof. Dit zag er niet professioneel uit.

Daarnaast probeerde ik alle voorwaardelijke velden (zoals buitenlandse adressen) geforceerd zichtbaar te maken voor de print:

CSS
.conditional-fields {
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
}
Ondanks deze poging bleven sommige secties "greyed out" of zelfs onzichtbaar in de preview. Het lijkt erop dat de disabled status uit de JavaScript de CSS-styling in de weg zit tijdens het printen.


Wat ik verder wil verkennen
In de toekomst wil ik dieper duiken in de interactie tussen mijn JavaScript en de print-status. Ik wil onderzoeken of ik een speciale "print-modus" in JS kan triggeren die alle velden tijdelijk enabled maakt voordat window.print() wordt aangeroepen, zodat die "greyed out" look definitief verdwijnt. Ook wil ik de paginabreuken slimmer aansturen zodat de witruimte tot een minimum beperkt blijft.
