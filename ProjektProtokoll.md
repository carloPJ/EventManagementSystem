# Eventmanagementsystem
Projekt in Data and Web Engineering </br>

Alexanda Ewering </br>
Clara Gauer </br>
Benjamin Schmidt

## Treffen und Besprechungen

***9.05.2023 Treffen im ITZ-Gebäude***
### Was wurde besprochen?
Allgemeine Fragen 

- Design der Web-Seite

- verschiedene Vorschläge bezüglich Features

- die erste interne Deadline ausgemacht

- Aufgaben zwischen Mitgliedern der Gruppe verteilt

#### Aufgaben bis zum nächsten Treffen zu erledigen:
Die Kernstruktur der Webseite und Kalender erstellen

Die Basic-Funktionen

***20.05.2023 Zoom-Meeting***

#### Was wurde besprochen?
- Die Kernstruktur der Seite und das Design

- Jeder Mitglied hat über die Zwischenarbeit berichtet

- Die neuen Aufgaben wurden verteilet

Was bis zum nächsten Treffen gemacht sein sollte:
- Dokumentation bearbeiten
- Icons finden
- Bewertungsfunktion schreiben
- Design bearbeiten
- Powerpoint Präsentation anfangen

***28.05.2023 Zoom Meeting***

#### Was wurde besprochen?
- Jeder Mitglied hat über die Zwischenarbeit berichtet
- wie verschiedene Veranstaltungsarten repräsentiert werden: <br/>
Die Veranstaltungen werden in unterschiedliche Kategorien aufgeteilt: zum Beispiel "Sport", "Musik" usw.
- Für jede Kategorieart wird eine extra Seite angelegt
- Kommentar/Feedback-Funktion soll eingebaut werden

***Was bis dahin geschafft wurde:***

- Bewertungsfeater eingebaut
- Design verändert
- Dokumentation erweitert

***Ziele bis zum nächsten Treffen***

Neue Aufgaben verteilt:


Clara - Java Skript <br/>
Benjamin - CSS und HTML <br/>
Alexandra - Dokumentation und Code Kommentare. Kommentar/Feedback-Funktion

Nächstes Meeting am 05.05.2023

***05.05.2023 Zoom Meeting***

PopUp-Funktion durch Tooltip container ersetzt, da es mit PopUp Probleme gab. 

***22.06.2023 Treffen im IM Gebäude***
Allgemeine Fragen wurden besprochen und die Aufgaben grob vertelt.

- [ ] Spring einbauen

## Files

icons.zip

## Features

- Kalender und Suche
- Eventliste erstellt

***

# Projekt Phase 1

- Aufsetzen Projektstruktur 
- Entwürfe mit HTML, CSS 
- JavaScript zur Validierung auf Client-Seite

## Aufgabestellung Phase 1

Ziel der ersten Phase:
- [x] das Aufsetzen der Projektstruktur und ein Erst-Entwurf des Designs
- [x] ein Projekt aus HTML-Dokumenten, CSS-Stylesheets und JavaScript Dateien entworfen werden
- [x] Die Hauptdatei “index.html” muss sich mit Hilfe eines Browsers lokal öffnen lassen
- [ ] JavaScript darf bei größeren Bibliotheken, z.B. jQuery, von online-Quellen eingebunden werden
- [ ] Es kann auch auf fortgeschrittenere Build Systeme für Frontends zurückgegriffen werden, solange es sich später mit Spring und
maven integrieren lässt

Projektziel ist die Implementierung eines Eventplanungsystem.
Das System soll genutzt werden um Nutzerinteresse für potentielle Veranstaltungen zu sondieren.
Das System benötigt keine Nutzerauthentikation und soll es ermöglichen Informationen
über ein geplantes Event online zu stellen, zu welchem Nutzer anonym Interesse oder
Desinteresse anmelden können. Diese sollen öffentlich einsehbar sein. Ihr System kann
hier Ähnlichkeiten zu vereinfachten Umfragesystemen mit binären Antworten haben.

- [x] eine Übersichtsseite zeigt eine Liste an Events an
- [x] ein Event wird zumindest Eigenschaften wie Titel, Autor, Beschreibung, Ort, Erstellungszeitpunkt und Eventzeitpunkt haben
- [x] Benutzer der Plattform können ein Event “liken”
- [ ] Benutzer der Plattform können ein Event besonders hervorheben
- [ ] eine Möglichkeit zum Erstellen neuer Events (z.B. Seite mit Eingabeformularen)
- [ ] mit Hilfe von JavaScript lassen sich bereits client-seitig Eingabevalidierungen durchführen

# Projekt Phase 2

- Implementieren eines Eventplanungsystems
- Das System benötigt keine Nutzerauthentikation
- Das System soll es ermöglichen Informationen über ein geplantes Event online zu stellen
- Zu jedem Event könenn Nutzer anonym Interesse oder Desinteresse anmelden
- Interesse und Desinteresse sollen öffentlich einsehbar sein
- Das System kann hier Ähnlichkeiten zu vereinfachten Umfragesystemen mit binären Antworten haben



## Aufgabestellung Phase 2

Funktionalitäten für einen Nutzer:

- [x] **Erstellen eines neuen Events**
  - [x] Veranstaltungsort (Name oder Länge und Breitengrad)
    - Der Veranstaltungsort soll hier frei gewählt werden können
  - [x] Veranstaltungsdatum
    - Das Veranstaltungsdatum darf nicht in der Vergangenheit liegen
  - [x] einzigartiger Name
  - [x] Beschreibung
  - [x] Veranstaltungstyp
    - Der Veranstaltungstyp soll aus einer Vorgefertigten Liste von Typen gewählt werden können.
    - Die Liste der Typen soll beim Neustart des Servers verändert werden können ohne den Server Code zu modifizieren.
- [ ] **Wetterbericht**
  - [ ] Falls ein Event weniger als eine Woche entfernt ist soll auf der Seite wenn möglich automatisch ein Wetterbericht zu dem voraussichtlichen Wetter angezeigt werden
    mögliche API https://www.metaweather.com/api
  - [x] Falls keine Wetterdaten möglich - entsprechender Informationstext
- [x] **Für jeden Event - Interesse oder Desinteresse markieren**
  Verwenden Sie eine geeignete Möglichkeit um Sessions zu managen
  - [x] die Wahl kann man ändern, solange das Browser offen  ist
    (keine zusätzlichen Sicherheitsvorkehrungen gegen Mehrfachabstimmung)
  - [x] auf der Detailseite zu sehen ob der Benutzer in der Session bereits Interesse oder Desinteresse angemeldet hat
    (z.B. dadurch: der jeweilige Button/Link deaktiviert und optisch verändert)
- [x] **Startseite: die letzten 20 eingestellten Events angezeigt**
- [x] **Jedes Event soll reduziert (nur mit Name, Datum und Beschreibungsauszug) angezeigt werden** 
  - Schwellwerte für die maximale Länge des angezeigten Inhalts festlegen (z.B. mittels Javascript JQuery o. serverseitig)
- [x] **nur Events die in der Zukunft liegen** 
- [x] **Von dieser Darstellung soll zu einer Vollansicht in eigener Seite oder Modal weitergeleitet werden können**
- [x] **die Möglichkeit die letzten 20 Events auf einen Typen zu filtern**
- [x] **die drei Events mit dem größten Interesse anders behandelt als normale Events** 
- [x] **Jedes der drei Events soll entsprechend seines Ranges hervorgehoben werden (z.B. über Styling oder Icon)**
- [ ] **in einer Top 3 Liste in der Sidebar angezeigt werden die auch vergangene Events beinhaltet**
- [ ] **eine einfache Suche nach Teilen eines Eventnamens oder nach einem Veranstaltungsort**
  - Es kann bei der Ergebnisdarstellung die Schnelldarstellung von der Startseite wiederverwenden
- [x] **Input Validierung Fehleingaben** 
  - [x] (z.B. leere Eingabefelder bei Titel eines Events) sollen bereits client-seitig mit Javascript abgefangen werden. 
  Dem Benutzer wird ein Hinweis gegeben, wie die Eingabe korrigiert werden kann. 
  - [x] Hinweise bei Interaktionen, die erst server-seitig fehlschlagen (z.B. Eventname bereits benutzt)
- [x] **Dokumentation, Setup Guide**, eine kurze Erklärung, wie das Projekt zu starten und zu handhaben ist.
  Beschreiben Sie dies selbst wenn Ihr Projekt bereits durch ein Starten der Spring Applikationen und dem simplen Aufruf der Index Seite funktioniert.
  Erklären Sie Besonderheiten in der Dokumentation.
  Der Unterpunkt zur Initialisierung der Datenbank sollte hier ebenfalls beschrieben werden.
- [x] **Bonuspunkt: Footer** Inkludieren Sie einen Footer der eine Copyright Notiz enthält. 
Dieser soll auf mobilen Endgeräten ausgeblendet werden und der Content soll stattdessen über die Navigation erreichbar sein.
Verwenden Sie ein Overlay (Modal) das bei erneuter Interaktion geschlossen werden soll.
- [ ] **Separation of Concerns** 
  - Implementieren Sie das Backend unter Beachtung des Seperation of Concerns Designprinzips. 
  - Das Programm soll durch Entwicklung von Service-, Controller-, Datentransferobjekts- (DTO) und Persistenzobjektsschicht modularisiert werden.
- [x] **Datenbank**
  - eine In-Memory Datenbank mittels Spring Boot Integration. 
  - Das Schema der Datenbank soll aus Javaklassen mittels der Java Persistence API2 generiert werden oder mittels einem Initialisierungsskript geladen werden.
  - Allgemein ist jedoch die Verwendung einer In-memory Datenbank empfohlen.
  
  - [x] Datenbankinitialisierung : eine Möglichkeit die Applikation bei Serverstart mit einigen (2-3) Events zu initialisieren. 
  - Dieser Vorgang soll auf Wunsch deaktivierbar sein.
  - [x] Datenbankanbindung: Die Daten der Applikation sollen mittels Spring Data Repositories die benötigte CRUD Funktionalität der Datenbankanbindung umsetzen. 
  - [x] Schreiben Sie eigene SQL Queries wo benötigt.
- [x] **Bonuspunkt: REST**
  - Bieten Sie zusätzlich zu dem Frontend Seiten einen Endpunkt an, der auf Anfrage GET /events?n=20 ein JSON Objekt mit den Daten der letzten n Events anzeigt.


## Extras
  
- Implementierung im Spring Stack
- es kann eine In-Memory Datenbank (zB. H2) oder eine standalone Datenbank als Persistentschicht für die Events verwendet werden
- Das Frontend kann in Thymeleaf umgesetzt werden und darf Javascript Funktionalität beinhalten
- Umsetzungsdetails zum Frontend:
  - Verwenden Sie zur Frontend-Implementierung Thymeleaf und Javascript. 
  - Javascript  Code darf direkt in den HTMLs eingebettet werden
  - Definieren Sie sich TemplateFragmente zur Modularisierung sofern sinnvoll (Navigation)
- Umsetzungsdetails zum Backend:
  - Das Backend soll auf Spring Framwork basieren und mittels einer ausführbaren JAR bzw. WAR Datei deployed werden. 
  Sie können hierfür den embedded Tomcat Server von Spring Boot verwenden. 
  Entwickeln Sie das Projekt als ein Maven1 Projekt.
  Anmerkung: Alle für das Projekt benötigten Abhängigkeiten können über Maven eingebunden werden. 
Die Verwendung zusätzlicher Frameworks ist erlaubt und empfohlen (siehe JQuery). 
Das Design des Frontends bleibt Ihrer Kreativität überlassen. 
Versuchen Sie soweit möglich die Umsetzung nach den Responsive Design Paradigmas umzusetzen. 
Auch hier wird der Einsatz von Frameworks empfohlen (z.B. Bootstrap).

        https://maven.apache.org/index.html
        http://www.oracle.com/technetwork/java/javaee/tech/persistence-jsp-140049.html
