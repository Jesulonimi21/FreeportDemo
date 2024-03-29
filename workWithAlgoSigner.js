window.addEventListener('load',async function(){

    var style = document.createElement('style');
        style.innerHTML =
            ' .algoLoader {' + 
            'color: #000000;'+
            'font-size: 20px;'+
            'margin: 100px auto;'+
           ' width: 1em;'+
            'height: 1em;'+
            'border-radius: 50%;'+
            'position: relative;'+
           ' text-indent: -9999em;'+
           ' -webkit-animation: load4 1.3s infinite linear;'+
            'animation: load4 1.3s infinite linear;'+
           ' -webkit-transform: translateZ(0);'+
            '-ms-transform: translateZ(0);'+
           ' transform: translateZ(0);'+
'}'+
'@-webkit-keyframes load4 {'+
'0%,'+
'100% {'+
'box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;'+'}'+
'12.5% {'+
'box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;'+
'  }'+
'25% {'+
'box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;'
'  }'+
' 37.5% {'+
' box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;'
'}'+
' 50% {'+
'box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;'+
'}'+
'62.5% {'+
'box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;'
'}'+
'75% {'+
'box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;'+
'}'+
'87.5% {'+
'  box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;'+
' }'+
'}'+
'@keyframes load4 {'+
'0%,'+
'100% {'
' box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;'+
'}'+
'12.5% {'+
'box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;'+
'}'+
'25% {'+
'box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;'+
'}'+
'37.5% {'+
'box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;'+
'}'
'50% {'+
'   box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;'+
' }'+
' 62.5% {'+
'box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;'+
' }'+
'75% {'+
' box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;'+
'}'+
' 87.5% {'+
' box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;'+
' }};'

var ref = document.querySelector('script');
ref.parentNode.insertBefore(style, ref);

var recoveredAccount1 = algosdk.mnemonicToSecretKey("portion never forward pill lunch organ biology" +
" weird catch curve isolate plug innocent skin grunt" +
" bounce clown mercy hole eagle soul chunk type absorb trim");
var recoveredAccount2={addr:""}
var asssetCreatorAddress = "6OQQDT3FI2FY4TY6XFW7I7QFTSTQWH2TP3AF5U3W42TR6SMQPXEJX7TZAA"
var artist1Address= "YGCKHAG4H3WDUQSAY5J4MK5ZIWLGIF7W6ZYO5EZY3OGZJB5FWGDNBX7BUA";
var artist2Address = "IKEPBSW7RSPN4TXYC3AV6FOOGZ6PJLTJKEB2PVCTPSRFNB3CANZ5JJRZPY";
var artist3Address= "2FSBHE3XAXJHBFFUABPPBBU3ZL4PQAHI6BB3KTHJKL5IZCC7BG4LR6GRT4";
var artist4Address = "UONII5HLZPHGDCBCETVTFGX42I5MJWEYKM5NUIFQW3A47CSDIHZN74AYUA";
var artist5Address = "EMMEIOWLZPMUCXSLGB5QOR33HCQZAQT6KSRGCXHBO54W7LNLQCJXSGJ4IQ";
var artist6Address = "UNH443RNFL4NWFCP5AI3N34C6IK6SWDEPZRLFKXGWYTXBZ5BTLJJLGWLRQ";
var artist7Address = "QPNWTRS3FLRUICYYLVPQV7QZIJPBNM2EV6S5BF6JOFQL7DGCLU5HKQSUK4";
var epochClawedBackAddress = "HFIVTRXQDWXAK5KLDFUXTPIB4CZGYUVCACNI3R6VA7PZ3OIO3DDDQQKHCA"
var epochBase64Address = "AyAEkE4KBtDu0wczACAyAxIzASAyAxIQMwIgMgMSEDMACTIDEhAzAQkyAxIQMwIJMgMSEDMAFTIDEhAzARUyAxIQMwIVMgMSEDEBIg4QMgQjDxAzAhAkEhAzAhglEhA=";
var artistAmount = 100000;
var creatorAmount = 300000;
const token = { 'X-API-Key':'ADRySlL0NK5trzqZGAE3q1xxIqlQdSfk1nbHxTNe'};
const server = "https://testnet-algorand.api.purestake.io/ps2";
const port = '';
const client = new algosdk.Algodv2(token, server, port);
let Buffer = buffer.Buffer
let program = new Uint8Array(Buffer.from(epochBase64Address,"base64"))
const lsig = algosdk.makeLogicSig(program);   
let note = new Uint8Array(Buffer.from("","base64"));
var addresses = []
var addressToUse;

// console.log(algosdk.AlgoSigner)
let button = document.getElementById("acquireNft");
button.addEventListener("click",async function(){
    console.log("Clicked");
    var x = document.getElementsByTagName("body");
    console.log(x);
    console.log(x[0]);
    let body = x[0];
    let parentDiv = document.createElement("div");
    parentDiv.style.border="solid 2px #ccc";

    parentDiv.style.left="25%";
    parentDiv.style.top="30%";
    parentDiv.style.position="absolute";
   parentDiv.style.elevation="100";
    parentDiv.style.width="40%";
    parentDiv.style.height="400px";
   parentDiv.style.background="#fff";
    parentDiv.classList.add("algoCardContainer");
    let algoLoaderDiv = document.createElement("div");
    algoLoaderDiv.classList.add("algoLoader");

    let infoP= document.createElement("P");
    infoP.style.textAlign="center"
    infoP.classList.add("algoInfoText");
    infoP.innerText="NFT Acquisition in Progress,please respond to Algosiogner Appropriatey";
    parentDiv.append(algoLoaderDiv);
    parentDiv.append(infoP);
    body.append(parentDiv)
// let rawSignedTxn = algosdk.signLogicSigTransactionObject(xtxn, lsig)
if (typeof AlgoSigner !== 'undefined') {
console.log('AlgoSigner is installed.');
await AlgoSigner.connect();
addresses = await AlgoSigner.accounts({ ledger: 'TestNet' });
addressToUse = prompt("Enter desired Address");
recoveredAccount2.addr=addressToUse;
var addressFound = 0;
console.log(addresses)
addresses.map((el)=>{
    if(el.address==addressToUse){
        addressFound = 1;
    }

});

if(addressFound == 0){
    alert("Cant find address, refresh to continue")  
 body.removeChild(parentDiv);
    return;
    
}
} else {
        alert("Please install algosigner and reload page")
        console.log('AlgoSigner is NOT installed.');
 body.removeChild(parentDiv);

 return;
    
};
    console.log(await client.status().do());
 
console.log(recoveredAccount2.addr)
let optInTxn = await optInAddress(16054095,recoveredAccount2.addr);
let signedOptTxn = await AlgoSigner.signTxn([{txn:AlgoSigner.encoding.msgpackToBase64(optInTxn.toByte())}]); 
let binarySignedTx = AlgoSigner.encoding.base64ToMsgpack(signedOptTxn[0].blob);
infoP.innerText="Opting Users Address to NFT"
await client.sendRawTransaction(binarySignedTx).do();
console.log("sent opt in transaction")
infoP.innerText="Users Address Opted In to NFT"
//transaction 1 to send asset
var assetSendTxn = await  sendAsset(16054095,asssetCreatorAddress,recoveredAccount2.addr,1,client);
// transaction 2 to send  30% of the asset
var epochTrans = await sendFunds(recoveredAccount2,asssetCreatorAddress,creatorAmount,client)
//transaction 3 to make the application call
var appCallTxn = await makeApplicationCallTransaction(recoveredAccount2.addr,16054096,[])
// transaction 4 to 10 to send the funds to the remaining ten addresses
var royaltyTransaction1 = await sendFunds(recoveredAccount2,artist1Address,artistAmount);
var royaltyTransaction2 = await sendFunds(recoveredAccount2,artist2Address,artistAmount);
var royaltyTransaction3 = await sendFunds(recoveredAccount2,artist3Address,artistAmount);
var royaltyTransaction4 = await sendFunds(recoveredAccount2,artist4Address,artistAmount);
var royaltyTransaction5 = await sendFunds(recoveredAccount2,artist5Address,artistAmount);
var royaltyTransaction6 = await sendFunds(recoveredAccount2,artist6Address,artistAmount);
var royaltyTransaction7 = await sendFunds(recoveredAccount2,artist7Address,artistAmount);
let txns = [assetSendTxn,epochTrans,appCallTxn,royaltyTransaction1,royaltyTransaction2,royaltyTransaction3,royaltyTransaction4,royaltyTransaction5,royaltyTransaction6,royaltyTransaction7]
let txgroup = algosdk.assignGroupID(txns);

let signedTxn0 = algosdk.signLogicSigTransactionObject(assetSendTxn, lsig)

let signedTxns = await AlgoSigner.signTxn([
{
txn:AlgoSigner.encoding.msgpackToBase64(assetSendTxn.toByte()),
signers:[]
},
{
txn:AlgoSigner.encoding.msgpackToBase64(epochTrans.toByte())
},
{
txn:AlgoSigner.encoding.msgpackToBase64(appCallTxn.toByte())
},
{
txn:AlgoSigner.encoding.msgpackToBase64(royaltyTransaction1.toByte())
},
{
txn:AlgoSigner.encoding.msgpackToBase64(royaltyTransaction2.toByte())
},
{
txn:AlgoSigner.encoding.msgpackToBase64(royaltyTransaction3.toByte())
},
{
txn:AlgoSigner.encoding.msgpackToBase64(royaltyTransaction4.toByte())
},
{
txn:AlgoSigner.encoding.msgpackToBase64(royaltyTransaction5.toByte())
},
{
txn:AlgoSigner.encoding.msgpackToBase64(royaltyTransaction6.toByte())
},
{
txn:AlgoSigner.encoding.msgpackToBase64(royaltyTransaction7.toByte())
},
]);


console.log(signedTxns)
let blobs = signedTxns.map((el,index)=>{
if(index!=0){
return  AlgoSigner.encoding.base64ToMsgpack(el.blob)
}

})
blobs[0]= signedTxn0.blob
let signedTest = [...blobs];
console.log(signedTest);
let txTest=(await client.sendRawTransaction(signedTest).do());
console.log("Transaction : " + txTest.txId);
if(txTest.txId!=null&&txTest.txId!=undefined){
infoP.innerText="Transaction successfull with Txid: "+ txTest.txId;
alert("Transaction successfull with Txid: "+ txTest.txId );
body.removeChild(parentDiv);
}else{
 alert("Transaction Failed");
 body.removeChild(parentDiv);
}
// return;
// // let signedTxn0 = algosdk.signTransaction(assetSendTxn, assetSenderAccount.sk);  
// let signedTxn1 = await AlgoSigner.signTxn([{txn:AlgoSigner.encoding.msgpackToBase64(epochTrans.toByte())}])   //algosdk.signTransaction(epochTrans, recoveredAccount2.sk);
// let signedTxn2 =  await AlgoSigner.signTxn([{txn:AlgoSigner.encoding.msgpackToBase64(appCallTxn.toByte())}])  //algosdk.signTransaction(appCallTxn,recoveredAccount2.sk);
// let signedTxn3 =  await AlgoSigner.signTxn([{txn:AlgoSigner.encoding.msgpackToBase64(royaltyTransaction1.toByte())}]) // algosdk.signTransaction(royaltyTransaction1,recoveredAccount2.sk);
// let signedTxn4 =  await AlgoSigner.signTxn([{txn:AlgoSigner.encoding.msgpackToBase64(royaltyTransaction2.toByte())}])  //algosdk.signTransaction(royaltyTransaction2,recoveredAccount2.sk);
// let signedTxn5 =  await AlgoSigner.signTxn([{txn:AlgoSigner.encoding.msgpackToBase64(royaltyTransaction3.toByte())}]) //algosdk.signTransaction(royaltyTransaction3,recoveredAccount2.sk);
// let signedTxn6 =  await AlgoSigner.signTxn([{txn:AlgoSigner.encoding.msgpackToBase64(royaltyTransaction4.toByte())}]) //algosdk.signTransaction(royaltyTransaction4,recoveredAccount2.sk);
// let signedTxn7 =  await AlgoSigner.signTxn([{txn:AlgoSigner.encoding.msgpackToBase64(royaltyTransaction5.toByte())}]) //algosdk.signTransaction(royaltyTransaction5,recoveredAccount2.sk);
// let signedTxn8 =  await AlgoSigner.signTxn([{txn:AlgoSigner.encoding.msgpackToBase64(royaltyTransaction6.toByte())}]) //algosdk.signTransaction(royaltyTransaction6,recoveredAccount2.sk);
// let signedTxn9 =  await AlgoSigner.signTxn([{txn:AlgoSigner.encoding.msgpackToBase64(royaltyTransaction7.toByte())}]) //algosdk.signTransaction(royaltyTransaction7,recoveredAccount2.sk);

// console.log(txgroup);
// console.log(signedTxn1);
// let signed = [signedTxn0.blob,AlgoSigner.encoding.base64ToMsgpack(signedTxn1[0].blob),AlgoSigner.encoding.base64ToMsgpack(signedTxn2[0].blob),AlgoSigner.encoding.base64ToMsgpack(signedTxn3[0].blob),AlgoSigner.encoding.base64ToMsgpack(signedTxn4[0].blob),AlgoSigner.encoding.base64ToMsgpack(signedTxn5[0].blob),AlgoSigner.encoding.base64ToMsgpack(signedTxn6[0].blob),AlgoSigner.encoding.base64ToMsgpack(signedTxn7[0].blob),AlgoSigner.encoding.base64ToMsgpack(signedTxn8[0].blob),AlgoSigner.encoding.base64ToMsgpack(signedTxn9[0].blob)]
// console.log(signed);
// let tx = (await client.sendRawTransaction(signed).do());
// console.log("Transaction : " + tx.txId);


// Wait for transaction to be confirmed
// await waitForConfirmation(algodClient, tx.txId)
// console.log("Confirmed");
})


async function sendAsset(assetID,revocationTarget,recipient, units,algodClient){   

    params = await algodClient.getTransactionParams().do();
    //comment out the next two lines to use suggested fee
    params.fee = 1000;
    params.flatFee = true;

    // sender =  recoveredAccount1;
   
    closeRemainderTo = undefined;
    //Amount of the asset to transfer
    amount = units;

    // signing and sending "txn" will send "amount" assets from "sender" to "recipient"
    let xtxn = algosdk.makeAssetTransferTxnWithSuggestedParams(epochClawedBackAddress, recipient, closeRemainderTo, revocationTarget,
            amount,  note, assetID, params);
    let program = new Uint8Array(Buffer.from(epochBase64Address,"base64"))
    const lsig = algosdk.makeLogicSig(program);   
   console.log(lsig.address());
    // let rawSignedTxn = algosdk.signLogicSigTransactionObject(xtxn, lsig)
    return xtxn;
}

async function sendFunds(sender,receiver,amount){
    let params = await client.getTransactionParams().do();
    let txn = //algosdk.makePaymentTxnWithSuggestedParams(sender.addr,receiver,amount,undefined,undefined,params)
    new algosdk.Transaction({
        "from": sender.addr,
        "to": receiver,
        "amount": amount,
        "fee": params.fee,
        "firstRound": params.firstRound,
        "lastRound": params.lastRound,
        "genesisID": params.genesisID,
        "genesisHash": params.genesisHash,
        "note": new Uint8Array(0),
    });

    // let signedTxn = algosdk.signTransaction(txn, sender.sk);
    return txn;
}

async function makeApplicationCallTransaction(sender,appId,appArgs){
    let params = await client.getTransactionParams().do();
    let txn = algosdk.makeApplicationNoOpTxn(sender, params, appId, appArgs)
    return txn;
}

async function optInAddress(assetID,address){
  let  params = await client.getTransactionParams().do();
    
    let sender = address;
    let recipient = sender;
    // We set revocationTarget to undefined as 
    // This is not a clawback operation
    let revocationTarget = undefined;
    // CloseReaminerTo is set to undefined as
    // we are not closing out an asset
    let closeRemainderTo = undefined;
    // We are sending 0 assets
    amount = 0;


    // signing and sending "txn" allows sender to begin accepting asset specified by creator and index
    let opttxn = algosdk.makeAssetTransferTxnWithSuggestedParams(sender, recipient, closeRemainderTo, revocationTarget,
        amount, note, assetID, params);
    
        return opttxn;

}
});