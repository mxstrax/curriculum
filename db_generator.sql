DROP
USER IF EXISTS 'cv_user'@'localhost';

CREATE
DATABASE IF NOT EXISTS cv_db
  DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

CREATE
USER 'cv_user'@'localhost' IDENTIFIED BY 'UltraSicura!2025';
GRANT ALL PRIVILEGES ON cv_db.* TO
'cv_user'@'localhost';

USE
cv_db;

CREATE TABLE IF NOT EXISTS personal_info
(
    id
    INT
    AUTO_INCREMENT
    PRIMARY
    KEY,
    description
    TEXT
    NOT
    NULL,
    about
    TEXT
    NOT
    NULL,
    created_at
    TIMESTAMP
    DEFAULT
    CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS skills
(
    id
    INT
    AUTO_INCREMENT
    PRIMARY
    KEY,
    name
    VARCHAR
(
    100
) NOT NULL,
    level ENUM
(
    'base',
    'intermedio',
    'avanzato',
    'esperto'
) DEFAULT 'intermedio',
    category VARCHAR
(
    100
),
    sort_idx TINYINT UNSIGNED DEFAULT 0
    );

CREATE TABLE IF NOT EXISTS experiences
(
    id
    INT
    AUTO_INCREMENT
    PRIMARY
    KEY,
    title
    VARCHAR
(
    255
) NOT NULL,
    company VARCHAR
(
    255
),
    start_year YEAR NOT NULL,
    end_year YEAR,
    description TEXT,
    sort_idx TINYINT UNSIGNED DEFAULT 0
    );

CREATE TABLE IF NOT EXISTS education
(
    id
    INT
    AUTO_INCREMENT
    PRIMARY
    KEY,
    title
    VARCHAR
(
    255
) NOT NULL,
    institution VARCHAR
(
    255
) NOT NULL,
    start_year YEAR NOT NULL,
    end_year YEAR NOT NULL,
    description TEXT,
    sort_idx TINYINT UNSIGNED DEFAULT 0
    );

CREATE TABLE IF NOT EXISTS certifications
(
    id
    INT
    AUTO_INCREMENT
    PRIMARY
    KEY,
    name
    VARCHAR
(
    255
) NOT NULL,
    valid_from YEAR NOT NULL,
    valid_to YEAR NOT NULL,
    file_url VARCHAR
(
    255
),
    sort_idx TINYINT UNSIGNED DEFAULT 0
    );

CREATE TABLE IF NOT EXISTS contacts
(
    id
    INT
    AUTO_INCREMENT
    PRIMARY
    KEY,
    type
    ENUM
(
    'address',
    'email',
    'phone',
    'linkedin',
    'github',
    'website'
) NOT NULL,
    label VARCHAR
(
    255
),
    value VARCHAR
(
    255
) NOT NULL,
    sort_idx TINYINT UNSIGNED DEFAULT 0
    );

