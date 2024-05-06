CREATE TABLE IF NOT EXISTS users(
--  COLUMN          TYPE                        KEY                 DEFAULT
    id              SERIAL                      PRIMARY KEY,
    username        VARCHAR(50),
    name            VARCHAR(255)                                    DEFAULT 'anonymous',
    lastname        VARCHAR(255)                                    DEFAULT 'anonymous',
    email           VARCHAR(255)                                    DEFAULT 'anonymous',
    role            VARCHAR(20),
    password        TEXT,
    created_at      TIMESTAMP WITHOUT TIME ZONE                     DEFAULT CURRENT_TIMESTAMP
);

-- INITIAL DATA
INSERT INTO 
    public.users(id, username, name, lastname, email, role, password) 
    VALUES (0, 'admin', 'Wudlet', 'Company', 'cot19830@uvg.edu.gt', 'admin', 'admin1234'
);