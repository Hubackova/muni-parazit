import modry from "../../static/images/people/modry.jpg";
import foitova from "../../static/images/people/foitova.jpg";
import React from "react";

export const peopleEn = {
  employees: [
    {
      id: `modry`,
      name: `Prof. MVDr. David Modrý, Ph.D.`,
      position: `profesor`,
      description: `Veterinary parasitologist, professor of the Faculty of Science of Masaryk University in Brno. Currently head of parasitology group. Main research topics revolve around the transmission of infectious diseases at the livestock-wildlife-humans interface, parasites as a part of biological invasions, the One Health, and Conservation Medicine. `,
      descriptionExpandable: `Recent research topics address emerging infection by Angiostrongylus cantonensis, the tick-borne and other vector-borne infections in wild and domestic carnivores and herbivores, protozoan and helminth parasites of primates and man, emerging parasitoses, parasites of reptiles and other wildlife and resistance to anthelminthics and its mitigation. Ongoing projects involve also citizen participatory approach in mapping of invasive parasites. `,
      email: `modrydav@sci.muni.cz`,
      phoneNumber: `+420 724 334 808`,
      is: `https://www.muni.cz/lide/241525-david-modry`,
      orcid: `https://orcid.org/0000-0001-9649-6255      `,
      /* Scopus Author ID: 7006678774 */
      img: modry,
    },
    {
      id: `foitova`,
      name: `Assoc. Prof. MVDr. Ivona Foitová, Ph.D.`,
      position: `researcher III`,
      description: `She graduated from the University of Veterinary and Pharmaceutical Sciences Brno with a degree in general veterinary medicine. She specialises in parasitic diseases of orangutans with an emphasis on zoonoses, self-medication and the study of biologically active plant substances with potential antiparasitic activity. She also practises testing and evaluation of the effects of target plants in in vitro and in vivo models.`,
      descriptionExpandable: `Her scientific focus is: 1) Study of orangutan parasites and their diversity, with an emphasis on zoonoses, including the discovery and description of new parasite species, molecular analyses of important orangutan parasites, and their differences at the population level from the perspective of veterinary medicine, 2) Self-medication of orangutans, including the first documentation of self-medication in orangutans and the first evidence of intentional external application of substances with proven bioactive potential for external self-medication in apes, 3) Study of biologically active fractions of plants with potential antiparasitic activity obtained from food components of orangutans, including the subsequent testing and evaluation of the effects of target plants in in vitro models and in vivo.
      In 1995, she participated in the founding of the UMI-Saving of Pongidae project and established a very close cooperation with Gadjah Mada University in Yogyakarta (Indonesia) with the Veterinary Faculty of Kedokteran Hewan and the Indonesian Academy of Sciences - LIPI. In 1999, she established the first field research station on the island of Sumatra to collect data and information on parasitic diseases of wild and reintroduced orangutans. As part of the UMI project – Saving of Pongidae (M. Olšanský, I. Foitová), she was engaged in the founding of several field research parasitological laboratories in Indonesia and the introduction of parasitological diagnostics as a non-invasive tool for studying the health of wild orangutans. In 2003, she established the Orangutan Health Project (OHP). She was personally significantly involved in the identification and description of 23 species of parasites in orangutans, including the discovery of two new species and one genus. In 2010, a completely new parasite of orangutans, Pongobius foitovae, was named after her. Since 2007, she has been teaching the subject named Ecology of the Tropical Rainforest at the MU PřF. Since 2015, she has been the head of the specialised laboratory ÚTZ-3 that enables work with potential human pathogens.
      .`,
      email: `foitova@sci.muni.cz        `,
      phoneNumber: `549 49 4447`,
      is: `https://www.sci.muni.cz/o-nas/zamestnanci-fakulty/168763-ivona-foitova`,
      orcid: `https://orcid.org/0000-0002-9757-3993`,
      researchgate: `https://www.researchgate.net/profile/Ivona-Foitova`,
      /* Scopus Author ID: 7006678774 */
      img: foitova,
    },
  ],

  phdStudents: [
    /*     {
      id: `erkelenz`,
      name: `Joshua André Erkelenz`,
      position: `PhD student`,
      description: `Joshua Erkelenz studied forestry and forest ecology at the Georg-August University in Göttingen, Germany. Prior to and during his tropical and international forestry Master Program, he conducted several research projects abroad and graduated with a thesis on patterns of functional diversity on the oceanic island of Tenerife. Continuing in this exciting field of ecological research, he now studies functional and phylogenetic diversity in forest communities along elevational gradients in European mountain ranges at the Department of botany and zoology as part of his Ph.D. He devotes some of his time to the cultivation of tropical and subtropical crops.`,
      email: `erkelenz@mail.muni.cz`,
      phoneNumber: ``,
      is: `https://www.muni.cz/en/people/528856-joshua-andre-erkelenz`,
      researchgate: `https://www.researchgate.net/profile/Joshua-Erkelenz`,
      img: erkelenz,
    }, */
  ],
};

export const peopleCz = {
  employees: [
    {
      id: `modry`,
      name: `Prof. MVDr. David Modrý, Ph.D.`,
      position: `profesor`,
      description: `Veterinární parazitolog, profesorem v oblasti infekčních nemocí a parazitologie. Dlouhodobě se věnuje výzkumu infekčních onemocnění sdílených mezi domácími a zájmovými zvířaty, volně žijícími zvířaty a člověkem, v kontextu konceptu One Health a Conservation medicine. `,
      descriptionExpandable: `Současná témata zahrnují emergentní infekce hlísticí Angiostrongylus cantonensis, klíšťaty přenášené infekce masožravců a domácích kopytníků, infekce sdílené mezi primáty a člověkem, parazitózy plazů a dalších volně žijících obratlovců a problematiku rezistence k anthelmintikům. Běžící projekty zahrnují i aplikaci přístupů občanské vědy při monitoringu invazních parazitů. `,
      email: `modrydav@sci.muni.cz`,
      phoneNumber: `+420 724 334 808`,
      is: `https://www.muni.cz/lide/241525-david-modry`,
      orcid: `https://orcid.org/0000-0001-9649-6255      `,
      /* Scopus Author ID: 7006678774 */
      img: modry,
    },
    {
      id: `foitova`,
      name: `Assoc. Prof. MVDr. Ivona Foitová, Ph.D.`,
      position: `researcher III`,
      description: (
        <div>
          Vystudovala Vysokou školu Veterinární a Farmaceutickou v Brně obor
          všeobecné veterinární lékařství. Specializuje se na parazitární
          onemocnění orangutanů s důrazem na zoonózy, sebemedikaci a studium
          biologicky aktivních látek rostlin s potencionální antiparazitární
          aktivitou a následné testování a hodnocení účinků cílových rostlin v
          modelech <i>in vitro</i> a <i>in vivo</i>.
        </div>
      ),
      descriptionExpandable: `Jejím vědeckým zaměřením je: 1. Studium parazitů orangutanů a jejich diverzita s důrazem na zoonózy (zahrnuje nově objevené druhy parazitů, nové popisy druhů parazitů, molekulární analýzy veterinárně významných parazitů orangutanů a jejich rozdíly na populační úrovni), 2. Sebemedikace orangutanů (zahrnuje první dokumentaci samoléčby u orangutanů a první důkaz pro záměrné zevní aplikace látek s prokázaným bioaktivním potenciálem pro zevní samoléčbu u lidoopů), 3. Studium biologicky aktivních frakcí rostlin z potravních složek orangutanů s potencionální antiparazitární aktivitou a následné testování a hodnocení účinků cílových rostlin v modelech in vitro a in vivo. 
        V roce 1995 se podílela na založení projektu UMI-Saving of Pongidae a navázala velmi úzkou spolupráci s Gadjah Mada University v Yogyakartě (Indonésie) s Veterinární fakultou Kedokteran Hewan a Indonéskou Akademií věd - LIPI. V roce 1999 založila první terénní výzkumnou stanici na ostrově Sumatra s cílem sběru dat a informací o parazitárních onemocněních divokých a reintrodukovaných orangutanů. V rámci projektu UMI – Saving of Pongidae (M. Olšanský, I. Foitová) se podílela v Indonésii na založení několika terénních výzkumných parazitologických laboratoří a zavedení parazitologické diagnostiky jako neinvazivního nástroje studia zdraví divokých orangutanů. V roce 2003 založila Orangutan Health Project (OHP). Významně se osobně podílela se na identifikaci a popisu 23 druhů parazitů u orangutanů včetně objevení dvou nových druhů a jednoho rodu. V roce 2010 byl po ní pojmenován zcela nový parazit orangutanů Pongobius foitovae. Od roku 2007 zajišťuje na PřF MU výuku předmětu Ekologie tropického pralesa. Od roku 2015 je vedoucí specializované laboratoře ÚTZ-3, která umožňuje práci s potencionálními lidskými patogeny.`,
      email: `foitova@sci.muni.cz        `,
      phoneNumber: `549 49 4447`,
      is: `https://www.sci.muni.cz/o-nas/zamestnanci-fakulty/168763-ivona-foitova`,
      orcid: `https://orcid.org/0000-0002-9757-3993`,
      researchgate: `https://www.researchgate.net/profile/Ivona-Foitova`,
      /* Scopus Author ID: 7006678774 */
      img: foitova,
    },
  ],
  phdStudents: [
    {
      /*     id: `erkelenz`,
      name: `Joshua André Erkelenz`,
      position: `Doktorand`,
      description: `Joshua Erkelenz studoval lesnictví a ekologii lesa na Georg-August University v německém Göttingenu. Před a během svého magisterského programu v tropickém a mezinárodním lesnictví se podílel na několika výzkumných projektech v zahraničí a absolvoval diplomovou prací o vzorech funkční rozmanitosti na ostrově Tenerife. Na Ústavu botaniky a zoologie MU zkoumá v rámci svého doktorského studia funkční a fylogenetickou diverzitu v lesních společenstvech podél výškových gradientů v evropských pohořích. Část svého času věnuje pěstování tropických a subtropických plodin.`,
      email: `erkelenz@mail.muni.cz`,
      phoneNumber: ``,
      is: `https://www.muni.cz/lide/528856-joshua-andre-erkelenz`,
      researchgate: `https://www.researchgate.net/profile/Joshua-Erkelenz`,
    img: erkelenz, */
    },
  ],
};

export const formerPeople = [
  {
    name: `Name (country, year)`,
  },
];

export const visitingScientistsCz = [
  {
    name: `Name (country, year)`,
  },
];

export const visitingScientistsEn = [
  {
    name: `Name (country, year)`,
  },
];
