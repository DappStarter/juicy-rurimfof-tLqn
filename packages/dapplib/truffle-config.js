require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy prize flee venture strong deny situate color grid kite metal gauge'; 
let testAccounts = [
"0x3ab672b7e61bd3c084c7ff8d7fb132dc8247e33eca4bae184440fda76140d4d9",
"0x9b8c4dadb26740058b40393d7ea4661620b46b88c50aa68513d3937926d2c353",
"0x820460eadae1d1283c10874400e1a86de609adcfe4b80d8b4123541fe88c6585",
"0x2b0de22b4c7afabbf3d3aa8f671e417f32f1cdcb5795e812c6bde01759723ed1",
"0xa75bd75e5deb30851f04513ff8580a4716170e39dea486cd9c4108dca8833d56",
"0x92c96d4247c760104b4a9c5afb0cfc18ee861dc3f005e7717db35772134d1b22",
"0x2ee65e29f3838aac4e57320490a7b4a39049d86448599c7393a6394d5d8d20d2",
"0xb3553b2a5bd7b24d52b1ad13d28958ceaeb78749c99de82a5f53a1c67f015990",
"0x4dc182b4a3526a65614d9f0dce257d1610ffd893f9556047c6eec454a866b504",
"0x5159e0afcb6500ca7514b15ba12bdd022baf4e0eb846268ce66d824e88652cc6"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


