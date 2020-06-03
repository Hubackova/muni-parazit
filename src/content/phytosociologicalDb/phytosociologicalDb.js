/* eslint-disable no-irregular-whitespace */
import React, {useContext} from "react";
import { MailEmoji } from "../../components/atoms/Emoji";
import BarChart from "../../components/charts/BarChart";
import CnfdMap from "./CnfdMap";
import { PhytoContext } from "../../layouts/PhytoContext";
import {
  samplesData,
  samplesYears,
  vegetationClassesSamples,
  vegetationClasses 
} from "../../components/charts/chartData";
import { Link , withPrefix} from "gatsby";


export const CoordinatorsLinkCz = () => {
  const {setTurbowegOpened, setOpened} = useContext(PhytoContext)
   const handleLinkClick = () => {
    setOpened("turboweg")
    setTurbowegOpened("coordinators")
   }
    return  <span style={{color: "green", cursor: "pointer"}} onClick={()=>handleLinkClick()}>(viz seznam koordinátorů databáze)</span>
  } 

  export const CoordinatorsLinkEn = () => {
    const {setTurbowegOpened, setOpened} = useContext(PhytoContext)
    const handleLinkClick = () => {
     setOpened("turboweg")
     setTurbowegOpened("coordinators")
    }
      return  <span style={{color: "green", cursor: "pointer"}} onClick={()=>handleLinkClick()}>(see coordinators list)</span>
    }

export const en = {
  menu: [
    { name: "introduction", text: "Úvod" },
    { name: "dbState", text: "Stav centrální databáze" },
    { name: "turboweg", text: "Turboveg for Windows" },
    { name: "data", text: "Výměna a poskytování dat" },
    { name: "turbowegCheck", text: "Turboveg Check-Up" },
    { name: "acknowledgements", text: "Poděkování" }
  ],
  introduction: (
    <div>
	<h3>Česká národní fytocenologické databáze</h3>
      <p>
        <b>Česká národní fytocenologické databáze (ČNFD)</b> je úložiště pro digitalizované
        fytocenologické snímky zaznamenané v České republice, které jsou používány pro účely
        základního i aplikovaného ekologického výzkumu i v ochraně přírody. Tato činnost je součástí
        širších mezinárodních aktivit řízených pracovní skupinou European Vegetation Survey při
        Mezinárodní společnosti pro výzkum vegetace (
        <a target="_blanc" href="http://iavs.org/">
          International Association for Vegetation Science
        </a>
        ). V rámci partnerství s časopisy{" "}
        <a target="_blanc" href="http://www.preslia.cz/">
          Preslia
        </a>{" "}
        a{" "}
        <a target="_blanc" href="https://botanospol.cz/cs/zpravy-cbs">
          Zprávy České botanické společnosti
        </a>{" "}
        slouží ČNFD k archivaci fytocenologických snímků vztahujících se k publikovaným článkům. Fytocenologické snímky z ČNFD jsou součástí databáze EVA (
        <a target="_blanc" href="http://euroveg.org/eva-database">
          European Vegetation Archive
        </a>
        ) a sPlot (
        <a target="_blanc" href="https://www.idiv.de/en/splot.html">
          Global Vegetation Database
        </a>
        ). Floristická data z fytocenologických snímků uložených v ČNFD jsou dostupná na webovém portálu{" "}
        <a target="_blanc" href="https://pladias.cz/">
          PLADIAS
        </a>{" "}
        a{" "}
        <a target="_blanc" href="https://dalibor.ibot.cas.cz/login">
          DaLiBor
        </a>
        .
      </p>
      <p>
        Česká národní fytocenologická databáze je spravována pracovní skupinou Výzkum vegetace na Ústavu botaniky a zoologie
        Masarykovy univerzity v Brně, kde jsou také data z lokálních databází shromažďována v tzv.
        centrální databázi. Hlavní koordinátoři databáze jsou Milan Chytrý (
        <MailEmoji mail="chytry@sci.muni.cz" />) a Ilona Knollová (
        <MailEmoji mail="ikuzel@sci.muni.cz" />
        ),  
        {/* TODO: link na koordinatory */}
         {" "} lokální koordinátoři jsou také na jiných pracovištích <CoordinatorsLinkEn />.
        Součástí databázového projektu je také rozvoj metod pro analýzu dat.
      </p>
      <p>
        Základní údaje o ČNFD lze najít v článku v časopise
        Preslia (
        <a target="_blanc" href="http://www.sci.muni.cz/botany/chytry/Pre2003.pdf">
          Chytrý & Rafajová 2003
        </a>
        ). Aktualizované údaje se nacházejí také v krátké zprávě publikované v časopise Biodiversity
        & Ecology (
        <a
          target="_blanc"
          href="http://www.biodiversity-plants.de/biodivers_ecol/publishing/b-e.00136.pdf"
        >
          Chytrý & Michalcová 2012
        </a>
        ). Databáze je registrována v celosvětovém přehledu vegetačních databází{" "}
        <a target="_blanc" href="http://www.givd.info/ID/EU-CZ-001">
          Global Index of Vegetation-plot Databases
        </a>{" "}
        (
        <a
          target="_blanc"
          href="http://onlinelibrary.wiley.com/doi/10.1111/j.1654-1103.2011.01265.x/abstract"
        >
          Dengler et al. 2011
        </a>
        ) pod kódem EU-CZ-001.
      </p>
      <p>
        Doporučená citace ČNFD: <br />
        <cite>
          Chytrý M. & Rafajová M. (2003): Czech National Phytosociological Database: basic
          statistics of the available vegetation-plot data. Preslia 75: 1–15. {" "}
            <a target="_blanc" href="http://www.sci.muni.cz/botany/chytry/Pre2003.pdf">
              [pdf]
            </a>
        </cite>
      </p>
    </div>
  ),
  dbState: (
        <div>
      <p>
        Databáze obsahuje 113 568 snímků (červenec 2019) z celého území České republiky (obr. 1) zapsané od
        roku 1922 (obr. 2, dole) více než tisícem botaniků. Největší počet snímků byl zaznamenán ve
        vegetaci listnatých lesů (<i>Querco-Fagetea</i>), luk a pastvin (<i>Molinio-Arrhenatheretea</i>) nebo
        vysokých ostřic (<i>Phragmito-Magno-Caricetea</i>; obr. 2, nahoře). Fytocenologická bibliografie s
        vyznačením publikací excerpovaných v centrální databázi je k dispozici{" "}
        <a target="_blanc" href="http://www.sci.muni.cz/botany/tvref/">
          zde
        </a>
        .
      </p>
	  <CnfdMap altText="Rozmístění fytocenologických snímků do čtverců v České republice
      podle České národní fytocenologické databáze"/>
      Obr. 1: Rozmístění fytocenologických snímků do čtverců v České republice podle České národní
      fytocenologické databáze. Velikost symbolů = Natural Breaks (rozložení dat).
      <p>
        
        <BarChart
          data={samplesData}
          labels={samplesYears}
          tooltipLabel="počet snímků"
          title="Počet snímků z různých let"
        />
		Obr. 2: Počet fytocenologických snímků v jednotlivých letech.<br />
		</p>
		<p>
		<BarChart
          data={vegetationClassesSamples}
          labels={vegetationClasses}
          tooltipLabel="počet snímků"
          title="Počet snímků  v různých vegetačních třídách"
        />
		Obr. 3: Počty snímků v jednotlivých vegetačních třídách.<br />
      </p>
		<p>
		Obr. 4: Interaktivní mapa (coming soon)
		</p>
      
    </div>
  ),

  data: (
    <div>
      <p>
        Pro zajištění účinné výměny dat si dovolujeme požádat všechny uživatele TURBOVEGu, kteří do
        databáze zadali jakákoliv data, aby je poskytli do centrální databáze zasláním na adresu{" "}
        <MailEmoji mail="ikuzel@sci.muni.cz" /> nebo <MailEmoji mail="chytry@sci.muni.cz" />. Data
        z centrální databáze mohou být podle přání jejich autora nebo dodavatele poskytována
        ostatním uživatelům ve třech režimech:
        <ul>
          <li>Veřejná data volně dostupná <Link to="/phytosociological-online">online z veřejné části databáze</Link></li>
          <li>
            Veřejná data dostupná na požádání od správce centrální databáze pro účely akademického
            výzkumu nebo aplikací v ochraně přírody, nikoliv však pro komerční využití. Žádosti o
            poskytnutí dat vyřizuje Ilona Knollová (
            <MailEmoji mail="ikuzel@sci.muni.cz" />) nebo Milan Chytrý (
            <MailEmoji mail="chytry@sci.muni.cz" />) na základě e-mailem doručeného vysvětlení, jak
            a k čemu budou data použita, a specifikace výběru a požadovaného formátu. Kritéria
            výběru fytocenologických snímků z databáze a formáty exportovaných snímků najdete{" "}
            <a download href={withPrefix(`/vyberyDb.pdf`)}>
              zde
            </a>
            .
          </li>
          <li>
            Neveřejná data pouze uložená v centrální databázi, ale veřejně neposkytovaná, případně
            poskytovaná pouze pro účely specifikované dodavatelem
          </li>
        </ul>
        <p>
          Při použití dat vybraných z databáze v publikacích se uvádí tato standardní citace
          databáze: <br />
          <cite>
            Chytrý M. & Rafajová M. (2003): Czech National Phytosociological database: basic
            statistics of the available vegetation-plot data. Preslia 75: 1–15.
          </cite>
        </p>
        <p>
          Současně se citují i publikace se zdrojem dat nebo autoři nepublikovaných dat. Tyto citace
          lze vynechat v případě použití fytocenologických snímků z velkého množství zdrojů, v nichž
          snímky z žádného zdroje výrazně nepřevažují, a to u publikací, jejichž charakter
          nedovoluje citovat všechny zdroje (např. články s omezeným počtem citací).
        </p>
      </p>
    </div>
  ),
  turbowegCheck: (
    <div>
      Speciálně upravená databáze v programu MS ACCESS slouží ke kontrole fytocenologických snímků
      zapsaných do programu TURBOVEG. Její hlavní funkcí je vyhledávání chyb v druhových a
      hlavičkových datech. V druhových datech jsou to například překlepy ve jménech druhů nebo
      chybně uvedená vegetační patra, v hlavičkových datech např. chybějící údaje v povinných polích
      nebo chybné souřadnice. Aplikace se ovládá pomocí jednoduchého rozhraní, a je proto možné ji
      používat i bez znalosti práce s MS ACCESS. Chyby nebo údaje ve formě souhrnů se zobrazují jako
      přehledné sestavy, které lze vytisknout. TURBOVEG Check-Up používá pro hledání chyb tabulky,
      které lze pravidelně aktualizovat z těchto webových stránek. Kromě toho se v aplikaci
      nacházejí odkazy na informace o České národní fytocenologické databázi. Bližší informace a
      odkazy na stažení aplikace najdete{" "}
      <a href={withPrefix(`/turboweg.pdf`)} download>
        zde
      </a>
      .
    </div>
  ),
  acknowledgements: (
    <div>
      <div>
        Dovolujeme si poděkovat všem, kteří dosud přispěli k tvorbě České národní fytocenologické
        databáze:
      </div>
      <ul className="phytoSocDb-thanksList">
        <li>Irena Axmanová (Veselá)</li>
        <li>Lucie Benediktová</li>
		<li>Eliška Blažejová (Horodyská)</li>
        <li>Denisa Blažková</li>
        <li>Karel Boublík</li>
        <li>Kateřina Bubíková</li>
        <li>Lucia Cachovanová</li>
        <li>Jaroslava Cieslarová</li>
        <li>David Cigánek</li>
        <li>Šárka Cimalová</li>
        <li>Jaroslav Čáp</li>
        <li>Alžběta Čejková</li>
        <li>Barbora Čepelová</li>
        <li>Martin Černý</li>
        <li>Tomáš Černý</li>
        <li>Pavel Daněk</li>
        <li>Jiří Danihelka</li>
        <li>Alice Dingová</li>
        <li>Daniel Dítě</li>
        <li>Jan Divíšek</li>
        <li>Ctibor Dolejší</li>
        <li>Jana Ďoubalová</li>
        <li>Jan Douda</li>
        <li>Pavel Dřevojan</li>
		<li>Lydie Dudová (Navrátilová)</li>
        <li>Martin Duchoslav</li>
        <li>Helena Dušková</li>
        <li>Jana Dvořáková</li>
        <li>Libor Ekrt</li>
        <li>Viktoria Eltsova</li>
        <li>Martina Fabšičová</li>
        <li>Karel Fajmon</li>
		<li>Zuzana Fajmonová (Rozbrojová)</li>
        <li>Petr Filippov</li>
        <li>Jarmila Filippovová</li>
        <li>Zuzana Fronková</li>
        <li>Jiří Galda</li>
        <li>Michal Gerža</li>
        <li>Marek Gonda</li>
        <li>Tomáš Grulich</li>
        <li>Michal Hájek</li>
        <li>Petra Hájková</li>
        <li>Jana Halúzová</li>
        <li>Petra Hanáková</li>
        <li>Handrij Härtel</li>
        <li>Helena Havránková</li>
        <li>Radim Hédl</li>
        <li>Monika Hejdová</li>
        <li>Aleš Hoffmann</li>
		<li>Dana Holubová (Michalcová)</li>
        <li>Viera Horáková</li>
        <li>Lucie Hradilová</li>
        <li>Richard Hrivnák</li>
        <li>Zdenka Hroudová</li>
        <li>Jaroslav Hruban</li>
        <li>Monika Hrubanová (Dršková)</li>
        <li>Jindřich Chlapek</li>
        <li>Markéta Chudomelová</li>
        <li>Kryštof Chytrý</li>
        <li>Ivan Jindra</li>
        <li>Martin Jiroušek</li>
		<li>Jana Jiroušková (Božková)</li>
        <li>Blanka Jírů</li>
		<li>Tereza Juřenová (Koubková)</li>
        <li>Jan Juřica</li>
        <li>Michal Juříček</li>
        <li>Jiří Juřička</li>
        <li>Kamila Juřičková</li>
        <li>Veronika Kalníková</li>
        <li>Veronika Kalusová</li>
        <li>Zdeněk Kaplan</li>
        <li>Katrin Karimová</li>
        <li>Petr Karlík</li>
        <li>Alexandra Klaudisová</li>
        <li>Leoš Klimeš</li>
        <li>Ilona Knollová (Kuželová)</li>
        <li>Martin Kočí</li>
        <li>František Krahulec</li>
        <li>Lucie Kratochvílová</li>
        <li>Zdeněk Kropáč</li>
        <li>Pavel Křížek</li>
        <li>Tomáš Kučera</li>
        <li>Anna Kulíková</li>
        <li>Petr Kuneš</li>
        <li>Jana Kůrová</li>
        <li>Josef Kutlvašr</li>
        <li>Jitka Laburdová</li>
        <li>Flavia Landucci</li>
        <li>Deana Láníková</li>
        <li>Martin Lepší</li>
		<li>Jarmila Lorencová (Urbánková)</li>
        <li>Zdeňka Lososová</li>
        <li>Hana Lukšíková</li>
        <li>Pavel Lustyk</li>
        <li>Samuel Lvončík</li>
		<li>Martina Macků (Nejezchlebová)</li>
        <li>Michal Mazák</li>
        <li>Kristina Merunková</li>
        <li>Zuzana Myšková</li>
        <li>Tereza Náhlíková</li>
        <li>Jana Navrátilová</li>
        <li>Jiří Němec</li>
        <li>Zdenka Neuhäuslová</li>
        <li>Jana Nová</li>
        <li>Jan Novák</li>
        <li>Pavel Novák</li>
        <li>Ivan Ostrý</li>
        <li>Marcela Paloudová</li>
        <li>Petra Pavlíčková</li>
        <li>Sylvie Pecháčková</li>
        <li>Jan Pergl</li>
        <li>Tomáš Peterka</li>
        <li>Michaela Petrová</li>
        <li>Petr Petřík</li>
        <li>Kateřina Pišťková</li>
        <li>Zuzana Plesková</li>
        <li>Marie Popelářová</li>
        <li>Jan Prančl</li>
		<li>Zdenka Preislerová (Otýpková)</li>
        <li>Helena Prokešová</li>
        <li>Petr Pyšek</li>
        <li>Marie Rafajová</li>
        <li>Frank Richter</li>
        <li>Ludmila Rivolová</li>
        <li>Jan Roleček</li>
        <li>Romana Roučková</li>
        <li>Jiří Rozehnal</li>
        <li>Eva Rozehnalová</li>
        <li>Marcela Řezníčková</li>
        <li>Jiří Sádlo</li>
        <li>Vojtěch Sedláček</li>
        <li>Hana Sekerková</li>
        <li>Martina Sojneková</li>
        <li>Zdeněk Soldán</li>
        <li>Zbyněk Sovík</li>
        <li>Lenka Sovíková</li>
        <li>Veronika Srnková</li>
        <li>Lenka Staňková</li>
        <li>Tomáš Svačina</li>
        <li>Milan Šenkýř</li>
        <li>Anna Šímová</li>
        <li>Petr Šmarda</li>
		<li>Eva Šmerdová (Hettenbergerová)</li>
        <li>Markéta Špelinová</li>
        <li>Petra Štěpánková</li>
		<li>Jitka Štěrbová (Effmertová)</li>
        <li>Kateřina Šumberová</li>
        <li>Markéta Táborská</li>
        <li>Přemysl Tajek</li>
        <li>Lubomír Tichý</li>
        <li>Jana Tkačíková</li>
        <li>Adam Trčka</li>
        <li>Martin Večeřa</li>
        <li>Adam Veleba</li>
        <li>Jiří Velebil</li>
        <li>Jiří Vicherek</li>
        <li>Ondřej Vild</li>
        <li>Karla Vincenecová</li>
        <li>Richard Višňák</li>
        <li>Michaela Vítková</li>
        <li>Pavla Vlčková</li>
        <li>Martin Vojík</li>
        <li>Jaroslav Vojta</li>
        <li>Alena Vydrová</li>
        <li>Tomáš Vymyslický</li>
        <li>Petr Vysloužil</li>
        <li>Tomáš Zedínek</li>
        <li>David Zelený</li>
        <li>Iva Zítková</li>
        <li>Dominik Zukal</li>
        <li>Kristýna Žáková</li>
      </ul>
    </div>
  )
};

export const cz = {
  menu: [
    { name: "introduction", text: "Úvod" },
    { name: "dbState", text: "Stav centrální databáze" },
    { name: "turboweg", text: "Turboveg for Windows" },
    { name: "data", text: "Výměna a poskytování dat" },
    { name: "turbowegCheck", text: "Turboveg Check-Up" },
    { name: "acknowledgements", text: "Poděkování" }
  ],
  introduction: (
    <div>
	<h3>Česká národní fytocenologické databáze</h3>
      <p>
        <b>Česká národní fytocenologické databáze (ČNFD)</b> je úložiště pro digitalizované
        fytocenologické snímky zaznamenané v České republice, které jsou používány pro účely
        základního i aplikovaného ekologického výzkumu i v ochraně přírody. Tato činnost je součástí
        širších mezinárodních aktivit řízených pracovní skupinou European Vegetation Survey při
        Mezinárodní společnosti pro výzkum vegetace (
        <a target="_blanc" href="http://iavs.org/">
          International Association for Vegetation Science
        </a>
        ). V rámci partnerství s časopisy{" "}
        <a target="_blanc" href="http://www.preslia.cz/">
          Preslia
        </a>{" "}
        a{" "}
        <a target="_blanc" href="https://botanospol.cz/cs/zpravy-cbs">
          Zprávy České botanické společnosti
        </a>{" "}
        slouží ČNFD k archivaci fytocenologických snímků
        vztahujících se k publikovaným článkům. Fytocenologické snímky z ČNFD jsou součástí databáze EVA (
        <a target="_blanc" href="http://euroveg.org/eva-database">
          European Vegetation Archive
        </a>
        ) a sPlot (
        <a target="_blanc" href="https://www.idiv.de/sdiv/working_groups/wg_pool/splot.html">
          Global Vegetation Database
        </a>
        ). Floristická data z fytocenologických snímků uložených v ČNFD jsou dostupná na webovém portálu{" "}
        <a target="_blanc" href="https://pladias.cz/">
          PLADIAS
        </a>{" "}
        a{" "}
        <a target="_blanc" href="https://dalibor.ibot.cas.cz/login">
          DaLiBor
        </a>
        .
      </p>
      <p>
        Česká národní fytocenologická databáze je spravována pracovní skupinou Výzkum vegetace na Ústavu botaniky a zoologie
        Masarykovy univerzity v Brně, kde jsou také data z lokálních databází shromažďována v tzv.
        centrální databázi. Hlavní koordinátoři databáze jsou Milan Chytrý (
        <MailEmoji mail="chytry@sci.muni.cz" />) a Ilona Knollová (
        <MailEmoji mail="ikuzel@sci.muni.cz" />
        ), 
        {/* TODO: link na koordinatory */}
         {" "}lokální koordinátoři jsou také na jiných pracovištích <CoordinatorsLinkCz />.
        Součástí databázového projektu je také rozvoj metod pro analýzu dat.
      </p>
      <p>
        Základní údaje o ČNFD lze najít v článku v časopise
        Preslia (
        <a target="_blanc" href="http://www.sci.muni.cz/botany/chytry/Pre2003.pdf">
          Chytrý & Rafajová 2003
        </a>
        ). Aktualizované údaje se nacházejí také v krátké zprávě publikované v časopise Biodiversity
        & Ecology (
        <a
          target="_blanc"
          href="http://www.biodiversity-plants.de/biodivers_ecol/publishing/b-e.00136.pdf"
        >
          Chytrý & Michalcová 2012
        </a>
        ). Databáze je registrována v celosvětovém přehledu vegetačních databází{" "}
        <a target="_blanc" href="http://www.givd.info/ID/EU-CZ-001">
          Global Index of Vegetation-plot Databases
        </a>{" "}
        (
        <a
          target="_blanc"
          href="http://onlinelibrary.wiley.com/doi/10.1111/j.1654-1103.2011.01265.x/abstract"
        >
          Dengler et al. 2011
        </a>
        ) pod kódem EU-CZ-001.
      </p>
      <p>
        Doporučená citace ČNFD: <br />
                <cite>
          Chytrý M. & Rafajová M. (2003): Czech National Phytosociological Database: basic
          statistics of the available vegetation-plot data. Preslia 75: 1–15. {" "}
            <a target="_blanc" href="http://www.sci.muni.cz/botany/chytry/Pre2003.pdf">
              [pdf]
            </a>
        </cite>
      </p>
    </div>
  ),
  dbState: (
    <div>
      <p>
        Databáze obsahuje 113 568 snímků (červenec 2019) z celého území České republiky (obr. 1) zapsané od
        roku 1922 (obr. 2, dole) více než tisícem botaniků. Největší počet snímků byl zaznamenán ve
        vegetaci listnatých lesů (<i>Querco-Fagetea</i>), luk a pastvin (<i>Molinio-Arrhenatheretea</i>) nebo
        vysokých ostřic (<i>Phragmito-Magno-Caricetea</i>; obr. 2, nahoře). Fytocenologická bibliografie s
        vyznačením publikací excerpovaných v centrální databázi je k dispozici{" "}
        <a target="_blanc" href="http://www.sci.muni.cz/botany/tvref/">
          zde
        </a>
        .
      </p>
	  <CnfdMap altText="Rozmístění fytocenologických snímků do čtverců v České republice
      podle České národní fytocenologické databáze"/>
      Obr. 1: Rozmístění fytocenologických snímků do čtverců v České republice podle České národní
      fytocenologické databáze. Velikost symbolů = Natural Breaks (rozložení dat).
      <p>
        
        <BarChart
          data={samplesData}
          labels={samplesYears}
          tooltipLabel="počet snímků"
          title="Počet snímků z různých let"
        />
		Obr. 2: Počet fytocenologických snímků v jednotlivých letech.<br />
		</p>
		<p>
		<BarChart
          data={vegetationClassesSamples}
          labels={vegetationClasses}
          tooltipLabel="počet snímků"
          title="Počet snímků  v různých vegetačních třídách"
        />
		Obr. 3: Počty snímků v jednotlivých vegetačních třídách.<br />
      </p>
		<p>
		Obr. 4: Interaktivní mapa (coming soon)
		</p>
      
    </div>
  ),
  data: (
    <div>
      <p>
        Pro zajištění účinné výměny dat si dovolujeme požádat všechny uživatele TURBOVEGu, kteří do
        databáze zadali jakákoliv data, aby je poskytli do centrální databáze zasláním na adresu{" "}
        <MailEmoji mail="ikuzel@sci.muni.cz" /> nebo <MailEmoji mail="chytry@sci.muni.cz" />. Data
        z centrální databáze mohou být podle přání jejich autora nebo dodavatele poskytována
        ostatním uživatelům ve třech režimech:
        <ul>
          <li>Veřejná data volně dostupná <Link to="/phytosociological-online">online z veřejné části databáze</Link></li>
          <li>
            Veřejná data dostupná na požádání od správce centrální databáze pro účely akademického
            výzkumu nebo aplikací v ochraně přírody, nikoliv však pro komerční využití. Žádosti o
            poskytnutí dat vyřizuje Ilona Knollová
            (<MailEmoji mail="ikuzel@sci.muni.cz" />) nebo Milan Chytrý (
            <MailEmoji mail="chytry@sci.muni.cz" />) na základě e-mailem doručeného vysvětlení, jak
            a k čemu budou data použita, a specifikace výběru a požadovaného formátu. Kritéria
            výběru fytocenologických snímků z databáze a formáty exportovaných snímků najdete{" "}
            <a download href={withPrefix(`/vyberyDb.pdf`)}>
              zde
            </a>
            .
          </li>
          <li>
            Neveřejná data pouze uložená v centrální databázi, ale veřejně neposkytovaná, případně
            poskytovaná pouze pro účely specifikované dodavatelem
          </li>
        </ul>
        <p>
          Při použití dat vybraných z databáze v publikacích se uvádí tato standardní citace
          databáze: <br />
          <cite>
            Chytrý M. & Rafajová M. (2003): Czech National Phytosociological database: basic
            statistics of the available vegetation-plot data. Preslia 75: 1–15.
          </cite>
        </p>
        <p>
          Současně se citují i publikace se zdrojem dat nebo autoři nepublikovaných dat. Tyto citace
          lze vynechat v případě použití fytocenologických snímků z velkého množství zdrojů, v nichž
          snímky z žádného zdroje výrazně nepřevažují, a to u publikací, jejichž charakter
          nedovoluje citovat všechny zdroje (např. články s omezeným počtem citací).
        </p>
      </p>
    </div>
  ),
  turbowegCheck: (
    <div>
      Speciálně upravená databáze v programu MS ACCESS slouží ke kontrole fytocenologických snímků
      zapsaných do programu TURBOVEG. Její hlavní funkcí je vyhledávání chyb v druhových a
      hlavičkových datech. V druhových datech jsou to například překlepy ve jménech druhů nebo
      chybně uvedená vegetační patra, v hlavičkových datech např. chybějící údaje v povinných polích
      nebo chybné souřadnice. Aplikace se ovládá pomocí jednoduchého rozhraní, a je proto možné ji
      používat i bez znalosti práce s MS ACCESS. Chyby nebo údaje ve formě souhrnů se zobrazují jako
      přehledné sestavy, které lze vytisknout. TURBOVEG Check-Up používá pro hledání chyb tabulky,
      které lze pravidelně aktualizovat z těchto webových stránek. Kromě toho se v aplikaci
      nacházejí odkazy na informace o České národní fytocenologické databázi. Bližší informace a
      odkazy na stažení aplikace najdete{" "}
      <a href={withPrefix(`/turboweg.pdf`)} download>
        zde
      </a>
      .
    </div>
  ),
  acknowledgements: (
    <div>
      <div>
        Dovolujeme si poděkovat všem, kteří dosud přispěli k tvorbě České národní fytocenologické
        databáze:
      </div>
      <ul className="phytoSocDb-thanksList">
        <li>Irena Axmanová (Veselá)</li>
        <li>Lucie Benediktová</li>
		<li>Eliška Blažejová (Horodyská)</li>
        <li>Denisa Blažková</li>
        <li>Karel Boublík</li>
        <li>Kateřina Bubíková</li>
        <li>Lucia Cachovanová</li>
        <li>Jaroslava Cieslarová</li>
        <li>David Cigánek</li>
        <li>Šárka Cimalová</li>
        <li>Jaroslav Čáp</li>
        <li>Alžběta Čejková</li>
        <li>Barbora Čepelová</li>
        <li>Martin Černý</li>
        <li>Tomáš Černý</li>
        <li>Pavel Daněk</li>
        <li>Jiří Danihelka</li>
        <li>Alice Dingová</li>
        <li>Daniel Dítě</li>
        <li>Jan Divíšek</li>
        <li>Ctibor Dolejší</li>
        <li>Jana Ďoubalová</li>
        <li>Jan Douda</li>
        <li>Pavel Dřevojan</li>
		<li>Lydie Dudová (Navrátilová)</li>
        <li>Martin Duchoslav</li>
        <li>Helena Dušková</li>
        <li>Jana Dvořáková</li>
        <li>Libor Ekrt</li>
        <li>Viktoria Eltsova</li>
        <li>Martina Fabšičová</li>
        <li>Karel Fajmon</li>
		<li>Zuzana Fajmonová (Rozbrojová)</li>
        <li>Petr Filippov</li>
        <li>Jarmila Filippovová</li>
        <li>Zuzana Fronková</li>
        <li>Jiří Galda</li>
        <li>Michal Gerža</li>
        <li>Marek Gonda</li>
        <li>Tomáš Grulich</li>
        <li>Michal Hájek</li>
        <li>Petra Hájková</li>
        <li>Jana Halúzová</li>
        <li>Petra Hanáková</li>
        <li>Handrij Härtel</li>
        <li>Helena Havránková</li>
        <li>Radim Hédl</li>
        <li>Monika Hejdová</li>
        <li>Aleš Hoffmann</li>
		<li>Dana Holubová (Michalcová)</li>
        <li>Viera Horáková</li>
        <li>Lucie Hradilová</li>
        <li>Richard Hrivnák</li>
        <li>Zdenka Hroudová</li>
        <li>Jaroslav Hruban</li>
        <li>Monika Hrubanová (Dršková)</li>
        <li>Jindřich Chlapek</li>
        <li>Markéta Chudomelová</li>
        <li>Kryštof Chytrý</li>
        <li>Ivan Jindra</li>
        <li>Martin Jiroušek</li>
		<li>Jana Jiroušková (Božková)</li>
        <li>Blanka Jírů</li>
		<li>Tereza Juřenová (Koubková)</li>
        <li>Jan Juřica</li>
        <li>Michal Juříček</li>
        <li>Jiří Juřička</li>
        <li>Kamila Juřičková</li>
        <li>Veronika Kalníková</li>
        <li>Veronika Kalusová</li>
        <li>Zdeněk Kaplan</li>
        <li>Katrin Karimová</li>
        <li>Petr Karlík</li>
        <li>Alexandra Klaudisová</li>
        <li>Leoš Klimeš</li>
        <li>Ilona Knollová (Kuželová)</li>
        <li>Martin Kočí</li>
        <li>František Krahulec</li>
        <li>Lucie Kratochvílová</li>
        <li>Zdeněk Kropáč</li>
        <li>Pavel Křížek</li>
        <li>Tomáš Kučera</li>
        <li>Anna Kulíková</li>
        <li>Petr Kuneš</li>
        <li>Jana Kůrová</li>
        <li>Josef Kutlvašr</li>
        <li>Jitka Laburdová</li>
        <li>Flavia Landucci</li>
        <li>Deana Láníková</li>
        <li>Martin Lepší</li>
		<li>Jarmila Lorencová (Urbánková)</li>
        <li>Zdeňka Lososová</li>
        <li>Hana Lukšíková</li>
        <li>Pavel Lustyk</li>
        <li>Samuel Lvončík</li>
		<li>Martina Macků (Nejezchlebová)</li>
        <li>Michal Mazák</li>
        <li>Kristina Merunková</li>
        <li>Zuzana Myšková</li>
        <li>Tereza Náhlíková</li>
        <li>Jana Navrátilová</li>
        <li>Jiří Němec</li>
        <li>Zdenka Neuhäuslová</li>
        <li>Jana Nová</li>
        <li>Jan Novák</li>
        <li>Pavel Novák</li>
        <li>Ivan Ostrý</li>
        <li>Marcela Paloudová</li>
        <li>Petra Pavlíčková</li>
        <li>Sylvie Pecháčková</li>
        <li>Jan Pergl</li>
        <li>Tomáš Peterka</li>
        <li>Michaela Petrová</li>
        <li>Petr Petřík</li>
        <li>Kateřina Pišťková</li>
        <li>Zuzana Plesková</li>
        <li>Marie Popelářová</li>
        <li>Jan Prančl</li>
		<li>Zdenka Preislerová (Otýpková)</li>
        <li>Helena Prokešová</li>
        <li>Petr Pyšek</li>
        <li>Marie Rafajová</li>
        <li>Frank Richter</li>
        <li>Ludmila Rivolová</li>
        <li>Jan Roleček</li>
        <li>Romana Roučková</li>
        <li>Jiří Rozehnal</li>
        <li>Eva Rozehnalová</li>
        <li>Marcela Řezníčková</li>
        <li>Jiří Sádlo</li>
        <li>Vojtěch Sedláček</li>
        <li>Hana Sekerková</li>
        <li>Martina Sojneková</li>
        <li>Zdeněk Soldán</li>
        <li>Zbyněk Sovík</li>
        <li>Lenka Sovíková</li>
        <li>Veronika Srnková</li>
        <li>Lenka Staňková</li>
        <li>Tomáš Svačina</li>
        <li>Milan Šenkýř</li>
        <li>Anna Šímová</li>
        <li>Petr Šmarda</li>
		<li>Eva Šmerdová (Hettenbergerová)</li>
        <li>Markéta Špelinová</li>
        <li>Petra Štěpánková</li>
		<li>Jitka Štěrbová (Effmertová)</li>
        <li>Kateřina Šumberová</li>
        <li>Markéta Táborská</li>
        <li>Přemysl Tajek</li>
        <li>Lubomír Tichý</li>
        <li>Jana Tkačíková</li>
        <li>Adam Trčka</li>
        <li>Martin Večeřa</li>
        <li>Adam Veleba</li>
        <li>Jiří Velebil</li>
        <li>Jiří Vicherek</li>
        <li>Ondřej Vild</li>
        <li>Karla Vincenecová</li>
        <li>Richard Višňák</li>
        <li>Michaela Vítková</li>
        <li>Pavla Vlčková</li>
        <li>Martin Vojík</li>
        <li>Jaroslav Vojta</li>
        <li>Alena Vydrová</li>
        <li>Tomáš Vymyslický</li>
        <li>Petr Vysloužil</li>
        <li>Tomáš Zedínek</li>
        <li>David Zelený</li>
        <li>Iva Zítková</li>
        <li>Dominik Zukal</li>
        <li>Kristýna Žáková</li>
      </ul>
    </div>
	
  )
};
