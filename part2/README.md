## Osa 2

Tässä osassa jatketaan Reactiin tutustumista (esim. useamman taulukkoon sijoitetun nimen renderöinti ruudulle). Tarkastellaan myös miten käyttäjä voi antaa tietoja React-sovellukselle HTML:n lomakkeiden avulla sekä miten JavaScript -koodi käsittelee palvelimelle tallennettua dataa. 

**osa-alueet**
* Kokoelmien renderöinti ja moduulit
* Lomakkeiden käsittely
* Palvelimella olevan datan hakeminen
* Palvelimella olevan datan muokkaaminen
* Tyylien lisääminen react -sovellukseen


## kurssitiedot (tehtävät 2.1, 2.2, 2.3, 2.4 ja 2.5)

_part2/kurssitiedot/src_

**Sovellus toimii seuraavasti:**

Tämä on yksinkertainen React-sovellus, joka renderöi kurssien ja niiden osien tietoja sekä laskee ja näyttää yhteenlasketun tehtävien määrän jokaiselle kurssille.

![Kurssitiedot](image.png)

`App`-komponentti on sovelluksen pääkomponentti, joka sisältää kurssien tiedot ja renderöi `Course`-komponentin jokaiselle kurssille.

_components/Course.jsx_

`Course`-komponentti vastaa yksittäisen kurssin tietojen renderöinnistä. Se sisältää seuraavat alikomponentit:

_Header:_ Renderöi kurssin nimen.
_Part:_ Renderöi yhden osan nimen ja tehtävien määrän.
_Content:_ Renderöi kaikki osat käyttämällä Part-komponenttia.
_Total:_ Laskee ja renderöi kaikkien osien tehtävien yhteismäärän.

## Lorem Ipsum (tehtävät 2.6, 2.7, 2.8, 2.9 ja 2.10)

_part2_



**Sovellus toimii seuraavanlaisesti:**


## Lorem Ipsum (tehtävät 2.11)

_part2_

**Sovellus toimii seuraavanlaisesti:**



## Sovelluksen Rakenne


## Lorem Ipsum (tehtävät 2.12, 2.13, 2.14 ja 2.15)

_part2_

**Sovellus toimii seuraavanlaisesti:**



## Sovelluksen Rakenne

