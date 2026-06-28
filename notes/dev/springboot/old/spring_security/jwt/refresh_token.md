---
layout: page
---
🔄 Cos’è un Refresh Token?
Un Refresh Token è un secondo token (separato dal JWT access token) che permette al client di ottenere un nuovo token di accesso senza rifare login.

🎯 Perché serve?
Problema	Soluzione con Refresh Token
🔐 Il JWT ha una scadenza breve per sicurezza	✅ Il Refresh Token può avere una durata più lunga
❌ Se il JWT scade, l’utente deve riloggarsi	✅ Il client può richiedere un nuovo JWT usando il refresh token
❌ Logout è "simbolico" con solo access token	✅ Con refresh token, puoi invalidare davvero la sessione server-side

🧠 Come funziona il flusso?
1. Login
   Il backend genera:

un access token (JWT) — breve durata (es. 15 minuti)

un refresh token — lunga durata (es. 7 giorni)

json
Copia
Modifica
{
"accessToken": "eyJhbGci...",
"refreshToken": "c9e349c3-3d5f-445c-8d1a-..."
}
2. Il client salva:
   access token in RAM o memory

refresh token in cookie HTTP-only o local storage

3. Quando l’access token scade:
   Il client fa POST /auth/refresh-token con il refresh token

4. Il backend:
   verifica che il refresh token sia valido

genera un nuovo access token

🧩 Dove si salva il Refresh Token?
Scelta	Vantaggi	Svantaggi
🔐 In DB (PostgreSQL)	Tracciabilità, revoca	Devi gestire storage e cleanup
⚡ In Redis	Veloce, TTL nativo	Redis richiesto
❌ Solo client-side	Stateless, semplice	Nessuna possibilità di revoca lato server
