# TRACCIA

Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!

## Consigli

Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:

- Da quante ore è composto un giorno?
- Da quanti minuti è composta un'ora?
- Da quanti secondi è composto un minuto?
- Da quanti millisecondi è composto un secondo?
- Quanti millisecondi mi separano da domani alle 9:30?
- Esiste un oggetto JS in grado di gestire le date?
- Esistono dei metodi per trasformare una data in millisecondi?

## SVOLGIMENTO

- estrappolo le costanti giorno/ora/minuto/secondo con il calcolo dei millisecondi
- estrappolo una costante che definisca l'ora, i minuti e i secondi di adesso (now)
- estrappolo una costante di domani 2023-08-24 ore 9.30 (tomorrow)
- sottraendo i millisecondi di "tomorrow" a quelli di "now" trovo il tempo rimanente
- converto il calcolo in giorni/ore/minuti/secondi
