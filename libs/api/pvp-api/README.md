# pvp-api

`CRCZPHttpService`-based services for the PvP pairing (`/pvp-pairing`), match (`/pvp-match`), and
lobby/roster (`/pvp-lobby`) endpoints, one service per resource. Each is an abstract-class DI token
with a `Default` implementation calling the real backend, so a consumer can swap in a mock
implementation at the route level without touching call sites.
