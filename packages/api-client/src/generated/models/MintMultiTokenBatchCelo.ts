/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MintMultiTokenBatchCelo = {
    /**
     * Chain to work with.
     */
    chain: MintMultiTokenBatchCelo.chain;
    /**
     * ID of token to be created.
     */
    tokenId: Array<Array<string>>;
    /**
     * ID of token to be created.
     */
    amounts: Array<Array<string>>;
    /**
     * Data in bytes
     */
    data?: string;
    /**
     * Blockchain address to send Multi Token token to
     */
    to: Array<string>;
    /**
     * Address of Multi Token token
     */
    contractAddress: string;
    /**
     * Private key of sender address. Private key, or signature Id must be present.
     */
    fromPrivateKey: string;
    /**
     * Nonce to be set to Celo transaction. If not present, last known nonce will be used.
     */
    nonce?: number;
    /**
     * Currency to pay for transaction gas
     */
    feeCurrency: MintMultiTokenBatchCelo.feeCurrency;
}

export namespace MintMultiTokenBatchCelo {

    /**
     * Chain to work with.
     */
    export enum chain {
        CELO = 'CELO',
    }

    /**
     * Currency to pay for transaction gas
     */
    export enum feeCurrency {
        CELO = 'CELO',
        CUSD = 'CUSD',
        CEUR = 'CEUR',
    }


}