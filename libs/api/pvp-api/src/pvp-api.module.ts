import { NgModule } from '@angular/core';
import { PvpPairingApi } from './api/pairing/pvp-pairing-api.service';
import { PvpPairingDefaultApi } from './api/pairing/pvp-pairing-default-api.service';
import { PvpMatchApi } from './api/match/pvp-match-api.service';
import { PvpMatchDefaultApi } from './api/match/pvp-match-default-api.service';
import { PvpLobbyApi } from './api/lobby/pvp-lobby-api.service';
import { PvpLobbyDefaultApi } from './api/lobby/pvp-lobby-default-api.service';

/**
 * Binds every PvP API abstract-class token to its real, backend-calling implementation. A
 * prototype or a test overrides one or more of these tokens at the route level instead.
 */
@NgModule({
    providers: [
        { provide: PvpPairingApi, useClass: PvpPairingDefaultApi },
        { provide: PvpMatchApi, useClass: PvpMatchDefaultApi },
        { provide: PvpLobbyApi, useClass: PvpLobbyDefaultApi },
    ],
})
export class PvpApiModule {}
