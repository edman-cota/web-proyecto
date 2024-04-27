CREATE TABLE IF NOT EXISTS blogs(
--  COLUMN          TYPE                        KEY                 DEFAULT
    id              SERIAL                      PRIMARY KEY,
    title           VARCHAR(255),
    content         TEXT,
    author          VARCHAR(255)                                    DEFAULT 'anonymous',
    tags            TEXT[],
    created_at      TIMESTAMP WITHOUT TIME ZONE                     DEFAULT CURRENT_TIMESTAMP
);