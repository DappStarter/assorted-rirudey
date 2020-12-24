require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose swift top edge rare remind essay include private bone very'; 
let testAccounts = [
"0x5379da0d10f35715e385926f39a31e1e31a5f4a3fd7a2e2bc508f0186b029f32",
"0x2ef60eb2b42a01497e355ea60c8f1eda9ee3ccfa4761872388bd367d810a03af",
"0x5af617cb52d3ef590c4c77de8ab4f62ccb0a9cc9dbc11e227558aca72f47cb3b",
"0x3b6a7e1fd0e6bffe3f1233c16a1342607de37c74113b523b5af9d3cbb6a58ba8",
"0x02646c14d370df72077d5bce87633a61731e18389bda8580a4fe91fcc29d311d",
"0xd3a5529a48f6c8001a8cea796ecbba6facdd717264d7cfd3cde05d629eccae5c",
"0xc237fbcc59dd3d61b100d258d7b73a8844dbdcc6d96b6bf9b7b298665ba92f9e",
"0x998ab4c11ccf7df96fab18a41e80da1197ccb371f8d053e3bbc3cf557758977a",
"0x814c92500e7bb3e72adc240d0a31e0b103b190022ba5950311ede9b59b2be239",
"0xb913118de8ae6f3e204bc91a9c32e37b0329505ab2df2afc741d31fd53e0549a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
