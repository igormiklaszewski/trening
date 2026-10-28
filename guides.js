// Animacje (ludzik 2D: pozycja A <-> B) i instrukcje do każdego ćwiczenia.
// Punkty: h głowa, s bark, p biodro, e/w łokieć/dłoń, k/f kolano/kostka (druga strona: e2 w2 k2 f2), toe palce stopy.
// Układ współrzędnych 200x140, podłoga y=125.
const ST = { h:[100,21], s:[100,33], p:[100,65], k:[100,95], f:[100,125] };
const FRONT = { h:[100,21], s:[100,33], p:[100,65], k:[93,95], f:[92,125], k2:[107,95], f2:[108,125], toe:[92,125], toe2:[108,125] };
const BENCH = '<rect x="40" y="95" width="110" height="6"/><rect x="48" y="101" width="4" height="24"/><rect x="138" y="101" width="4" height="24"/>';

const GUIDE = {
a_sq: {
  cap: 'Przysiad: biodra do tyłu i w dół, plecy proste, kolana na zewnątrz.',
  anim: { wt:'plate',
    A:{ ...ST, e:[96,48], w:[106,36] },
    B:{ h:[114,64], s:[108,74], p:[92,100], k:[122,100], f:[100,125], e:[104,86], w:[114,72] } },
  steps:[
    'Sztanga leży na mięśniach grzbietu pod karkiem (nie na samym karku). Chwyt trochę szerszy niż barki, łokcie lekko w dół.',
    'Stopy na szerokość barków lub odrobinę szerzej, palce lekko na zewnątrz.',
    'Weź wdech i napnij brzuch, jakbyś miał dostać w żołądek.',
    'Zejdź w dół: biodra do tyłu, kolana na zewnątrz, aż uda będą co najmniej równoległe do podłogi.',
    'Wstań, mocno dociskając całą stopę do podłogi. Wydech dopiero na górze.'],
  cues:['Kolana idą w kierunku palców stóp','Klatka dumnie do przodu, plecy proste','Ciężar na całej stopie, pięty przy podłodze'],
  mistakes:['Kolana zapadają się do środka','Zaokrąglone plecy na dole','Za płytki przysiad z za dużym ciężarem'],
  tip:'Wersja leg press: stopy na środku platformy na szerokość barków, dolne plecy przyklejone do oparcia, kolan nie blokuj do końca. Przysiad rób w stojaku z ustawionymi bezpiecznikami. Ciężar dobierz tak, by po serii zostało 1–2 powtórzenia zapasu.'
},
a_bul: {
  cap: 'Tylna noga na ławce, schodzisz pionowo w dół na nodze przedniej.',
  anim: { wt:'db', eq:'<rect x="38" y="100" width="30" height="25"/>',
    A:{ ...ST, k:[110,95], f:[118,125], e:[100,52], w:[100,70], k2:[84,92], f2:[62,98], toe2:[52,98] },
    B:{ h:[112,50], s:[108,62], p:[104,92], k:[130,96], f:[118,125], e:[108,76], w:[108,92], k2:[82,112], f2:[62,98], toe2:[52,98] } },
  steps:[
    'Stań tyłem do ławki. Jedną stopę połóż na ławce (grzbietem stopy lub na palcach), drugą ustaw ok. 60–70 cm przed ławką.',
    'Hantle w dłoniach, ręce wzdłuż ciała, brzuch napięty.',
    'Opuszczaj się pionowo w dół, aż przednie udo będzie w okolicy poziomu. Tylne kolano zmierza ku podłodze.',
    'Wstań, dociskając całą przednią stopę. Zrób wszystkie powtórzenia na jedną nogę, potem zmień.'],
  cues:['Ciężar głównie na nodze przedniej','Przednie kolano w osi palców','Tułów stabilny, bez chwiania'],
  mistakes:['Przednia stopa za blisko ławki, kolano ucieka daleko do przodu','Odpychanie się mocno nogą z tyłu','Chwianie na boki'],
  tip:'To ćwiczenie jest trudne dla równowagi. Zacznij z lekkimi hantlami albo bez nich i przytrzymaj się czegoś jedną ręką. Seria 6–10 powtórzeń na KAŻDĄ nogę.'
},
a_rdl: {
  cap: 'Ruch jak zawias w biodrach: pupa do tyłu, plecy proste, sztanga po nogach.',
  anim: { wt:'plate',
    A:{ ...ST, k:[102,95], e:[102,52], w:[104,72] },
    B:{ h:[126,72], s:[112,76], p:[80,70], k:[92,98], f:[100,125], e:[114,92], w:[112,106] } },
  steps:[
    'Stań ze sztangą lub hantlami w dłoniach, stopy na szerokość bioder, kolana lekko ugięte. Takie zostają przez cały ruch.',
    'Wypchnij biodra do tyłu, jakbyś chciał zamknąć drzwi pupą. Sztanga zsuwa się po udach i goleniach.',
    'Zejdź tak nisko, aż poczujesz mocne rozciąganie z tyłu ud (zwykle do połowy goleni). Plecy cały czas proste.',
    'Wstań, wypychając biodra do przodu i zaciskając pośladki.'],
  cues:['Zawias w biodrach, nie przysiad','Ciężar blisko nóg','Łopatki ściągnięte, kark w linii pleców'],
  mistakes:['Zaokrąglone plecy','Za mocno zginane kolana (robi się przysiad)','Sztanga odjeżdża od ciała'],
  tip:'Schodź tylko tak nisko, jak utrzymasz proste plecy. Pracę czujesz z tyłu ud i w pośladkach. Jeśli w dolnych plecach, to ciężar jest za duży albo plecy się zaokrąglają.'
},
a_bp: {
  cap: 'Łopatki ściągnięte, łokcie pod skosem, hantle po łuku nad klatkę.',
  anim: { wt:'db', eq:BENCH,
    A:{ h:[48,86], s:[62,90], p:[95,90], k:[122,98], f:[122,125], e:[62,63], w:[62,36] },
    B:{ h:[48,86], s:[62,90], p:[95,90], k:[122,98], f:[122,125], e:[84,86], w:[64,74] } },
  steps:[
    'Połóż się na ławce, stopy mocno na podłodze. Ściągnij łopatki i opuść je ku pupie, lekki łuk w dolnych plecach (pupa zostaje na ławce).',
    'Hantle nad klatką, nadgarstki prosto, nad łokciami.',
    'Opuszczaj powoli (2–3 s), łokcie pod kątem 45–60° do tułowia, do poziomu klatki.',
    'Wyciśnij do góry po lekkim łuku, bez uderzania hantlami o siebie. Wydech przy wyciskaniu.'],
  cues:['Łopatki cały czas ściągnięte','Przedramiona pionowo','Kontrolowane opuszczanie'],
  mistakes:['Łokcie szeroko na boki (obciąża barki)','Odbijanie hantli od klatki','Odrywanie pupy od ławki'],
  tip:'Przy ciężkich hantlach usiądź z nimi na udach i ustaw je kolanami, kładąc się. Gdy ciężar ledwo idzie, poproś kogoś o asekurację.'
},
a_pu: {
  cap: 'Zawis, łopatki w dół, łokcie do kieszeni, broda nad drążek.',
  anim: { eq:'<rect x="70" y="16" width="70" height="4"/>',
    A:{ h:[100,38], s:[100,48], p:[100,80], k:[98,103], f:[92,122], e:[104,34], w:[104,18] },
    B:{ h:[100,13], s:[98,28], p:[98,60], k:[94,86], f:[86,108], e:[88,38], w:[104,18] } },
  steps:[
    'Chwyt nachwytem (dłonie od siebie), trochę szerzej niż barki. Zawis na wyprostowanych ramionach, łopatki lekko w dół (nie w uszach).',
    'Zacznij od ściągnięcia łopatek w dół, potem ciągnij łokcie w dół i do boków.',
    'Broda nad drążkiem. Opuść się powoli (2–3 s) do pełnego zawisu.',
    'Ściąganie drążka (maszyna): uda pod wałkami, ciągnij drążek do górnej części klatki, tułów odchylony tylko o 10–15°, łokcie w dół.'],
  cues:['Myśl: łokcie do kieszeni','Klatka do drążka','Kontrola w dół'],
  mistakes:['Kołysanie nogami','Połowiczne powtórzenia, bez pełnego wyprostu','Ściąganie drążka za kark'],
  tip:'Nie robisz jeszcze 6 powtórzeń? Użyj gumy, maszyny z odciążeniem albo ściągania drążka. Gdy zrobisz 10 czystych, dodaj obciążenie. Powolne opuszczanie też buduje siłę.'
},
a_cur: {
  cap: 'Łokcie nieruchomo przy tułowiu, ugniasz tylko przedramiona.',
  anim: { wt:'db',
    A:{ ...ST, e:[102,56], w:[102,82] },
    B:{ ...ST, e:[102,56], w:[114,36] } },
  steps:[
    'Stań prosto, hantle w dłoniach, dłonie do przodu, łokcie przy tułowiu.',
    'Zegnij ramiona, unosząc hantle do barków, bez bujania.',
    'Na górze krótko zaciśnij mięsień, opuszczaj powoli (2–3 s) do pełnego wyprostu.',
    'To jest SUPERSERIA: zaraz po tym zrób prostowanie ramion na wyciągu, dopiero potem odpocznij.'],
  cues:['Łokcie nieruchomo','Bez bujania tułowiem','Pełny zakres ruchu'],
  mistakes:['Bujanie tułowiem','Łokcie uciekają do przodu','Zbyt ciężkie hantle'],
  tip:'Jeśli musisz się bujać, zmniejsz ciężar. Ręce są małą partią, więc spokojne tempo daje więcej niż ciężar.'
},
a_tri: {
  cap: 'Pracują tylko przedramiona, łokcie przyklejone do boków.',
  anim: { cable:[100,8], eq:'<circle cx="100" cy="8" r="4"/>',
    A:{ ...ST, e:[104,56], w:[116,46] },
    B:{ ...ST, e:[104,56], w:[106,82] } },
  steps:[
    'Stań przed wyciągiem górnym, chwyć sznur lub drążek. Łokcie przyciśnięte do boków, tułów lekko pochylony.',
    'Prostuj ramiona w dół do pełnego wyprostu i zaciśnij tricepsy na dole.',
    'Wracaj powoli, aż przedramiona będą pod kątem ok. 90°, bez wyższego unoszenia. Łokcie nie ruszają się z miejsca.',
    'Druga część superserii z uginaniem ramion: zrób serię bez długiej przerwy.'],
  cues:['Rusza się tylko przedramię','Łokcie przy tułowiu','Kontrola w górę'],
  mistakes:['Opieranie całego ciężaru ciała na uchwycie','Łokcie uciekają do przodu','Za duży ciężar'],
  tip:'Jeśli ruszają się barki lub tułów, zdejmij kilka kilogramów.'
},
a_calf: {
  cap: 'Pełny zakres: wysoko na palec, powolne opuszczanie poniżej stopnia.',
  anim:{ eq:'',
    A:{ h:[100,21], s:[100,33], p:[100,66], k:[108,95], f:[100,122], toe:[112,123], e:[100,52], w:[100,70], k2:[96,92], f2:[80,104], toe2:[80,104] },
    B:{ h:[100,9], s:[100,21], p:[100,54], k:[108,83], f:[100,110], toe:[112,123], e:[100,40], w:[100,58], k2:[96,80], f2:[80,92], toe2:[80,92] } },
  steps:[
    'Stań na jednej nodze na krawędzi stopnia (druga noga w powietrzu), ręką złap się czegoś dla równowagi.',
    'Kolano lekko ugięte (ok. 15–30°) i utrzymuj ten kąt. To mocniej angażuje mięsień płaszczkowaty (soleus). Wersja na maszynie siedząc: kolana zgięte ok. 90°, ta sama zasada.',
    'Wznieś się maksymalnie wysoko na palec, zatrzymaj 1 s.',
    'Opuszczaj powoli (2–3 s) do pełnego rozciągnięcia, pięta poniżej stopnia. Wszystkie powtórzenia na jedną nogę, potem zmień.'],
  cues:['Pełny zakres i pauza na górze','Wolne opuszczanie','Kolano ma się nie prostować'],
  mistakes:['Sprężynowanie (odbijanie się)','Połowiczny ruch','Prostowanie kolana w trakcie'],
  tip:'Ważne dla ścięgna Achillesa i dla biegacza. Gdy 15 powtórzeń staje się łatwe, weź hantel w wolną rękę.'
},
a_db: {
  cap: 'Plecy przy podłodze, naprzemiennie ręka i przeciwna noga.',
  anim:{ eq:'<rect x="20" y="118" width="150" height="5"/>',
    A:{ h:[44,110], s:[58,112], p:[100,112], k:[100,84], f:[128,84], e:[58,86], w:[58,60], e2:[58,86], w2:[58,60], k2:[100,84], f2:[128,84] },
    B:{ h:[44,110], s:[58,112], p:[100,112], k:[100,84], f:[128,84], e:[34,106], w:[10,108], e2:[58,86], w2:[58,60], k2:[130,108], f2:[158,110] } },
  steps:[
    'Leż na plecach, ramiona wyprostowane pionowo w górę, biodra i kolana zgięte do 90° (nogi jak stolik).',
    'Dolne plecy "przyklejone" do podłogi. Wydychając powietrze, wyprostuj jednocześnie prawą rękę za głowę i lewą nogę nad podłogą.',
    'Wróć do pozycji wyjściowej i zrób drugą stronę. Wolno i kontrolowanie.'],
  cues:['Dolne plecy cały czas przy podłodze','Wydech przy wyprostowaniu','Wolne tempo'],
  mistakes:['Wyginanie pleców w łuk','Zbyt szybkie tempo','Zbyt duży zakres kosztem pleców'],
  tip:'Włóż rękę pod dolne plecy: ma być lekko przyciśnięta cały czas. Jeśli się unosi, skróć ruch zamiast odrywać plecy. Seria to 8 powtórzeń na stronę.'
},
b_sd: {
  cap: 'Wolno w dół na jednej nodze, kolano nad środkiem stopy.',
  anim:{ eq:'<rect x="58" y="105" width="52" height="20"/>',
    A:{ h:[92,8], s:[92,19], p:[92,49], k:[92,77], f:[90,105], e:[100,32], w:[114,30], k2:[102,78], f2:[108,102] },
    B:{ h:[97,30], s:[96,41], p:[90,70], k:[114,84], f:[90,105], e:[106,54], w:[118,52], k2:[112,93], f2:[116,120] } },
  steps:[
    'Stań na krawędzi stopnia (15–20 cm) na jednej nodze, druga wisi w powietrzu.',
    'Zginaj kolano nogi stojącej, biodra jadą do tyłu i w dół, aż pięta nogi wolnej lekko dotknie podłogi (bez odpychania się).',
    'Wróć do góry, mocno dociskając stopę stojącą. Opuszczanie wolne (ok. 3 s).'],
  cues:['Kolano w linii palców, nie zapada się do środka','Miednica równo, bez opadania na bok','Wolne opuszczanie'],
  mistakes:['Kolano wpada do środka','Miednica opada na bok','Odpychanie się nogą wolną'],
  tip:'Świetne dla stabilności kolana biegacza. Jeśli kolano boli, użyj niższego stopnia. 8–10 powtórzeń na KAŻDĄ nogę.'
},
b_iso: {
  hold:true,
  cap: 'Trzymasz pozycję wykroku. Ruch jest minimalny, praca jest w utrzymaniu.',
  anim:{ eq:'<rect x="112" y="118" width="14" height="7"/>',
    A:{ h:[110,48], s:[110,60], p:[108,88], k:[134,92], f:[118,116], toe:[134,124], k2:[88,104], f2:[64,116], toe2:[76,124] },
    B:{ h:[110,54], s:[110,66], p:[108,94], k:[134,96], f:[118,116], toe:[134,124], k2:[88,110], f2:[64,116], toe2:[76,124] } },
  steps:[
    'Pozycja wykroku: przednią stopę ustaw piętą na podwyższeniu (np. talerz 2,5–5 kg), tylna noga daleko z tyłu na palcach.',
    'Opuść się do kąta ok. 90° w obu kolanach i zatrzymaj tę pozycję.',
    'Trzymaj 30–45 s i oddychaj spokojnie. Przednie kolano nad stopą, tułów prosto.',
    'Zmień nogę.'],
  cues:['Ciężar głównie na przedniej nodze','Kolano stabilnie, nie ucieka na boki','Spokojny oddech'],
  mistakes:['Kolano wpada do środka','Podskakiwanie i wstawanie w trakcie','Wstrzymywanie oddechu'],
  tip:'Drżenie mięśni jest normalne. Jeśli 30 s to za dużo, zacznij od 20 s. Izometria wzmacnia czworogłowe i ścięgna wokół kolana, dobre pod bieganie.'
},
b_abd: {
  cap: 'Rozchylasz nogi płynnie, pauza na zewnątrz, plecy oparte.',
  anim:{ wt:'', eq:'<rect x="82" y="82" width="36" height="5"/>',
    A:{ ...FRONT, h:[100,26], s:[100,38], p:[100,78], k:[92,100], f:[90,124], k2:[108,100], f2:[110,124], toe:[90,124], toe2:[110,124], e:[88,58], w:[86,76], e2:[112,58], w2:[114,76] },
    B:{ ...FRONT, h:[100,26], s:[100,38], p:[100,78], k:[74,98], f:[70,124], k2:[126,98], f2:[130,124], toe:[70,124], toe2:[130,124], e:[88,58], w:[86,76], e2:[112,58], w2:[114,76] } },
  steps:[
    'Usiądź prosto, plecy oparte, poduszki na zewnętrznej stronie kolan.',
    'Rozchylaj nogi na boki do zakresu, w którym czujesz pracę w bocznej części pośladków. Zatrzymaj 1 s.',
    'Wracaj powoli. Nie odrywaj pleców od oparcia.'],
  cues:['Ruch płynny, pauza na zewnątrz','Plecy oparte','Powolny powrót'],
  mistakes:['Szarpanie ciężarem','Odchylanie tułowia dla rozpędu'],
  tip:'Wzmacnia pośladek średni, który stabilizuje biodro i kolano przy bieganiu. Lekkie pochylenie tułowia do przodu zwiększa jego udział.'
},
b_tib: {
  cap: 'Plecy na ścianie, pięty na podłodze, unosisz palce do góry.',
  anim:{ eq:'<rect x="62" y="8" width="5" height="117"/>',
    A:{ h:[74,20], s:[74,32], p:[78,64], k:[92,94], f:[104,121], toe:[116,123], e:[76,48], w:[78,66] },
    B:{ h:[74,20], s:[74,32], p:[78,64], k:[92,94], f:[104,121], toe:[114,106], e:[76,48], w:[78,66] } },
  steps:[
    'Oprzyj plecy o ścianę, stopy ok. 30–40 cm od ściany, nogi proste.',
    'Unieś palce stóp jak najwyżej, pięty zostają na podłodze. Zatrzymaj 1 s.',
    'Opuszczaj powoli. Wersja z obciążeniem: dysk lub hantel na palcach stóp albo specjalna maszyna.'],
  cues:['Pięty cały czas na podłodze','Pełny zakres ruchu','Wolne opuszczanie'],
  mistakes:['Zginanie kolan','Zbyt szybki ruch','Za mały zakres'],
  tip:'Wzmacnia mięsień piszczelowy przedni i chroni przed bólem goleni u biegaczy. Pieczenie przy 15–20 powtórzeniach jest normalne.'
},
b_inc: {
  cap: 'Ławka skośna ok. 30°, hantle nad górną częścią klatki.',
  anim:{ wt:'db',
    eq:'<line x1="92" y1="106" x2="50" y2="68" stroke="#4a5160" stroke-width="7" stroke-linecap="round"/><rect x="84" y="106" width="34" height="5"/><rect x="96" y="111" width="4" height="14"/>',
    A:{ h:[57,66], s:[66,78], p:[90,102], k:[118,98], f:[114,125], e:[68,54], w:[70,28] },
    B:{ h:[57,66], s:[66,78], p:[90,102], k:[118,98], f:[114,125], e:[88,80], w:[72,66] } },
  steps:[
    'Ustaw ławkę na ok. 30° (maksymalnie 45°). Połóż się, stopy na podłodze, łopatki ściągnięte.',
    'Hantle nad górną częścią klatki, nadgarstki prosto.',
    'Opuszczaj powoli do poziomu klatki, łokcie pod kątem ok. 45–60° do tułowia.',
    'Wyciśnij w górę po lekkim łuku. Wydech przy wyciskaniu.'],
  cues:['Łopatki ściągnięte','Przedramiona pionowo','Kontrolowane opuszczanie'],
  mistakes:['Ławka zbyt stroma (to już barki)','Odbijanie hantli od klatki','Łokcie szeroko na boki'],
  tip:'Zwykle ciężar jest mniejszy niż na płaskiej ławce. To normalne, nie ścigaj się z poprzednim ćwiczeniem.'
},
b_row: {
  cap: 'Łokieć do biodra, łopatka ściągnięta, plecy równo.',
  anim:{ wt:'db', eq:'<rect x="30" y="94" width="34" height="6"/><rect x="34" y="100" width="4" height="25"/><rect x="56" y="100" width="4" height="25"/>',
    A:{ h:[58,60], s:[72,64], p:[110,70], k:[118,98], f:[120,125], e:[76,84], w:[76,102], e2:[62,80], w2:[54,94], k2:[100,100], f2:[96,125] },
    B:{ h:[58,60], s:[72,64], p:[110,70], k:[118,98], f:[120,125], e:[96,62], w:[84,78], e2:[62,80], w2:[54,94], k2:[100,100], f2:[96,125] } },
  steps:[
    'Jedną rękę oprzyj na ławce, plecy proste i prawie równolegle do podłogi. Druga ręka z hantlem zwisa pionowo pod barkiem.',
    'Ciągnij hantel w stronę biodra (nie w górę do pachy), łokieć blisko tułowia. Ściągnij łopatkę. Zatrzymaj 1 s.',
    'Opuść wolno do pełnego rozciągnięcia. Zrób wszystkie powtórzenia na jedną stronę, potem na drugą.',
    'Wersja na wyciągu: siedząc, plecy proste, ciągnij uchwyt do brzucha.'],
  cues:['Łokieć do biodra','Łopatka pracuje','Plecy równo'],
  mistakes:['Skręcanie tułowia','Szarpanie hantla','Ciągnięcie barkiem do ucha'],
  tip:'Ciężar dobierz tak, by tułów się nie skręcał. Pracę czujesz w środku pleców i pod łopatką, nie w ramieniu.'
},
b_fp: {
  cap: 'Ciągniesz sznur do twarzy, łokcie wysoko, łopatki do siebie.',
  anim:{ cable:[160,30], eq:'<circle cx="160" cy="30" r="4"/>',
    A:{ ...ST, e:[120,34], w:[140,31] },
    B:{ ...ST, e:[86,38], w:[108,27] } },
  steps:[
    'Ustaw wyciąg na wysokości twarzy z uchwytem linowym. Stań w lekkim rozkroku, ręce wyprostowane.',
    'Ciągnij sznur do twarzy i rozciągaj go na boki. Łokcie wysoko, na wysokości barków, łopatki zbliż do siebie.',
    'Zatrzymaj 1 s i wróć powoli. To pierwsza część superserii z unoszeniem hantli bokiem.'],
  cues:['Łokcie wysoko','Ściągaj łopatki','Ciągnij do oczu lub uszu'],
  mistakes:['Za duży ciężar i odchylanie tułowia','Łokcie opadają','Szarpanie'],
  tip:'To ćwiczenie dla zdrowia barków. Mało ciężaru, dużo techniki. Pomaga też w postawie po pracy przy komputerze i jeździe na rowerze.'
},
b_lat: {
  cap: 'Hantle do wysokości barków, łokcie prowadzą ruch, barki nisko.',
  anim:{ wt:'db', wt2:true,
    A:{ ...FRONT, e:[91,52], w:[90,72], e2:[109,52], w2:[110,72] },
    B:{ ...FRONT, e:[80,36], w:[64,34], e2:[120,36], w2:[136,34] } },
  steps:[
    'Stań prosto z lekkimi hantlami, kolana lekko ugięte.',
    'Unoś ręce bokiem do wysokości barków, łokcie lekko ugięte i minimalnie wyżej niż nadgarstki (jak wylewanie dzbanka).',
    'Opuszczaj powoli. Nie unoś barków do uszu.'],
  cues:['Do wysokości barków i nie wyżej','Łokcie prowadzą','Barki daleko od uszu'],
  mistakes:['Bujanie ciałem','Unoszenie barków','Za ciężkie hantle'],
  tip:'Tu naprawdę działa lekki ciężar. Zacznij od 4–6 kg na rękę i skup się na kontroli.'
},
b_pal: {
  cap: 'Wyciskasz uchwyt przed siebie i nie pozwalasz, by wyciąg cię obrócił.',
  anim:{ cable:[14,46],
    A:{ ...FRONT, e:[90,48], w:[104,46], e2:[92,50], w2:[104,46] },
    B:{ ...FRONT, e:[118,42], w:[140,42], e2:[116,44], w2:[140,42] } },
  steps:[
    'Wyciąg na wysokości klatki. Stań bokiem do niego, stopy na szerokość bioder, uchwyt w obu dłoniach przy klatce.',
    'Wyprostuj ramiona przed sobą, powoli. Nie pozwól, by wyciąg obrócił tułów: biodra i barki zostają prosto.',
    'Zatrzymaj 1–2 s i wróć do klatki. 10 powtórzeń na jedną stronę, potem obróć się i zrób drugą.'],
  cues:['Biodra i barki prosto','Napięty brzuch i pośladki','Spokojny oddech'],
  mistakes:['Skręcanie tułowia','Odchylanie się','Za duży ciężar'],
  tip:'To ćwiczenie antyrotacyjne: rdzeń ma NIE dać się obrócić. Bardzo przydatne w bieganiu i pływaniu.'
},
b_kn: {
  cap: 'Podwijasz miednicę i unosisz kolana z brzucha, bez kołysania.',
  anim:{ eq:'<rect x="70" y="6" width="70" height="4"/>',
    A:{ h:[100,28], s:[100,38], p:[100,70], k:[100,96], f:[100,120], e:[104,24], w:[104,8], toe:[110,120] },
    B:{ h:[100,28], s:[100,38], p:[98,70], k:[124,66], f:[114,92], e:[104,24], w:[104,8], toe:[124,92] } },
  steps:[
    'Zawis na drążku nachwytem, ramiona aktywne (łopatki lekko ściągnięte).',
    'Napnij brzuch i unieś kolana do wysokości bioder lub wyżej, podwijając miednicę (pępek do klatki).',
    'Opuść wolno, bez kołysania.'],
  cues:['Ruch z brzucha, nie z nóg','Podwiń miednicę','Kontroluj opuszczanie'],
  mistakes:['Kołysanie','Same nogi bez podwinięcia miednicy','Zwis na samych ramionach bez napięcia'],
  tip:'Chwyt słaby? Użyj pasków lub maszyny z podparciem łokci. Za trudne? Zaczynaj od kolan do 90° i nie wyżej.'
}
};

// ===== silnik animacji =====
const GM_KEYS = ['h','s','p','e','w','k','f','e2','w2','k2','f2','toe','toe2'];
let gmRaf = null;
function gmLerp(A, B, x){
  const o = {};
  for(const k of GM_KEYS) if(A[k] && B[k]) o[k] = [A[k][0]+(B[k][0]-A[k][0])*x, A[k][1]+(B[k][1]-A[k][1])*x];
  return o;
}
function gmScene(a, x){
  const q = gmLerp(a.A, a.B, x);
  const ln = (p, r, c) => p && r ? `<line x1="${p[0].toFixed(1)}" y1="${p[1].toFixed(1)}" x2="${r[0].toFixed(1)}" y2="${r[1].toFixed(1)}" class="${c}"/>` : '';
  const toe = q.toe || [q.f[0]+11, q.f[1]];
  const toe2 = q.toe2 || (q.f2 && [q.f2[0]+11, q.f2[1]]);
  let o = '<line x1="10" y1="125" x2="190" y2="125" class="gfl"/>';
  if(a.eq) o += `<g class="geq">${a.eq}</g>`;
  o += ln(q.s,q.e2,'gfar')+ln(q.e2,q.w2,'gfar')+ln(q.p,q.k2,'gfar')+ln(q.k2,q.f2,'gfar')+ln(q.f2,toe2,'gfar');
  o += ln(q.s,q.p,'gnr')+ln(q.h,q.s,'gnr');
  o += ln(q.p,q.k,'gnr')+ln(q.k,q.f,'gnr')+ln(q.f,toe,'gnr')+ln(q.s,q.e,'gnr')+ln(q.e,q.w,'gnr');
  o += `<circle cx="${q.h[0].toFixed(1)}" cy="${q.h[1].toFixed(1)}" r="8" class="ghd"/>`;
  const wt = pt => !pt ? '' : a.wt === 'plate'
    ? `<circle cx="${pt[0].toFixed(1)}" cy="${pt[1].toFixed(1)}" r="9" class="gwt"/>`
    : `<rect x="${(pt[0]-8).toFixed(1)}" y="${(pt[1]-3).toFixed(1)}" width="16" height="6" rx="2" class="gwt"/>`;
  if(a.wt){ o += wt(q.w); if(a.wt2) o += wt(q.w2); }
  if(a.cable && q.w) o += ln(a.cable, q.w, 'gcb');
  return o;
}
function gmStart(a, hold){
  const svg = document.getElementById('fig'), t0 = performance.now(), period = hold ? 3600 : 3800;
  const frame = t => {
    const ph = ((t - t0) % period) / period;
    let x = ph < .5 ? ph*2 : (1-ph)*2;
    x = Math.min(1, Math.max(0, (x - .12) / .76));
    x = x*x*(3-2*x);
    svg.innerHTML = gmScene(a, x);
    gmRaf = requestAnimationFrame(frame);
  };
  gmRaf = requestAnimationFrame(frame);
}
function gmStop(){ if(gmRaf) cancelAnimationFrame(gmRaf); gmRaf = null; }
