#!/usr/bin/env bash
# Reinicia el servidor de producción en el puerto 3000.
# En Windows `pkill` no alcanza: hay que matar por puerto.
set -e
powershell.exe -NoProfile -Command "Get-NetTCPConnection -LocalPort 3000 -State Listen -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess -Unique | ForEach-Object { Stop-Process -Id \$_ -Force -ErrorAction SilentlyContinue }" >/dev/null 2>&1 || true
sleep 1
nohup npx next start -p 3000 > /tmp/next-start.log 2>&1 &
for i in $(seq 1 40); do
  code=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/es || true)
  [ "$code" = "200" ] && { echo "servidor listo"; exit 0; }
  sleep 1
done
echo "no levantó"; cat /tmp/next-start.log; exit 1
