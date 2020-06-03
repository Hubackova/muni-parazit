import React from "react";
import { MailEmoji } from "../../components/atoms/Emoji";
import { graphql, StaticQuery, withPrefix } from "gatsby";

const DbDate = ({ type }) => (
  <StaticQuery
    query={graphql`
      query {
        dbData {
          dbData
        }
      }
    `}
    render={data => {
      if (!data && !data.dbData) return <span></span>;
      const dates = JSON.parse(data.dbData.dbData);
      return <span>({type === "speciesDate" ? dates.speciesDate : dates.dbaseDate})</span>;
    }}
  />
);

export const en = {
  menu: [
    /* { name: "installation", text: "Instalace" },*/
    { name: "actualization", text: "Instalace a aktualizace" },
    { name: "workPrincipals", text: "Zásady práce" },
    { name: "coordinators", text: "Koordinátoři" }
  ],
  intro: (
    <p>
      Program TURBOVEG (
      <a target="_blanc" href="http://onlinelibrary.wiley.com/doi/10.2307/3237010/pdf">
        Hennekens & Schaminée 2001
      </a>
      ) je základním softwarem také pro Českou národní fytocenologickou databázi. V České republice
      může tento software zdarma získat každý amatérský i profesionální botanik, ekolog, student
      nebo pracovník ochrany přírody zabývající se studiem vegetace, pokud souhlasí s dodržováním
      níže stanovených podmínek pro práci s databází a je ochoten účastnit se výměny elektronických
      dat uložených v databázi. Pro získání přístupových práv kontaktujte Ilonu Knollovou (
      <MailEmoji mail="ikuzel@sci.muni.cz" />) nebo Milana Chytrého (
      <MailEmoji mail="chytry@sci.muni.cz" />
      ). Pro zpracování fytocenologických dat uložených v programu TURBOVEG doporučujeme používat
      program JUICE (
      <a
        target="_blanc"
        href="http://onlinelibrary.wiley.com/doi/10.1111/j.1654-1103.2002.tb02069.x/abstract"
      >
        Tichý 2002
      </a>
      ), který lze zdarma stáhnout{" "}
      <a target="_blanc" href="http://www.sci.muni.cz/botany/juice.htm">
        zde
      </a>
      .
    </p>
  ),
  /* installation: (
   <div>
   <div style={{ fontWeight: "bold", color: "#94962C" }}>Instalace</div>
      <p>
        Pro instalaci programu klikněte <a href="http://www.sci.muni.cz/botany/tv/index.html">ZDE</a>.
      </p>
    </div>
  ),*/
  actualization: (
    <div>
   <div style={{ fontWeight: "bold", color: "#94962C" }}>Instalace</div>
      <p>
        Pro instalaci programu klikněte <a href="http://www.sci.muni.cz/botany/tv/index.html">ZDE</a>.
      </p>
         <div style={{ fontWeight: "bold", color: "#94962C" }}>Aktualizace</div>
      <div>
        Pro optimální funkci programu TURBOVEG doporučujeme pravidelně kontrolovat dostupné
        aktualizace programu (
        <a target="_blanc" href="https://www.synbiosys.alterra.nl/turboveg/">
          zde
        </a>
        , vždy stahovat variantu „International, single user version“).
      </div>
      <div>
        <p>
          <div>
            <u>Aktualizované verze společných databází:</u>
          </div>
          <div>
            Aktuální verze seznamu druhů:{" "}
            <a
              target="_blanc"
              href="https://www.sci.muni.cz/botany/vegsci/dbase/species.zip"
              download
            >
              species.zip
            </a>{" "}
            <DbDate type="speciesDate" />
          </div>
          <div>
            Aktuální verze společných databází, tzv. popup lists:{" "}
            <a
              target="_blanc"
              href="https://www.sci.muni.cz/botany/vegsci/dbase/popup.zip"
              download
            >
              popup.zip
            </a>{" "}
            <DbDate />
          </div>
        </p>

        <p>
          Soubor <i>species.zip</i> rozbalte a složku <i>Czechia_Slovakia_2015</i> vložte do složky <i>species</i> {" "} (C:/Program Files/TURBOWIN/species). V Turbovegu připojte seznam druhů (species list)
          pomocí <i>modify database attributes</i> ke konkrétní databázi. Soubor <i>popup.zip</i> rozbalte a obsah
          vložte do složky <i>popup</i> (C:/Program Files/TURBOWIN/popup), při vkládání přepište všechny
          staré soubory.
        </p>
      </div>
    </div>
  ),
  workPrincipals: (
    <div>
      <div style={{ fontWeight: "bold", color: "#94962C" }}>Zásady práce</div>
      <p>
        Každý zadavatel smí zadávat fytocenologické snímky do databáze jen pod určitými čísly
        přidělenými lokálním koordinátorem. Tím získává jistotu, že pod stejnými čísly nezadává jiné
        snímky někdo jiný. V rámci stejného číselného rozsahu přiděleného lokálním koordinátorem se
        zadávají i citace literatury, pokud jsou zadávané snímky přebírány z publikovaných zdrojů.
      </p>
      <p>
        Autoři, kteří dosud nemají přidělen rozsah čísel, dostanou čísla přidělena při poskytnutí
        prvního souboru snímků do centrální databáze, tj. nejprve číslují své snímky od jedničky a
        pak celý soubor pošlou koordinátorovi centrální databáze, který snímkům přidělí volná čísla
        a přečísluje je. Pokud se zadavatel chystá své snímky publikovat, je kvůli odkazování vhodné
        mít již přidělená čísla z centrální databáze. Seznam rozsahů již přidělených čísel najdete{" "}
        <a download href={withPrefix(`/rozsahy.pdf`)}>
          zde
        </a>
        {/* TODO: (aktualizovat také). */}
      </p>
      <p>
        Pro začátečníky doporučujeme k prostudování{" "}
        <a download href={withPrefix(`/manualTv.pdf`)}>
          manuál
        </a>{" "}
        popisující vytváření databází a zadávání dat do Turbovegu.
      </p>
      <p>
        Seznam druhů cévnatých rostlin používaný v TURBOVEGu je modifikovanou verzí díla Liste der
        Gefäßpflanzen Mitteleuropas (Ehrendorfer 1973) v němž lze najít také většinu synonym pro
        správný převod nomenklatury. Pokud přesto vzniknou pochybnosti při synonymizaci jmen rostlin
        uváděných v originálních zdrojích, je lépe nepsat daný druh do seznamu druhů ve snímku, ale
        do databázového pole Remarks, a to spolu s hodnotou pokryvnosti. Odtud bude po vyjasnění
        nomenklatorického problému možné kdykoliv v budoucnosti převést údaj do databáze. Tento
        seznam byl v roce 2015 aktualizován. Žádné nové druhy se oproti verzi z roku 2010
        nepřidávaly, pouze u některých došlo k úpravě jména. Obě verze jsou kompatibilní. Jména
        mechorostů a lišejníků jsou v databázi sjednocena podle standardní literatury (Frey et al.
        1995, Pišút et al. 1993). Druhový seznam používaný v České národní fytocenologické databázi,
        označovaný jako Czechia_Slovakia_2015, je shodný se seznamem používaným v Centrální databázi
        fytocenóz na Slovensku. Připomínky a návrhy k seznamu druhů prosím adresujte na Ilonu
        Knollovou (
        <MailEmoji mail="ikuzel@sci.muni.cz" />
        ). Seznam syntaxonů používaný v TURBOVEGu je vytvořen podle díla Rostlinná společenstva
        České republiky a jejich ohrožení (Moravec et al. 1995).
      </p>
      <p>
        Literatura: <br />
        <cite>
          <li>
            Ehrendorfer F. (ed.) (1973): Liste der Gefäßpflanzen Mitteleuropas. Ed. 2. G. Fischer,
            Stuttgart.{" "}
          </li>
          <li>
            Frey W., Frahm J. P., Fischer E. & Lobin W. (1995): Die Moos- und Farnpflanzen Europas.
            G. Fischer, Stuttgart.
          </li>
          <li>
            Hennekens S.M. & Schaminée J.H.J. (2001): TURBOVEG, a comprehensive data base management
            system for vegetation data. Journal of Vegetation Science, 12: 589–591.{" "}
            <a target="_blanc" href="http://onlinelibrary.wiley.com/doi/10.2307/3237010/pdf">
              [pdf]
            </a>
          </li>
          <li>
            Moravec J., Balátová-Tuláčková E., Blažková D., Hadač E., Hejný S., Husák Š., Jeník J.,
            Kolbek J., Krahulec F., Kropáč Z., Neuhäusl R., Rybníček K., Řehořek V. & Vicherek J.
            (1995): Rostlinná společenstva České republiky a jejich ohrožení (Red list of plant
            communities of the Czech Republic and their endangerment). Ed. 2. Severočes. Přír.,
            Suppl. 1995: 1–206.
          </li>
          <li>
            Pišút I., Lackovicová A. & Lisická E. (1993): Súpis lišajníkov Slovenska. Biológia, 48,
            Suppl. 1: 53–98.
          </li>
          <li>
            Schaminée J.H.J., Hennekens S.M., Chytrý M. & Rodwell J.S. (2009): Vegetation-plot data
            and databases in Europe: an overview. Preslia, 81: 173–185.
            <a target="_blanc" href="http://www.preslia.cz/P093Schaminee.pdf">
              [pdf]
            </a>
          </li>
        </cite>
      </p>
    </div>
  ),
  coordinators: (
    <div>
      <div style={{ fontWeight: "bold", color: "#94962C" }}>Koordinátoři</div>
      <ul>
        <li>
          Centrální koordinace: Ilona Knollová a Milan Chytrý, e-mail:{" "}
          <MailEmoji mail="ikuzel@sci.muni.cz" />, <MailEmoji mail="chytry@sci.muni.cz" />
        </li>
        <li>
          Masarykova univerzita a jižní Morava: Ilona Knollová, e-mail:{" "}
          <MailEmoji mail="ikuzel@sci.muni.cz" />
        </li>
        <li>
          Česká zemědělská univerzita, Botanický ústav Průhonice a Univerzita Karlova: Tomáš Černý,
          e-mail: <MailEmoji mail="cernyt@fld.czu.cz" />
        </li>
        <li>
          Jihočeská univerzita a jižní Čechy: Milan Štech, e-mail:{" "}
          <MailEmoji mail="stech@prf.jcu.cz" />
        </li>
      </ul>
    </div>
  )
};
