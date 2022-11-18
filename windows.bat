initdb -D Database
pg_ctl -D Database -l logfile start 
createuser --superuser postgres
psql -d postgres -a -f CreateDatabase.sql
call npm init -y
call npm install pg
call node index.js
call pg_ctl -D Database stop