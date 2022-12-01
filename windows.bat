initdb -D Database
pg_ctl -D Database -l logfile start 
createuser --superuser postgres
psql -d postgres -a -f CreateDatabase.sql
call npm init -y
call npm i express pg cors
call node index.js
call start http://localhost:3000/home.html
@REM call pg_ctl -D Database stop