CREATE OR REPLACE FUNCTION
    login (
        email           TEXT,
        password        TEXT
    )
    RETURNS login_response
    LANGUAGE plpgsql
    AS $$

    DECLARE
        result login_response;

    BEGIN

        SELECT users.role, users.name, users.lastname, users.email INTO result
        FROM users
        WHERE login.email = users.email AND login.password = users.password;


        RETURN result;

    END;

$$;

-- TESTS
-- BEGIN;
-- SELECT login('cot19830@uvg.edu.gt', 'admin1234');
-- COMMIT; 