INSERT INTO personal_info (description, about)
VALUES ('Sono un programmatore full-stack e coordinatore tecnico con 10+ anni di esperienza nell’industria. Passione: PLC, programmazione, domotica.',
        'Nel mio percorso di crescita personale, negli anni, ho acquisito fiducia in me stesso, imparando ad
            affrontare ogni situazione con tenacia e positività, anche per raggiungere gli obiettivi che mi
            prefissavo. Sono padre di due figli e ciò mi ha reso più forte e responsabile. Mi ritengo una persona
            flessibile, precisa ed affabile, dedita al lavoro.');

INSERT INTO skills (name, level, category, sort_idx)
VALUES ('HTML5', 'esperto', 'front-end', 1),
       ('CSS', 'esperto', 'front-end', 2),
       ('JavaScript', 'esperto', 'front-end', 3),
       ('Bootstrap', 'avanzato', 'front-end', 4),
       ('PHP', 'avanzato', 'back-end', 5),
       ('MySQL', 'avanzato', 'database', 6),
       ('Leadership', 'avanzato', 'soft-skill', 7);

INSERT INTO experiences (title, company, start_year, end_year, description, sort_idx)
VALUES ('Coordinatore Manutenzioni', 'ET srl', 2010, NULL,
        'Guido 3 tecnici per assicurarmi la manutenzione preventiva e ordinaria su impianti e macchine.',
        1);

INSERT INTO education (title, institution, start_year, end_year, description, sort_idx)
VALUES ('Scuola secondaria di primo grado 1ª', 'Istituti paritari – Fondazione Luigi Clerici', 2001, 2002, NULL, 1),
       ('Scuola secondaria di primo grado 2ª-3ª D', 'Istituto Manzoni – Villaggio degli Sposi', 2002, 2004, NULL, 2),
       ('Scuola secondaria di secondo grado 1ª L', 'I.T.I.S. Pietro Paleocapa', 2004, 2006, NULL, 3),
       ('Scuola secondaria di secondo grado 1ª-4ª', 'Centro Studi', 2006, 2008, NULL, 4),
       ('Scuola secondaria di secondo grado 5ª', 'Centro Studi Leonardo da Vinci', 2009, 2010, NULL, 5),
       ('Diploma Perito Industriale', 'I.T.I.S. Pietro Paleocapa', 2024, 2025, NULL, 6);

INSERT INTO certifications (name, valid_from, valid_to, file_url, sort_idx)
VALUES ('PES – PAV – PEI', 2024, 2026, './pdfs/certificato_confimi.pdf', 1),
       ('PRIMO SOCCORSO', 2024, 2026, './pdfs/certificato_primo_soccorso.pdf', 2),
       ('ANTINCENDIO', 2024, 2026, './pdfs/certificato_aifes.pdf', 3),
       ('USO DEL DEFIBRILLATORE', 2024, 2026, './pdfs/certificato_blsd.pdf', 4);

INSERT INTO contacts (type, label, value, sort_idx)
VALUES ('address', 'Indirizzo', 'Bergamo', 1),
       ('email', 'Email', 'massichi90@gmail.com', 2),
       ('phone', 'Tel', '+39 3314863447', 3),
       ('github', 'GitHub', 'https://github.com/mxstrax', 4);