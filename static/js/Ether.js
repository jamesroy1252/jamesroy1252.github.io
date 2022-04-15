// import { ethers } from "ethers";
// import detectEthereumProvider from "@metamask/detect-provider";

// var hw = document.getElementById("transfer");
// hw.addEventListener("click", SendEther());
//     <script type="text/javascript" src="static/js/Ether.js" defer></script>
// <script src="https://cdn.ethers.io/lib/ethers-5.2.umd.min.js" type="application/javascript"></script>
// <script src="https://unpkg.com/@metamask/detect-provider/dist/detect-provider.min.js"></script>

window.onload = function () {
  var hw = document.getElementById("transfer");
  console.log(hw);
  hw.addEventListener("click", SendEther());
};

async function SendEther() {
  if (typeof window.ethereum !== "undefined") {
    console.log("MetaMask is installed!");
  }

  const provider = await detectEthereumProvider();

  console.log(provider);
  if (provider) {
    // From now on, this should always be true:
    // provider === window.ethereum
    // startApp(provider); // initialize your app
  } else {
    alert("Please install MetaMask!");
  }
  if (window.ethereum.selectedAddress === null) EtherRequest();
  if (window.ethereum.chainId !== "0x1") EtherSwitch();

  EtherSendTransaction();
}

function EtherRequest() {
  window.ethereum.request({ method: "eth_requestAccounts" });
}

async function EtherSendTransaction() {
  let value = "0.001";
  console.log(ethers.utils.parseEther(value));
  const params = [
    {
      from: window.ethereum.selectedAddress,
      to: "0xa832fD703996e621afB7123F8c550512C09F1345",
      gas: ethers.utils.parseUnits("100000", "wei")._hex,
      value: ethers.utils.parseEther(value)._hex,
    },
  ];

  await window.ethereum
    .request({
      method: "eth_sendTransaction",
      params,
    })
    .then((result) => {
      // The result varies by RPC method.
      // For example, this method will return a transaction hash hexadecimal string on success.
    })
    .catch((error) => {
      // If the request fails, the Promise will reject with an error.
    });
}

async function EtherSwitch() {
  try {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x1" }],
    });
  } catch (switchError) {
    // This error code indicates that the chain has not been added to MetaMask.
    if (switchError.code === 4902) {
      try {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: "0x1",
              chainName: "ETH",
              rpcUrls: ["https://mainnet.infura.io/v3/"] /* ... */,
            },
          ],
        });
      } catch (addError) {
        // handle "add" error
      }
    }
    // handle other "switch" errors
  }
}
