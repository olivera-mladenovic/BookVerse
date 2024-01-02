# BookVerse aplikacija!
BookVerse je aplikacija koja korisnicima omogućava da se registruju, a potom kreiraju i listaju dogadjaje koji su vezani za svet literature i knjiga. Aplikacija prikazuje učesnike događaja, tako da se svaki ulogovani korisnik može jednostavno prijaviti kao gost, a na isti način i otkazati svoje prisustvo.


## Tehnologije
Prilikom kreiranja aplikacije poštovani su principi ["čiste arhitekture"](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html). Od tehnologija, na backendu je korišćena .net platforma. Baza je **SQL** (sqlite s obzirom na to da je reč o radnoj verziji aplikacije, koja bi, pošto si ispoštovani principi čiste arhitekture i slabe zavisnosti između slojeva,  veoma jednostavno mogla da se promeni u bilo koju SQL bazu). Kao objektno-relacioni maper korišćen je **Entity Framework**. 
U aplikaciji je korišćena autorizacija i autentikacija, koja je implementirana pomoću Identity framework-a.

Na klijentskoj strani, korišćena je **React** biblioteka, pomoću koje su implementirane komponente. Radi pojednostavljenog prikaza komponenti, korišćena je **Semantic UI** biblioteka. Za prikazivanje formi, korišćena je **Formik** biblioteka. Prilikom upravljanja "stanja" aplikacije, korišćena je **mobx** biblioteka.


## Arhitektura backend-a

Na sledećoj slici, prikazana je arhitektura backend aplikacije koja je implementirana kroz slojeve prateći standarde čiste arhitekture.
![BookVerse-architecture.png](BookVerse-architecture.png)

Paterni koji su korišćeni na backendu:
 - **CQRS pattern**

Pattern koji odvaja operacije za čitanje i upisivanje podataka. Separacija se postiže korišćenjem komandi za modifikovanje podataka, a upita za čitanje podataka. Pun potencijal i prednost koju nudi ovaj pattern postiže se korišćenjem dvostruke baze podataka. Jedna (često noSQL) koja je optimizovana za čitanje podataka, a druga (najčešće SQL koja je namenjena upisavanju podataka.)
 - **Mediator**
 
Pattern koji omogućava posredništvo prilikom komunikacije između objekata dodavanjem novog sloja, kako bi se onemogućila međusobna zavisnost.
U primeru ove aplikacije, "application" sloj nema zavisnost ka API sloju, već je komunikacija izvedena putem medijatora.
