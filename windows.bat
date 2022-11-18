initdb -D .\Database\F1Data
pg_ctl -D .\Database\F1Data\ -l logfile start
createuser --superuser postgres
node index.js
pg_ctl -D .\Database\F1Data\ stop