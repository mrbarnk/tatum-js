/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TransferNftFlowPK = {
    /**
     * Chain to work with.
     */
    chain: TransferNftFlowPK.chain;
    /**
     * Blockchain address to send NFT token to.
     */
    to: string;
    /**
     * ID of token to be sent.
     */
    tokenId: string;
    /**
     * Address of NFT token
     */
    contractAddress: string;
    /**
     * Blockchain address of the sender account.
     */
    account: string;
    /**
     * Private key of sender address. Private key, mnemonic and index or signature Id must be present.
     */
    privateKey: string;
}

export namespace TransferNftFlowPK {

    /**
     * Chain to work with.
     */
    export enum chain {
        FLOW = 'FLOW',
    }


}