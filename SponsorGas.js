//imports
import { BigNumber, ethers, providers, utils, Wallet } from "ethers";

//wallet
const signerKey = "";
const sponsorKey = "";
const receiveAddress = "";
const relayKey = "";
const relayWallet = new Wallet(relayKey);
const signerWallet = new Wallet(signerKey);
const sponsorWallet = new Wallet(sponsorKey);

//provider
const APIKey = "1rniO9YjgRk9mMUx1y78bYWt5qz5XWn4";
const provider = new ethers.providers.AlchemyProvider("goerli", APIKey);
const flashBotsProvider = await flashBotsProvider.create(provider, relayWallet, "https://relay-goerli.epheph.com/")

//function
const main = async () => {

    //def
    const currentBlock = await provider.getBlock("latest");

    //need to setup a way to set the contract address of the token that you want to use
    //this will need to be able to be edited/put multiple up at once to happen one after another
    //figure out if you want to bundle all of them, or send them one by one
    //also if you want to take a profit you will need to find a way to find the value of the tokens

    //gas
    let gasEstimate;
    let baseFee;
    let priorityFee;
    let gasPrice;
    let getGasEstimate = provider.estimateGas()
                    .then((gasInfo) => {
                        gasEstimate = gasInfo._hex;
                    });
    let getFeeData = provider.getFeeData()
                    .then((feeData) => {
                        baseFee = feeData.maxFeePerGas;
                        priorityFee = feeData.maxPriorityFeePerGas;
                        gasPrice = feeData.gasPrice;
                    });
    let addedGas = baseFee.add(priorityFee);
    let currentGas = addedGas.mul(gasPrice);

    const bundleEthTransaction = {
        transaction: {
            to: signerWallet.getAddress(),
            gasPrice: gasPrice,
            value: currentGas,
            gasLimit: 21000
        },
        signer: sponsorWallet
    },
    return {

    }

}

main();
