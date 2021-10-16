SELECT 
    username, correo
FROM
    Usuarios
WHERE
    username REGEXP '^([0-9]+)+([a-zA-Z]+)+$'
        OR username REGEXP '^([a-zA-Z]+)+([0-9]+)+$'
ORDER BY username ASC