export PATH="/Library/PostgreSQL/15/bin:${PATH}"
initdb -D Database
pg_ctl -D Database -l logfile start 
createuser --superuser postgres
psql -d postgres -a -f CreateDatabase.sql
npm init -y
npm install pg
node index.js
pg_ctl -D Database stop